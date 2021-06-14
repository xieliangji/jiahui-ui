<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">线程延迟属性</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">偏差（毫秒）</div>
        <div class="input">
          <el-input v-model="element.range"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">固定延迟偏移（毫秒）</div>
        <div class="input">
          <el-input v-model="element.delay"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "TimerPoisson",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 140px !important;
}
</style>