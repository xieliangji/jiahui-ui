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
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Names Of Created Variables</div>
        <div class="input">
          <el-input v-model="element.referenceNames"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">JSON Path Expressions</div>
        <div class="input">
          <el-input v-model="element.jsonPathExprs"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Match No.(0 for Random)</div>
        <div class="input">
          <el-input v-model="element.matchNumbers"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Compute Concatenation Var(suffix _ALL)</div>
        <div class="input">
          <el-checkbox v-model="element.computeConcat"></el-checkbox>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Default Values</div>
        <div class="input">
          <el-input v-model="element.defaultValues"></el-input>
        </div>
      </div>
    </div>

  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PostprocessorJson",
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
    }
  }
}
</script>

<style scoped>
.label{
  width: 254px !important;
}
</style>