<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">在取样器错误后要执行的动作</div>
      <el-radio-group v-model="element.action" style="width: 100%;">
        <div class="sugar-flex-row">
          <div class="sugar-flex-col" style="flex-grow: 1;">
            <el-radio :label="0">继续</el-radio>
            <el-radio :label="4">启动下一进程</el-radio>
            <el-radio :label="2">停止测试</el-radio>
            <el-radio :label="1">停止线程</el-radio>
          </div>
          <div class="sugar-flex-col" style="flex-grow: 1;">
            <el-radio :label="6">Break Current Loop</el-radio>
            <el-radio :label="5">Go to the next iterations of Current Loop</el-radio>
            <el-radio :label="3">立即停止测试</el-radio>
          </div>
        </div>
      </el-radio-group>
    </div>

  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PostprocessorResultAction",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {}
  },
  methods: {

  }
}
</script>

<style scoped>

</style>