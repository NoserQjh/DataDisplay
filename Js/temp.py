edgeid = 14
with open('1.txt', 'w') as outfile:
    for i in range(19):
        for j in range(i, 19):
            if i != j:
                edgeid += 1
                outfile.write('''
        <edge id="''' + str(edgeid) + '''" source="''' + str(i) + '''" target="''' + str(j) +
                              '''" label="-1">
            <attvalues></attvalues>
        </edge>''')
