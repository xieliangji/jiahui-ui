<template>
  <el-drawer visible :size="1350" :close-on-press-escape="false" :close-on-click-modal="false" :wrapper-closable="false" :with-header="false">
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
              <el-table-column prop="creatorName" width="150px">
                <div slot="header">创建人</div>
              </el-table-column>
              <el-table-column prop="updaterName" width="150px">
                <div slot="header">更新人</div>
              </el-table-column>
              <el-table-column prop="createTime" width="160px">
                <div slot="header">创建时间</div>
              </el-table-column>
              <el-table-column prop="updateTime" width="160px">
                <div slot="header">更新时间</div>
              </el-table-column>
              <el-table-column fixed="right" width="100px">
                <div slot="header" class="sugar-table-header">操作</div>
                <template slot-scope="scope">
                  <div v-if="scope" style="text-align: center;">
                    <el-button type="primary" @click="handleEdit">编辑</el-button>
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
        total: 200,
        list: []
      },
      currentPlan: undefined,
    }
  },
  methods: {
    handleQuery(){
      this.$axios.post(this.$store.state.restApi.sugarJMXQuery, this.planQuery).then(response => {
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
        this.$store.commit("initTestPlan")
        this.$emit('close')
      }).catch(() => {})

    },

    handleOpen(){

    },

    handlePlanClick(row){
      this.currentPlan = row
    },

    handleEdit(){

    },

    handleDelete(){

    }
  },
  mounted() {
    this.handleQuery()
  }
}
</script>

<style scoped lang="scss">

.test-plan-manager{
  height: 100%;
  background-color: #eef2f3;

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
      background-color: #bdc3c7;
      cursor: pointer;
    }

    .manager-header-title{
      flex-grow: 1;
    }
  }

  // 页面内容样式
  .test-plan-manager-content{
    height: calc(100% - 32px);

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