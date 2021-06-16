<template>
  <sugar-jmeter-element :jmeter-element="element">
    <el-radio-group v-model="element.action" style="width: 100%;">
      <div class="sugar-top-border">
        <div class="sugar-border-text" style="line-height: 18px;">Logical Action on Thread</div>
        <div class="sugar-flex-row">
          <div style="flex-grow: 1;">
            <div class="sugar-normal-line">
              <el-radio :label="1" @change="handleTargetChange">Pause</el-radio>
            </div>
            <div class="sugar-normal-line">
              <el-radio :label="3" @change="handleTargetChange">Start Next Thread Loop</el-radio>
            </div>
            <div class="sugar-normal-line">
              <el-radio :label="5" @change="handleTargetChange">Break Current Loop</el-radio>
            </div>
          </div>
          <div style="flex-grow: 1;">
            <div class="sugar-normal-line sugar-label-input">
              <div class="label"><p>Duration（ms）</p></div>
              <div class="input">
                <el-input v-model="element.duration" :disabled="!isTargetDisable"></el-input>
              </div>
            </div>
            <div class="sugar-normal-line">
              <el-radio :label="4" @change="handleTargetChange">Go to next iteration of Current Loop</el-radio>
            </div>
          </div>
        </div>
      </div>
      <div class="sugar-top-border">
        <div class="sugar-border-text" style="line-height: 18px;">Logical Action on Thread/Test</div>
        <div class="sugar-flex-row">
          <div style="flex-grow: 1">
            <div class="sugar-normal-line">
              <el-radio :label="0">Stop</el-radio>
            </div>
            <div class="sugar-normal-line">
              <p>Target</p>
            </div>
          </div>
          <div style="flex-grow: 1">
            <div class="sugar-normal-line">
              <el-radio :label="2">Stop Now</el-radio>
            </div>
            <div class="sugar-normal-line">
              <el-select v-model="element.target" :disabled="isTargetDisable">
                <el-option :value="0" label="Current Thread"></el-option>
                <el-option :value="2" label="All Threads"></el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>

    </el-radio-group>

  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "SamplerTestAction",
  components: {SugarJmeterElement},
  props:{
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleTargetChange(){
      this.element.target = 0
    }
  },
  computed: {
    isTargetDisable(){
      let action = this.element.action
      return (action === 1 || action === 3 || action === 5 || action === 4)
    },
  },
}
</script>

<style scoped>

</style>