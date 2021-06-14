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
      <div class="sugar-border-text">要检查的响应字段</div>
      <div style="text-align: center;">
        <el-radio-group v-model="element.useHeaders">
          <el-radio label="false">主体</el-radio>
          <el-radio label="unescaped">Body（unescaped）</el-radio>
          <el-radio label="as_document">Body as a Document</el-radio>
          <el-radio label="true">信息头</el-radio>
          <el-radio label="request_headers">Request Headers</el-radio>
          <el-radio label="URL">URL</el-radio>
          <el-radio label="code">响应代码</el-radio>
          <el-radio label="message">响应信息</el-radio>
        </el-radio-group>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">引用名称</div>
        <div class="input">
          <el-input v-model="element.refName"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">正则表达式</div>
        <div class="input">
          <el-input v-model="element.regex"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">模板</div>
        <div class="input">
          <el-input v-model="element.template"></el-input>
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
  name: "PostprocessorRegex",
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