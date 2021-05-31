<template>
  <div>
    <div class="box">
      <div class="activity_rule" v-loading="loading">
        <div class="rule base_rule">
          <div class="title">基本规则</div>
          <div class="base_rule_input">
            <el-form ref="baseRule" :model="form" label-width="120px"
              label-position="right"
              size="mini"
              :rules="rules"
            >
              <el-form-item label="活动名称:"  prop="activityName">
                <el-input v-model="form.activityName"
                  style="width:100%"
                  @blur="checkInput(form.activityName,'活动名称')"
                >
                </el-input>
              </el-form-item>
              <div class="flex-row-between">
                <el-form-item label="活动开始时间:" prop="activityStartDt">
                  <el-date-picker type="date" placeholder="选择日期"
                    v-model="form.activityStartDt"
                    style="width: 100%;"
                    :disabled="disabledTime"
                    value-format="yyyy-MM-dd"
                    @blur="checkInput(form.activityStartDt,'活动开始时间')"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="活动结束时间:" prop="activityEndDt">
                  <el-date-picker type="date" placeholder="选择日期"
                    v-model="form.activityEndDt"
                    style="width: 100%;"
                    value-format="yyyy-MM-dd"
                    @blur="checkInput(form.activityEndDt,'活动结束时间')"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="flex-row-between">
                <el-form-item label="可领劵开始时间:" prop="getTicketStartDt">
                  <el-date-picker type="date" placeholder="选择日期"
                      v-model="form.getTicketStartDt"
                      style="width: 100%;"
                      :disabled="disabledTime"
                      value-format="yyyy-MM-dd"
                      @blur="checkInput(form.getTicketStartDt,'可领劵开始时间')"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="可领劵结束时间:" prop="getTicketEndDt">
                  <el-date-picker type="date" placeholder="选择日期"
                    v-model="form.getTicketEndDt"
                    style="width: 100%;"
                    value-format="yyyy-MM-dd"
                    @blur="checkInput(form.getTicketEndDt,'可领劵结束时间')"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
              <el-form-item label="活动区域:">
                <div style="color:#999999;font-size:.16rem">北京</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="rule collection_rule">
          <div class="flex-row-between">
            <div class="title">领取规则</div>
            <div class="elIcon" @click="addRule"><i class="el-icon-circle-plus-outline"></i></div>
          </div>
          <div>
            <el-table :data="collectionRuleTable"
              border
              style="width: 100%"
              :row-style="{height: '25px'}"
              :cell-style="{padding:'2px 0'}"
              :header-cell-style="{background:'#ffffff',padding:'4px 0'}"
            >
              <el-table-column prop="ruleType" label="时间">
                <template slot-scope="scope">
                  <el-select v-model="scope.row.ruleType" size="mini">
                    <el-option
                      v-for="item in timeStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="ruleNum" label="数量" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.ruleNum" style="width:60%"
                    size="mini"
                    @blur="checkNum(scope.row.ruleNum)"
                  ></el-input>
                  <span style="margin-left:.1rem">次</span>
                </template>
              </el-table-column>
              <el-table-column prop="operating" label="操作">
                <template slot-scope="scope">
                  <div class="delBtn">
                    <el-button size="mini"  @click="deleteRule(scope.$index)"
                      :disabled="disabledRule"
                    >删除</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="rule coupon_description">
          <div class="title">优惠券描述</div>
          <div class="coupon_desc_input">
            <el-form ref="couponDesc" :model="form"
              label-position="right"
              size="mini"
              label-width="120px"
            >
              <el-form-item label="公交劵描述(选填):">
                <el-input :rows="2" type="textarea" v-model="form.activityBusDesp"></el-input>
              </el-form-item>
              <el-form-item label="地铁劵描述(选填):">
                <el-input :rows="2" type="textarea" v-model="form.activitySubDesp"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="rule use_description">
          <div class="use_desc_input">
            <el-form ref="useDesc" :model="form"
              label-position="right"
              size="mini"
              :rules="rules"
              label-width="120px"
            >
              <el-form-item label="活动规则描述:" prop="activityRuleDesp">
                <el-input :rows="4" type="textarea" v-model="form.activityRuleDesp"
                  @blur="checkInput(form.activityRuleDesp,'活动规则描述')"
                ></el-input>
              </el-form-item>
              <el-form-item label="使用及注意事项:" prop="activityNotice">
                <el-input :rows="4" type="textarea" v-model="form.activityNotice"
                  @blur="checkInput(form.activityNotice,'使用及注意事项')"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="rule now_status">
          <div class="status_select">
            <el-form ref="statusSel" :model="form" label-width="120px"
              label-position="right"
              size="mini"
              :rules="rules"
            >
              <el-form-item label="活动状态" prop="status">
                <el-radio-group v-model="form.activityStatus" size='mini'>
                  <el-radio label="0">下架</el-radio>
                  <el-radio label="1">上架</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="rule operate_btn">
          <div class="operate_save">
             <el-button type="primary" size="mini" style="width:80px"
              @click="saveActivity"
             >
              保存
             </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/css/pageStyle/activityconfig.less';

