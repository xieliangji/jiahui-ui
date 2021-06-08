<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Starting Value</div>
      <div class="input">
        <el-input v-model="element.start"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">递增</div>
      <div class="input">
        <el-input v-model="element.incr"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Maximum Value</div>
      <div class="input">
        <el-input v-model="element.end"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">数字格式</div>
      <div class="input">
        <el-input v-model="element.format"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">引用名称</div>
      <div class="input">
        <el-input v-model="element.name"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.perUser">与每用户独立的跟踪计数器</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox :disabled="!element.perUser" v-model="element.resetOnTgIteration">在每个线程组迭代上重置计数器</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementCounter",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 120px !important;
}
</style>