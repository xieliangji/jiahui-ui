<template>
  <div id="reportDetail">
    <div class="detail-dialog">
      <div class="detail-header">
        <div class="logo">{{report?"":""}}</div>
        <div class="title">{{report.name}} 详情</div>
        <div class="close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>

      <div class="detail-content">
        <div class="content-summary">
          <el-card shadow="hover">
            <div class="summary-title">概要</div>
            <div class="summary-detail">
              <div class="detail-piece">
                <div class="sugar-normal-line piece-title">执行耗时</div>
                <Timeline>
                  <Timeline-item color="green">开始 {{report.startTime}}</Timeline-item>
                  <Timeline-item color="blue">结束 {{report.endTime}}</Timeline-item>
                </Timeline>
              </div>
              <div class="detail-piece">
                <div class="sugar-normal-line piece-title">执行状态</div>
                <div>
                  <Spin size="large" v-if="report.status === 'SUCCESS'" class="success-dot"></Spin>
                  <Spin size="large" v-else style="color: #ff6d6f;" class="fail-dot"></Spin>
                </div>
              </div>
              <div class="detail-piece">
                <div class="sugar-normal-line piece-title">结果数</div>
                <div style="line-height: 60px; text-align: center;">{{report.results.length}}</div>
              </div>
              <div class="detail-piece">
                <div class="sugar-normal-line piece-title">通过占比</div>
                <i-circle :size="60" :trail-width="5" :stroke-width="5" :percent="successPercent" stoke-linecap="square" stroke-color="#2ebf91">
                  <div class="detail-percent">
                    <h4>{{successCount}}</h4>
                    <p style="font-size: 6px;">成功数</p>
                    <div style="font-size: 6px;">{{Math.floor(successPercent)}}%</div>
                  </div>
                </i-circle>
              </div>
<!--              <div class="detail-piece">-->
<!--                <div class="sugar-normal-line piece-title">执行人</div>-->
<!--                <div style="line-height: 60px">{{report.creatorName}}</div>-->
<!--              </div>-->
              <div class="detail-piece">
                <div class="sugar-normal-line piece-title">关联项目</div>
                <div style="line-height: 60px;">{{report.projectName}}</div>
              </div>
              <div class="detail-piece">
                <div class="sugar-normal-line piece-title">测试计划</div>
                <div style="line-height: 60px;">{{report.testPlanName}}</div>
              </div>
              <div class="detail-piece" v-if="report.description !== undefined && report.description !== ''">
                <div class="sugar-normal-line piece-title">执行异常</div>
                <div style="line-height: 60px; color: #ff6d6f;">{{report.description}}</div>
              </div>
            </div>

          </el-card>
        </div>

        <div class="content-detail">
          <el-card shadow="never">
            <div class="result-detail-header">
              <div class="title">详情</div>
            </div>
            <el-tabs :active-name="successOrFail" @tab-click="handleTabClick">
              <el-tab-pane name="success" label="成功结果详情">
                <sample-result :sample-results="successResults" success></sample-result>
              </el-tab-pane>
              <el-tab-pane name="fail">
                <div slot="label" :style="{color: successOrFail === 'fail'? '#ff6d6f':''}">失败结果详情</div>
                <sample-result :sample-results="failResults"></sample-result>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SampleResult from "@/views/report/SampleResult";
export default {
  name: "ReportDetail",
  components: {SampleResult},
  props: {
    report: Object
  },
  data(){
    return {
      successOrFail: 'success',

    }
  },

  methods: {
    handleTabClick(tab){
      this.successOrFail = tab.name
    }
  },

  computed: {
    successPercent(){
      let sampleResultCount = this.report.results.length
      let successCount = 0
      for(let index = 0; index < sampleResultCount; index++){
        if(this.report.results[index]['successful']){
          successCount = successCount + 1
        }
      }
      return successCount / sampleResultCount * 100
    },

    successCount(){
      let sampleResultCount = this.report.results.length
      let successCount = 0
      for(let index = 0; index < sampleResultCount; index++){
        if(this.report.results[index]['successful']){
          successCount = successCount + 1
        }
      }
      return successCount
    },

    successResults(){
      let results = []
      for(let index = 0; index < this.report.results.length; index++){
        if(this.report.results[index]['successful']){
          results.push(this.report.results[index])
        }
      }
      return results
    },

    failResults(){
      let results = []
      for(let index = 0; index < this.report.results.length; index++){
        if(!this.report.results[index]['successful']){
          results.push(this.report.results[index])
        }
      }
      return results
    }
  }
}
</script>

<style scoped lang="scss">

#reportDetail{
  z-index: 20512;
  position: fixed;
  height: 100vh;
  background-color: rgba(0,0,0,.2);
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
}

.detail-dialog{
  position: relative;
  top: 100px;
  width: 1440px;
  height: calc(100% - 200px);
  left: calc(50% - 720px);
  background-color: #eef2f3;
  box-shadow: 0 0 5px 0 #2c3e50;
  border-radius: 3px;

  .detail-header{
    display: flex; flex-flow: row nowrap; border-bottom: 1px solid #DCDFE6;
    height: 32px; line-height: 32px;
    text-align: center; font-weight: bold;
    border-radius: 3px; box-sizing: border-box;

    .logo{
      width: 48px; border-radius: 3px;
      background: {
        image: url("../../assets/logo.svg");
        size: 48px 32px;
      };
    }
    .close{
      background-color: #bdc3c7; color: #ff6d6f; width: 32px;
    }
    .title{
      flex-grow: 1;
    }
  }

  .detail-content{
    height: calc(100% - 32px);
    overflow: auto;

    .content-summary{
      padding: 10px 20px;

      .summary-title{
        font-size: 18px; font-weight: bold; height: 36px; line-height: 36px; text-align: center;
      }

      .summary-detail{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin-top: 20px;
        .detail-piece{
          margin: 0 30px;

          .piece-title{
            color: #2c3e50;
            font-size: 15px;
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }

    .content-detail{
      padding: 10px 20px;

      .result-detail-header{
        display: flex; flex-flow: row nowrap; text-align: center;
        .title{flex-grow: 1;font-size: 18px; font-weight: bold;}
        .switch{margin-right: 5px;}
      }
    }
  }


}

.detail-dialog {
  &::v-deep .el-card{
    background-color: rgba(255,255,255,.3) !important;
  }

  &::v-deep .ivu-spin-large .ivu-spin-dot{
    width: 56px !important;
    height: 56px !important;
    margin-left: 2px;
  }
}

.success-dot{
  &::v-deep .ivu-spin-dot{
    background-color: #2ebf91 !important;
    animation: none !important;
    &::after{
      content: "成功";
      position: relative;
      top: 18px;
      color: #FFFFFF;
    }
  }
}

.fail-dot{
  &::v-deep .ivu-spin-dot{
    background-color: red !important;
    animation: none !important;
    &::after{
      content: "失败";
      position: relative;
      top: 18px;
      color: #FFFFFF;
    }
  }
}
</style>