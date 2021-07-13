<template>
  <div class="sugar-project-wrap">
    <div class="sugar-project">
      <div class="sugar-header">
        <div class="header-logo"></div>
        <div class="header-title">管理项目</div>
        <div class="header-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>

      <div class="project-content">
        <div class="project-query">
          <div class="sugar-label-input sugar-normal-line">
            <div class="label">项目名称</div>
            <div class="input"><Input v-model="queryProject.name" placeholder="模糊查询" @keydown.enter="handleQuery"></Input></div>
          </div>
          <div class="sugar-label-input sugar-normal-line">
            <div class="label">创建人</div>
            <div class="input"><Input v-model="queryProject.creatorName" placeholder="精确查询" @keydown.enter="handleQuery"></Input></div>
          </div>
          <div class="sugar-label-input sugar-normal-line">
            <el-button type="primary" @click="handleQuery">查询</el-button>
            <el-button type="primary" @click="activeCreate = true"><span style="color: #2ebf91;">添加</span></el-button>
          </div>
        </div>

        <div class="project-list">
          <div class="project-table">
            <el-table :data="projects.list" height="100%" row-key="id" highlight-current-row empty-text="暂无项目" @row-click="setCurrentProject">
              <el-table-column type="expand"></el-table-column>
              <el-table-column prop="id" label="#" width="80px"></el-table-column>
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="creatorName" label="创建人" width="200px"></el-table-column>
              <el-table-column prop="createTime" label="创建时间" width="200px"></el-table-column>
              <el-table-column fixed="right" width="80px">
                <div slot="header" class="sugar-table-header">操作</div>
                <template slot-scope="scope">
                  <div v-if="scope.row !== undefined" class="sugar-table-opt">
                    <el-button type="primary" @click="handleDelete"><span style="color: #ff6d6f">删除</span></el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="project-pagination">
            <el-pagination layout="total,sizes,prev,pager,next" :pager-count="5" :total="projects.total" :page-sizes="[10,15,20]" :page-size.sync="projectQuery.pageSize" :current-page.sync="projectQuery.pageNum" @size-change="handleQuery" @current-change="handleQuery"></el-pagination>
          </div>
        </div>
      </div>
    </div>


    <transition name="fade">
      <div class="project-add-wrap" v-if="activeCreate">
        <div class="project-add">
          <div class="sugar-header">
            <div class="header-logo"></div>
            <div class="header-title">添加项目</div>
            <div class="header-close" @click="disableCreate"><i class="iconfont icon-guanbi"></i></div>
          </div>
          <div class="add-content">
            <i-form :model="createProject" :label-width="80" ref="createProjectForm" :rules="projectPropRule">
              <form-item prop="name" label="项目名称">
                <Input v-model="createProject.name" placeholder="XX项目..."></Input>
              </form-item>
              <form-item prop="remark" label="备注">
                <Input type="textarea" :autosize="{minRows: 5, maxRows: 5}" v-model="createProject.remark"
                       placeholder="该项目..."></Input>
              </form-item>
              <form-item label="成员">
                <el-select v-model="createProject.memberIds" multiple filterable @remove-tag="handleMemberDelete"
                           placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
                  <el-option v-for="account in accountList" :key="account.id" :value="account.id"
                             :label="`${account.username} - ${account.email}`"
                             :disabled="account.id === $store.state.sugarAccount.id"></el-option>
                </el-select>
              </form-item>
              <form-item style="text-align: right">
                <el-button type="primary" @click="handleProjectSave">保存</el-button>
              </form-item>
            </i-form>
          </div>
        </div>
      </div>
    </transition>
  </div>
<!--  <el-drawer visible :with-header="false" :size="900" :close-on-click-modal="false" :wrapper-closable="false">-->
<!--    <div class="sugar-project">-->
<!--      -->
<!--      <div class="sugar-project-content sugar-layout-wrap">-->
<!--        <el-tabs :active-name="activePane" @tab-click="handlePaneClick">-->
<!--          &lt;!&ndash; 项目新增 &ndash;&gt;-->
<!--          <el-tab-pane style="height: 100%;" name="creator">-->
<!--            <div slot="label" class="project-pane-title">项目新增</div>-->
<!--            <div class="sugar-layout-wrap">-->
<!--              <i-form :model="createProject" :label-width="80" ref="createProjectForm" :rules="projectPropRule">-->
<!--                <form-item prop="name" label="项目名称">-->
<!--                  <Input v-model="createProject.name" placeholder="XX项目..."></Input>-->
<!--                </form-item>-->
<!--                <form-item prop="remark" label="备注">-->
<!--                  <Input type="textarea" :autosize="{minRows: 5, maxRows: 10}" v-model="createProject.remark" placeholder="该项目..."></Input>-->
<!--                </form-item>-->
<!--                <form-item label="成员">-->
<!--                  <el-select v-model="createProject.memberIds" multiple filterable @remove-tag="handleMemberDelete" placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">-->
<!--                    <el-option v-for="account in accountList" :key="account.id" :value="account.id" :label="`${account.username} - ${account.email}`" :disabled="account.id === $store.state.sugarAccount.id"></el-option>-->
<!--                  </el-select>-->
<!--                </form-item>-->
<!--                <form-item style="text-align: right">-->
<!--                  <el-button type="primary" @click="handleProjectSave">保存</el-button>-->
<!--                </form-item>-->
<!--              </i-form>-->
<!--            </div>-->
<!--          </el-tab-pane>-->

