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
      
    },
    created() {
     
    },
  };
  </script>
<style lang="less" scoped>
.heat-box{
    width: 100%;
}
</style>
  