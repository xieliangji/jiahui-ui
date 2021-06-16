<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">Apply to</div>
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
      <div class="sugar-border-text">XML解析选项（XML Parsing Options）</div>
      <div style="text-align: center;">
        <div>
          <el-checkbox v-model="element.tolerant">Use Tidy (tolerant parser)</el-checkbox>
          <el-checkbox v-model="element.quiet" :disabled="!element.tolerant">Quiet</el-checkbox>
          <el-checkbox v-model="element.reportErrors" :disabled="!element.tolerant">Report Errors</el-checkbox>
          <el-checkbox v-model="element.showWarnings" :disabled="!element.tolerant">Show Warnings</el-checkbox>
        </div>
        <div>
          <el-checkbox v-model="element.namespace" :disabled="element.tolerant">Use Namespaces</el-checkbox>
          <el-checkbox v-model="element.validate" :disabled="element.tolerant">Validate XML</el-checkbox>
          <el-checkbox v-model="element.whitespace" :disabled="element.tolerant">Ignore Whitespace</el-checkbox>
          <el-checkbox v-model="element.downloadDtds" :disabled="element.tolerant">Fetch External DTDs</el-checkbox>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">XML断言（XML Assertion)</div>
      <div class="sugar-normal-line">
        <el-checkbox v-model="element.negate">倒置断言（若XPath表达式匹配则为失败）</el-checkbox>
        <el-button type="primary" style="margin-left: 200px;" @click="handleXPathCheck">验证</el-button>
      </div>
      <div style="height: 600px;">
        <jmeter-editor language="plain_text" :script="element.xpath" :read-only="false" @scriptUpdate="handleXPathUpdate"></jmeter-editor>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "AssertionXpath",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleVariableFocus(){
      this.element.scope = 'variable'
    },

    handleXPathUpdate(xpath){
      this.element.xpath = xpath
    },

    handleXPathCheck(){
      try{
        let evaluator = new XPathEvaluator()
        evaluator.createExpression(this.element.xpath)
        this.$message({message: 'xpath表达式正确', type: "success", duration: 2000})
      } catch (e){
        console.log(e)
        this.$message({message: `非法xpath表达式 ${e.message}`, type: "error", duration: 2000})
      }
    }
  }
}
</script>

<style scoped>

</style>