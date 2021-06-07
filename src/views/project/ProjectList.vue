<template>
  <sugar-page>
    <div slot="title">项目 > 项目列表</div>
    <div id="sugarProjectList" slot="default">
      <div class="project-list">
        <el-collapse accordion>
          <el-collapse-item v-for="(project, index) in projectList" :key="project.id">
            <template slot="title">
              <div class="sugar-flex-row" style="width: 100%;">
                <div class="project-index">{{index}}</div>
                <div class="project-name">{{project.name}}</div>
                <div class="project-create-time">{{project.createTime}}</div>
              </div>
            </template>
            <div slot="default" class="project-info sugar-layout-wrap">
              <el-form :model="project" ref="projectForm" :rules="projectRule" label-width="80px">
                <el-form-item prop="name" label="项目名称">
                  <el-input v-model="project.name" size="small" placeholder="示例项目..." :disabled="!editable"></el-input>
                </el-form-item>
                <el-form-item prop="remark" label="备注">
                  <el-input type="textarea" resize="none" :autosize="{minRows: 5, maxRows: 10}" v-model="project.remark" placeholder="该项目..." :disabled="!editable"></el-input>
                </el-form-item>
                <el-form-item prop="memberList" label="成员">
                  <el-select :disabled="!editable" v-model="selectMembers" multiple filterable size="small" style="width: 100% !important;" @change="handleMemberSelect" placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
                    <el-option v-for="member in accountList" :key="member.id" :value="member.id" :label="member.username"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item style="text-align: right;">
                  <el-button type="primary" @click="handleActiveEditable" v-if="!editable">编辑</el-button>
                  <el-button type="primary" @click="handleEditingProjectSave" v-if="editable">保存</el-button>
                  <el-button type="primary" @click="handleEditingCancel" v-if="editable">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </sugar-page>
</template>

<script>
import SugarPage from "@/components/SugarPage";
export default {
  name: "ProjectList",
  components: {SugarPage},
  data(){
    return {
      projectList: [{id: 1, name: "示例项目", createTime: new Date().toLocaleString()}, {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}
        , {id: 2, name: "示例项目", createTime: new Date().toLocaleString()}

      ],
      editable: false,
      selectMembers: [],
      accountList: [],


      projectRule: {
        name: {required: true, trigger: 'blur', message: '项目名称不能为空'}
      }
    }
  },
  methods: {
    handleMemberSelect(members){
      console.log(members)
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

#sugarProjectList{
  height: 100%;
  overflow: auto;
}

.project-list{
  width: 1024px;
  margin-left: calc(50% - 512px);
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