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
      <div class="sugar-border-text">XML Parsing Options</div>
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
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.fragment">Return Entire XPath Fragment Instead of Text Content</el-checkbox>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">引用名称</div>
      <div class="input">
        <el-input v-model="element.refName"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">XPath Query</div>
      <div class="input">
        <el-input v-model="element.xpathQuery"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">匹配数字（0代表随机）</div>
      <div class="input">
        <el-input v-model="element.matchNumber"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">默认值</div>
      <div class="input">
        <el-input v-model="element.default"></el-input>
      </div>
    </div>

  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PostprocessorXpath",
  components: {SugarJmeterElement},
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
    }
  }
}
</script>

<style scoped>
.label{
  width: 148px !important;
}
</style>