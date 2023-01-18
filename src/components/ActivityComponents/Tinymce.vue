<template>
  <div class="tinymce_container">
    <textarea id="tinymceContent" ></textarea>
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
    return {};
  },
  methods: {
    initTinymce() {
      tinymce.init({
        selector: '#tinymceContent',
        language_url: '/tinymce/zh_CN.js', // 如果这种方式引入错误 可以使用require zh_CN
        language: 'zh_CN',
        readonly: false,
        skin_url: '/tinymce/skins/ui/oxide',
        height: this.height,
        /* tinymce 通过添加扩展插件 plugins 的方式来添加功能 image时上传图片 link是超链接 配上上面import引入插件 */
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
          editor.on('KeyDown', () => {
            const id = 'id';
            const parentNode = 'parentNode';
            const iframe = document.querySelector('iframe');
            const iframeDoc = iframe.contentWindow.document;
            const addIdFlag = tinymce.activeEditor.selection.getSel().focusNode[parentNode][id];
            if (addIdFlag) {
              if (addIdFlag.indexOf('startDate') > -1) {
                const get = iframeDoc.getElementById(addIdFlag);
                if (get) {
                  get.remove();
                }
              }
            }
          });
        },
      });
    },
    addHTML(html) {
      const tiny = window.tinymce.get('tinymceContent');
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
      range.insertNode(divNode);
    },
    setContent(value) {
      tinymce.get('tinymceContent').setContent(value);
    },
    destroyTinymce() {
      if (window.tinymce.get('tinymceContent')) {
        window.tinymce.get('tinymceContent').destroy();
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
