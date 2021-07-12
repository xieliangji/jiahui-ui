<template>
  <div id="sampleResult" class="sample-result" :class="success ? 'sample-result-success':'sample-result-fail'">
    <el-collapse accordion>
      <el-collapse-item v-for="result in sampleResults" :key="sampleResults.indexOf(result)" :title="result['sampleLabel']">
        <div style="margin-left: 20px;">
          <el-tabs :active-name="requestOrResponse">
            <el-tab-pane name="request" label="请求详情">
              <div class="result-title">请求头</div>
              <div class="result-header">{{result['requestHeaders']}}</div>
              <div class="result-title">请求体</div>
              <div class="result-body">{{result['samplerData']}}</div>
            </el-tab-pane>
            <el-tab-pane name="response" label="响应详情">
              <div class="result-title">响应头</div>
              <div class="result-header">{{result['responseHeaders']}}</div>
              <div class="result-title">响应体</div>
              <div class="result-body" v-if="result['dataType'] === 'text' || result['dataType'] === ''">{{result['responseDataAsString']}}</div>
              <div class="result-body" v-else>
                <img :src="`data:image/png;base64,${result['responseData']}`">
              </div>
            </el-tab-pane>
            <el-tab-pane name="assertion" label="断言详情" v-if="result['assertionResults'] !== undefined && result['assertionResults'].length > 0">
              <div v-for="assertionResult in result['assertionResults']" :key="result['assertionResults'].indexOf(assertionResult)" class="sample-result-wrap" style="border-bottom: 1px solid #DCDFE6;">
                <div class="sugar-label-input">
                  <div class="label">Assertion Name</div>
                  <div class="input">{{assertionResult['name']}}</div>
                </div>
                <div class="sugar-label-input">
                  <div class="label">Assertion Error</div>
                  <div class="input">{{assertionResult['error']}}</div>
                </div>
                <div class="sugar-label-input">
                  <div class="label">Assertion Failure</div>
                  <div class="input">{{assertionResult['failure']}}</div>
                </div>
                <div class="sugar-label-input">
                  <div class="label">Assertion Failure Message</div>
                  <div class="input">{{assertionResult['failureMessage']}}</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div style="margin-left: 20px;" v-if="result['subResults'] !== undefined && result['subResults'].length > 0">
            <el-divider></el-divider>
            <div style="color: #ff6d6f;; font-weight: bold; margin: 10px 0;">子结果(集)</div>
            <sample-result :sample-results="result['subResults']"></sample-result>
          </div>
        </div>

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "SampleResult",
  props: {
    sampleResults: Array,
    success: Boolean,
  },
  data(){
    return {
      requestOrResponse: 'request',
    }
  }
}
</script>

<style scoped lang="scss">

.sample-result-success{
  &::v-deep .el-collapse-item__header{
    height: 32px !important; line-height: 32px !important; background-color: rgba(255,255,255,.2) !important;
    color: #2ebf91 !important;
  }
}

.sample-result-fail{
  &::v-deep .el-collapse-item__header{
    height: 32px !important; line-height: 32px !important; background-color: rgba(255,255,255,.2) !important;
    color: #ff6d6f !important;
  }
}

.result-header, .result-body{
  white-space: pre-wrap;

  img{
    box-shadow: 0 0 2px #bdc3c7;
  }
}

.result-title{
  font-weight: bold; margin-top: 20px;
}

.sugar-label-input{
  .label{
    width: 154px;
    &::after{
      content: ":";
    }
  }
}
</style>