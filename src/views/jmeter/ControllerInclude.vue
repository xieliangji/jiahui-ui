<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">Include Test Plan</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">文件名</div>
        <div class="input">
          <el-input v-model="element.includePath"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerInclude",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>