<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">应用于（Apply to）</div>
      <div class="sugar-normal-line sugar-flex-row">
        <el-radio-group v-model="element.scope">
          <el-radio label="all">Main sample and sub-samples</el-radio>
          <el-radio label="parent">Main sample only</el-radio>
          <el-radio label="child">Sub-samples only</el-radio>
          <el-radio label="variable">JMeter Variable Name to use</el-radio>
        </el-radio-group>
        <div style="flex-grow: 1;">
          <el-input v-model="element.variable" @focus="handleVariableFocus"></el-input>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">测试字段（Test Field）</div>
      <el-radio-group v-model="element.testField" style="width: 100%;">
        <div class="sugar-flex-row">
          <div style="flex-grow: 1;">
            <div><el-radio label="Assertion.response_data">响应文本</el-radio></div>
            <div><el-radio label="Assertion.request_headers">请求头</el-radio></div>
            <div><el-radio label="Assertion.request_data">请求数据</el-radio></div>
          </div>
          <div style="flex-grow: 1;">
            <div><el-radio label="Assertion.response_code">响应代码</el-radio></div>
            <div><el-radio label="Assertion.sample_label">URL样本</el-radio></div>
          </div>
          <div style="flex-grow: 1;">
            <div><el-radio label="Assertion.response_message">响应信息</el-radio></div>
            <div><el-radio label="Assertion.response_data_as_document">文档（文本）</el-radio></div>
          </div>
          <div style="flex-grow: 1;">
            <div><el-radio label="Assertion.response_headers">响应头</el-radio></div>
            <div><el-checkbox v-model="element.assumeSuccess">忽略状态</el-checkbox></div>
          </div>
        </div>
      </el-radio-group>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">模式匹配规则（Pattern Matching Rules）</div>
      <div class="sugar-flex-row" style="justify-content: center;">
        <div class="sugar-normal-line">
          <el-radio-group v-model="radio">
            <el-radio :label="radioLabels.contain">包括</el-radio>
            <el-radio :label="radioLabels.match">匹配</el-radio>
            <el-radio :label="radioLabels.equal">等于</el-radio>
            <el-radio :label="radioLabels.substring">子串</el-radio>
          </el-radio-group>
        </div>
        <div class="sugar-normal-line">
          <el-checkbox v-model="isNot">否</el-checkbox>
          <el-checkbox v-model="isOr">或者</el-checkbox>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">测试模式（Pattern Test）</div>
      <div style="border: 1px solid #DCDFE6; background-color: #F0F2F0;">
        <div style="text-align: center; border-bottom: 1px solid #DCDFE6;" class="sugar-normal-line">测试模式</div>
        <div style="height: 400px;overflow: auto;">
          <div :class="currentTestString === str ? 'active-test-string-editor':''" style="height: 100px; margin-bottom: 2px;" v-for="str in element.testString" :key="str.id" @click="currentTestString = str">
            <jmeter-editor language="plain_text" :read-only="false" :script="str.string" @scriptUpdate="handleTestStringUpdate"></jmeter-editor>
          </div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 5px;">
        <el-button type="primary" @click="handleTestStringAdd">添加</el-button>
        <el-button type="primary" @click="handleTestStringDel">删除</el-button>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">自定义失败消息（Custom Failure Message）</div>
      <div style="height: 100px;">
        <jmeter-editor language="plain_text" :script="element.customMessage" :read-only="false" @scriptUpdate="handleCustomMessageUpdate"></jmeter-editor>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
import {TestString} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "AssertionResponse",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      radioLabels: {
        contain: 1 << 1,
        match: 1,
        equal: 1 << 3,
        substring: 1 << 4,
      },
      orValue: 1 << 5,
      notValue: 1 << 2,

      currentTestString: undefined,
    }
  },
  methods: {
    handleVariableFocus(){
      this.element.scope = 'variable'
    },

    handleTestStringUpdate(testString){
      this.currentTestString.string = testString
    },

    // 添加测试字符串
    handleTestStringAdd(){
      let testStr = new TestString()
      this.element.testString.push(testStr)
      this.currentTestString = testStr
    },

    // 删除测试字符串
    handleTestStringDel(){
      for(let index = 0; index < this.element.testString.length && this.currentTestString !== undefined; index++){
        if(this.element.testString[index].id === this.currentTestString.id){
          this.element.testString.splice(index, 1)
          this.currentTestString = undefined
          return
        }
      }
    },

    handleCustomMessageUpdate(message){
      this.element.customMessage = message
    }
  },
  computed: {
    radio: {
      get(){
        let testType = this.element.testType
        if((testType & this.radioLabels.equal) !== 0){
          return this.radioLabels.equal
        } else if((testType & this.radioLabels.match) !== 0){
          return this.radioLabels.match
        } else if((testType & this.radioLabels.substring) !== 0){
          return this.radioLabels.substring
        } else {
          return this.radioLabels.contain
        }
      },
      set(value){
        let mask = (this.radioLabels.contain | this.radioLabels.match | this.radioLabels.equal | this.radioLabels.substring)
        this.element.testType = this.element.testType & ~mask | value
      }
    },
    isNot: {
      get(){
        return (this.element.testType & this.notValue) !== 0
      },
      set(value){
        this.element.testType = value ? (this.element.testType | this.notValue) : (this.element.testType & ~this.notValue)
      }
    },
    isOr: {
      get(){
        return (this.element.testType & this.orValue) !== 0
      },
      set(value){
        this.element.testType = value ? (this.element.testType | this.orValue) : (this.element.testType & ~this.orValue)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.active-test-string-editor{
  border: 1px solid #2ebf91;
  transition: border .5s;
}
</style>