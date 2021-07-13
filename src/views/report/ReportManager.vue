<template>
  <el-drawer visible :size="1440" :close-on-press-escape="false" :close-on-click-modal="false" :with-header="false">
    <div class="report-header">
      <div class="report-logo"></div>
      <div class="report-title">测试报告</div>
      <div class="report-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
    </div>

    <div class="report-content">
      <div class="report-query">
        <div class="sugar-normal-line sugar-flex-row">
          <div class="sugar-label-input">
            <div class="label">测试报告</div>
            <div class="input">
              <el-input v-model="reportQuery.name" @keypress.enter="handleQuery" placeholder="模糊查询"></el-input>
            </div>
          </div>
          <div class="sugar-label-input">
            <div class="label">测试计划</div>
            <div class="input">
              <el-input v-model="reportQuery.testPlanName" @keypress.enter="handleQuery" placeholder="模糊查询"></el-input>
            </div>
          </div>
          <div class="sugar-label-input">
            <div class="label">项目名称</div>
            <div class="input">
              <el-input v-model="reportQuery.projectName" @keypress.enter="handleQuery" placeholder="模糊查询"></el-input>
            </div>
          </div>
        </div>
        <div class="sugar-normal-line sugar-flex-row">
          <div class="sugar-label-input">
            <div class="label">执行人</div>
            <div class="input">
              <el-input v-model="reportQuery.creatorName" @keypress.enter="handleQuery" placeholder="精确查询"></el-input>
            </div>
          </div>
          <div class="sugar-label-input">
            <div class="label">生成时间</div>
            <div class="input">
              <el-date-picker v-model="reportQuery.createTimes" type="daterange" value-format="yyyy-MM-dd" range-separator="~" start-placeholder="起始日期" end-placeholder="结束日期" style="width: 100%;" @keypress.enter="handleQuery"></el-date-picker>
            </div>
          </div>
          <div class="sugar-label-input">
            <div></div>
            <el-button type="primary" @click="handleQuery">查询</el-button>
          </div>
        </div>
      </div>

      <div class="report-table">
        <div class="table">
          <el-table :data="reports.list" ref="reportTable" height="100%" row-key="id" highlight-current-row empty-text="无测试报告" @row-click="handleReportClick">
            <el-table-column prop="id" label="#" width="60px"></el-table-column>
            <el-table-column prop="name" label="测试报告"></el-table-column>
            <el-table-column prop="testPlanName" label="测试计划"></el-table-column>
            <el-table-column prop="projectName" label="项目名称"></el-table-column>
            <el-table-column prop="status" label="执行状态" width="100px">
              <template slot-scope="scope">
                <div v-if="scope.row.status === 'SUCCESS'" style="color: #2ebf91;">成功</div>
                <div v-else style="color: #ff6d6f;">失败</div>
              </template>
            </el-table-column>
            <el-table-column prop="creatorName" label="执行人" width="150px"></el-table-column>
            <el-table-column prop="createTime" label="生成时间" width="150px"></el-table-column>
            <el-table-column fixed="right" width="100px">
              <div slot="header" class="sugar-table-header">操作</div>
              <template slot-scope="scope">
                <div style="width: 100%; text-align: center;">
                  <el-button type="primary" style="color: #2ebf91 !important;" @click="handleDetail">{{scope?"":""}}详情</el-button>
                  <el-button type="primary" style="color: #ff6d6f !important;" @click="handleDelete">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination layout="total,sizes,prev,pager,next" :pager-count="5" :total="reports.total" :page-sizes="[10,15,20]" :page-size.sync="reportQuery.pageSize" :current-page.sync="reportQuery.pageNum" @size-change="handleQuery" @current-change="handleQuery"></el-pagination>
        </div>
      </div>
    </div>

    <transition name="fade">
      <report-detail :report="reportDetail" v-if="isShowDetail" @close="isShowDetail = false"></report-detail>
    </transition>

  </el-drawer>
</template>

