<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">分组</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">模拟用户组的数量</div>
        <div class="input">
          <el-input v-model="element.groupSize"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">超时时间以毫秒为单位</div>
        <div class="input">
          <el-input v-model="element.timeoutInMs"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "TimerSync",
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