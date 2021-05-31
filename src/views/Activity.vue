<template>
    <div>
        <div class="box" style="background:#ffffff">
          <!--头部筛选条件-->
          <div class="activity_select">
            <div class="activity_condition">
              <el-form ref="form" :model="activity" label-width="100px"
                class="form_select flex-row-start"
                label-position="right"
                size="mini"
              >
                <el-form-item label="活动名称:" class="form_acname">
                  <el-input v-model="activity.activityName" placeholder="请输入活动名称"></el-input>
                </el-form-item>
                <el-form-item label="城市:" class="form_city">
                  <el-input v-model="activity.activityArea" placeholder="请输入城市"></el-input>
                </el-form-item>
                <el-form-item label="状态:" class="form_status">
                  <el-select v-model="activity.activityStatus" placeholder="请选择">
                    <el-option
                      v-for="item in ActivityStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动起止时间:" class="form_time">
                  <el-col :span="10">
                    <el-date-picker type="date" placeholder="选择日期"
                      v-model="activity.activityStartDt"
                      value-format="yyyy-MM-dd"
                      style="width: 100%;"
                    >
                    </el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">~</el-col>
                  <el-col :span="10">
                    <el-date-picker type="date" placeholder="选择日期"
                      v-model="activity.activityEndDt"
                      style="width: 100%;"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </el-col>
                </el-form-item>
              </el-form>
            </div>
            <div class="activity_queryBtn">
              <el-button type="primary" class="query" size="mini"
                @click="getdataActivity('query')"
              >查询</el-button>
            </div>
            <div class="activity_addBtn">
              <el-button type="primary" size="mini" @click="routeItem('/ActivityConfig')">
                新建活动
              </el-button>
            </div>
          </div>
          <!--表格-->
          <div class="activity_table">
            <div class="activity_table_data" v-loading="loading"
            >
              <el-table :data="tableData"
                border
                style="width: 100%"
                :row-style="{height: '30px'}"
                :cell-style="{padding:'4px 0'}"
                :header-cell-style="{background:'#f5f5f5',padding:'8px 0'}"
              >
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="activityName" label="活动名称" width="180"></el-table-column>
                <el-table-column prop="activityId" label="活动ID" width="180"></el-table-column>
                <el-table-column prop="activityArea" label="活动区域"></el-table-column>
                <el-table-column prop="activityDt" label="活动起止时间" width="180"></el-table-column>
                <el-table-column prop="getTicketDt" label="可领劵起止时间" width="180"></el-table-column>
                <el-table-column prop="activityStatus" label="状态" width="150">
                  <template slot-scope="scope">
                    <el-switch v-model="scope.row.activityStatus"
                      @change="getStatusThis(scope.row)"
                    >
                    </el-switch>{{scope.row.statusText}}
                  </template>
                </el-table-column>
                <el-table-column prop="operating" label="操作">
                  <template slot-scope="scope">
                    <el-button @click="routeItem('/ActivityConfig',scope.row)"
                      type="text"
                      size="small"
                      :disabled="scope.row.activityStatus"
                    >编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="activity_pagination flex-row-between">
                <div class="pagination_left">
                  共 {{total}} 条记录 第 {{currentPage}} / {{totalPage}} 页
                </div>
                <div>
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="pageSize"
                    :total="total"
                    layout="sizes, prev, pager, next, jumper"
                  >
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import '../assets/css/pageStyle/activity.less';

export default {
  name: 'Activity',
  data() {
    return {
      activity: {
        activityName: '',
        activityArea: '',
        activityStatus: '',
        activityStartDt: '',
        activityEndDt: '',
      },
      tableData: [],
      ActivityStatus: [{ label: '全部', value: '' }, { label: '下架', value: '0' }, { label: '上架', value: '1' }],
      activityStatustext: '', // 上架/下架
      currentPage: 1, // 当前页
      pageSize: 10, // 每页多少条
      loading: false,
      total: 0, // 共多少条
      totalPage: 1, // 共多少页
    };
  },
  methods: {
    // 获取表格数据
    getdata(data) {
      this.loading = true;
      this.request({
        url: '/api/activityList.do',
        data,
        params: {
          pageSize: this.pageSize,
          pageNum: this.currentPage,
        },
        method: 'post', // post
      }).then((res) => {
        this.loading = false;
        this.assignData(res);
      }).catch(() => {
        this.loading = false;
      });
    },
    // 查询和分页时上送参数转成FormData
    getdataActivity(val) {
      if (val === 'query') {
        this.currentPage = 1;
      }
      const formData = new FormData();
      const data = this.activity;
      data.activityStartDt = data.activityStartDt === null ? '' : data.activityStartDt;
      data.activityEndDt = data.activityEndDt === null ? '' : data.activityEndDt;
      Object.keys(data).forEach((item) => {
        formData.append(item, data[item]);
      });
      this.getdata(formData);
    },
    // 拿到数据后处理给表格赋值
    assignData(val) {
      const res = JSON.parse(val);
      if (res.body.total >= 0) {
        this.total = res.body.total;
        this.totalPage = Math.ceil(res.body.total / res.body.pageSize);
        if (this.totalPage === 0) {
          this.totalPage = 1;
        }
      }
      if (res.body.list) {
        this.tableData = res.body.list;
        this.tableData.forEach((item) => {
          const data = item;
          data.activityDt = `${data.activityStartDt}~${data.activityEndDt}`;
          data.getTicketDt = `${data.getTicketStartDt}~${data.getTicketEndDt}`;
          if (data.activityStatus === '0') {
            data.activityStatus = false;
            data.statusText = '下架';
          } else {
            data.activityStatus = true;
            data.statusText = '上架';
          }
          return data;
        });
      } else {
        this.tableData = [];
      }
    },
    // 去配置页面
    routeItem(path, val) {
      if (val) {
        this.$router.push({
          path,
          query: {
            data: JSON.stringify(val),
          },
        });
      } else {
        this.$router.push(path);
      }
    },
    // 表格里上下架切换
    getStatusThis(val) {
      const row = val;
      this.loading = true;
      const status = row.activityStatus ? '1' : '0';
      const formData = new FormData();
      formData.append('activityId', row.activityId);
      formData.append('activityStatus', status);
      this.request({
        url: '/api/update.do',
        data: formData,
        params: {},
        method: 'post', // post
      }).then((value) => {
        this.loading = false;
        const res = JSON.parse(value);
        if (res.stat === '00') {
          this.$message.success({ message: '修改成功！' });
          row.statusText = row.activityStatus ? '上架' : '下架';
        } else {
          row.activityStatus = !row.activityStatus;
          row.statusText = row.activityStatus ? '上架' : '下架';
          this.$message.error({ message: '修改失败,请重试！' });
        }
      }).catch(() => {
        this.loading = false;
        row.activityStatus = !row.activityStatus;
        row.statusText = row.activityStatus ? '上架' : '下架';
        return row;
      });
    },
    // 每页条数pageSize改变时触发
    handleSizeChange(val) {
      this.pageSize = val;
      this.getdataActivity();
    },
    // currentPage当前页改变时会触发
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getdataActivity();
    },
  },
  mounted() {
    this.getdata({});
  },
};
</script>
