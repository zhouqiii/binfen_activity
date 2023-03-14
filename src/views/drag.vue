<template>
  <div>
    <!--transition-group用于列表的过渡效果,子元素通常使用v-for进行循环,子元素必须要有唯一的key属性，且key不能为索引值-->
    <!--css过渡是应用在子元素中，而不是这个容器本身-->
    <!--对应的js事件钩子：
      before-enter、enter、after-enter、enter-cancelled、before-leave、leave、after-leave、leave-cancelled
    -->
    <transition-group tag="div" class="container">
      <!--draggable是html5提供的新方式，设置draggable="true"，则该元素只具备可拖曳的特点，并不能改变元素的位置，要结合元素拖放触发的事件来操作-->
      <!--拖放事件总共有7个，源元素触发事件3个，目标元素触发事件4个-->
      <!--ondragstart--开始拖拽、ondrag--拖拽过程中、 ondragend--结束拖放-->
      <!--ondragenter--被拖拽的元素(即源元素)进入本元素(即目标元素时)、
        ondragover--被拖拽的元素在本元素范围内移动时、ondragleave--被拖拽的元素离开本元素时、ondrop--源元素释放到本元素时-->
      <div
        class="item"
        v-for="item in items"
        :key="item.key" :style="{background:item.color,width:'80px',height:'80px'}"
        draggable="true"
        @dragstart="handleDragStart($event, item)"
        @dragover.prevent="handleDragOver($event, item)"
        @dragenter="handleDragEnter($event, item)"
        @dragend="handleDragEnd($event, item)" >
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      items: [
        { key: 1, color: '#ffebcc' },
        { key: 2, color: '#ffb86c' },
        { key: 3, color: '#f01b2d' },
      ],
      dragging: null,
    };
  },
  methods: {
    handleDragStart(e, item) {
      console.log(e, item);
      this.dragging = item;
    },
    handleDragEnd(e, item) {
      console.log(e, item);
      this.dragging = null;
    },
    // 上面说到的拖放触发的7个拖放事件有一个dataTransfer属性，属性值返回一个对象，该对象包含以下方法和属性：
    // effectAllowed--设置被拖放元素允许发生的拖动行为，允许值为move、none、copy、all等
    // dropEffect--设置拖放目标上允许发生的拖放行为，允许值为move、copy、link、none,
    // 如果dropEffect设置的值不在effectAllowed设置的拖放行为只内，拖放操作将失效
    // 还有其他属性暂不注明

    // 首先把div变成可以放置的元素，即重写dragenter/dragover
    handleDragOver(e) {
      e.dataTransfer.dropEffect = 'move';// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
    },
    handleDragEnter(e, item) {
      e.dataTransfer.effectAllowed = 'move';// 为需要移动的元素设置dragstart事件
      if (item === this.dragging) {
        return;
      }
      const newItems = [...this.items];
      console.log(newItems);
      const src = newItems.indexOf(this.dragging);
      const dst = newItems.indexOf(item);
      newItems.splice(dst, 0, ...newItems.splice(src, 1));
      this.items = newItems;
    },
  },
};

</script>
<style scoped>
  .container{
    width: 80px;
    height: 300px;
    position: absolute;
    left: 0;
    display:flex;
    flex-direction: column;
    padding: 0;
  }
  .item {
    margin-top: 10px;
    transition: all linear .3s
  }
</style>
