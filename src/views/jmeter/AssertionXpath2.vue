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
      <div class="sugar-border-text">XPath2 断言</div>
      <div class="sugar-normal-line sugar-flex-row">
        <div>
          <el-checkbox v-model="element.negate">倒置断言（若XPath表达式匹配则失败）</el-checkbox>
        </div>
        <div style="margin-left: 200px;">
          <el-button type="primary" @click="handleXPathCheck">验证XPath表达式</el-button>
        </div>
      </div>
      <div class="sugar-flex-row">
        <div style="text-align: right; margin-right: 5px;">
          <div>命名空间别名列表</div>
          <div>（prefix=full namespace, 1 per line）</div>
        </div>
        <div style="height: 150px; flex-grow: 1;">
          <jmeter-editor language="java" :script="element.namespaces" :read-only="false" @scriptUpdate="handleNamespacesUpdate"></jmeter-editor>
        </div>
      </div>
      <div style="height: 600px; margin-top: 5px;">
        <jmeter-editor language="xml" :script="element.xpath" :read-only="false" @scriptUpdate="handleXpathUpdate"></jmeter-editor>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "AssertionXpath2",
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

    handleNamespacesUpdate(namespaces){
      this.element.namespaces = namespaces
    },

    handleXpathUpdate(xpath){
      this.element.xpath = xpath
    },

    handleXPathCheck(){
      try{
        let evaluator = new XPathEvaluator()
        evaluator.createExpression(this.element.xpath)
        this.$message({message: 'xpath表达式正确', type: "success", duration: 2000})
      } catch (e){
        this.$message({message: `非法xpath表达式 ${e.message}`, type: "error", duration: 2000})
      }
    }
  }
}
</script>

<style scoped>

</style>