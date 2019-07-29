import xlrd
import json


def main():
    data = {'title': []}
    xls = xlrd.open_workbook(
        'Data/Scientific frame_founders of molecular biology.xlsx')
    table = xls.sheets()[1]
    for i in range(12):
        col = table.col_values(i)
        col[0] = col[0].replace(' ', '')
        data[col[0]] = col[62:]
        data['title'].append(col[0])
    with open('data1.json', 'w') as outfile:
        outfile.write(json.dumps(data))
    print('Done1')
    data = {'title': []}
    xls = xlrd.open_workbook(
        'Data/20190419-Fame of Most Famous Mathematicians.xlsx')
    table = xls.sheets()[1]
    for i in range(28):
        col = table.col_values(i)
        col[0] = col[0].replace(' ', '')
        data[col[0]] = col[1:]
        data['title'].append(col[0])
    with open('data2.json', 'w') as outfile:
        outfile.write(json.dumps(data))
    print('Done2')

def NumberOfPublication():
    data=dict()
    xls = xlrd.open_workbook(
        'Data/Fig.1-Molecular Biology_WOSCC_Publication Years.xlsx')
    table = xls.sheets()[1]
    data['year'] = table.col_values(0)[80:]
    data['pub'] = table.col_values(1)[80:]
    with open('Js/NumberOfPublication.json', 'w') as outfile:
        outfile.write(json.dumps(data))

def NameOfMolecuarBiology():
    data=dict()
    xls = xlrd.open_workbook(
        'Data/Fig.4(a)_Molecular Biology_Google books ngram.xlsx')
    table = xls.sheets()[1]
    data['year'] = table.col_values(0)[1:]
    data['molecularbiology_All'] = table.col_values(1)[1:]
    data['molecularbiology'] = table.col_values(2)[1:]
    data['MolecularBiology'] = table.col_values(3)[1:]
    data['Molecularbiology'] = table.col_values(4)[1:]
    data['MOLECULARBIOLOGY'] = table.col_values(5)[1:]
    with open('Js/NameOfMolecuarBiology.json', 'w') as outfile:
        outfile.write(json.dumps(data))

def MolecularBiologyRelatedIst():
    data={'title': []}
    xls = xlrd.open_workbook(
        'Data/Fig.4(b)-Molecular Biologist_related -ist_ngram.xlsx')
    table = xls.sheets()[1]

    for i in range(16):
        col = table.col_values(i)
        col[0] = col[0].replace(' ', '')
        data[col[0]] = col[1:]
        data['title'].append(col[0])
    with open('Js/MolecularBiologyRelatedIst.json', 'w') as outfile:
        outfile.write(json.dumps(data))

if __name__ == "__main__":
    MolecularBiologyRelatedIst()
