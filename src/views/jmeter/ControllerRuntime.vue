<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Runtime (seconds)</div>
      <div class="input">
        <el-input v-model="element.seconds"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerRuntime",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>