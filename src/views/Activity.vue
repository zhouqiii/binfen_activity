<template>
    <div>
        <div class="box" style="background:#ffffff">
          <!--头部筛选条件-->
          <div class="activity_select">
            <div class="activity_condition">
              <el-form ref="form" :model="activity" label-width="1rem"
                class="form_select flex-row-start"
                label-position="right"
                size="mini"
              >
                <el-form-item label="活动名称:" class="form_acname">
                  <el-input v-model="activity.name" placeholder="请输入活动名称"></el-input>
                </el-form-item>
                <el-form-item label="城市:" class="form_city">
                  <el-input v-model="activity.city" placeholder="请输入城市"></el-input>
                </el-form-item>
                <el-form-item label="状态:" class="form_status">
                  <el-select v-model="activity.status" placeholder="请选择">
                    <el-option
                      v-for="item in ActivityStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动起止时间:" class="form_time" label-width="1.6rem">
                  <el-col :span="10">
                    <el-date-picker type="date" placeholder="选择日期"
                      v-model="activity.startDate"
                      style="width: 100%;"
                    >
                    </el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">~</el-col>
                  <el-col :span="10">
                    <el-date-picker type="date" placeholder="选择日期"
                      v-model="activity.endDate"
                      style="width: 100%;"
                    >
                    </el-date-picker>
                  </el-col>
                </el-form-item>
              </el-form>
            </div>
            <div class="activity_queryBtn">
              <el-button type="primary" class="query" size="mini"
                @click="queryData()"
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
        name: '',
        city: '',
        status: '',
        startDate: '',
        endDate: '',
      },
      tableData: [],
      ActivityStatus: [{ label: '下架', value: 0 }, { label: '上架', value: 1 }],
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
    getdata() {
      this.loading = true;
      this.request({
        url: '/mock/index.json',
        data: {},
        params: {
          pageSize: this.pageSize,
          pageNum: this.currentPage,
        },
        method: 'get',
      }).then((res) => {
        this.loading = false;
        this.assignData(res);
      }).catch((err) => {
        this.loading = false;
        this.$message.error({ message: err.message });
      });
    },
    // 拿到数据后处理给表格赋值
    assignData(res) {
      if (res.data.total > 0) {
        this.total = res.data.total;
        this.totalPage = res.data.totalPage;
      }
      if (res.list) {
        console.log(res.list);
        this.tableData = res.list;
        this.tableData.forEach((item) => {
          const data = item;
          data.activityDt = `${data.activityStartDt.split(' ')[0]}~${data.activityEndDt.split(' ')[0]}`;
          data.getTicketDt = `${data.getTicketStartDt.split(' ')[0]}~${data.getTicketEndDt.split(' ')[0]}`;
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
    // 查询
    queryData() {
      console.log(this.activity.status);
      let startTime = '';// 活动开始时间
      let endTime = '';// 活动结束时间
      if (this.activity.startDate) {
        startTime = `${this.activity.startDate} 00:00:00`;
      }
      if (this.activity.endDate) {
        endTime = `${this.activity.endDate} 00:00:00`;
      }
      console.log(startTime, endTime);
      this.getdata();
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
      if (row.status) {
        row.statusText = '上架';
      } else {
        row.statusText = '下架';
      }
    },
    // 每页条数pageSize改变时触发
    handleSizeChange(val) {
      this.pageSize = val;
      this.getdata();
    },
    // currentPage当前页改变时会触发
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getdata();
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>
