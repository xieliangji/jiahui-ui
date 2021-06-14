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
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">引用名称</div>
      <div class="input">
        <el-input v-model="element.refName"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Xpath Query</div>
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
    <div class="sugar-flex-row">
      <div>
        <div class="label">Namespaces aliases list</div>
        <div class="label">(prefix= full namespaces, 1 per line)</div>
      </div>
      <div style="height: 200px; margin-left: 5px; flex-grow: 1;">
        <jmeter-editor language="plain_text" :read-only="false" :script="element.namespace" @scriptUpdate="handleNamespacesUpdate"></jmeter-editor>
      </div>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.fragment">Return entire XPath fragment instead of text content</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "PostprocessorXpath2",
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
    }
  }
}
</script>

<style scoped>
.label{
  width: 223px !important;
  text-align: right;
}
</style>