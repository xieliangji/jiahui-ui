<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">断言JSON路径存在</div>
      <div class="input">
        <el-input v-model="element.jsonPath"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">附加断言值</div>
      <div class="input">
        <el-checkbox v-model="element.jsonValidation"></el-checkbox>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">正则表达式匹配</div>
      <div class="input">
        <el-checkbox :disabled="!element.jsonValidation || element.expectNull" v-model="element.isRegex"></el-checkbox>
      </div>
    </div>
    <div class="sugar-flex-row">
      <div class="label" style="margin-right: 5px;">期望值</div>
      <div style="height: 150px; flex-grow: 1;">
        <jmeter-editor language="plain_text" :read-only="!element.jsonValidation || element.expectNull" :script="element.expectedValue" @scriptUpdate="handleExpectValueUpdate"></jmeter-editor>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">期望为NULL</div>
      <div class="input">
        <el-checkbox v-model="element.expectNull"></el-checkbox>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">倒置断言（满足以上条件则为失败）</div>
      <div class="input">
        <el-checkbox v-model="element.invert"></el-checkbox>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "AssertionJson",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleExpectValueUpdate(expectedValue){
      this.element.expectedValue = expectedValue
    }
  }
}
</script>

<style scoped>
.label{
  text-align: right;
  width: 224px !important;
}
</style>