const optionSet = (seriesData, title) => {
    let xaxis = []// // 拿到的data是1ist，应该包括坐标轴和对应的数值，这里存放横坐标关键字
    let yaxis = []// 拿到的data是1ist，应该包括坐标轴和对应的数值，这里存放纵坐标关键字
    let data = []// 这里存放数值-每个元素格式是[A,B，C]，A是横坐标从0开始，B是纵坐标从0开始，C是数值
    seriesData.forEach(element => {
        xaxis.push(item.serviceName)
        if(index === 0){
            item.serviceData.forEach((child, sub) => {
                yaxis.unshift(child.date)
                data.push([index, item.serviceData.length-sub-1, Number(child.number) || null])
            })
        }else{
            item.serviceData.forEach((child, sub) => {
                data.push([index, item.serviceData.length-sub-1, Number(child.number) || null])
            })
        }
    });
    const option ={// color和option可以定乂通用的
        title: {
            text: title,
            left: 0,
            textstyle: {
                color: '#333333',
                fontSize: 12,
            }
        },
        //提示框
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, .6)',
            color: 'rgba(0, 0, 0)',
            borderwidth: '0',
            textStyle: {
                color: '#ffffff',
                fontSize: 12,
            },
            formatter: function (params) {
                return `‹div style-"font-size: 12px;padding: 5px"›
                    ‹div>${params.name}‹/div›
                    ‹div style-"margin-top: 5px"›<span style-"margin-right: 16px"›${yaxis[params.value [1]]}: </span><span style="font-size: 14px"›${yaxis[params.value[2]]}%</span></div>`
            }
        },
        //圏表位置没置
        grid: {
            height: '94%',
            top: '5%',
            left: '0%',
            right: '0',
            containLabel: true,
        },
        //工具一这里只使用下载
        toolbox: {
            show: false,
            feature:{
                saveAsImage: {
                    show: true,
                    excludeComponents: ['toolbox'],
                    pixelatio: 1,
                }
            }
        },
        //横坐栐軸
        XAxis: {
            type: 'category',
            data: xaxis,
            splitArea: {
                show: true,
            },
            axisTick: {
                show: false,
                axisLabel: {
                    interval: 0,
                    inverse: true,
                    fontsize: 10,
                    textstyle: {
                        color: '#666666'
                    },
                    formatter: function (value) {
                        let result = ''
                        if(!value){
                            result = '-'
                        }else if(value.length > 10){
                            result = `${value.substr(0,10).split('')-join('\n')}\n...`
                        }else{
                            result = `${value.substr(0,10).split('').join('\n')}`
                        }
                        return result
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#a6a66',
                    }
                }
            },
        },
            //竖坐标轴
            yAxis:{
                type: 'category',
                data: yaxis,
                axisLabel: {
                    interval: 0,
                    fontSize: 10,
                    textstyle: {
                        color:'#666666',
                    },
                },
            splitArea: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            type: 'piecewise',
            pieces: [
                {label:'0%-20%', min:0, max: 20,color: 'rgba (30,25,234, 1)'},
                {label:'20%-40%', min:21, max: 40,color: 'rgba (30,65,234, 1)'},
                {label:'40%-60%', min:41, max: 60,color: 'rgba (30,105,234, 1)'},
                {label:'60%-80%', min:61, max: 80,color: 'rgba (30, 145, 234,1)'},
                {label:'80%-100%', min:81, max: 100,color: 'rgba (30, 190,234, 1)'},
            ],
            caculate: true,
            orient: 'horizontal',
            right: '0',
            top: '0',
            itemwidth: 12,
            itemHeight: 7,
            itemstyle: {
                fontsize: 15,
                borderwidth: 0,
                borderRadius: 0
            },
            textstyle: {
                fontsize: 10
            },
        },
        series: [
            {
                data,
                name: title,
                type: 'heatmap',
                label: {
                    show: true,
                    fontweight: 'normal',
                    fontsize: 10,
                    formatter: (value) => {
                        return `${value.data[2]}%`
                    }
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0,0,0, 0.5) '
                    }
                },
            }
        ],
    };
    return option;
}
export default optionSet;