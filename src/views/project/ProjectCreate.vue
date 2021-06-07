<template>
  <sugar-page>
    <div slot="title">项目 > 新建项目</div>
    <div id="sugarProjectCreate" class="sugar-flex-col" slot="default">
      <div id="projectCreateForm">
        <el-form :model="project" ref="projectForm" :rules="projectRule" label-width="80px">
          <el-form-item prop="name" label="项目名称">
            <el-input v-model="project.name" size="small" placeholder="示例项目..."></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input type="textarea" resize="none" :autosize="{minRows: 5, maxRows: 10}" v-model="project.remark" placeholder="该项目..."></el-input>
          </el-form-item>
          <el-form-item prop="memberList" label="成员">
            <el-select v-model="selectMember" multiple filterable size="small" style="width: 100% !important;" @change="handleMemberSelect" placeholder="搜索并选择项目成员（多选）" no-data-text="无可选成员" no-match-text="无相关查询结果">
              <el-option v-for="member in accountList" :key="member.id" :value="member.id" :label="member.username"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="text-align: right;">
            <el-button size="small" @click="handleProjectSave">保存</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </sugar-page>
</template>

<script>
import SugarPage from "@/components/SugarPage";
export default {
  name: "ProjectCreate",
  components: {SugarPage},
  data(){
    return {
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
      }
    }
  },
  methods: {
    handleProjectSave(){
      this.$confirm("是否保存项目？", "",
          {type: "info", confirmButtonText: "是", cancelButtonText: "否", confirmButtonClass: 'confirm-btn', closeOnClickModal: false, showClose: false}).then(() => {

      }).catch(() => {

      })
    },
    handleMemberSelect(members){
      console.log(members)
      console.log("----")
      console.log(this.selectMember)
    }
  },
  // destroyed() {
  //   this.$refs.projectForm.resetFields()
  // }
}
</script>

<style scoped lang="scss">

#sugarProjectCreate{
  height: 100%;
}

#projectCreateForm{
  width: 800px;
  margin-top: 80px;
  margin-left: calc(50% - 400px);
}
</style>