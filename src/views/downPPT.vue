<template>
  <div class="home">
    <div class="addText">{{ addText }}</div>
    <div id="demoChart"></div>
    <el-button type="primary" @click="downloadPPT">导出pdf</el-button>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
import { zipfile } from '../utils/pdf';

export default {
  name: 'down-ppt',
  data() {
    return {
      myChart: null,
      addText: 'Hello World from PptxGenJS...',
    };
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('demoChart');
      this.myChart = this.$echarts.init(chartDom);

      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      };
      this.myChart.setOption(option);
    },
    getBase64() {
      return this.myChart.getDataURL({
        type: 'jpeg', // png | jpeg
        pixelRatio: 2,
        backgroundColor: '#fff', // 背景色白色
      });
    },
    getHtml2Canvas() {
      return new Promise((resolve) => {
        setTimeout(() => {
          // #capture 就是我们要获取截图对应的 DOM 元素选择器
          html2canvas(document.querySelector('.home'), {
            useCORS: true, // 【重要】开启跨域配置
            scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
            allowTaint: true, // 允许跨域图片
          }).then((canvas) => { // canvas为截图后返回的最后一个canvas
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            resolve(imgData);
          });
        }, 300); // 这里加上 300ms 的延迟是为了让 DOM 元素完全渲染完成后再进行图片的生成
      });
    },
    downloadPPT() {
      this.getHtml2Canvas().then((canvas) => {
        zipfile(this.addText, this.getBase64(), canvas);
      });
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
<style lang="less" scoped>
#demoChart{
  height: 300px;
  width: 100%
}
</style>
