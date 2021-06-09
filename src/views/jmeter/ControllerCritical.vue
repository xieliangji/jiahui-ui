<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">锁名称</div>
      <div class="input">
        <el-input v-model="element.lockName"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerCritical",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>