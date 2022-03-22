<template>
  <div>
    <div style="display:flex;flex-direction:row;margin-top: 20px">
      <el-button
        type="primary"
        class="query"
        size="middle"
        @click="ifIframe = true"
      >显示Iframe</el-button>
      <el-button
        type="primary"
        class="query"
        size="middle"
        @click="ifIframe = false"
      >隐藏Iframe</el-button>
      <el-button
        type="primary"
        class="query"
        size="middle"
        @click="sendMessage"
      >向iframe传值</el-button>
    </div>
    <div>
      <el-input v-model="getIframeHeight" placeholder="暂无iframe传过来的值"></el-input>
    </div>
    <div v-show="ifIframe">
      <iframe :src="iframeSrc" ref="iframe" @load="iframeLoad"></iframe>
    </div>
  </div>
</template>
<script>
let count = 0;
export default {
  name: 'Test',
  data() {
    return {
      message: '测试文字',
      iframeSrc: './static/index.html',
      iframeObj: {},
      ifIframe: false,
      getIframeHeight: '',
    };
  },
  methods: {
    handleMessage(event) {
      const { data } = event;// 根据上面制定的结构来解析iframe内部发回来的数据
      // eslint-disable-next-line default-case
      switch (data.cmd) {
        case 'returnHeight':
          // 业务逻辑
          this.getIframeHeight = `iframe传过来的值：${data.params.height}`;
          break;
        case 'returnWidth':
          // 业务逻辑
          break;
      }
    },
    sendMessage() {
      count += 1;
      this.iframeObj.postMessage({
        cmd: 'sendName', // cmd用来区分这条message的目的
        params: {
          count,
        },
      }, '*');
    },
    // iframe初次加载渲染的函数
    iframeLoad(event) {
      console.log(event);
      console.log('iframeLoad');
    },
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener('message', this.handleMessage);
      this.iframeObj = this.$refs.iframe.contentWindow;
    });
  },
};
</script>
