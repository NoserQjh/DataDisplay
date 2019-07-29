var myChart = echarts.init(document.getElementById('main'));
myChart.showLoading();
$.get('Js/les-miserables.gexf', function (xml) {
    myChart.hideLoading();
    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    categories[0] = {
        name: 'Biology'
    };
    categories[1] = {
        name: 'Physics'
    };
    categories[2] = {
        name: 'Medicine'
    };
    categories[3] = {
        name: 'Biochemistry'
    };
    categories[4] = {
        name: 'Mathematics'
    };
    categories[5] = {
        name: 'Medical diagnostic and treatment technology'
    };
    categories[6] = {
        name: 'Therapy and rehabilitation'
    };
    categories[7] = {
        name: 'Chemistry'
    };
    categories[8] = {
        name: 'Statistics'
    };
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.label = {
            normal: {
                show: node.symbolSize > 10
            }
        };
        node.category = node.attributes.modularity_class;
    });
    graph.links.forEach(function (link) {
        link.value=link.name
        link.emphasis={
            label:{show:true,
            formatter:'{c}'
        }}
    })
    option = {

        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            }),
            bottom: 0
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: '学科',
                type: 'graph',
                layout: 'circular',
                width: 400,
                height: 400,
                focusNodeAdjacency: true,
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,
                links:graph.links,
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    },
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                },
                emphasis: {
                    lineStyle: {
                        width: 10
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}, 'xml');
