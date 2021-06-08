<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.parent">Generate parent sample</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.includeTimers">Include duration of timer and pre-processors in generated sample</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerTransaction",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>