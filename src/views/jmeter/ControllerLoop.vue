<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-flex-row">
      <div class="sugar-flex-row" style="margin-right: 5px;">
        <div style="margin-right: 20px;">循环次数</div>
        <div>
          <el-checkbox v-model="element.continueForever">永远</el-checkbox>
        </div>
      </div>
      <div style="flex-grow: 1;">
        <el-input v-model="element.loops"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerLoop",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>