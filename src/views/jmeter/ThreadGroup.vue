<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">在取样器错误后要执行的动作</div>
      <el-radio-group v-model="element.onSampleError">
        <el-radio label="continue">继续</el-radio>
        <el-radio label="nextloop">启动下一进程循环</el-radio>
        <el-radio label="sthopThread">停止线程</el-radio>
        <el-radio label="stopTest">停止测试</el-radio>
        <el-radio label="stopTestNow">立即停止测试</el-radio>
      </el-radio-group>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">线程属性</div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">线程数</div>
        <div class="input">
          <Input v-model="element.numThreads"></Input>
        </div>
      </div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">Ramp-Up时间（秒）</div>
        <div class="input">
          <Input v-model="element.rampTime"></Input>
        </div>
      </div>
      <div class="sugar-flex-row sugar-normal-line">
        <div class="label" style="margin-right: 5px;">
          <span style="margin-right: 10px;">循环次数</span>
          <el-checkbox v-model="element.continueForever">永远</el-checkbox>
        </div>
        <div style="flex-grow: 1;">
          <Input v-model="element.loops"></Input>
        </div>
      </div>
      <div class="sugar-normal-line">
        <el-checkbox v-model="element.sameUserOnNextIteration">Same user on each iteration</el-checkbox>
      </div>
      <div class="sugar-normal-line" v-if="element.delayedStart !== undefined">
        <el-checkbox v-model="element.delayedStart">延迟创建线程直到需要</el-checkbox>
      </div>
      <div class="sugar-normal-line">
        <el-checkbox v-model="element.scheduler">调度器</el-checkbox>
      </div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">持续时间（秒）</div>
        <div class="input">
          <Input v-model="element.duration" :disabled="!element.scheduler"></Input>
        </div>
      </div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">启动延迟（秒）</div>
        <div class="input">
          <Input v-model="element.delay" :disabled="!element.scheduler"></Input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ThreadGroup",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

.label{
  width: 129px !important;
  text-align: right;
}
</style>