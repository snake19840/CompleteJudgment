
import pandas as pd
from copy import deepcopy

from ApiHandle import ApiHandle
from GetConfig import GetConfig
from Model.Pagination import Pagination


def get_df(stat:int):
    config=GetConfig()
    df=None
    pagination=Pagination(1,20)
    apiHandle=ApiHandle()
    apiHandle.saveCategory(stat)

    df_original=pd.read_excel(config.get_config('read_file'))
    group_by_serviceOrderNo=df_original.groupby('保单号码')
    for serviceOrderNo,group in group_by_serviceOrderNo:
        df1=deepcopy(group)
        dfmap= apiHandle.get_data(pagination,serviceOrderNo)
        if dfmap is None: continue
        status=list(map(lambda d: apiHandle.get_State(d,dfmap), df1.to_dict('records')))
        df1['状态']=status
        df1['项目编号']=df1['项目编号'].astype(str)
        if df is None: df=df1
        else: df=pd.concat([df,df1])
    return df
    # df.to_excel(r'E:\yujian\python\CompleteJudgment\Datas\test5.xlsx',index=False)

def main():
    config=GetConfig()
    # 登陆
    apiHandle=ApiHandle()
    loginInfo=apiHandle.login()
    print('登陆成功',loginInfo)

    df1=get_df(1)
    df2=get_df(2)
    df=None
    # 根据条件计算变量c的值
    if df1 is not None and df2 is not None:
        df = pd.concat([df1,df2])
    elif df1 is not None:
        df = df1
    elif df2 is not None:
        df = df2
    else:
        df = None

    # 打印计算得到的c的值
    df.to_excel(config.get_config('write_file'),index=False)

main()
