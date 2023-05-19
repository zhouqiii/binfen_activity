<template>
  <div class="home">
    <div class="addText">{{ addText }}</div>
    <el-button type="primary" @click="downloadPPT">导出pdf</el-button>
  </div>
</template>
<script>
import pdfpage from '../utils/pdf';

export default {
  name: 'down-ppt',
  data() {
    return {
      addText: 'Hello World from PptxGenJS...',
    };
  },
  methods: {
    downloadPPT() {
      pdfpage(this.addText);
    },
  },
};
</script>
<style lang="less" scoped>
</style>
