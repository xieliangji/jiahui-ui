<template>
  <el-dialog id="planSave" visible :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" width="800px">
    <div slot="title" class="sugar-flex-row plan-save-header">
      <div class="header-logo"></div>
      <div class="header-title">保存测试计划</div>
      <div class="header-close" @click="handleCancel"><i class="iconfont icon-guanbi"></i></div>
    </div>
    <div class="plan-content">
      <el-form :model="jmxSave" ref="jmxSaveForm" :rules="jmxSaveRule" label-width="80px">
        <el-form-item prop="name" label="测试计划">
          <div class="sugar-normal-line">
            <el-input v-model="jmxSave.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="projectId" label="所属项目">
          <div class="sugar-normal-line">
            <el-select v-model="jmxSave.projectId">
              <el-option v-for="project in projectList" :key="project.id" :value="project.id" :label="project.name"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item prop="remark" label="备注">
          <el-input v-model="jmxSave.remark" type="textarea" resize="none" :autosize="{minRows: 4, maxRows: 8}"></el-input>
        </el-form-item>
      </el-form>
      <div class="save-btn">
        <el-button type="primary" @click="handleSave">确定</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "TestPlanSave",
  data(){
    return {
      projectList: [],


      jmxSave: {
        name: this.$store.state.testPlan.testname,
        creatorId: this.$store.state.sugarAccount.id,
        jmxContent: [this.$store.state.testPlan],
        projectId: '',
        remark: ''
      },


      jmxSaveRule: {
        name: {required: true, message: '测试计划名称不能为空', trigger: 'blur'},
        projectId: {required: true, message: '所属项目不能为空', trigger: ['change', 'blur']},
      }
    }
  },

  methods: {
    handleCancel(){
      this.$emit('close')
    },

    handleSave(){
      this.$confirm("确定保存当前测试计划？", "", {confirmButtonText: '确定', cancelButtonText: '取消'}).then(() => {
        this.$refs.jmxSaveForm.validate(valid => {
          if(!valid){
            this.$message({message: '请检查必填项', type: "error", duration: 3000})
            return
          }
          this.$axios.post(this.$store.state.restApi.sugarJMXSave, this.jmxSave).then(response => {
            if(response.data.code === 0){
              this.$message({message: '保存测试计划成功', type: "success", duration: 3000})
              this.$emit('close')
            } else {
              this.$message({message: response.data.message, type: "error", duration: 3000})
            }
          }).catch(err => {this.$message({message: err, type: "error", duration: 3000})})
        })
      }).catch(() => {})
    }
  },

  mounted() {
    let query = {accountId: this.$store.state.sugarAccount.id}
    this.$axios.post(this.$store.state.restApi.sugarProjectList, query).then(response => {
      if(response.data.code === 0){
        this.projectList = response.data.payload
        if(this.projectList.length === 0){
          this.$message({message: '暂未添加项目，请先添加项目', type: "error", duration: 3000})
        }
      } else {
        this.$message({message: response.data.message, type: "error", duration: 3000})
      }
    }).catch(err => {
      this.$message({message: err, type: "error", duration: 3000})
    })
  }
}
</script>

<style scoped lang="scss">

.plan-save-header{
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-bottom: 1px solid #DCDFE6;
  .header-logo{
    width: 48px;
    background: {
      image: url("../../assets/logo.svg");
      size: 48px 32px;
    };
  }

  .header-title{
    flex-grow: 1;
    font-weight: bold;
    font-size: 16px;
  }

  .header-close{
    width: 32px;
    background-color: #bdc3c7;
    color: #ff6d6f;
  }
}

.plan-content{
  padding: 32px;

  .save-btn{
    text-align: right;
  }
}


#planSave{

  &::v-deep .el-dialog__header{
    height: 32px !important;
    background-color: #eef2f3 !important;
  }

  &::v-deep .el-dialog__body{
    background-color: #eef2f3 !important;
  }
}
</style>