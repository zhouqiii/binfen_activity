<template>
  <div>
    <div class="box">
      <div class="activity_rule" v-loading="loading">
        <div class="rule base_rule">
          <div class="title">基本规则</div>
          <div class="base_rule_input">
            <el-form ref="baseRule" :model="form" label-width="2rem"
              label-position="right"
              size="mini"
              :rules="rules"
            >
              <el-form-item label="活动名称:"  prop="name">
                <el-input v-model="form.activityName"
                  style="width:100%"
                  @blur="checkInput(form.activityName,'活动名称')"
                >
                </el-input>
              </el-form-item>
              <div class="flex-row-between">
                <el-form-item label="活动开始时间:" prop="startDate">
                  <el-date-picker type="date" placeholder="选择日期"
                    v-model="form.startDate"
                    style="width: 100%;"
                    :disabled="form.disabled"
                    value-format="yyyy-MM-dd"
                    @blur="checkInput(form.startDate,'活动开始时间')"
                    @change="checkInput(form.startDate,'活动开始时间')"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="活动结束时间:" prop="endDate">
                  <el-date-picker type="date" placeholder="选择日期"
                    v-model="form.endDate"
                    style="width: 100%;"
                    value-format="yyyy-MM-dd"
                    @blur="checkInput(form.endDate,'活动结束时间')"
                    @change="checkInput(form.endDate,'活动结束时间')"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="flex-row-between">
                <el-form-item label="可领劵开始时间:" prop="couponStartDate">
                  <el-date-picker type="date" placeholder="选择日期"
                      v-model="form.couponStartDate"
                      style="width: 100%;"
                      :disabled="form.disabled"
                      value-format="yyyy-MM-dd"
                      @blur="checkInput(form.couponStartDate,'可领劵开始时间')"
                      @change="checkInput(form.couponStartDate,'可领劵开始时间')"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="可领劵结束时间:" prop="couponEndDate">
                  <el-date-picker type="date" placeholder="选择日期"
                    v-model="form.couponEndDate"
                    style="width: 100%;"
                    value-format="yyyy-MM-dd"
                    @blur="checkInput(form.couponEndDate,'可领劵结束时间')"
                    @change="checkInput(form.couponEndDate,'可领劵结束时间')"
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
              <el-table-column prop="activityType" label="时间">
                <template slot-scope="scope">
                  <el-select v-model="scope.row.activityType" size="mini">
                    <el-option
                      v-for="item in timeStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="activityNum" label="数量" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.activityNum" style="width:60%"
                    size="mini"
                  ></el-input>
                  <span style="margin-left:.1rem">次</span>
                </template>
              </el-table-column>
              <el-table-column prop="operating" label="操作">
                <template slot-scope="scope">
                  <div class="delBtn">
                    <el-button size="mini"  @click="deleteRule(scope.$index)"
                      :disabled="form.disabledRule"
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
            <el-form ref="couponDesc" :model="form" label-width="2rem"
              label-position="right"
              size="mini"
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
            <el-form ref="useDesc" :model="form" label-width="2rem"
              label-position="right"
              size="mini"
              :rules="rules"
            >
              <el-form-item label="活动规则描述:" prop="activityRuleDespDesc">
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
            <el-form ref="statusSel" :model="form" label-width="2rem"
              label-position="right"
              size="mini"
              :rules="rules"
            >
              <el-form-item label="活动状态" prop="status">
                <el-radio-group v-model="form.status" size='mini'>
                  <el-radio label="0">下架</el-radio>
                  <el-radio label="1">上架</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="rule operate_btn">
          <div class="operate_save">
             <el-button type="primary" size="mini" style="width:1.5rem"
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
        startDate: '', // 活动开始时间
        endDate: '', // 活动结束时间
        couponEndDate: '', // 领券截止时间
        couponStartDate: '', // 领券开始时间
        status: '0', // 活动状态
        activityBusDesp: '', //
        activitySubDesp: '',
        activityRuleDesp: '',
        activityNotice: '',
        disabled: false,
        disabledRule: false,
      },
      collectionRuleTable: [{ activityType: '0', activityNum: '', disabled: true }],
      timeStatus: [{ label: '整个期间', value: '0' }, { label: '每周', value: '1' }, { label: '每月', value: '2' }],
      rules: {
        name: [{ required: true, message: ' ', trigger: 'blur' }],
        startDate: [{ required: true, message: ' ', trigger: 'change' }],
        endDate: [{ required: true, message: ' ', trigger: 'change' }],
        couponStartDate: [{ required: true, message: ' ', trigger: 'change' }],
        couponEndDate: [{ required: true, message: ' ', trigger: 'change' }],
        activityRuleDespDesc: [{ required: true, message: ' ', trigger: 'blur' }],
        activityNotice: [{ required: true, message: ' ', trigger: 'blur' }],
        status: [{ required: true, trigger: 'blur' }],
      },
      loading: false,
    };
  },
  methods: {
    // 如果是点击编辑过来的,那默认赋值
    assignData(data) {
      this.form.activityName = data.activityName;
      this.form.startDate = data.activityStartDt.split(' ')[0];
      this.form.endDate = data.activityEndDt.split(' ')[0];
      this.form.couponStartDate = data.getTicketStartDt.split(' ')[0];
      this.form.couponEndDate = data.getTicketEndDt.split(' ')[0];
      this.form.activitySubDesp = data.activitySubDesp;
      this.form.activityBusDesp = data.activityBusDesp;
      this.form.activityRuleDesp = data.activityRuleDesp;
      this.form.activityNotice = data.activityNotice;
      if (data.activityStatus === false) {
        this.form.status = '0';
      } else {
        this.form.status = '1';
      }
      this.collectionRuleTable = [];
      this.collectionRuleTable = data.activityList;
      const len = this.collectionRuleTable.length;
      if (len === 1) {
        this.form.disabledRule = true;
      } else {
        this.form.disabledRule = false;
      }
      this.form.disabled = true;
    },
    // 添加领取规则按钮
    addRule() {
      if (this.collectionRuleTable.length >= 3) {
        this.$message({
          message: '领取规则不可超过3条！',
          duration: 1500,
        });
      } else {
        this.collectionRuleTable.push({ activityType: '0', activityNum: '' });
        if (this.collectionRuleTable.length >= 2) {
          this.form.disabledRule = false;
        }
      }
    },
    // 删除当前领取规则按钮
    deleteRule(index) {
      this.collectionRuleTable.splice(index, 1);
      if (this.collectionRuleTable.length === 1) {
        this.form.disabledRule = true;
      }
    },
    // 必填的输入框失焦事件
    checkInput(val, msg) {
      console.log(val);
      if (!val) {
        this.$message({
          message: `${msg}不可为空`,
          duration: 1500,
        });
      }
    },
    // 保存该活动
    saveActivity() {
      this.loading = true;
      const data = this.form;
      this.request({
        url: '',
        data: {
          activityName: data.activityName,
          activityStartDt: `${data.startDate} 00:00:00`,
          activityEndDt: `${data.endDate} 00:00:00`,
          getTicketStartDt: `${data.couponStartDate} 00:00:00`,
          getTicketEndDt: `${data.couponEndDate} 00:00:00`,
          activityList: this.collectionRuleTable,
          activityBusDesp: data.activityBusDesp,
          activitySubDesp: data.activitySubDesp,
          activityRuleDesp: data.activityRuleDesp,
          activityNotice: data.activityNotice,
          activityStatus: data.status,
        },
        params: {},
        method: 'post',
      })
        .then((res) => {
          this.loading = false;
          if (res.code === '200') {
            this.$router.push({ path: '/Activity' });
          } else {
            this.$message.error({ message: '保存失败,请重试！' });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.$message.error({ message: err.message });
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
