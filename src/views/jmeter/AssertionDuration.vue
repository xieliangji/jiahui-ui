<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">应用于（Apply to）</div>
      <div class="sugar-normal-line sugar-flex-row">
        <el-radio-group v-model="element.scope">
          <el-radio label="all">Main sample and sub-samples</el-radio>
          <el-radio label="parent">Main sample only</el-radio>
          <el-radio label="child">Sub-samples only</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">断言持续时间</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">持续时间（毫秒）</div>
        <div class="input">
          <el-input v-model="element.duration"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "AssertionDuration",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>