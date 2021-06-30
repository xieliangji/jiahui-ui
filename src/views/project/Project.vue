<template>
  <el-drawer visible :with-header="false" :size="900" :close-on-click-modal="false" :wrapper-closable="false">
    <div class="sugar-project">
      <div class="sugar-project-header">
        <div class="project-header-logo"></div>
        <div class="project-header-title" style="text-align: center;">管理项目</div>
        <div class="project-header-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>
      <div class="sugar-project-content sugar-layout-wrap">
        <el-tabs :active-name="activePane" @tab-click="handlePaneClick">
          <!-- 项目新增 -->
          <el-tab-pane style="height: 100%;" name="creator">
            <div slot="label" class="project-pane-title">项目新增</div>
            <div class="sugar-layout-wrap">
              <i-form :model="createProject" :label-width="80" ref="createProjectForm" :rules="projectPropRule">
                <form-item prop="name" label="项目名称">
                  <Input v-model="createProject.name" placeholder="XX项目..."></Input>
                </form-item>
                <form-item prop="remark" label="备注">
                  <Input type="textarea" :autosize="{minRows: 5, maxRows: 10}" v-model="createProject.remark" placeholder="该项目..."></Input>
                </form-item>
                <form-item label="成员">
                  <el-select v-model="createProject.memberIds" multiple filterable @remove-tag="handleMemberDelete" placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
                    <el-option v-for="account in accountList" :key="account.id" :value="account.id" :label="`${account.username} - ${account.email}`" :disabled="account.id === $store.state.sugarAccount.id"></el-option>
                  </el-select>
                </form-item>
                <form-item style="text-align: right">
                  <el-button type="primary" @click="handleProjectSave">保存</el-button>
                </form-item>
              </i-form>
            </div>
          </el-tab-pane>

          <el-tab-pane style="height: 100%;" name="lister">
            <div slot="label" class="project-pane-title">项目列表</div>
            <div style="height: calc(100% - 40px); overflow: auto;">
              <el-card shadow="never" :body-style="{padding: '10px'}" style="background-color: #eef2f3; color: #536976;">
                <div class="sugar-flex-row sugar-normal-line">
                  <div class="sugar-label-input" style="flex-grow: 1;">
                    <div class="label">项目名称</div>
                    <div class="input"><Input v-model="queryProject.name" placeholder="模糊查询"></Input></div>
                  </div>
                  <div class="sugar-label-input" style="flex-grow: 1;">
                    <div class="label">创建人</div>
                    <div class="input"><Input v-model="queryProject.creatorName" placeholder="精确查询"></Input></div>
                  </div>
                  <div><el-button type="primary" style="margin-left: 10px;" @click="handleQueryProject">查询</el-button></div>
                </div>
                <el-divider></el-divider>
              </el-card>

              <transition name="fade">
                <div v-if="showEdit" id="projectEdit">
                  <el-card v-if="showEdit">
                    <div class="sugar-normal-line">
                      <el-breadcrumb separator="/">
                        <el-breadcrumb-item>项目</el-breadcrumb-item>
                        <el-breadcrumb-item>编辑</el-breadcrumb-item>
                      </el-breadcrumb>
                    </div>
                    <i-form :model="editProject" ref="editProjectForm" :rules="projectPropRule" :label-width="80">
                      <form-item prop="name" label="项目名称">
                        <Input v-model="editProject.name"></Input>
                      </form-item>
                      <form-item prop="remark" label="备注">
                        <Input type="textarea" :autosize="{minRows: 4, maxRows: 10}" v-model="editProject.remark"></Input>
                      </form-item>
                      <form-item label="成员" prop="memberIds">
                        <el-select v-model="editProject.memberIds" filterable multiple @remove-tag="handleEditMemberDelete">
                          <el-option v-for="account in accountList" :key="account.id" :value="account.id"
                                     :label="`${account.username} - ${account.email}`"
                                     :disabled="account.id === $store.state.sugarAccount.id">
                          </el-option>
                        </el-select>
                      </form-item>
                      <form-item prop="creatorName" label="创建人">
                        <Input v-model="editProject.creatorName" disabled></Input>
                      </form-item>
                      <form-item prop="createTime" label="创建时间">
                        <Input v-model="editProject.createTime" disabled></Input>
                      </form-item>
                      <form-item prop="updateTime" label="更新时间">
                        <Input v-model="editProject.updateTime" disabled></Input>
                      </form-item>
                      <form-item style="text-align: right;">
                        <el-button type="primary" @click="handleEditCancel">取消</el-button>
                        <el-button type="primary" @click="handleEditSave">保存</el-button>
                      </form-item>
                    </i-form>
                  </el-card>
                </div>
              </transition>

              <div class="project-list">
                <Card v-for="project in queryProjectResult.projectList" :key="project.id" style="width: 250px; margin: 10px 19px 40px 19px; text-align: center;">
                  <div style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{project.name}}</div>
                  <div style="text-align: right;">
                    <el-tooltip content="编辑" effect="light" placement="top">
                      <i class="ivu-icon ivu-icon-ios-paper-outline project-opt" @click="handleProjectEdit(project)"></i>
                    </el-tooltip>
                    <el-tooltip content="删除" effect="light" placement="top">
                      <i class="ivu-icon ivu-icon-ios-trash-outline project-opt" @click="handleProjectDelete(project)"></i>
                    </el-tooltip>
                  </div>
                </Card>
              </div>
            </div>

          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "Project",
  data(){
    return {
      activePane: 'creator',
      projectPropRule: {name: {required: true, trigger: 'blur', message: '项目名称不能为空'}},

      accountList: [],
      createProject: {id: '', name: '', remark: '', creatorId: '', memberIds: [this.$store.state.sugarAccount.id]},

      queryProject: {name: '', creatorName: '', accountId: this.$store.state.sugarAccount.id, pageSize: 10, pageNum: 1},
      queryProjectResult: {pageSize: '', pageNum: 1, total: '', projectList: []},

      editProject: {id: '', name: '', remark: '', creatorId: '', creatorName: '', createTime:'', updateTime:'', memberIds: []},
      showEdit: false,
    }
  },

  methods: {
    handleQueryProject(){
      this.$axios.post(this.$store.state.restApi.sugarProjectList, this.queryProject).then(response => {
        if(response.data.code === 0){
          this.queryProjectResult.projectList = response.data.payload
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err =>{
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    handlePaneClick(pane){
      if(pane.name === 'lister'){
        this.handleQueryProject()
      }
      this.showEdit = false
    },

    // 删除选中的成员
    handleMemberDelete(tag){
      if(tag === this.$store.state.sugarAccount.id){
        this.createProject.memberIds.splice(0,0, this.$store.state.sugarAccount.id)
      }
    },


    // 保存项目
    handleProjectSave(){
      this.$refs.createProjectForm.validate(valid => {
        if(valid){
          this.$confirm("确认保存项目？", "", {confirmButtonText: "确定", cancelButtonText: "取消"}).then(() => {
            this.createProject.creatorId = this.$store.state.sugarAccount.id
            this.$axios.post(this.$store.state.restApi.sugarProjectSave, this.createProject).then(response => {
              if(response.data.code === 0){
                this.$message({message: "新建项目成功", type: "success", duration: 3000})
                this.createProject = {id: '', name: '', remark: '', memberIds: [this.$store.state.sugarAccount.id]}
              } else {
                this.$message({message: response.data.message, type: "error", duration: 3000})
              }
            }).catch(err => {
              this.$message({message: err, type:"error", duration: 3000})
            })
          }).catch(() => {})
        } else {
          this.$message({message: "请检查项目信息", type:"error", duration: 3000})
        }
      })
    },

    handleProjectDelete(project){
      this.$confirm("是否删除当前项目？", "", {confirmButtonText: '是', cancelButtonText: '否'}).then(() => {
        this.$axios.get(this.$store.state.restApi.sugarProjectDelete + `?id=${project.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: '项目删除成功', type:"success", duration: 3000})
            this.handleQueryProject()
            if(project.id === this.editProject.id){
              this.showEdit = false
            }
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      }).catch(() => {})
    },

    handleProjectEdit(project){
      for(let attr in this.editProject){
        this.editProject[attr] = project[attr]
      }
      let members = project.members
      let memberIds = []
      for(let index = 0; index < members.length; index++){
        memberIds.push(members[index].id)
      }
      this.editProject.memberIds = memberIds
      this.editProject.accountId = this.$store.state.sugarAccount.id
      this.showEdit = true
    },

    handleEditCancel(){
      this.showEdit = false
    },

    handleEditMemberDelete(tag){
      if(tag === this.editProject.creatorId){
        this.editProject.memberIds.splice(0, 0, this.editProject.creatorId)
      }
    },

    handleEditSave(){
      this.$confirm("确认保存编辑？", "", {confirmButtonText: "确定", cancelButtonText: "取消"}).then(() => {
        this.$axios.post(this.$store.state.restApi.sugarProjectUpdate, this.editProject).then(response => {
          if(response.data.code === 0){
            this.$message({message: "编辑成功", type: "success", duration: 3000})
            this.showEdit = false
            this.handleQueryProject()
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
    this.$axios.get(this.$store.state.restApi.sugarAccountList).then(response => {
      if(response.data.code === 0){
        this.accountList = response.data.payload
      } else {
        this.$message({message: response.data.message, type: "error", duration: 3000})
      }
    }).catch(err => {
      this.$message({message: err, type: "error", duration: 3000})
    })
  },

  watch: {
    'createProject.memberIds': {
      handler: function (nValue, oValue){
        if(nValue.length === 0){
          this.createProject.memberIds = [this.$store.state.sugarAccount.id]
        }
        return oValue
      },
      immediate: true,
      deep: true
    },
    'editProject.memberIds': {
      handler: function (nValue, oValue){
        if(nValue!== undefined && nValue.length === 0){
          this.editProject.memberIds = [this.$store.state.sugarAccount.id]
        }
        return oValue
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">

.sugar-project{
  height: 100%;
  background-color: #eef2f3;

  .sugar-project-header{
    height: 32px;
    line-height: 32px;
    background: transparent !important;
  }
  .sugar-project-content{
    height: calc(100% - 32px);
    overflow: auto;
  }
}

.sugar-project-header{
  padding: 0;
  border-bottom: 1px solid #DCDFE6;
  background-color: #FFFFFF;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  font-weight: bold;
  font-size: 16px;

  .project-header-logo{
    width: 48px;
    background: {
      image: url("../../assets/logo.svg");
      size: 48px 32px;
    };
  }

  .project-header-title{
    flex-grow: 1;
  }

  .project-header-close{
    width: 32px;
    background-color: #eef2f3;
    color: #ff6d6f;
    cursor: pointer;
  }
}

.project-pane-title{
  text-align: center;
  padding: 0 10px;
}

.label{width: 80px !important;}

.project-list{
  display: flex;
  flex-flow: row wrap;
  padding: 10px 13px;

  .project-opt{
    margin: 0 2px;
    &:hover{
      color: #2ebf91;
    }
  }

  &::v-deep .ivu-card{
    border-color: #DCDFE6 !important;
    background-color: #eef7f2 !important;
  }
}

.project-edit{
  background-color: #eef2f3;
  padding: 20px 10px 0 10px;

}

#projectEdit{
  padding: 0 40px;
  &::v-deep .el-card{
    border-color: #DCDFE6 !important;
    background-color: #eef2f3 !important;
  }
}
</style>