<!--          <el-tab-pane style="height: 100%;" name="lister">-->
<!--            <div slot="label" class="project-pane-title">项目列表</div>-->
<!--            <div style="height: calc(100% - 40px); overflow: auto;">-->
<!--              <el-card shadow="never" :body-style="{padding: '10px'}" style="background-color: #eef2f3; color: #536976;">-->
<!--                <div class="sugar-flex-row sugar-normal-line">-->
<!--                  <div class="sugar-label-input" style="flex-grow: 1;">-->
<!--                    <div class="label">项目名称</div>-->
<!--                    <div class="input"><Input v-model="queryProject.name" placeholder="模糊查询"></Input></div>-->
<!--                  </div>-->
<!--                  <div class="sugar-label-input" style="flex-grow: 1;">-->
<!--                    <div class="label">创建人</div>-->
<!--                    <div class="input"><Input v-model="queryProject.creatorName" placeholder="精确查询"></Input></div>-->
<!--                  </div>-->
<!--                  <div><el-button type="primary" style="margin-left: 10px;" @click="handleQueryProject">查询</el-button></div>-->
<!--                </div>-->
<!--                <el-divider></el-divider>-->
<!--              </el-card>-->

<!--              <transition name="fade">-->
<!--                <div v-if="showEdit" id="projectEdit">-->
<!--                  <el-card v-if="showEdit">-->
<!--                    <div class="sugar-normal-line">-->
<!--                      <el-breadcrumb separator="/">-->
<!--                        <el-breadcrumb-item>项目</el-breadcrumb-item>-->
<!--                        <el-breadcrumb-item>编辑</el-breadcrumb-item>-->
<!--                      </el-breadcrumb>-->
<!--                    </div>-->
<!--                    <i-form :model="editProject" ref="editProjectForm" :rules="projectPropRule" :label-width="80">-->
<!--                      <form-item prop="name" label="项目名称">-->
<!--                        <Input v-model="editProject.name"></Input>-->
<!--                      </form-item>-->
<!--                      <form-item prop="remark" label="备注">-->
<!--                        <Input type="textarea" :autosize="{minRows: 4, maxRows: 10}" v-model="editProject.remark"></Input>-->
<!--                      </form-item>-->
<!--                      <form-item label="成员" prop="memberIds">-->
<!--                        <el-select v-model="editProject.memberIds" filterable multiple @remove-tag="handleEditMemberDelete">-->
<!--                          <el-option v-for="account in accountList" :key="account.id" :value="account.id"-->
<!--                                     :label="`${account.username} - ${account.email}`"-->
<!--                                     :disabled="account.id === $store.state.sugarAccount.id">-->
<!--                          </el-option>-->
<!--                        </el-select>-->
<!--                      </form-item>-->
<!--                      <form-item prop="creatorName" label="创建人">-->
<!--                        <Input v-model="editProject.creatorName" disabled></Input>-->
<!--                      </form-item>-->
<!--                      <form-item prop="createTime" label="创建时间">-->
<!--                        <Input v-model="editProject.createTime" disabled></Input>-->
<!--                      </form-item>-->
<!--                      <form-item prop="updateTime" label="更新时间">-->
<!--                        <Input v-model="editProject.updateTime" disabled></Input>-->
<!--                      </form-item>-->
<!--                      <form-item style="text-align: right;">-->
<!--                        <el-button type="primary" @click="handleEditCancel">取消</el-button>-->
<!--                        <el-button type="primary" @click="handleEditSave">保存</el-button>-->
<!--                      </form-item>-->
<!--                    </i-form>-->
<!--                  </el-card>-->
<!--                </div>-->
<!--              </transition>-->

<!--              <div class="project-list">-->
<!--                <Card v-for="project in queryProjectResult.projectList" :key="project.id" style="width: 250px; margin: 10px 19px 40px 19px; text-align: center;">-->
<!--                  <div style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{project.name}}</div>-->
<!--                  <div style="text-align: right;">-->
<!--                    <el-tooltip content="编辑" effect="light" placement="top">-->
<!--                      <i class="ivu-icon ivu-icon-ios-paper-outline project-opt" @click="handleProjectEdit(project)"></i>-->
<!--                    </el-tooltip>-->
<!--                    <el-tooltip content="删除" effect="light" placement="top">-->
<!--                      <i class="ivu-icon ivu-icon-ios-trash-outline project-opt" @click="handleProjectDelete(project)"></i>-->
<!--                    </el-tooltip>-->
<!--                  </div>-->
<!--                </Card>-->
<!--              </div>-->
<!--            </div>-->

