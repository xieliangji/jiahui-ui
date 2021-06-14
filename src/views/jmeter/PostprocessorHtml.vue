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
      <div class="sugar-border-text">CSS选择器提取器实现</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">CSS 选择器提取器实现</div>
        <div class="input">
          <el-select v-model="element.extractorImpl" placeholder="">
            <el-option value="JSOUP"></el-option>
            <el-option value="JODD"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">引用名称</div>
        <div class="input">
          <el-input v-model="element.refName"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">CSS选择器表达式</div>
        <div class="input">
          <el-input v-model="element.expr"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">属性</div>
        <div class="input">
          <el-input v-model="element.attribute"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">匹配数字（0代表随机）</div>
        <div class="input">
          <el-input v-model="element.matchNumber"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-flex-row">
        <div class="sugar-label-input">
          <div class="label">缺省值</div>
          <div class="input">
            <el-input v-model="element.default"></el-input>
          </div>
        </div>
        <div style="margin-left: 10px;">
          <el-checkbox v-model="element.defaultEmptyValue">使用空默认值</el-checkbox>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PostprocessorHtml",
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
  width: 145px !important;
}
</style>