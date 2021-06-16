<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">JMeter属性</div>
      <div class="input">
        <el-select v-model="element.displayJMeterProperties">
          <el-option :value="true" label="True"></el-option>
          <el-option :value="false" label="False"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">JMeter变量</div>
      <div class="input">
        <el-select v-model="element.displayJMeterVariables">
          <el-option :value="true" label="True"></el-option>
          <el-option :value="false" label="False"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">系统属性</div>
      <div class="input">
        <el-select v-model="element.displaySystemProperties">
          <el-option :value="true" label="True"></el-option>
          <el-option :value="false" label="False"></el-option>
        </el-select>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "SamplerDebug",
  components: {SugarJmeterElement},
  props: {
    element:Object
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>
.label{
  width: 71px !important;
}
</style>