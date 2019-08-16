'''
@Author: NoserQJH
@LastEditors: NoserQJH
@Date: 2019-08-16 20:38:52
@LastEditTime: 2019-08-16 20:50:38
@Description:
'''
import requests
import re
import html
import csv
import time
import numpy as np
import json
url1 = 'https://books.google.com/ngrams/graph?content='
searchcontent = 'biochemistry+and+molecular+biology'
url2 = '&year_start=1800&year_end=2008&corpus=15&smoothing=3&share=&direct_url='
col = []
col2 = []
with open('Spiders/JACS3筛选_Final.csv','r') as csvFile:
    reader2 = csv.reader(csvFile)
    for item in reader2:
        col.append(item[0])
        col2.append(item[2])
for i in range(0, len(col)):
    if col[i] == '1':
        print(url1 + col2[i] + url2)
        response = requests.get(url=url1 + col2[i] + url2)
        with open('./Spiders/html/{}.html'.format(col2[i]),
                  'wb') as outfile:
            outfile.write(response.content)
        content = response.content.decode('ascii')
        while (len(
                re.findall('Please try again later', content, flags=re.S))
               != 0):
            response = requests.get(url=url1 + col2[i] + url2)
            with open('./Spiders/html/{}.html'.format(col2[i]),
                      'wb') as outfile:
                outfile.write(response.content)
            content = response.content.decode('ascii')
            time.sleep(10)
        time.sleep(2)
print('success!')
