<template>
  <div id="sugarJmeterResultTree" class="result-tree-view">
    <div class="result-tree">
      <div class="result-tree-type">
        <el-checkbox v-model="isFailureOnly" @change="handleIsFailOnlyChange">仅错误</el-checkbox>
        <el-checkbox v-model="isSuccessOnly" @change="handleIsSuccessOnlyChange">仅成功</el-checkbox>
      </div>
      <div id="sampleResultTree" class="result-tree-data">
        <el-tree v-if="resultTreeData.length > 0" empty-text=" " :data="resultTreeData" :props="resultTreeProp" highlight-current node-key="id" @node-click="handleResultNodeClick">
          <div slot-scope="{node, data}" class="result-tree-node">
            <img v-if="data['successful']" src="../../assets/tree-icon/security-high-2.png">
            <img v-if="!data['successful']" src="../../assets/tree-icon/security-low-2.png">
            <span> {{ node.label }}</span>
          </div>
        </el-tree>
      </div>

    </div>
    <div class="result-detail">
      <el-tabs :active-name="activeResultDetailPane">
        <el-tab-pane name="sampleResult" label="取样器结果">
          <div v-if="currentSampleResult !== undefined" class="sample-result-wrap">
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">ThreadName</div>
              <div class="input">{{currentSampleResult['threadName']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Sample Start</div>
              <div class="input">{{new Date(currentSampleResult['startTime']).toString()}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Load Time</div>
              <div class="input">{{currentSampleResult['time']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Connect Time</div>
              <div class="input">{{currentSampleResult['connectTime']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Latency</div>
              <div class="input">{{currentSampleResult['latency']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Size in Bytes</div>
              <div class="input">{{currentSampleResult['bytesAsLong']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Sent Bytes</div>
              <div class="input">{{currentSampleResult['sentBytes']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Headers Size in Bytes</div>
              <div class="input">{{currentSampleResult['headersSize']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Body Size in Bytes</div>
              <div class="input">{{currentSampleResult['bodySizeAsLong']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Sample Count</div>
              <div class="input">{{currentSampleResult['sampleCount']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Error Count</div>
              <div class="input">{{currentSampleResult['errorCount']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Data Type("text"|"bin")</div>
              <div class="input">{{currentSampleResult['dataType']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Response Code</div>
              <div class="input">{{currentSampleResult['responseCode']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">Response Message</div>
              <div class="input">{{currentSampleResult['responseMessage']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input"></div>
            <div class="sugar-normal-line sugar-label-input"></div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">{{currentSampleResult['resultType']}}</div>
              <div class="input"></div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">ContentType</div>
              <div class="input">{{currentSampleResult['contentType']}}</div>
            </div>
            <div class="sugar-normal-line sugar-label-input">
              <div class="label">DataEncoding</div>
              <div class="input">{{currentSampleResult['dataEncoding']}}</div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane name="sampleRequest" label="请求">
          <el-tabs :active-name="activeSampleRequestPane">
            <el-tab-pane name="requestBody" label="请求体">
              <div v-if="currentSampleResult !== undefined" class="sample-result-wrap" style="white-space: pre-wrap;">{{ currentSampleResult["samplerData"]}}</div>
            </el-tab-pane>

            <el-tab-pane name="requestHeader" label="请求头">
              <div v-if="currentSampleResult !== undefined" class="sample-result-wrap">{{ currentSampleResult["requestHeaders"]}}</div>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>

        <el-tab-pane name="sampleResponse" label="响应数据">
          <el-tabs :active-name="activeSampleResponsePane">
            <el-tab-pane name="responseBody" label="响应体">
              <div v-if="currentSampleResult !== undefined">
                <div class="sample-result-wrap" v-if="currentSampleResult['dataType'] === 'text' || currentSampleResult['dataType'] === ''">{{ currentSampleResult["responseDataAsString"]}}</div>
                <div class="sample-result-wrap" v-else>
                  <img :src="`data:image/png;base64,${currentSampleResult['responseData']}`">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane name="responseHeader" label="响应头">
              <div v-if="currentSampleResult !== undefined" class="sample-result-wrap">{{ currentSampleResult["responseHeaders"]}}</div>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane v-if="currentSampleResult !== undefined && currentSampleResult['assertionResults'].length > 0" name="sampleAssertion" label="断言结果(列表)">
          <div v-for="assertionResult in currentSampleResult['assertionResults']" :key="assertionResult.toString()" class="sample-result-wrap" style="border-bottom: 1px solid #DCDFE6;">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "ListenerResultTree",
  props: {
    sampleResults: Array
  },
  data(){
    return {
      resultId: 0,
      resultTreeProp: {
        children: 'childResults',
        label: 'sampleLabel',
      },

      isSuccessOnly: false,
      isFailureOnly: false,
      currentSampleResult: undefined,
      activeResultDetailPane: '',
      activeSampleRequestPane: 'requestBody',
      activeSampleResponsePane: 'responseBody',

    }
  },
  methods: {

    handleIsFailOnlyChange(value){
      if(value){
        this.isSuccessOnly = false
      }
    },

    handleIsSuccessOnlyChange(value){
      if(value){
        this.isFailureOnly = false
      }
    },

    handleResultNodeClick(data){
      this.currentSampleResult = data
      if(this.activeResultDetailPane === ''){
        this.activeResultDetailPane = 'sampleResult'
      }
    },
  },
  computed: {
    resultTreeData(){
      let data = []
      for(let index = 0; index < this.sampleResults.length; index++){
        let sampleResult = this.sampleResults[index]
        if(this.isSuccessOnly && !this.isFailureOnly){
          if(sampleResult['successful']){
            data.push(sampleResult)
          }
        } else if(this.isFailureOnly && !this.isSuccessOnly){
          if(!sampleResult['successful']){
            data.push(sampleResult)
          }
        } else {
          data.push(sampleResult)
        }
      }
      return data
    }
  },
  watch: {
    // 监听取样器结果数量，使得滚动条自动定位到最底部
    "resultTreeData": {
      handler: function (){
        let sampleResultTreeEl = document.getElementById("sampleResultTree")
        if(sampleResultTreeEl !== null && sampleResultTreeEl !== undefined && sampleResultTreeEl.scrollTop !== undefined && sampleResultTreeEl.scrollHeight !== undefined){
          sampleResultTreeEl.scrollTop = sampleResultTreeEl.scrollHeight
        }
        if(this.resultTreeData.length === 0){
          this.currentSampleResult = undefined
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">

.result-tree-view{
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;

  .result-tree{
    height: 100%;
    width: 300px;
    min-width: 300px;
    overflow: auto;
    border-right: 1px solid #DCDFE6;
    box-sizing: border-box;

    .result-tree-type{
      height: 32px;
      line-height: 32px;
      border-bottom: 1px solid #DCDFE6;
      box-sizing: border-box;
    }

    .result-tree-data{
      height: calc(100% - 32px);
      overflow: auto;

      .result-tree-node{
        width: 100%;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        img{
          width: 14px;
          height: 14px;
          margin-top: 2px;
        }
      }
    }
  }
  .result-detail {
    height: 100%;
    flex-grow: 1;
    text-align: left;

    .sample-result-wrap{
      margin: 0 5px;
      white-space: pre-wrap;

      img{
        box-shadow: 0 0 2px #bdc3c7;
      }
    }
  }
}


.label{
  &::after{
    content: ":";
  }
}

</style>