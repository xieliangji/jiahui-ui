<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">输入变量前缀</div>
      <div class="input">
        <el-input v-model="element.inputVal"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">开始循环字段（不包含）</div>
      <div class="input">
        <el-input v-model="element.startIndex"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">结束循环字段（含）</div>
      <div class="input">
        <el-input v-model="element.endIndex"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">输出变量名称</div>
      <div class="input">
        <el-input v-model="element.returnVal"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.useSeparator">数字之前加上下划线"_"</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerForeach",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 155px !important;
}
</style>