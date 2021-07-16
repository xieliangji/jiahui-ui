<template>
  <div id="sugarTask" class="sugar-dialog-wrap">
    <div class="sugar-dialog">
      <div class="sugar-dialog-header">
        <div class="header-logo"></div>
        <div class="header-title">定时任务管理</div>
        <div class="header-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>

      <div class="sugar-dialog-body task-body">
        <div class="task-query">
          <div class="sugar-flex-row">
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">任务名称</div>
              <div class="input">
                <el-input v-model="taskQuery.name" placeholder="模糊查询" @keydown.enter.native="handleQuery"></el-input>
              </div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">创建人</div>
              <div class="input">
                <el-input v-model="taskQuery.creatorName" placeholder="精确查询" @keydown.enter.native="handleQuery"></el-input>
              </div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">测试计划</div>
              <div class="input">
                <el-input v-model="taskQuery.testPlanName" placeholder="模糊查询" @keydown.enter.native="handleQuery"></el-input>
              </div>
            </div>
          </div>
          <div class="sugar-flex-row">
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">任务状态</div>
              <div class="input">
                <el-select v-model="taskQuery.taskStatus" @change="handleQuery">
                  <el-option :value="2" label="全部"></el-option>
                  <el-option :value="0" label="禁用"></el-option>
                  <el-option :value="1" label="启用"></el-option>
                </el-select>
              </div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">创建日期</div>
              <el-date-picker style="flex-grow: 1; height: 32px;" v-model="taskQuery.createTimes" type="daterange" value-format="yyyy-MM-dd" range-separator="~" start-placeholder="起始日期" end-placeholder="结束日期" @change="handleQuery"></el-date-picker>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label"></div>
              <el-button type="primary" @click="handleQuery">查询</el-button>
              <el-button type="primary" @click="showTask = true"><span style="color: #2ebf91;">添加</span></el-button>
            </div>
          </div>
        </div>

        <div class="task-content">
          <div class="task-table">
            <el-table :data="tasks.list" height="100%" empty-text="暂未添加定时任务" row-key="id" highlight-current-row>
              <el-table-column prop="id" label="#" width="60px"></el-table-column>
              <el-table-column prop="name" label="任务名称"></el-table-column>
              <el-table-column prop="cronExpression" label="cron表达式"></el-table-column>
              <el-table-column prop="testPlanName" label="测试计划"></el-table-column>
              <el-table-column prop="taskStatus" label="状态" width="50px">
                <template slot-scope="scope">
                  <div v-if="scope.row.taskStatus === 0" style="color: #ff6d6f">禁用</div>
                  <div v-else style="color: #2ebf91;">启用</div>
                </template>
              </el-table-column>
              <el-table-column prop="creatorName" label="创建人" width="150px"></el-table-column>
              <el-table-column prop="createTime" label="创建时间" width="150px"></el-table-column>
              <el-table-column width="140px">
                <div slot="header" class="sugar-table-header">操作</div>
                <template slot-scope="scope">
                  <div v-if="scope !== undefined" class="sugar-table-header">
                    <el-button type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button v-if="scope.row.taskStatus === 1" type="primary" @click="handleSetTaskStatus(scope.row, 0)"><span style="color: #ff6d6f;">禁用</span></el-button>
                    <el-button v-if="scope.row.taskStatus === 0" type="primary" @click="handleSetTaskStatus(scope.row, 1)"><span style="color: #2ebf91;">启用</span></el-button>
                    <el-button type="primary" @click="handleDelete(scope.row)"><span style="color: #ff6d6f;">删除</span></el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <div class="task-pagination">
          <el-pagination layout="total,sizes,prev,pager,next" :pager-count="5" :total="tasks.total" :page-sizes="[10,15,20]" :page-size.sync="taskQuery.pageSize" :current-page.sync="taskQuery.pageNum" @size-change="handleQuery" @current-change="handleQuery"></el-pagination>
        </div>
      </div>
    </div>

    <div class="task-form-wrap" v-if="showTask">
      <div class="task-form">
        <div class="sugar-dialog-header">
          <div class="header-logo"></div>
          <div class="header-title">{{task.id !== undefined && task.id !== '' ? '编辑': '添加'}}定时任务</div>
          <div class="header-close" @click="handleCloseTask"><i class="iconfont icon-guanbi"></i></div>
        </div>

        <div class="task-info">
          <el-form :model="task" :rules="taskRule" ref="taskForm" label-width="80px">
            <el-form-item v-if="task.id !== undefined" prop="id" label="任务编号">
              <div class="sugar-label-input">
                <el-input v-model="task.id" disabled></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="name" label="任务名称">
              <div class="sugar-label-input">
                <el-input v-model="task.name"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="testPlanId" label="测试计划">
              <div class="sugar-label-input">
                <el-select v-model="task.testPlanId" filterable placeholder="请选择测试计划" no-data-text="暂无测试计划">
                  <el-option v-for="testPlan in testPlans" :key="testPlan.id" :value="testPlan.id" :label="testPlan.name"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item prop="cronExpression" label="cron表达式">
              <div class="sugar-label-input">
                <el-input v-model="task.cronExpression" placeholder="* * * * * *"></el-input>
                <at-popover placement="top" :content="cronDesc" trigger="hover" style="position: absolute; right: -300px; width: 300px;">
                  <i class="el-icon-warning" style="margin-left: 5px; color: #2ebf91;"></i>
                </at-popover>
              </div>
            </el-form-item>
            <el-form-item prop="taskStatus" label="启用/禁用">
              <div class="sugar-label-input">
                <el-select v-model="task.taskStatus">
                  <el-option :value="0" label="禁用"></el-option>
                  <el-option :value="1" label="启用"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item prop="remark" label="备注">
              <el-input type="textarea" v-model="task.remark" resize="none" :autosize="{minRows: 4, maxRows: 4}"></el-input>
            </el-form-item>
            <el-form-item v-if="task.id !== undefined" prop="id" label="创建人">
              <div class="sugar-label-input">
                <el-input v-model="task.creatorName" disabled></el-input>
              </div>
            </el-form-item>
            <el-form-item v-if="task.id !== undefined" prop="id" label="创建时间">
              <div class="sugar-label-input">
                <el-input v-model="task.createTime" disabled></el-input>
              </div>
            </el-form-item>
            <el-form-item v-if="task.id !== undefined" prop="id" label="更新人">
              <div class="sugar-label-input">
                <el-input v-model="task.updaterName" disabled></el-input>
              </div>
            </el-form-item>
            <el-form-item v-if="task.id !== undefined" prop="id" label="更新时间">
              <div class="sugar-label-input">
                <el-input v-model="task.updateTime" disabled></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <div style="text-align: right;">
                <el-button type="primary" @click="handleSave">保存</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskManager",
  data(){
    return {
      taskQuery: {name: '', creatorName: '', testPlanName: '', taskStatus: 2, pageSize: 10, pageNum: 1, createTimes: []},
      tasks: {pageSize: 10, pageNum: 1, total: 0, list: [{taskStatus: 1, createTime: '2021-07-07 12:00:00'}]},

      showTask: false,
      testPlans: [],
      task: {
        id: undefined,
        name: '',
        testPlanId: '',
        taskStatus: 1,
        cronExpression: '',
        remark: '',
        creatorName: undefined,
        updaterName: undefined,
        createTime: undefined,
        updateTime: undefined
      },
      taskRule: {
        name: [{required:true, message: '任务名称不能为空', trigger: 'blur'}],
        testPlanId: [{required: true, message: '测试计划不能为空', trigger: ['blur', 'change']}],
        cronExpression: [{required: true, message: 'cron表达式不能为空', trigger: 'blur'}],
        taskStatus: [{required: true, message: '状态不能为空', trigger: ['blur', 'change']}]
      },

      cronDesc: `<pre>格式：
<span style="color: #ff6d6f;">&lt;sec&gt; &lt;min&gt; &lt;hour&gt; &lt;day-of-mon&gt; &lt;mon&gt; &lt;day-of-week&gt;</span>
┌───────────── second (0-59)
│ ┌───────────── minute (0 - 59)
│ │ ┌───────────── hour (0 - 23)
│ │ │ ┌───────────── day of the month (1 - 31)
│ │ │ │ ┌───────────── month (1 - 12) (or JAN-DEC)
│ │ │ │ │ ┌───────────── day of the week (0 - 7)
│ │ │ │ │ │          (0 or 7 is Sunday, or MON-SUN)
│ │ │ │ │ │
* * * * * *</pre>`,

    }
  },
  methods: {
    fetchTestPlans(){
      this.$axios.get(`${this.$RESTAPI.sugarJMXFetch}?accountId=${this.$store.state.sugarAccount.id}`).then(response => {
        if(response.data.code === 0){
          this.testPlans = response.data.payload
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err => {
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    handleQuery(){
      this.taskQuery.accountId = this.$store.state.sugarAccount.id
      this.$axios.post(this.$RESTAPI.sugarTaskQuery, this.taskQuery).then(response => {
        if(response.data.code === 0){
          this.tasks = response.data.payload
          this.taskQuery.pageNum = this.tasks.pageNum
          this.taskQuery.pageSize = this.tasks.pageSize
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err => {
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    handleCloseTask(){
      this.showTask = false
      this.$refs.taskForm.resetFields()
      this.task = {
        id: undefined,
        name: '',
        testPlanId: '',
        taskStatus: 1,
        cronExpression: '',
        remark: '',
        creatorName: undefined,
        updaterName: undefined,
        createTime: undefined,
        updateTime: undefined
      }
    },

    handleSave(){
      if(this.task.id === undefined || this.task.id === '' || this.task.id === null){
        // 保存新定时任务
        let task = {
          name: this.task.name,
          testPlanId: this.task.testPlanId,
          taskStatus: this.task.taskStatus,
          cronExpression: this.task.cronExpression,
          remark: this.task.remark,
          creatorId: this.$store.state.sugarAccount.id
        }
        this.$axios.post(this.$RESTAPI.sugarTaskSave, task).then(response => {
          if(response.data.code === 0){
            this.$message({message: '添加定时任务成功', type: "success", duration: 3000})
            this.handleCloseTask()
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      } else {
        // 保存定时任务编辑
        this.$confirm("确认保存编辑？", "", {confirmButtonText: '确认', cancelButtonText: '取消'}).then(() => {
          this.task.updaterId = this.$store.state.sugarAccount.id
          this.$axios.post(this.$RESTAPI.sugarTaskUpdate, this.task).then(response => {
            if(response.data.code === 0){
              this.$message({message: '更新定时任务信息成功', type: "success", duration: 3000})
              this.handleCloseTask()
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
    handleEdit(task){
      this.task = JSON.parse(JSON.stringify(task))
      this.showTask = true
    },

    handleSetTaskStatus(task, status){
      if(status === 0){
        this.$axios.get(`${this.$RESTAPI.sugarTaskDisable}?id=${task.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: '已禁用定时任务', type: "success", duration: 3000})
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      } else if(status === 1){
        this.$axios.get(`${this.$RESTAPI.sugarTaskEnable}?id=${task.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: '已启用定时任务', type: "success", duration: 3000})
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      }
    },

    handleDelete(task){
      this.$confirm("确定要删除当前定时任务？", "", {confirmButtonText: '是', cancelButtonText: '否'}).then(() => {
        this.$axios.get(`${this.$RESTAPI.sugarTaskDelete}?id=${task.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: '删除定时任务成功', type: "success", duration: 3000})
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
    this.fetchTestPlans()
    this.handleQuery()
  }
}
</script>

<style scoped lang="scss">

.task-body {
  height: calc(100% - 32px);
}

.task-query{
  padding: 10px;
  height: 120px;
}
.sugar-flex-row{
  margin: 10px 0;
}
.sugar-label-input{
  width: 33%;
  .label{
    width: 80px;
  }
}

.task-content{
  height: calc(100% - 160px);
  padding: 20px 5px 5px 5px;
}

.task-table{
  height: 100%;
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

.task-pagination{
  height: 32px; line-height: 32px; text-align: right;
  &::v-deep .el-pagination__total{font-weight: bold !important;}
  &::v-deep .el-pagination{color: #536976 !important; padding: 0!important;}
  &::v-deep .el-input__inner{background: transparent !important; border-radius: 2px !important;
    &:hover { border-color: #8e9eab !important;}
  }
  &::v-deep .btn-prev, &::v-deep .btn-next, &::v-deep li{background: transparent !important; &:hover{ color: #2ebf91 !important;}}
  &::v-deep li.active{color: #2ebf91 !important;}
}


.task-form-wrap{
  position: fixed;
  top: 100px; bottom: 100px; left: calc(50% - 720px); right: calc(50% - 720px);
  z-index: 612; background-color: rgba(255,255,255,.5);

  .task-form{
    position: fixed;
    top: 200px; left: calc(50% - 300px); right: calc(50% - 300px);
    background-color: #eef2f3;
    border-radius: 3px;
    box-shadow: 0 0 2px #3c3f41;

    .task-info {
      padding: 10px 32px 10px 10px;

      &::v-deep .sugar-label-input{
        width: 100%;
      }
    }
  }
}
</style>