<script>
import ReportDetail from "@/views/report/ReportDetail";
export default {
  name: "ReportManager",
  components: {ReportDetail},
  data(){
    return {
      reportQuery: {name: '', testPlanName: '', projectName: '', creatorName: '', createTimes: '', pageSize: 10, pageNum: 1},
      reports: {total: 0, pageSize: 10, pageNum: 1, list: []},

      currentReport: undefined,

      isShowDetail: false,
      reportDetail: undefined,
    }
  },
  methods: {

    handleQuery(){
      let reportQuery = {
        name: this.reportQuery.name,
        testPlanName: this.reportQuery.testPlanName,
        projectName: this.reportQuery.projectName,
        creatorName: this.reportQuery.creatorName,
        pageSize: this.reportQuery.pageSize,
        pageNum: this.reportQuery.pageNum,
        accountId: this.$store.state.sugarAccount.id,
      }
      if(this.reportQuery.createTimes.length === 2){
        reportQuery.createStartTime = this.reportQuery.createTimes[0]
        reportQuery.createEndTime = this.reportQuery.createTimes[1]
      }

      this.$axios.post(this.$store.state.restApi.sugarReportList, reportQuery).then(response => {
        if(response.data.code === 0){
          this.reports = response.data.payload
          this.reportQuery.pageNum = this.reports.pageNum
          this.reportQuery.pageSize = this.reports.pageSize
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err =>{
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    handleReportClick(row){
      this.currentReport = row
    },

    handleDetail(){
      this.$axios.get(`${this.$store.state.restApi.sugarReportFetch}?id=${this.currentReport.id}`).then(response => {
        if(response.data.code === 0){
          this.reportDetail = response.data.payload
          this.isShowDetail = true
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err => {
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    handleDelete(){
      this.$confirm("确定删除该测试报告？", "", {confirmButtonText: "确定", cancelButtonText: "取消"}).then(() => {
        this.$axios.get(`${this.$store.state.restApi.sugarReportDelete}?id=${this.currentReport.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: "删除测试报告成功", type: "success", duration: 3000})
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      }).catch(() => {})
    }
  },
  mounted() {
    this.handleQuery()
  }
}
</script>

<style scoped lang="scss">

.report-header {
  display: flex; flex-flow: row nowrap; box-sizing: border-box; border-bottom: 1px solid #DCDFE6;
  height: 32px; line-height: 32px; text-align: center; background-color: #eef2f3;
  font-weight: bold; font-size: 16px;
  .report-logo{
    width: 48px;
    background: {
      image: url("../../assets/logo.svg");
      size: 48px 32px;
    };
  }

  .report-close{
    width: 32px; background-color: #bdc3c7; color: #ff6d6f; cursor: pointer;
  }

  .report-title{
    flex-grow: 1;
  }
}

.report-content{
  height: calc(100% - 32px); background-color: #eef2f3;

  .report-query{
    height: 100px; border-bottom: 1px solid #DCDFE6; margin: 0 10px;
    &::v-deep .el-input__inner {height: 32px !important; line-height: 32px !important;}
    &::v-deep .el-range-editor.is-active {
      border-color: #bdc3c7 !important;
      &:hover{
        border-color: #bdc3c7 !important;
      }
    }
  }

  .report-table{
    height: calc(100% - 100px);
    padding: 20px 10px 10px 10px;

    .pagination{
      height: 32px; line-height: 32px; text-align: right; padding-top: 5px;
      &::v-deep .el-pagination__total{font-weight: bold !important;}
      &::v-deep .el-pagination{color: #536976 !important; padding: 0!important;}
      &::v-deep .el-input__inner{background: transparent !important; border-radius: 2px !important;
        &:hover { border-color: #8e9eab !important;}
      }
      &::v-deep .btn-prev, &::v-deep .btn-next, &::v-deep li{background: transparent !important; &:hover{ color: #2ebf91 !important;}}
      &::v-deep li.active{color: #2ebf91 !important;}
    }

    .table{
      height: calc(100% - 32px);
    }

    &::v-deep .el-button{
      padding: 0 5px !important; height: 20px !important; line-height: 20px !important; font-size: 10px !important; margin: 0 1px !important;
    }

    &::v-deep .el-table{
      border-bottom: 1px solid #DCDFE6 !important;
      border-top: 1px solid #DCDFE6 !important;
      background: transparent !important;
      .current-row{
        background: #eef7f2 !important;
      }
      tr{
        background: transparent !important;
        height: 40px !important;
        line-height: 40px !important;

        td, th{
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid #DCDFE6 !important;
        }
      }
    }
  }
}

.sugar-label-input{
  width: 33%; margin: 10px 10px;
  .label{
    width: 56px;
  }
}

</style>