<!--          </el-tab-pane>-->
<!--        </el-tabs>-->
<!--      </div>-->
<!--    </div>-->
<!--  </el-drawer>-->
</template>

<script>
export default {
  name: "Project",
  data(){
    return {
      activeCreate: false,
      projectPropRule: {name: {required: true, trigger: 'blur', message: '项目名称不能为空'}},

      accountList: [],
      createProject: {id: '', name: '', remark: '', creatorId: '', memberIds: [this.$store.state.sugarAccount.id]},

      queryProject: {name: '', creatorName: '', accountId: this.$store.state.sugarAccount.id, pageSize: 10, pageNum: 1},
      projectQuery: {pageSize: 10, pageNum: 1, name: '', creatorName: '', accountId: this.$store.state.sugarAccount.id},
      projects: {pageSize: 0, pageNum: 0, total: 0, list: []},
      currentProject: undefined,

      editProject: {id: '', name: '', remark: '', creatorId: '', creatorName: '', createTime:'', updateTime:'', memberIds: []},
      showEdit: false,
    }
  },

  methods: {
    handleQuery(){
      this.$axios.post(this.$store.state.restApi.sugarProjectList, this.projectQuery).then(response => {
        if(response.data.code === 0){
          this.projects = response.data.payload
          this.projectQuery.pageNum = this.projects.pageNum
          this.projectQuery.pageSize = this.projects.pageSize
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err =>{
        this.$message({message: err, type: "error", duration: 3000})
      })
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
                this.activeCreate = false
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

    disableCreate(){
      this.activeCreate = false
      this.$refs.createProjectForm.resetFields()
    },

    setCurrentProject(row){
      this.currentProject = row
    },

    handleDelete(){
      this.$confirm("是否删除当前项目？", "", {confirmButtonText: '是', cancelButtonText: '否'}).then(() => {
        this.$axios.get(this.$store.state.restApi.sugarProjectDelete + `?id=${this.currentProject.id}`).then(response => {
          if(response.data.code === 0){
            this.$message({message: '项目删除成功', type:"success", duration: 3000})
            this.handleQuery()
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
            this.handleQuery()
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      }).catch(() => {})
    },

  },

  mounted() {
    this.handleQuery()
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

.sugar-project-wrap{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 512;
  background-color: rgba(0,0,0,.3);

  .sugar-project{
    position: fixed;
    height: calc(100% - 200px);
    top: 100px;
    right: calc(50% - 720px);
    bottom: 100px;
    left: calc(50% - 720px);
    background-color: #eef2f3;
    box-shadow: 0 0 5px 1px #536976;
    border-radius: 5px;
  }
}

.project-add-wrap{
  position: fixed;
  height: calc(100% - 200px);
  top: 100px;
  right: calc(50% - 720px);
  bottom: 100px;
  left: calc(50% - 720px);
  z-index: 514;
  background-color: rgba(255,255,255,.5);

  .project-add{
    position: fixed;
    top: 200px;
    //height: calc(100% - 400px);
    left: calc(50% - 400px);
    right: 320px;
    width: 800px;
    background-color: #eef2f3;
    box-shadow: 0 0 3px #3c3f41;
    border-radius: 3px;

    .add-content{
      padding: 10px 32px 10px 10px;
      max-height: calc(100% - 200px);
      overflow: auto;
    }
  }
}

.project-content{
  height: calc(100% - 32px);

  .project-query{
    height: 80px; display: flex; flex-flow: row nowrap; padding: 20px;
    .sugar-label-input{
      flex-grow: 1;
      margin: 0 20px;
    }
  }

  .project-list{
    height: calc(100% - 80px);
    padding: 0 10px;

    .project-table{
      height: calc(100% - 40px);
    }

    .project-pagination{
      height: 40px; line-height: 40px; text-align: right; padding: 5px 0;
      &::v-deep .el-pagination__total{font-weight: bold !important;}
      &::v-deep .el-pagination{color: #536976 !important; padding: 0!important;}
      &::v-deep .el-input__inner{background: transparent !important; border-radius: 2px !important;
        &:hover { border-color: #8e9eab !important;}
      }
      &::v-deep .btn-prev, &::v-deep .btn-next, &::v-deep li{background: transparent !important; &:hover{ color: #2ebf91 !important;}}
      &::v-deep li.active{color: #2ebf91 !important;}
    }
  }
}


.project-table{
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
</style>