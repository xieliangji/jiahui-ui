<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">延迟线程以确保目标吞吐量</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">目标吞吐量（每个"吞吐期"的样本）</div>
        <div class="input">
          <el-input v-model="element.throughput"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">吞吐量周期（秒）</div>
        <div class="input">
          <el-input v-model="element.throughputPeriod"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">测试持续时间（秒）</div>
        <div class="input">
          <el-input v-model="element.duration"></el-input>
        </div>
      </div>
    </div>

    <div class="sugar-top-border">
      <div class="sugar-border-text">批处理离开</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">批处理中的线程数（线程）</div>
        <div class="input">
          <el-input v-model="element.batchSize"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">批处理中的线程之间的延迟（ms）</div>
        <div class="input">
          <el-input v-model="element.batchThreadDelay"></el-input>
        </div>
      </div>
    </div>

    <div class="sugar-top-border">
      <div class="sugar-border-text">设置以确保可重复的顺序</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">随机种子（从0变为随机）</div>
        <div class="input">
          <el-input v-model="element.randomSeed"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "TimerPrecise",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 220px !important;
}
</style>