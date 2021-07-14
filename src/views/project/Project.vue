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
            <div class="input">
              <el-input v-model="queryProject.name" placeholder="模糊查询" @keydown.enter="handleQuery"></el-input>
            </div>
          </div>
          <div class="sugar-label-input sugar-normal-line">
            <div class="label">创建人</div>
            <div class="input">
              <el-input v-model="queryProject.creatorName" placeholder="精确查询" @keydown.enter="handleQuery"></el-input>
            </div>
          </div>
          <div class="sugar-label-input sugar-normal-line">
            <el-button type="primary" @click="handleQuery">查询</el-button>
            <el-button type="primary" @click="activeCreate = true"><span style="color: #2ebf91;">添加</span></el-button>
          </div>
        </div>
        <div class="project-list">
          <div class="project-table">
            <el-table :data="projects.list" ref="projectTable" height="100%" row-key="id" highlight-current-row empty-text="暂无项目" @row-click="setCurrentProject">
              <el-table-column prop="id" label="#" width="80px"></el-table-column>
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="creatorName" label="创建人" width="200px"></el-table-column>
              <el-table-column prop="createTime" label="创建时间" width="200px"></el-table-column>
              <el-table-column fixed="right" width="100px">
                <div slot="header" class="sugar-table-header">操作</div>
                <template slot-scope="scope">
                  <div v-if="scope.row !== undefined" class="sugar-table-opt">
                    <el-button type="primary" @click="enableEdit(scope.row)"><span style="color: #2ebf91;">编辑</span></el-button>
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
            <el-form :model="createProject" label-width="80px" ref="createProjectForm" :rules="projectPropRule">
              <el-form-item prop="name" label="项目名称">
                <el-input v-model="createProject.name" placeholder="XX项目..."></el-input>
              </el-form-item>
              <el-form-item prop="remark" label="备注">
                <el-input type="textarea" :autosize="{minRows: 5, maxRows: 5}" v-model="createProject.remark"
                       placeholder="该项目..."></el-input>
              </el-form-item>
              <el-form-item label="成员">
                <el-select v-model="createProject.memberIds" multiple filterable @remove-tag="handleMemberDelete"
                           placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
                  <el-option v-for="account in accountList" :key="account.id" :value="account.id"
                             :label="`${account.username} - ${account.email}`"
                             :disabled="account.id === $store.state.sugarAccount.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="text-align: right">
                <el-button type="primary" @click="handleProjectSave">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="project-add-wrap" v-if="activeEdit">
        <div class="project-add">
          <div class="sugar-header">
            <div class="header-logo"></div>
            <div class="header-title">编辑项目</div>
            <div class="header-close" @click="disableEdit"><i class="iconfont icon-guanbi"></i></div>
          </div>
          <div class="add-content">
            <el-form :model="editProject" label-width="80px" ref="editProjectForm" :rules="projectPropRule">
              <el-form-item prop="name" label="项目名称">
                <div class="sugar-label-input">
                  <el-input v-model="editProject.name" placeholder="XX项目..."></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="remark" label="备注">
                <el-input type="textarea" :autosize="{minRows: 5, maxRows: 5}" resize="none" v-model="editProject.remark"
                          placeholder="该项目..."></el-input>
              </el-form-item>
              <el-form-item label="成员">
                <el-select v-model="editProject.memberIds" :key="editSelectKey" multiple filterable @remove-tag="handleEditMemberDelete" @change="handleEditChange"
                           placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
                  <el-option v-for="account in accountList" :key="account.id" :value="account.id"
                             :label="`${account.username} - ${account.email}`"
                             :disabled="account.id === $store.state.sugarAccount.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="creatorName" label="创建人">
                <div class="sugar-label-input">
                  <el-input v-model="editProject.creatorName" disabled></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="createTime" label="创建时间">
                <div class="sugar-label-input">
                  <el-input v-model="editProject.createTime" disabled></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="updaterName" label="更新人">
                <div class="sugar-label-input">
                  <el-input v-model="editProject.updaterName" disabled></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="updateTime" label="更新时间">
                <div class="sugar-label-input">
                  <el-input v-model="editProject.updateTime" disabled></el-input>
                </div>
              </el-form-item>
              <el-form-item style="text-align: right">
                <el-button type="primary" @click="handleEditSave">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </transition>
  </div>
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

      activeEdit: false,
      editProject: {id: '', name: '', remark: '', creatorId: '', creatorName: '', createTime:'', updateTime:'', memberIds: []},
      editSelectKey: 0,
    }
  },

  methods: {
    // 项目查询
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
                this.handleQuery()
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

    enableEdit(project){
      this.$axios.get(`${this.$store.state.restApi.sugarProjectFetch}?id=${project.id}`).then(response => {
        if(response.data.code === 0){
          this.editProject = response.data.payload
          let memberIds = []
          for(let index = 0; index < this.editProject.members.length; index++){
            memberIds.push(this.editProject.members[index].id)
          }
          this.editProject.memberIds = memberIds
          this.activeEdit = true
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err => {
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    disableEdit(){
      this.activeEdit = false
      this.$refs.editProjectForm.resetFields()
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

    handleEditChange(){
      this.editSelectKey = this.editSelectKey + 1
    },

    handleEditMemberDelete(tag){
      if(tag === this.editProject.creatorId){
        this.editProject.memberIds.splice(0, 0, this.editProject.creatorId)
      }
    },

    // 保存项目编辑
    handleEditSave(){
      this.$confirm("确认保存编辑？", "", {confirmButtonText: "确定", cancelButtonText: "取消"}).then(() => {
        this.editProject.accountId = this.$store.state.sugarAccount.id
        this.$axios.post(this.$store.state.restApi.sugarProjectUpdate, this.editProject).then(response => {
          if(response.data.code === 0){
            this.$message({message: "编辑成功", type: "success", duration: 3000})
            this.disableEdit()
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
      &::v-deep .el-el-input__inner{background: transparent !important; border-radius: 2px !important;
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

.project-edit{
  padding: 10px 32px;
  background-color: #FFFFFF;
}

.sugar-table-opt{
  text-align: center;
  &::v-deep .el-button{
    height: 20px !important; line-height: 20px !important; font-size: 10px !important; padding: 0 5px !important;
  }
}
</style>