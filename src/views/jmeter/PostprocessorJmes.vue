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
      <div class="label">Names of Created Variables</div>
      <div class="input">
        <el-input v-model="element.referenceName"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">JMESPath expressions</div>
      <div class="input">
        <el-input v-model="element.jmesPathExpr"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Match No.(0 for Random)</div>
      <div class="input">
        <el-input v-model="element.matchNumber"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Default Values</div>
      <div class="input">
        <el-input v-model="element.defaultValue"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PostprocessorJmes",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {}
  },
  methods: {
    handleVariableFocus(){
      this.element.scope = 'variable'
    }
  }
}
</script>

<style scoped>
.label{
  width: 175px !important;
}
</style>