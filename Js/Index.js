$.getJSON('Js/data.json', function (data) {
    var myChart = echarts.init(document.getElementById('main'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    option = {
        legend: {
            data: ["WarrenWeaver",
                "WilliamThomasAstbury",
                "WilliamKeithBrooks",
                "JamesDeweyWatson",
                "FrancisHarryComptonCrick",
                "OswaldTheodoreAvery",
                "JacquesLucienMonod",
                "ErwinChargaff",
                "LinusCarlPauling",
                "JerryDonohue"],
            align: 'left'
        },
        toolbox: {
            y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: data.Year,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            max:70
        },


        series: [{
            name: 'WarrenWeaver',
            data: data.WarrenWeaver,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:1}
        },
        {
            name: 'WilliamThomasAstbury',
            data: data.WilliamThomasAstbury,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        },
        {
            name: 'WilliamKeithBrooks',
            data: data.WilliamKeithBrooks,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        },
        {
            name: 'JamesDeweyWatson',
            data: data.JamesDeweyWatson,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        }, {
            name: 'FrancisHarryComptonCrick',
            data: data.FrancisHarryComptonCrick,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        }, {
            name: 'OswaldTheodoreAvery',
            data: data.OswaldTheodoreAvery,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        }, {
            name: 'JacquesLucienMonod',
            data: data.JacquesLucienMonod,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        }, {
            name: 'ErwinChargaff',
            data: data.ErwinChargaff,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        }, {
            name: 'LinusCarlPauling',
            data: data.LinusCarlPauling,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        }, {
            name: 'JerryDonohue',
            data: data.JerryDonohue,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {opacity:0.1},
            lineStyle: {opacity:0.5}
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
});
