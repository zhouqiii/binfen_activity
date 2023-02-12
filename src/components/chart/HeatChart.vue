<template>
    <div
        class="heat_chart heatChart"
        id="heatchart_bar"
        :style="{height: height ? `${height}px` : '100%'}"
    >
    </div>
  </template>
  
  <script>
  import optionSet from '../../utils/heatchart'
  let parentBox = null
  let theResizeObserver = null
  export default {
    name: 'heat-chart',
    props: {
        data: {
            type: Array,
            require: true,
            default: () => []
        },
        height: Number,
        indexName: String
    },
    data() {
      return {
        chart: null,
      };
    },
    watch: {
        data: {
            deep: true,
            handler(val){
                this.updateChart()
            }
        }
    },
    methods: {
        // 配置echarts图表
        asignchart () {
            return optionSet (this.data, this.indexName) ;
        },
//更新图表
        updatechart () {
            if (this.chart) {
                parentBox = document. getElementById('heatchart_bar');
                const fulloption = this.asignChart () ;
                this.chart.setoption(fulloption, true);
                this.chart.resize({height: this .height});
                this.chart.resize({width: parentBox.contentRect.width || '1250px'});// 因为mounted已经拿到父容器设置过了，但是比如父容器设置display:none不显示图形但获取base64导出的时候没有mounted，父容器宽度没有获取到，这里就要在设置一边确认能拿到想要的宽
            }
        },
        initchart () {
            return new Promise( (resolve) => {
                document.getelementById('heatchart_bar').removeAttribute(' charts_instance_');
                resolve ();
            }).then(() => {
                this.chart = this.$echarts.init(document.getElementById('heatchart_bar'));
                this.updatechart();
            })
        },
        //荻取圏片的base64格式，昇出使用
        getImgBase64(){
            return this.chart.getDataURL({
                pixelatio: 2,
                backgroundColor: '#fff'
            })
        }
    },
    mounted(){
        parentBox = document. getElementById('heatchart_bar')
        theResizeObserver = new ResizeObserver ( (element) => {
            if(this.chart) {
                this.chart.resize({width: element[0].contentRect.width})
            }
        })
        theResizeObserver.observe (parentBox)
    },
    beforeDestroy () {
        theResizeObserver.unobserve(parentBox)
        theResizeObserver = null
    }
};
  </script>
  
  <style lang="less" scoped>
  </style>
  