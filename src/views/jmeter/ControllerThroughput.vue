<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Based on</div>
      <div class="input">
        <el-select v-model="element.style">
          <el-option :value="0" label="Total Executions"></el-option>
          <el-option :value="1" label="Percent Executions"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">吞吐量</div>
      <div class="input">
        <el-input v-model="throughput"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.perThread">Per User</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ControllerThroughput",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  computed: {
    throughput: {
      get(){
        console.log('reset throughput')
        return this.element.style === 0 ? this.element.maxThroughput : this.element.percentThroughput
      },
      set(value){
        if(this.element.style === 0){
          this.element.maxThroughput = value
        } else {
          this.element.percentThroughput = value
        }
      }
    }
  }
}
</script>

<style scoped>
.label{
  width: 70px !important;
}
</style>