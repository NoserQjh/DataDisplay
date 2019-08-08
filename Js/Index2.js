var myChart = echarts.init(document.getElementById('main'));
myChart.showLoading();
$.get('Js/les-miserables.gexf', function (xml) {
    myChart.hideLoading();
    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    categories[0] = {
        name: 'Education'
    };
    categories[1] = {
        name: 'Arts and Humanities'
    };
    categories[2] = {
        name: 'Social Sciences, Journalism and Information'
    };
    categories[3] = {
        name: 'Business, Administration and Law'
    };
    categories[4] = {
        name: 'Natural Sciences, Mathematics and Statistics'
    };
    categories[5] = {
        name: 'Information and Communication Technologies'
    };
    categories[6] = {
        name: 'Engineering, Manufacturing and Construction'
    };
    categories[7] = {
        name: 'Agriculture, Forestry, Fisheries and Veterinary'
    };
    categories[8] = {
        name: 'Health and Welfare'
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
                width: 1/(1-parseFloat(link.name))/30,
            },
            label: {
                show: false,
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

