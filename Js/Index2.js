var myChart = echarts.init(document.getElementById('main'));
myChart.showLoading();
$.get('Js/les-miserables.gexf', function (xml) {
    myChart.hideLoading();
    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    categories[0] = {
        name: 'agriculture'
    };
    categories[1] = {
        name: 'biology'
    };
    categories[2] = {
        name: 'chemistry'
    };
    categories[3] = {
        name: 'computer science'
    };
    categories[4] = {
        name: 'engineering'
    };
    categories[5] = {
        name: 'environmental science'
    };
    categories[6] = {
        name: 'medicine'
    };
    categories[7] = {
        name: 'physical science'
    };
    categories[8] = {
        name: 'social science'
    };
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.label = {
            normal: {
                show: node.symbolSize > 10
            }
        };
        node.category = node.attributes.modularity_class;
        node.symbol = 'circle';
        node.emphasis = {
            itemStyle: {
                borderColor: "#000",
                borderWidth: "1"
            }
        }
    });
    graph.links.forEach(function (link) {
        link.value = link.name
        link.width = parseFloat(link.name) * 1000
        link.emphasis = {
            lineStyle: {
                width: 1/(1-parseFloat(link.name))/50,
            },
            label: {
                show: true,
                formatter: '{c}'
            }
        }
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
                width: 900,
                height: 900,
                focusNodeAdjacency: true,
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,
                links: graph.links,
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
            }
        ]
    };

    myChart.setOption(option);
}, 'xml');

