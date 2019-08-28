/*
 * @Author: NoserQJH
 * @LastEditors: NoserQJH
 * @Date: 2019-06-26 20:10:27
 * @LastEditTime: 2019-08-28 16:52:27
 * @Description:
 */
$.getJSON('Js/Json/NumberOfPublication.json', function (data) {
    var myChart = echarts.init(document.getElementById('NumberOfPublication'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];

    option = {
        title: {
            text: 'Number of Publication',
            left: 'center'
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
            data: data.year,
            silent: false,
            splitLine: {
                show: false
            },
            axisPointer: {
                show: true,
                type: 'shadow'
            }
        },
        yAxis: {

        },


        series: [{
            name: 'Number Of Publication',
            data: data.pub,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
});

$.getJSON('Js/Json/data2.json', function (data) {
    var myChart = echarts.init(document.getElementById('FameOfFamousMathmaticians'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    option = {
        title: {
            text: 'Fame Of Famous Mathmaticians',
            left: 'center'
        },
        legend: {
            type: 'scroll',
            data: ["KarlPearson",
                "NorbertWiener",
                "JohnvonNeumann",
                "HenriPoincare",
                "SimonNewcomb",
                "BenjaminPeirce",
                "WarrenWeaver",
                "GeorgeHowardDarwin",
                "WilliamRowanHamilton",
                "FriedrichLudwigGottlobFrege",
                "ChristianFelixKlein",
                "GeorgeBoole",
                "FrederickMosteller",
                "OliverHeaviside",
                "ClaudeElwoodShannon",
                "HermannWeyl",
                "KurtGdel",
                "GeorgFerdinandLudwigPhilippCantor",
                "FreemanJohnDyson",
                "DavidHilbert",
                "HaroldJeffreys",
                "AlfredTarski",
                "AugustusDeMorgan",
                "FlorianCajori",
                "RogerPenrose",
                "GeorgeUdnyYule",
                "RichardEBellman"
            ],
            align: 'left',
            top: 25
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
            },
            axisPointer: {
                show: true,
                type: 'shadow'
            }

        },
        yAxis: {

            axisPointer: {
                show: false
            }
        },


        series: [{
                name: 'KarlPearson',
                data: data.KarlPearson,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 1
                }
            },
            {
                name: 'NorbertWiener',
                data: data.NorbertWiener,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 1
                }
            },
            {
                name: 'JohnvonNeumann',
                data: data.JohnvonNeumann,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            },
            {
                name: 'HenriPoincare',
                data: data.HenriPoincare,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'SimonNewcomb',
                data: data.SimonNewcomb,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'BenjaminPeirce',
                data: data.BenjaminPeirce,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'WarrenWeaver',
                data: data.WarrenWeaver,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'GeorgeHowardDarwin',
                data: data.GeorgeHowardDarwin,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'WilliamRowanHamilton',
                data: data.WilliamRowanHamilton,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'FriedrichLudwigGottlobFrege',
                data: data.FriedrichLudwigGottlobFrege,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'ChristianFelixKlein',
                data: data.ChristianFelixKlein,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'GeorgeBoole',
                data: data.GeorgeBoole,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'FrederickMosteller',
                data: data.FrederickMosteller,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'OliverHeaviside',
                data: data.OliverHeaviside,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'ClaudeElwoodShannon',
                data: data.ClaudeElwoodShannon,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'HermannWeyl',
                data: data.HermannWeyl,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'KurtGdel',
                data: data.KurtGdel,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'GeorgFerdinandLudwigPhilippCantor',
                data: data.GeorgFerdinandLudwigPhilippCantor,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'FreemanJohnDyson',
                data: data.FreemanJohnDyson,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'DavidHilbert',
                data: data.DavidHilbert,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'HaroldJeffreys',
                data: data.HaroldJeffreys,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'AlfredTarski',
                data: data.AlfredTarski,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'AugustusDeMorgan',
                data: data.AugustusDeMorgan,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'FlorianCajori',
                data: data.FlorianCajori,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'RogerPenrose',
                data: data.RogerPenrose,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'GeorgeUdnyYule',
                data: data.GeorgeUdnyYule,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'RichardEBellman',
                data: data.RichardEBellman,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
});

$.getJSON('Js/Json/data1.json', function (data) {
    var myChart = echarts.init(document.getElementById('FoundersOfMolecularBiology'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    option = {
        title: {
            text: 'Founders Of Molecular Biology',
            left: 'center'
        },
        legend: {
            data: ["WarrenWeaver",
                "ErwinChargaff",
                "WilliamThomasAstbury",
                "WilliamKeithBrooks",
                "JamesDeweyWatson",
                "FrancisHarryComptonCrick",
                "OswaldTheodoreAvery",
                "JacquesLucienMonod",
                "LinusCarlPauling",
                "JerryDonohue"
            ],
            align: 'left',
            top: 25
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
            },
            axisPointer: {
                show: true,
                type: 'shadow'
            }
        },
        yAxis: {

        },


        series: [{
                name: 'WarrenWeaver',
                data: data.WarrenWeaver,
                markLine: {
                    label: {
                        formatter: "1"
                    },
                    data: [{
                        xAxis: '1939',
                    }, ],
                    animationDelay: 5000,
                    type: 'dotted'
                },
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 1
                }
            }, {
                name: 'ErwinChargaff',
                data: data.ErwinChargaff,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 1
                }
            },
            {
                name: 'WilliamThomasAstbury',
                data: data.WilliamThomasAstbury,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            },
            {
                name: 'WilliamKeithBrooks',
                data: data.WilliamKeithBrooks,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            },
            {
                name: 'JamesDeweyWatson',
                data: data.JamesDeweyWatson,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'FrancisHarryComptonCrick',
                data: data.FrancisHarryComptonCrick,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'OswaldTheodoreAvery',
                data: data.OswaldTheodoreAvery,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'JacquesLucienMonod',
                data: data.JacquesLucienMonod,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'LinusCarlPauling',
                data: data.LinusCarlPauling,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }, {
                name: 'JerryDonohue',
                data: data.JerryDonohue,
                type: 'line',
                showSymbol: false,
                animationDuration: 5000,
                areaStyle: {
                    opacity: 0.1
                },
                lineStyle: {
                    opacity: 0.5
                }
            }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
});

$.getJSON('Js/Json/NameOfMolecuarBiology.json', function (data) {
    var myChart = echarts.init(document.getElementById('NameOfMolecularBiology'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];

    option = {
        title: {
            text: 'Name Of Molecular Biology',
            left: 'center'
        },
        legend: {
            data: ["molecularbiology_All",
                "molecularbiology",
                "MolecularBiology",
                "Molecularbiology",
                "MOLECULARBIOLOGY",
            ],
            align: 'left',
            top: 25
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
            data: data.year,
            silent: false,
            splitLine: {
                show: false
            },
            axisPointer: {
                show: true,
                type: 'shadow'
            }
        },
        yAxis: {

        },


        series: [{
            name: 'molecularbiology_All',
            data: data.molecularbiology_All,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'molecularbiology',
            data: data.molecularbiology,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'MolecularBiology',
            data: data.MolecularBiology,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'Molecularbiology',
            data: data.Molecularbiology,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'MOLECULARBIOLOGY',
            data: data.MOLECULARBIOLOGY,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
});

$.getJSON('Js/Json/MolecularBiologyRelatedIst.json', function (data) {
    var myChart = echarts.init(document.getElementById('MolecularBiologyRelatedIst'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];

    option = {
        title: {
            text: 'Molecular Biology Related -ist',
            left: 'center'
        },
        legend: {
            type: 'scroll',
            data: [
                "molecularbiologist",
                "physicist",
                "cytologist",
                "geneticist",
                "biochemist",
                "cellbiologist",
                "immunologist",
                "microbiologist",
                "geneticengineer",
                "biotechnologist",
                "moleculargeneticist",
                "medicalscientist",
                "cellphysiologist",
                "developmentalbiologist",
                "structuralbiologist"
            ],
            align: 'left',
            top: 25
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
            },
            axisPointer: {
                show: true,
                type: 'shadow'
            }
        },
        yAxis: {

        },


        series: [{
            name: 'molecularbiologist',
            data: data.molecularbiologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'physicist',
            data: data.physicist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'cytologist',
            data: data.cytologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'geneticist',
            data: data.geneticist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'biochemist',
            data: data.biochemist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'cellbiologist',
            data: data.cellbiologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'immunologist',
            data: data.immunologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'microbiologist',
            data: data.microbiologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'geneticengineer',
            data: data.geneticengineer,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'biotechnologist',
            data: data.biotechnologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'moleculargeneticist',
            data: data.moleculargeneticist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'medicalscientist',
            data: data.medicalscientist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'cellphysiologist',
            data: data.cellphysiologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'developmentalbiologist',
            data: data.developmentalbiologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }, {
            name: 'structuralbiologist',
            data: data.structuralbiologist,
            type: 'line',
            showSymbol: false,
            animationDuration: 5000,
            areaStyle: {
                opacity: 0.1
            },
            lineStyle: {
                opacity: 0.5
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
});

ButtonName2ScrollNum = {
    "IndexButtonNumberOfPublication": 0,
    "IndexButtonFameOfFamousMathmaticians": 750,
    "IndexButtonFoundersOfMolecularBiology": 1500,
    "IndexButtonNameOfMolecularBiology": 2250,
    "IndexButtonMolecularBiologyRelatedIst": 3000
}
ScrollNum2ButtonName = {
    0: "IndexButtonNumberOfPublication",
    750: "IndexButtonFameOfFamousMathmaticians",
    1500: "IndexButtonFoundersOfMolecularBiology",
    2250: "IndexButtonNameOfMolecularBiology",
    3000: "IndexButtonMolecularBiologyRelatedIst",
}
var indexButtons = document.getElementsByClassName("IndexButton")
for (i = 0, len = indexButtons.length; i < len; i++) {
    indexButtons[i].onclick = function () {
        var indexButtons = document.getElementsByClassName("IndexButton")
        for (i = 0, len = indexButtons.length; i < len; i++) {
            indexButtons[i].style.color = 'rgb(68,68,68)';
            indexButtons[i].style.fontWeight = 'normal';
            indexButtons[i].style.fontSize = '20px';
        }
        this.style.color = 'rgb(0,0,0)';
        this.style.fontWeight = 'bold';
        this.style.fontSize = '20px';
        window.scrollTo(0, ButtonName2ScrollNum[this.id]);
    };
}
window.addEventListener("scroll", function (e) {
    var nowButton = ""
    var indexButtons = document.getElementsByClassName("IndexButton")
    for (var key in ScrollNum2ButtonName) {
        if ((key - 375 < window.pageYOffset) & (key + 375 > window.pageYOffset)) {
            nowButton = ScrollNum2ButtonName[key]
        }
    }
    for (i = 0, len = indexButtons.length; i < len; i++) {
        if (indexButtons[i].id == nowButton) {
            indexButtons[i].style.color = 'rgb(0,0,0)';
            indexButtons[i].style.fontWeight = 'bold';
            indexButtons[i].style.fontSize = '20px';
        } else {
            indexButtons[i].style.color = 'rgb(68,68,68)';
            indexButtons[i].style.fontWeight = 'normal';
            indexButtons[i].style.fontSize = '20px';
        }
    }

})
