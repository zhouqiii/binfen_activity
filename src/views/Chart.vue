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
	</div>
</template>
<script>
import HeatChart from '../components/chart/HeatChart.vue';
  export default {
    name: 'chart',
		components: {HeatChart},
    data() {
      return {
				heatChartList: []
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
          this.heatChartList = res.data// 会出现在每次数据更新后图形不刷新的问题，是因为echarts给canvas父div一个动态id：charts_instance_，如果id不变化，canvas不刷新，所以每次数据更新都调用一下initchart函数，初始化id，确保图形跟着数据刷新
        }).then(() => {
          this.$refs.heatChart.initchart()
        })
      },
    },
    created() {
      this.$nextTick(() => {
        this.getData()
      })
     
    },
  };
  </script>
<style lang="less" scoped>
.heat-box{
    width: 100%;
}
</style>
  