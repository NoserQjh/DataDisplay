import requests
import re
import html
import xlrd
import time
import numpy as np
import json
url1 = 'https://books.google.com/ngrams/graph?content='
searchcontent = 'biochemistry+and+molecular+biology'
url2 = '&year_start=1800&year_end=2008&corpus=15&smoothing=3&share=&direct_url='
xls = xlrd.open_workbook('Spiders/full-map.xlsx')
table = xls.sheets()[0]
col = table.col_values(0)[1:]
result = np.ones([62,62])
for i in range(0,len(col)):
    for j in range(len(col)):
        if i !=j:
            name1 = col[i].replace(' ', '+')
            name2 = col[j].replace(' ', '+')
            print(url1 + name1 + '+and+' + name2 + url2)
            response = requests.get(url=url1 + name1 + '+and+' + name2 + url2)
            with open('./Spiders/html/{}{}.html'.format(name1, name2),
                    'wb') as outfile:
                outfile.write(response.content)
            content = response.content.decode('ascii')
            while(len(re.findall('Please try again later',content,flags=re.S))!=0):
                response = requests.get(url=url1 + name1 + '+and+' + name2 + url2)
                with open('./Spiders/html/{}{}.html'.format(name1, name2),putty
                        'wb') as outfile:
                    outfile.write(response.content)
                content = response.content.decode('ascii')
                time.sleep(10)
            if len(re.findall('No valid ngrams to plot!',content,flags=re.S))!=0:
                    result[i,j]=0
            time.sleep(2)
with open('spiderresult.json', 'w') as f:
    json.dump(result, f)
