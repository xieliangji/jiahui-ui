<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">在每个受影响的采样器之前延迟</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">目标吞吐量（每分钟的样本量）</div>
        <div class="input">
          <el-input v-model="element.throughput"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">基于计算吞吐量</div>
        <div class="input">
          <el-select v-model="element.calcMode">
            <el-option :value="0" label="只有此线程"></el-option>
            <el-option :value="1" label="所有活动线程"></el-option>
            <el-option :value="2" label="当前线程组中的所有活动线程"></el-option>
            <el-option :value="3" label="所有活动线程（共享）"></el-option>
            <el-option :value="4" label="当前线程组中的所有活动线程（共享）"></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "TimerConstantThroughput",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 200px !important;
}
</style>