from copy import deepcopy
import http.client
import json
import pandas as pd

from GetConfig import GetConfig
from Model.Pagination import Pagination

class ApiHandle:
    def __init__(self):
        self.config=GetConfig()
        self.map=pd.read_excel(self.config.get_config('map_file'))


    def setForm(self,item:dict):
        res={}
        res['id']=item['id']
        res['serviceOrderNo']=item['serviceOrderNo']
        res['companyName']=item['companyName']
        res['reportType']=item['reportType']
        res['serviceName']=item['serviceName']
        res['serviceContent']=item['serviceContent']
        res['serviceContentDto']=self.getMapCols(item['serviceContent'])
        res['state']=item['state']
        return res
    
    
# https://www.azx-nb.cn/apis/myCategorySave?type=2

    def saveCategory(self,type:int,url:str='www.azx-nb.cn', api:str='/apis/myCategorySave'):
        conn = http.client.HTTPSConnection(url)
        payload = json.dumps({
        "signId":str(self.config.get_config('signId')),
        "password":str(self.config.get_config('password')) ,
        "uuid": str(self.config.get_config('uuid')),
        "code": str(self.config.get_config('code')),
        })
        headers = {
        'Authorization': str(self.config.get_config('Authorization')),
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Host': 'www.azx-nb.cn',
        'Connection': 'keep-alive'
        }

        # https://www.azx-nb.cn/apis/insuranceServiceItemList?pageNum=1&pageSize=10&search=PZH3202333020000004262&t=1718721399440
        conn.request("GET", f"{api}?type={type}", payload, headers)
        res = conn.getresponse()
        data = res.read().decode("utf-8")
        # 把data轉為對象
        data = json.loads(data)
        


    def get_data(self,pagination:Pagination,serviceOrderNo:str='PZH3202433020000001636',url:str='www.azx-nb.cn', api:str='/apis/insuranceServiceItemList'):
        conn = http.client.HTTPSConnection(url)
        payload = json.dumps({
         "signId":str(self.config.get_config('signId')),
        "password":str(self.config.get_config('password')) ,
        "uuid": str(self.config.get_config('uuid')),
        "code": str(self.config.get_config('code')),
        })
        headers = {
        'Authorization': str(self.config.get_config('Authorization')),
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Host': 'www.azx-nb.cn',
        'Connection': 'keep-alive'
        
        }

        # https://www.azx-nb.cn/apis/insuranceServiceItemList?pageNum=1&pageSize=10&search=PZH3202333020000004262&t=1718721399440
        conn.request("GET", f"{api}?pageNum={pagination.page}&pageSize={pagination.per_page}&search={serviceOrderNo}", payload, headers)
        res = conn.getresponse()
        data = res.read().decode("utf-8")
        # 把data轉為對象
        data = json.loads(data)
        
        if data['data']['itemCount']==0: return None
        print(data['data']['data'][0]['serviceOrderNo'])
        dataTable=data['data']['data']
        dataTable= list(map(lambda x: self.setForm(x), dataTable))
        df=pd.DataFrame(dataTable)
        return df[df['serviceContentDto']!='']
    
    def getMapCols(self,value:str):
        df= self.map[value == self.map['SysCol']]
        if df.empty:
            return ''
        return df.iloc[0]['MapCol']
    def get_df0(self):
        return pd.read_excel(r'E:\yujian\python\CompleteJudgment\Datas\test3.xlsx')
    
    def get_State(self,d:dict,dfmap:pd.DataFrame):
        # df1=pd.read_excel(r'E:\yujian\python\CompleteJudgment\Datas\test2.xlsx')
        serviceContent=d['项目名称']
        arr= dfmap.loc[dfmap['serviceContentDto']==serviceContent,'state']
        return all(map(lambda x: x==210, arr))

if __name__ == '__main__':
    apiHandle=ApiHandle()
    a= apiHandle.saveCategory(1)
    print(a)
    # df=None
    # pagination=Pagination(1,20)
    # apiHandle=ApiHandle()
    # # df2= apiHandle.get_data(pagination)
    # # print(df)
    # # df.to_excel(r'E:\yujian\python\CompleteJudgment\Datas\test2.xlsx',index=False)

    # df_original=pd.read_excel(r'E:\yujian\python\CompleteJudgment\Datas\test.xlsx')
    # group_by_serviceOrderNo=df_original.groupby('保单号码')
    # for serviceOrderNo,group in group_by_serviceOrderNo:
    #     df1=deepcopy(group)
    #     dfmap= apiHandle.get_data(pagination,serviceOrderNo)
    #     if dfmap is None: continue
    #     status=list(map(lambda d: apiHandle.get_State(d,dfmap), df1.to_dict('records')))
    #     df1['状态']=status
    #     df1['项目编号']=df1['项目编号'].astype(str)
    #     if df is None: df=df1
    #     else: df=pd.concat([df,df1])

    # df.to_excel(r'E:\yujian\python\CompleteJudgment\Datas\test4.xlsx',index=False)

    




    # REPORT_AUDIT_COMPLETION: {
    #         stage: 40,
    #         stageName: "任务完成",
    #         state: 210,
    #         name: "服务完成待对账",
    #       },