export default {
  name: 'ActivityConfig',
  data() {
    return {
      form: {
        activityName: '', // 活动名称
        activityStartDt: '', // 活动开始时间
        activityEndDt: '', // 活动结束时间
        getTicketStartDt: '', // 领券截止时间
        getTicketEndDt: '', // 领券开始时间
        activityStatus: '0', // 活动状态
        activityBusDesp: '', //
        activitySubDesp: '',
        activityRuleDesp: '',
        activityNotice: '',
        activityId: '',
      },
      disabledTime: false,
      disabledRule: true,
      collectionRuleTable: [{ ruleType: '0', ruleNum: '' }],
      timeStatus: [{ label: '整个期间', value: '0' }, { label: '每周', value: '1' }, { label: '每月', value: '2' }],
      rules: {
        activityName: [{ required: true, message: ' ', trigger: 'blur' }],
        activityStartDt: [{ required: true, message: ' ', trigger: 'blur' }],
        activityEndDt: [{ required: true, message: ' ', trigger: 'blur' }],
        getTicketStartDt: [{ required: true, message: ' ', trigger: 'blur' }],
        getTicketEndDt: [{ required: true, message: ' ', trigger: 'blur' }],
        activityRuleDesp: [{ required: true, message: ' ', trigger: 'blur' }],
        activityNotice: [{ required: true, message: ' ', trigger: 'blur' }],
        status: [{ required: true, trigger: 'blur' }],
      },
      loading: false,
    };
  },
  methods: {
    // 如果是点击编辑过来的,那默认赋值
    assignData(data) {
      Object.keys(this.form).forEach((item) => {
        this.form[item] = data[item];
      });
      this.form.activityStatus = data.activityStatus ? '1' : '0';
      this.collectionRuleTable = [];
      this.collectionRuleTable = data.activityList;
      this.disabledRule = this.collectionRuleTable.length === 1;
      this.disabledTime = true;
    },
    // 添加领取规则按钮
    addRule() {
      if (this.collectionRuleTable.length >= 3) {
        this.$message({
          message: '领取规则不可超过3条！',
          duration: 1500,
        });
      } else {
        this.collectionRuleTable.push({ ruleType: '0', ruleNum: '' });
        if (this.collectionRuleTable.length >= 2) {
          this.disabledRule = false;
        }
      }
    },
    // 删除当前领取规则按钮
    deleteRule(index) {
      this.collectionRuleTable.splice(index, 1);
      if (this.collectionRuleTable.length === 1) {
        this.disabledRule = true;
      }
    },
    // 必填的输入框失焦事件
    checkInput(val, msg) {
      if (!val) {
        this.$message({ message: `${msg}不可为空!` });
      }
    },
    // 领取规则失焦校验
    checkNum(val) {
      const num = /^\+?[1-9][0-9]*$/;
      const number = parseInt(val, 10);
      if (!val) {
        this.$message({ message: '数量不可为空!' });
      } else if (!num.test(number)) {
        this.$message({ message: '数量只能为数字!' });
      }
    },
    // 保存该活动
    saveActivity() {
      let flag = true;
      this.loading = true;
      const data = this.form;
      const list = this.collectionRuleTable;
      const formData = new FormData();
      Object.keys(data).forEach((item) => {
        formData.append(item, data[item]);
        if (item !== 'activityBusDesp' && item !== 'activitySubDesp' && item !== 'activityId') {
          if (!data[item]) {
            flag = false;
          }
        }
      });
      for (let i = 0; i < list.length; i++) {
        formData.append(`activityList[${i}].ruleType`, list[i].ruleType);
        formData.append(`activityList[${i}].ruleNum`, list[i].ruleNum);
        if (!list[i].ruleNum) {
          flag = false;
        }
      }
      if (flag) {
        this.sendSaveData(formData);
      } else {
        this.loading = false;
        this.$message({ message: '有必填项暂未填写,请补充后重新保存！' });
      }
    },
    sendSaveData(formData) {
      this.loading = false;
      this.request({
        url: '/api/add.do',
        data: formData,
        params: {},
        method: 'post',
      })
        .then((val) => {
          this.loading = false;
          const res = JSON.parse(val);
          if (res.stat === '00') {
            this.$message({ message: '保存成功!', type: 'success' });
          } else if (res.result) {
            this.$message.error({ message: res.result });
          } else {
            this.$message.error({ message: '保存失败,请重试！' });
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    let data;
    if (this.$route.query.data) {
      data = JSON.parse(this.$route.query.data);
      this.assignData(data);
    }
  },
};
</script>
