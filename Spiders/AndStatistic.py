import re
import html
import xlrd
import time
import numpy as np
import json

xls = xlrd.open_workbook('Spiders/subjects.xlsx')
table = xls.sheets()[0]
col = table.col_values(2)[1:]
result = np.ones([54,54])
for i in range(0,len(col)):
    for j in range(len(col)):
        if i !=j:
            name1 = col[i].replace(' ', '+')
            name2 = col[j].replace(' ', '+')
            with open('./Spiders/html/{}{}.html'.format(name1, name2),
                    'rb') as infile:
                content = infile.read()
                content = content.decode('ascii')
                if len(re.findall('No valid ngrams to plot!',content,flags=re.S))!=0:
                    result[i,j]=0
with open('./Spiders/AndStatistic.json', 'w') as outfile:
    outfile.write(json.dumps({'AndStatistic':result.tolist()}))
