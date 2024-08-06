from copy import deepcopy
import http.client
import json
import pandas as pd
import base64
from PIL import Image
import skimage.io 
import cv2 as cv

from GetConfig import GetConfig
from Model.Pagination import Pagination
from Singleton import singleton


@singleton
class ApiHandle:

    def __init__(self):
        self.config=GetConfig()
        self.map=pd.read_excel(self.config.get_config('map_file'))
        self.uuid=''
        self.loginInfo=None
        self.token=''
        self.code=''
        self.projectTime=None


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

    # 登录
    def login(self,url:str='www.azx-nb.cn', api:str='/apis/login'):
        # 获取验证码
        res= self.captchaCharImage()
        verifyCode=res['data']['verifyCode']
        self.uuid=res['data']['uuid']

        # 显示验证码
        self.showImg(verifyCode)
        self.code=input("输入验证码:")

        conn = http.client.HTTPSConnection(url)
        payload = json.dumps({
        "signId":str(self.config.get_config('signId')),
        "password":str(self.config.get_config('password')) ,
        "uuid": self.uuid,
        "code": self.code,
        })
        headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Host': 'www.azx-nb.cn',
        'Connection': 'keep-alive'
        }

        # https://www.azx-nb.cn/apis/insuranceServiceItemList?pageNum=1&pageSize=10&search=PZH3202333020000004262&t=1718721399440
        conn.request("POST", f"{api}", payload, headers)
        res = conn.getresponse()
        data = res.read().decode("utf-8")
        # 把data轉為對象
        data = json.loads(data)
        self.loginInfo=data
        self.token=self.getToken()
        return data
    
    # 获取token
    def getToken(self,key:str='token'):
        return self.loginInfo['data'][key]

    
    # 获取验证码
    def captchaCharImage(self,url:str='www.azx-nb.cn', api:str='/apis/captchaCharImage'):

        conn = http.client.HTTPSConnection("www.azx-nb.cn")
        payload = ''
        headers = {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Host': 'www.azx-nb.cn',
            'Connection': 'keep-alive'
        }
        conn.request("GET", "/apis/captchaCharImage?t=1718850979056", payload, headers)
        res = conn.getresponse()
        data = res.read().decode("utf-8")
        data = json.loads(data)
        return data
    
    # 显示验证码
    def showImg(self,code):
        imgdata=base64.b64decode(code)
        img=skimage.io.imread(imgdata,plugin='imageio')
        # 创建一个空字符串来存储转换后的图像数据
        # 将base64格式的图像数据转换为图像数组
        cv.imshow("Login",img)
        cv.waitKey()

    # 切换type
    def saveCategory(self,type:int,url:str='www.azx-nb.cn', api:str='/apis/myCategorySave'):
        conn = http.client.HTTPSConnection(url)
        payload = json.dumps({
        "signId":str(self.config.get_config('signId')),
        "password":str(self.config.get_config('password')) ,
        "uuid": self.uuid,
        "code": self.code,
        })
        headers = {
        'Authorization': str(self.token),
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
        return data
    
    def getCompanyDangerLogList(self,id):
        url:str='www.azx-nb.cn'
        conn = http.client.HTTPSConnection(url)
        api='/apis/companyDangerLogList'
        pagination=Pagination(1,30)
        headers = {
        'Authorization': str(self.token),
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Host': 'www.azx-nb.cn',
        'Connection': 'keep-alive'
        }
        url=f"{api}?pageNum={pagination.page}&pageSize={pagination.per_page}&insuranceServiceItemId={id}"
        conn.request("GET", url, headers=headers)
        res = conn.getresponse()
        data = res.read().decode("utf-8")
        data = json.loads(data)
        itemCount=data['data']['itemCount']
        if itemCount==0: return False
        dataTable=data['data']['data']
        filteredData= list(filter(lambda x: (self.projectTime in x['createTime']) and (x['node']=='专家签出') , dataTable)) 
        # print(filteredData)
        return len(filteredData)>0

    # 获取数据
    def get_data(self,pagination:Pagination,serviceOrderNo:str='PZH3202433020000001636',url:str='www.azx-nb.cn', api:str='/apis/insuranceServiceItemList'):
        conn = http.client.HTTPSConnection(url)
        payload = json.dumps({
         "signId":str(self.config.get_config('signId')),
        "password":str(self.config.get_config('password')) ,
        "uuid": self.uuid,
        "code": self.code,
        })
        headers = {
        'Authorization': str(self.token),
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
        dataTable=data['data']['data']
        dataTable= list(map(lambda x: self.setForm(x), dataTable))
        df=pd.DataFrame(dataTable)
        return df[df['serviceContentDto']!='']
    
    def getMapCols(self,value:str):
        value=value.replace('(','\(').replace(')','\)')
        df= self.map[self.map['SysCol'].str.contains(value)]
        if df.empty: return ''
        return df.iloc[0]['MapCol']
    
    def get_df0(self):
        return pd.read_excel(r'E:\yujian\python\CompleteJudgment\Datas\test3.xlsx')
    
    def get_stateArry(self,df:pd.DataFrame):
        t1=False
        for i,row in df.iterrows():
            serviceContent=row['serviceContent']
            t1 =t1 or self.getCompanyDangerLogList(row['id'])
            if t1: break
        return t1

    def get_State(self,d:dict,dfmap:pd.DataFrame):
        serviceContent=d['项目名称']
        self.projectTime=d['项目时间']
        policyNumber=d['保单号码']
        print(f'项目名称:{serviceContent},项目时间:{self.projectTime},保单号码:{policyNumber}')
        gdf=dfmap[(dfmap['serviceContentDto']==serviceContent) & (dfmap['state']==210)]
        if len(gdf)==0: return False
        elif len(gdf)==1: return True
        elif len(gdf)>1:
            return self.get_stateArry(gdf)

if __name__ == '__main__':
    apiHandle=ApiHandle()
    # a= apiHandle.saveCategory(1)
    loginInfo= apiHandle.login()
    print(loginInfo)