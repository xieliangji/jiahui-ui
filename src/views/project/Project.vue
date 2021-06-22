<template>
  <sugar-drawer show-sugar-drawer :size="1024" @close="$emit('close')">
    <div slot="title" style="text-align: center; line-height: 30px;">项目</div>
    <div style="background-color: #eef2f3; height: 100%;">
      <div class="project-search">
        <div class="sugar-flex-row">
          <div class="sugar-label-input project-search-item">
            <div class="label">项目名称</div>
            <div class="input">
              <el-input v-model="projectSearch.name" placeholder="模糊查询"></el-input>
            </div>
          </div>
          <div class="sugar-label-input project-search-item">
            <div class="label">创建人</div>
            <div class="input">
              <el-input v-model="projectSearch.creatorName" placeholder="精确查询"></el-input>
            </div>
          </div>
          <div class="sugar-label-input project-search-item" style="margin-top: 14px;">
            <el-button type="primary">查询</el-button>
            <el-button type="primary" @click="isShowCreator = true">新增</el-button>
            <el-button type="primary" @click="handleShowEditor">编辑</el-button>
            <el-button type="primary" @click="handleDelete">删除</el-button>
          </div>
        </div>
      </div>
      <sugar-dialog height="500px" width="600px" style="position: static;" v-if="isShowCreator" @close="handleCreatorClose">
        <div slot="title">新增项目</div>
        <el-form :model="project" label-width="80px" ref="projectCreateForm" :rules="projectRule" style="padding: 5px;">
          <el-form-item prop="name" label="项目名称">
            <el-input v-model="project.name" size="small" placeholder="示例项目..."></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input type="textarea" resize="none" :autosize="{minRows: 4, maxRows: 4}" v-model="project.remark" placeholder="该项目..."></el-input>
          </el-form-item>
          <el-form-item prop="memberList" label="成员">
            <el-select v-model="selectMember" multiple filterable size="small" style="width: 100% !important;" @change="handleMemberSelect" placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
              <el-option v-for="member in accountList" :key="member.id" :value="member.id" :label="member.username"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="text-align: right;">
            <el-button type="primary" @click="handleProjectSave">保存</el-button>
          </el-form-item>
        </el-form>
      </sugar-dialog>
      <sugar-dialog height="500px" width="600px" style="position: static;" v-if="isShowEditor" @close="handleEditorClose">
        <div slot="title">编辑项目</div>
        <el-form :model="currentProject" label-width="80px" ref="projectEditForm" :rules="projectRule" style="padding: 5px;">
          <el-form-item prop="name" label="项目名称">
            <el-input v-model="currentProject.name" size="small" placeholder="示例项目..."></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input type="textarea" resize="none" :autosize="{minRows: 4, maxRows: 4}" v-model="currentProject.remark" placeholder="该项目..."></el-input>
          </el-form-item>
          <el-form-item prop="memberList" label="成员">
            <el-select v-model="selectMember" multiple filterable size="small" style="width: 100% !important;" @change="handleMemberSelect" placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
              <el-option v-for="member in accountList" :key="member.id" :value="member.id" :label="member.username"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="text-align: right;">
            <el-button type="primary" @click="handleProjectSave">保存</el-button>
          </el-form-item>
        </el-form>
      </sugar-dialog>
      <div style="padding: 5px;">
        <el-table :data="projectList" ref="projectListTable" row-key="id" height="960px" highlight-current-row empty-text="暂无项目">
          <el-table-column prop="id" width="80px">
            <div slot="header" class="sugar-table-header">项目编号</div>
            <template slot-scope="scope">
              <div style="padding-left: 5px;">{{scope.row.id}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="id">
            <div slot="header" class="sugar-table-header">项目名称</div>
            <template slot-scope="scope">
              <el-input v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="id" width="180px">
            <div slot="header" class="sugar-table-header">创建时间</div>
            <template slot-scope="scope">
              <div style="padding-left: 5px;">{{scope.row.createTime}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </sugar-drawer>
</template>

<script>
import SugarDrawer from "@/components/SugarDrawer";
import SugarDialog from "@/components/SugarDialog";
export default {
  name: "Project",
  components: {SugarDialog, SugarDrawer},
  data(){
    return {
      projectSearch: {
        name: '',
        creatorName: ''
      },

      isShowCreator: false,
      isShowEditor: false,
      project: {
        id: '',
        name: '',
        remark: '',
        memberList: [],
      },
      selectMember: '',
      accountList: [],

      projectRule: {
        name: {required: true, trigger: 'blur', message: '项目名称不能为空'}
      },

      currentProject: undefined,



      projectList: [

      ],
      editable: false,
      selectMembers: [],
    }
  },
  methods: {
    handleCreatorClose(){
      this.isShowCreator = false
    },


    handleProjectSave(){

    },

    handleMemberSelect(members){
      console.log(members)
      console.log("----")
      console.log(this.selectMember)
    },

    checkCurrentProject(){
      if(this.currentProject === undefined){
        this.$message({message: '请选择待编辑的项目', type: "error", duration: 2000})
      }
    },

    handleShowEditor(){
      this.checkCurrentProject()
    },

    handleDelete(){
      this.checkCurrentProject()
    },

    handleActiveEditable(){
      this.editable = true
    },


    handleEditingProjectSave(){

    },


    handleEditingCancel(){
      this.editable = false
    }
  }
}
</script>

<style scoped lang="scss">

.project-search{
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #DCDFE6;
}

.project-search-item{
  flex-grow: 1;
  padding: 0 10px;
}

.project-list{
  padding: 10px;
  height: calc(100% - 60px);
  overflow-y: auto;
}

.project-list ::v-deep .el-collapse-item__header{
  height: 32px; line-height: 32px;
}

.project-index{
  width: 60px;
  text-align: center;
}

.project-create-time{
  width: 200px;
  text-align: center;
}

.project-name{
  flex-grow: 1;
  border-right: 1px solid #DCDFE6;
  border-left: 1px solid #DCDFE6;
  padding: 0 10px;
}

.project-info{
  border-top: 1px solid #DCDFE6;
}
</style>