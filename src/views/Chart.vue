<template>
	<div>
		<div class="heat-box">
			<heat-chart
				:data="heatChartList"
				ref="heatChart"
				indexName="业务成功率热力分布"
				:height="420"	
			></heat-chart>
		</div>
    <el-button type="primary" @click="exporPPT">导出PPT</el-button>
    <div class="heat-box-export" style="display: none">
			<heat-chart
				:data="heatChartListExport"
				ref="heatChartExport"
				indexName="业务成功率热力分布"
				:height="420"	
			></heat-chart>
		</div>
	</div>
</template>
<script>
import HeatChart from '../components/chart/HeatChart.vue';
import {exportDataAna} from '../utils/exportReport.js'
  export default {
    name: 'chart',
		components: {HeatChart},
    data() {
      return {
				heatChartList: [],
        heatChartListExport: []
      };
    },
    methods: {
      // 获取图形数据
      getdata(data) {
        this.request({
          url: '/activityList.do',
          data,
          params: {
          },
          method: 'post', // post
        }).then((res) => {
          this.heatChartList = res.data[0]// 会出现在每次数据更新后图形不刷新的问题，是因为echarts给canvas父div一个动态id：charts_instance_，如果id不变化，canvas不刷新，所以每次数据更新都调用一下initchart函数，初始化id，确保图形跟着数据刷新
          this.heatChartListExport = res.data[1]
        }).then(() => {
          // 图形组件里写了watch data 每次data变化会调用initChart函数，这里可以不调用试试，如果一样有效，这里可以不用重复调用
          this.$refs.heatChart.initchart()
          this.$refs.heatChartListExport.initchart()
        }).then(() => {
          // 获取base64时，要确保在initChart调用后，就是说图形初始化之后
         const base64 = this.$refs.heatChartExport.getImgBase64()
         console.log(base64)
        })
      },
      exporPPT() {
        exportDataAna({
          fileName: '业务成功率热力分布',
          title: '业务成功率热力分布报告',
          content: '<span>1111</span>', // 设为html字段
          heatImage: this.$refs.heatChartExport.getImgBase64()
        })
      }
    },
    created() {
      this.$nextTick(() => {
        this.getData()
      })
     
    },
  };
  </script>
<style lang="less" scoped>
.heat-box, .heat-box-export{
    width: 100%;
}
</style>
  