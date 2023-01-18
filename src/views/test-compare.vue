<template>
  <div>
    <h1>hello world</h1>
    <h1>It is {{time}}</h1>
  </div>
</template>
<script>
export default {
  name: 'test-compare',
  data() {
    return {
      time: '',
    };
  },
  methods: {},
  mounted() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>
