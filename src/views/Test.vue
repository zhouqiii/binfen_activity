<template>
  <div>
    <div @click="giveUp">11111</div>
    <span id="addStar" style="color:red;display:none">*</span>
  </div>
</template>
<script>

export default {
  name: 'Test',
  data() {
    return {
      message: '测试文字',
    };
  },
  methods: {
    giveUp() {
      this.$prompt(`您即将放弃当前验收项：${this.message}</br>请输入放弃验收原因:`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        type: 'warning',
        showInput: true,
        customClass: 'addStarBox',
        inputPattern: /^.+$/,
        inputErrorMessage: '放弃原因内容为必填项',
        inputPlaceholder: '请输入放弃验收原因',
      }).then((value) => {
        console.log(value);
      });
      this.$nextTick(() => {
        const htmlDom = document.getElementsByClassName('addStarBox');
        const htmlText = htmlDom[0].getElementsByClassName('el-message-box__content')[0].getElementsByClassName('el-message-box__input')[0].getElementsByClassName('el-input')[0];
        const add = document.getElementById('addStar');
        add.style.display = 'block';
        htmlText.appendChild(add);
        htmlText.style.display = 'flex';
        htmlText.style.flexDirection = 'row-reverse';
      });
    },
  },
  created() {
    this.$nextTick(() => {
      document.getElementsByClassName('el-input');
    });
  },
};
</script>
