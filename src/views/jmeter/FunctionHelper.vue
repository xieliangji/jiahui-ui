<template>
  <sugar-dialog height="640px" width="800px" @close="$emit('close')">
    <div slot="title">函数助手</div>
    <div id="sugarFunc">
      <div id="funcSelect" class="sugar-layout-wrap">
        <div style="width: 250px;">
          <el-select v-model="functionName" no-data-text=" " placeholder=" " @change="handleCurrentFunctionNameChange">
            <el-option v-for="func in functionList" :key="func.id" :value="func.name" :label="func.name"></el-option>
          </el-select>
        </div>
        <el-button type="primary" style="margin-left: 5px;" @click="handleToFunctionLink">帮助</el-button>
      </div>
      <div class="sugar-layout-wrap">
        <div>函数参数</div>
        <el-table :data="functionArguments" row-key="id" highlight-current-row height="200px" empty-text=" ">
          <el-table-column prop="name">
            <div slot="header" class="sugar-table-header">名称</div>
            <template slot-scope="scope">
              <el-input readonly v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="value">
            <div slot="header" class="sugar-table-header">值</div>
            <template slot-scope="scope">
              <el-input v-model="scope.row.value"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="sugar-layout-wrap sugar-flex-row sugar-line">
        <div style="margin-right: 5px;">拷贝并粘贴函数字符串</div>
        <div style="flex-grow: 1;">
          <el-input v-model="functionCallResult['expression']" readonly></el-input>
        </div>
        <div>
          <el-button type="primary" style="margin-left: 10px;" @click="handleCurrentFunctionCall">生成</el-button>
          <el-button type="primary" @click="handleArgumentValueReset">重置变量</el-button>
        </div>
      </div>
      <div class="sugar-layout-wrap sugar-flex-row" style="margin-top: 20px;">
        <div style="width: 120px; text-align: right; margin-right: 5px;">函数结果</div>
        <div style="height: 100px; flex-grow: 1;">
          <jmeter-editor read-only :script="functionCallResult['result']" language="plan_text"></jmeter-editor>
        </div>
      </div>
      <div class="sugar-layout-wrap sugar-flex-row">
        <div style="width: 120px; text-align: right; margin-right: 5px;">当前JMeter变量</div>
        <div style="height: 150px; flex-grow: 1;">
          <jmeter-editor read-only :script="functionCallResult['jmeterVariables']" language="plan_text"></jmeter-editor>
        </div>
      </div>
    </div>
  </sugar-dialog>
</template>

<script>
import SugarDialog from "@/components/SugarDialog";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "FunctionHelper",
  components: {JmeterEditor, SugarDialog},
  data(){
    return {
      functionList: [],
      currentFunction: {},
      functionCallResult: {},
    }
  },
  methods: {
    handleCurrentFunctionNameChange(functionName){
      this.functionCallResult = functionName !== undefined ? {}:{}
    },

    handleToFunctionLink(){
      let url = "https://jmeter.apache.org/usermanual/functions.html#".concat(this.currentFunction.name)
      window.open(url)
    },

    handleCurrentFunctionCall(){
      let functionCall = {id: 1, name: this.functionName, argumentDescriptions: []}
      for(let index = 0; index < this.functionArguments.length; index++){
        functionCall.argumentDescriptions.push(this.functionArguments[index].value)
      }
      this.$axios.post(this.$store.state.restApi.sugarJMeterExecuteFunction, functionCall).then(response => {
        if(response.data.code === 0){
          this.functionCallResult = response.data.payload
        } else {
          this.$message({message: response.data.message, type: "error", duration: 3000})
        }
      }).catch(err => {
        this.$message({message: err, type: "error", duration: 3000})
      })
    },

    handleArgumentValueReset(){
      for(let index = 0; index < this.functionArguments.length; index++){
        this.functionArguments[index].value = ''
      }
    }
  },
  computed: {
    functionName: {
      get(){
        return this.currentFunction.name
      },
      set(name){
        for(let index = 0; index < this.functionList.length; index++){
          if(name === this.functionList[index].name){
            this.currentFunction = this.functionList[index]
            break
          }
        }
      }
    },
    functionArguments: {
      get(){
        let argumentDescriptions = this.currentFunction["argumentDescriptions"]
        let functionArguments = []
        for(let index = 0; index < argumentDescriptions.length; index++){
          functionArguments.push({id: index, name: argumentDescriptions[index], value: ''})
        }
        return functionArguments
      }
    }
  },
  mounted() {
    this.$axios.get(this.$store.state.restApi.sugarJMeterFunctions).then(response => {
      if(response.data.code === 0){
        this.functionList = response.data.payload
        this.currentFunction = this.functionList[0]
      } else {
        this.$message({message: response.data.message, type: "error", duration: 3000})
      }
    }).catch(err =>{
      this.$message({message: err, type: "error", duration: 3000})
    })
  },
}
</script>

<style scoped lang="scss">

#sugarFunc{
  &::v-deep .el-input__inner{
    height: 32px !important;
  }
}

#funcSelect{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

}

.function-table{
  border: 1px solid #bdc3c7;
  margin: 0 5px;
}

.function-table-header{
  text-align: center;
  .function-table-header-nv{
    width: 50%;
    background: #F0F2F0;
  }
}

#function-arguments{
  height: 200px;
  overflow: auto;
}

.function-table-row-nv{
  text-align: left;
  font-weight: normal;
  width: 50%;
  border-top: 1px solid #bdc3c7;
  border-bottom: 1px solid #bdc3c7;
  &::v-deep input{
    border:  none;
    height: 28px;
    line-height: 28px;
    margin-bottom: 2px;
  }
}

</style>