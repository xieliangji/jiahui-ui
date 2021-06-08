<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.clearEachIteration">每次迭代中清除缓存</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.controlledByThread">Use Thread Group configuration to control cache clearing</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.useExpires">Use Cache-Control/Expires headers when processing GET requests</el-checkbox>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">缓存中元素的最大数量</div>
      <div class="input">
        <el-input v-model="element.maxSize"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementCache",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>