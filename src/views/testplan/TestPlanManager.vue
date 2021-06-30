<template>
  <el-drawer visible :size="1200" :close-on-press-escape="false" :close-on-click-modal="false" :wrapper-closable="false" :with-header="false">
    <div id="sugarTestPlanManager" class="test-plan-manager">
      <div class="test-plan-manager-header">
        <div class="manager-header-logo"></div>
        <div class="manager-header-title" style="text-align: center;">管理测试计划</div>
        <div class="manager-header-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>
      <div class="test-plan-manager-content">
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
          </div>
          <div class="sugar-normal-line" style="margin-top: 20px;">
            <el-button type="primary" style="margin-left: 5px;" @click="handleQuery">查询</el-button>
            <el-button type="primary" style="margin-left: 5px;" @click="handleCreate">新建测试计划</el-button>
          </div>
        </div>

        <div class="manager-content-table">
          <div class="content-table-list">
            <el-table :data="plans.planList" ref="planTable" row-key="id" highlight-current-row :height="planTableHeight" empty-text="没有测试计划" @row-click="handlePlanClick">
              <el-table-column prop="id">
                <div slot="header" class="sugar-table-header">编号</div>
              </el-table-column>
              <el-table-column prop="name">
                <div slot="header" class="sugar-table-header">测试计划名称</div>
              </el-table-column>
              <el-table-column prop="projectName">
                <div slot="header" class="sugar-table-header">所属项目名称</div>
              </el-table-column>
              <el-table-column prop="creatorName">
                <div slot="header" class="sugar-table-header">创建人</div>
              </el-table-column>
              <el-table-column prop="updaterName">
                <div slot="header" class="sugar-table-header">更新人</div>
              </el-table-column>
            </el-table>
          </div>
          <div class="content-table-pagination">

          </div>
        </div>

      </div>

    </div>



  </el-drawer>
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
      },

      planTableHeight: '800px',
      plans: {
        pageSize: '',
        pageNum: '',
        total: '',
        planList: [{id: 1}]
      },
      currentPlan: undefined,
    }
  },
  methods: {
    handleQuery(){


    },

    handleCreate(){


    },

    handlePlanClick(row){
      this.currentPlan = row
    }
  }
}
</script>

<style scoped lang="scss">

.test-plan-manager{
  height: 100%;

  // 页面头部样式
  .test-plan-manager-header {
    height: 32px;
    line-height: 32px;
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid #DCDFE6;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    .manager-header-logo{
      width: 48px;
      background: {
        image: url("../../assets/logo.svg");
        size: 48px 32px;
      };
    }

    .manager-header-close{
      width: 32px;
      color: #ff6d6f;
      background-color: #eef2f3;
      cursor: pointer;
    }

    .manager-header-title{
      flex-grow: 1;
    }
  }

  // 页面内容样式
  .test-plan-manager-content{
    height: calc(100% - 32px); overflow: auto;

    .manager-content-query{
      height: 150px;
      border-bottom: 1px solid #DCDFE6;
      padding: 20px 10px 0 10px;
    }

    .manager-content-table {
      height: calc(100% - 150px);

      .content-table-list{
        height: calc(100% - 32px);
        padding: 10px;
      }
    }

  }
}

.sugar-label-input{
  flex-grow: 1;
  margin: 0 5px;
}

.content-table-list{
  &::v-deep .el-table {
    border: 1px solid #DCDFE6 !important;

    tr{
      border-bottom: 1px solid #DCDFE6 !important;

      td, th{
        border: none !important;
        border-bottom: 1px solid #DCDFE6 !important;
        padding: 0 5px !important;
      }
    }
  }


}
</style>