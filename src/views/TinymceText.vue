<template>
  <div>
    <tinymce
      @setContent="setContent"
      @myAddToolFun="myAddToolFun"
      :reportContent="initContent"
      ref="tinymce"
    ></tinymce>
    <div>
      <el-button type="primary" @click="dialogVisible = true">上传图片</el-button>
      <el-button type="primary" @click="addText">插入纯文本</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :destroy-on-close="true"
      >
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :multiple="true"
          :file-list="fileList"
          :show-file-list="true"
          :http-request="myUpload"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleClose">上 传</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogTime"
        width="30%"
        :destroy-on-close="true"
      >
      <el-date-picker type="date" placeholder="选择日期"
            v-model="startDate"
            style="width: 100%;"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTime = false">取 消</el-button>
          <el-button type="primary" @click="addTime">确定</el-button>
        </span>
    </el-dialog>
    </div>
  </div>
</template>
<script>
import Tinymce from '../components/ActivityComponents/Tinymce.vue';

let count = 1;
export default {
  name: 'TinymceText',
  components: {
    Tinymce,
  },
  data() {
    return {
      initContent: '<p>一个content的初始copy，与content区分开</p>',
      content: '', // 父组件获取到的tinymce里面的内容
      fileList: [],
      dialogTime: false,
      startDate: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    handleClose() {
      console.log(this.fileList, '1111');
      this.dialogVisible = false;
    },
    handleRemove(file) {
      console.log(file);
    },
    myUpload(content) {
      console.log(content, '22222');
    },
    myAddToolFun() {
      // 在这里定义工具栏添加的自定义按钮的功能
      this.dialogTime = true;
    },
    addText(){
      this.$refs.tinymce.addHTML('插入文字', true);
    },
    addTime() {
      count += 1;
      // 添加时间-加一个空白span解决在插入时间后在插入时间，时间嵌套问题
      const html = `<span id="startDate-${count}" style="z-index: 1">${this.startDate}</span>
      <span contenteditable='${false}' style="z-index: 99;width: 6px;display: inline-block;margin-left: -4px;height: 20px"></span>`;
      this.$refs.tinymce.addHTML(html);
      this.dialogTime = false;
    },
    setContent(val) {
      this.content = val;
    },
  },
  mounted() {
  },
};
</script>
