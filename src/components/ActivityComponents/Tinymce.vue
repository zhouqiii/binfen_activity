<template>
  <div class="tinymce_container">
    <textarea :id="tinymceId"></textarea>
  </div>
</template>
<script>
// 引入组件
import tinymce from 'tinymce/tinymce';
// import Editor from '@tinymce/tinymce-vue';
import 'tinymce/icons/default/icons';
import 'tinymce/themes/silver';
// 引入富文本编辑器主题的js和css
import 'tinymce/themes/silver/theme.min';
import 'tinymce/skins/ui/oxide/skin.min.css';
// 扩展插件
import 'tinymce/plugins/image';// 上传图片
import 'tinymce/plugins/link';// 上传图片
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/wordcount'; // 字数统计插件
import 'tinymce/plugins/media';// 插入视频插件
import 'tinymce/plugins/template';// 模板插件
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/preview';

// const zh_CN = require('../../static/zh_CN')
export default {
  name: 'Tinymce',
  // components: {
  //   Editor,
  // },
  props: {
    height: {
      type: Number,
      default: 300,
    },
    reportContent: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tinymceId: `tinymce-id-${+ + new Date()}`,
    };
  },
  methods: {
    initTinymce() {
      tinymce.init({
        selector: `#${this.tinymceId}`,
        language_url: '/tinymce/zh_CN.js', // 如果这种方式引入错误 可以使用require zh_CN
        language: 'zh_CN',
        readonly: false,
        skin_url: '/tinymce/skins/ui/oxide',
        height: this.height,
        /* tinymce 通过添加扩展插件 plugins 的方式来添加功能
        // image时上传图片 aoturesize可自动适配高度，有aoturesize时，height失效 link是超链接 配上上面import引入插件 */
        plugins: 'link lists image code table wordcount template media fullscreen preview paste',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat | addToolbar',
        branding: false,
        setup: (editor) => {
          const self = this;
          editor.ui.registry.addButton('addToolbar', { // 在toolbar栏自定义一个工具按钮，并添加自定义事件
            text: '<span style="font-size: 14px">插入内容</span>',
            icon: 'insert-character',
            tooltip: '插入内容',
            onAction: () => {
              self.$emit('myAddToolFun');
            },
          });
        },
        init_instance_calback: (editor) => {
          if (this.reportContent) {
            editor.setContent(this.reportContent);
          }
          editor.on('Change NodeChange KeyUp SetContent', () => {
            this.$emit('setContent', editor.getContent());
          });
          editor.on('KeyDown', (e) => {
            const id = 'id';
            const parentNode = 'parentNode';
            const iframe = document.querySelector('iframe');
            const iframeDoc = iframe.contentWindow.document;
            const addIdFlag = tinymce.activeEditor.selection.getSel().focusNode[parentNode][id];
            const uselessNode = document.createElement('span');
            uselessNode.innerHTML = '&nbsp;';
            if (addIdFlag) {
              if (addIdFlag.indexOf('startDate') > -1) {
                if (e.keyCode === 8) { //键盘的Back键
                  const get = iframeDoc.getElementById(addIdFlag);
                  const theParentNode = get.parentNode;
                  theParentNode.insertBefore(uselessNode, get); // &nbsp解决删除整个插入的dom时总会往前删一个字符问题
                  if (get) {
                    get.remove();
                    setTimeout(() => {
                      uselessNode.remove();
                    }, 100)
                  }
                }else{//在插入的节点上输入键盘的其他键输入时，不处理
                  return e.preventDefault()
                }
              }
            }
          });
        },
      });
    },
    addHTML(html) {
      const tiny = window.tinymce.get(this.tinymceId);
      const range = tiny.selection.getRng();
      const id = 'id';
      const parentNode = 'parentNode';
      const indexIdFlag = tiny.selection.getSel().focusNode[parentNode][id];
      if (indexIdFlag) {
        if (indexIdFlag.indexOf('startDate') > -1) {
          this.$message({ message: '该内容中间不能插入!' });
          return;
        }
      }
      let divNode = null;
      divNode = document.createElement('span');
      divNode.innerHTML = `${html}`;
      if(ifText){
        tinymce.activeEditor.execCommand('mceInsertContent', false, html)
      }else{
        range.insertNode(divNode);
      }
      tinymce.activeEditor.selection.collapse()// 关闭插入内容后将内容选中
      this.$emit('setContent', tiny.getContent())
    },
    setContent(value) {
      tinymce.get(this.tinymceId).setContent(value);
    },
    destroyTinymce() {
      if (window.tinymce.get(this.tinymceId)) {
        window.tinymce.get(this.tinymceId).destroy();
      }
    },
  },
  mounted() {
    this.initTinymce();
  },
  destroyed() {
    this.destroyTinymce();
  },
  watch: {
    reportContent(val) {
      this.$nextTick(() => {
        this.setContent(val);
      });
    },
  },
};
</script>
