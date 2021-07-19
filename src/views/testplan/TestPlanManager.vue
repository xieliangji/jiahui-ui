<template>
  <div class="sugar-dialog-wrap">
    <div id="sugarTestPlanManager" class="sugar-dialog">
      <div class="sugar-dialog-header">
        <div class="header-logo"></div>
        <div class="header-title" style="text-align: center;">管理测试计划</div>
        <div class="header-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>
      <div class="sugar-dialog-body">
        <div class="manager-content-query">
          <div class="sugar-normal-line sugar-flex-row">
            <div class="sugar-label-input">
              <div class="label">测试计划</div>
              <div class="input">
                <Input v-model="planQuery.name" placeholder="按测试计划名称模糊查询" @keydown.enter="handleQuery"></Input>
              </div>
            </div>
            <div class="sugar-label-input">
              <div class="label">所属项目</div>
              <div class="input">
                <Input v-model="planQuery.projectName" placeholder="按所属项目名称精确查询" @keydown.enter="handleQuery"></Input>
              </div>
            </div>
            <div class="sugar-label-input">
              <div class="label">创建用户</div>
              <div class="input">
                <Input v-model="planQuery.creatorName" placeholder="按所创建用户名精确查询" @keydown.enter="handleQuery"></Input>
              </div>
            </div>
            <div class="sugar-label-input">
              <div class="label">更新用户</div>
              <div class="input">
                <Input v-model="planQuery.updaterName" placeholder="按所更新用户名精确查询" @keydown.enter="handleQuery"></Input>
              </div>
            </div>
            <div>
              <el-button type="primary" @click="handleQuery">查询</el-button>
              <el-button type="primary" @click="handleCreate">新建测试计划</el-button>
              <el-button type="primary" @click="handleOpen">打开测试计划</el-button>
            </div>
          </div>

        </div>
        <div class="manager-content-table">
          <div class="content-table-list">
            <el-table :data="plans.list" ref="planTable" row-key="id" highlight-current-row height="100%" empty-text="没有测试计划" @row-click="handlePlanClick">
              <el-table-column prop="id" width="60px">
                <div slot="header">#</div>
              </el-table-column>
              <el-table-column prop="name">
                <div slot="header">测试计划名称</div>
              </el-table-column>
              <el-table-column prop="projectName">
                <div slot="header">所属项目</div>
              </el-table-column>
              <el-table-column prop="creatorName" width="120px">
                <div slot="header">创建人</div>
              </el-table-column>
              <el-table-column prop="updaterName" width="120px">
                <div slot="header">更新人</div>
              </el-table-column>
              <el-table-column prop="createTime" width="160px">
                <div slot="header">创建时间</div>
              </el-table-column>
              <el-table-column prop="updateTime" width="160px">
                <div slot="header">更新时间</div>
              </el-table-column>
              <el-table-column fixed="right" width="150px">
                <div slot="header" class="sugar-table-header">操作</div>
                <template slot-scope="scope">
                  <div v-if="scope" style="text-align: center;">
                    <el-button type="primary" @click="handleEdit">编辑</el-button>
                    <el-button type="primary" style="color: #2ebf91 !important;;" @click="handleExecute">执行</el-button>
                    <el-button type="primary" style="color: #ff6d6f !important;" @click="handleDelete">删除</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="content-table-pagination">
            <el-pagination layout="total,sizes,prev,pager,next" :pager-count="5" :total="plans.total" :page-sizes="[10,15,20]" :page-size="planQuery.pageSize" :current-page="planQuery.pageNum" @size-change="handleQuery" @current-change="handleQuery"></el-pagination>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TestPlanManager",
  data(){
    return {
      planQuery: {
        name: '',
        projectName: '',
        creatorName: '',
        updaterName: '',
        pageSize: 10,
        pageNum: 1,
        accountId: this.$store.state.sugarAccount.id
      },

      plans: {
        pageSize: '',
        pageNum: '',
        total: 200,
        list: []
      },
      currentPlan: undefined,
    }
  },
  methods: {
    handleQuery(){
      this.$axios.post(this.$RESTAPI.sugarJMXQuery, this.planQuery).then(response => {
        if(response.data.code === 0){
          this.plans = response.data.payload
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err => {
        this.$message({message: err, type: "error", duration: 3000})
      })

    },

    handleCreate(){
      this.$confirm("当前编辑测试计划会被覆盖，请确认已保存，是否创建新测试计划？", "注意", {confirmButtonClass: "是", cancelButtonText: "否"}).then(() => {
        this.$emit('activeCreate')
      }).catch(() => {})
    },

    handleOpen(){

    },

    handlePlanClick(row){
      this.currentPlan = row
    },

    handleEdit(){
      this.$confirm("是否编辑测试计划（当前打开的测试计划若未保存会丢失）？", "注意", {confirmButtonText: "确定", cancelButtonText: "取消"}).then(() => {
        this.$emit('activeEdit', this.currentPlan)
        this.$store.commit('initTestPlan')
        this.$store.commit("setTestPlan", this.currentPlan.hashTree[0])
        this.$store.commit('setCurrentTestElement', this.$store.state.testPlan)
      }).catch(() => {})
    },

    handleExecute(){
      this.$confirm("执行当前测试计划？", "", {confirmButtonText: '是', cancelButtonText: '否'}).then(() => {
        let executeTestPlan = {id: this.currentPlan.id, accountId: this.$store.state.sugarAccount.id}
        this.$axios.post(this.$RESTAPI.sugarJMXExecute, executeTestPlan).then(response => {
          if(response.data.code === 0){
            this.$message({message: "当前测试计划正在执行，稍后查看测试报告", type: "success", duration: 3000})
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      }).catch(() => {})
    },

    handleDelete(){
      this.$confirm("是否删除当前测试计划？", "", {confirmButtonText: '是', cancelButtonText: "否"}).then(() => {
        this.$axios.get(`${this.$RESTAPI.sugarJMXDelete}?id=${this.currentPlan.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: "删除测试计划成功", type: "success", duration: 3000})
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {this.$message({message: err, type: "error", duration: 3000})})
      }).catch(() => {})
    }
  },
  mounted() {
    this.handleQuery()
  }
}
</script>

<style scoped lang="scss">

.manager-content-query{
  height: 100px;
  padding: 20px 10px 0 10px;
}

.manager-content-table {
  height: calc(100% - 100px);

  .content-table-list{
    height: calc(100% - 40px);
    overflow: hidden;
    padding: 10px;
  }
  .content-table-pagination{
    height: 40px; line-height: 40px; text-align: right;
  }
}

.sugar-label-input{
  flex-grow: 1;
  margin: 0 5px;
}

.content-table-list{
  &::v-deep .el-table {
    border-bottom: 1px solid #DCDFE6 !important;
    border-top: 1px solid #DCDFE6 !important;
    background: transparent !important;
    .current-row{
      background: #eef7f2 !important;
    }
    tr{
      background: transparent !important;
      height: 36px !important;
      line-height: 36px !important;

      td, th{
        background: transparent !important;
        border: none !important;
        border-bottom: 1px solid #DCDFE6 !important;
      }
    }
  }

  &::v-deep .el-button{
    padding: 0 5px !important;
    height: 20px !important;
    line-height: 20px !important;
    font-size: 10px !important;
    margin-left: 5px !important;
  }
}

.content-table-pagination{
  &::v-deep .el-pagination__total{font-weight: bold !important;}
  &::v-deep .el-pagination{color: #536976 !important; padding: 0!important;}
  &::v-deep .el-input__inner{background: transparent !important; border-radius: 2px !important;
    &:hover { border-color: #8e9eab !important;}
  }
  &::v-deep .btn-prev, &::v-deep .btn-next, &::v-deep li{background: transparent !important; &:hover{ color: #2ebf91 !important;}}
  &::v-deep li.active{color: #2ebf91 !important;}
}
</style>