<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-flex-row">
      <div class="sugar-flex-col" style="justify-content: center; margin-right: 5px;">
        <img src="../../assets/warning.png">
      </div>
      <div class="sugar-flex-col">
        <div class="sugar-normal-line">For performance it is advised to check "Interpret Condition as Variable Expression"</div>
        <div class="sugar-normal-line">and use __jexl3 or __groovy evaluating to true or false or a variable that contains true or false.</div>
      </div>
    </div>
    <div>
      <div class="sugar-flex-row">
        <div class="if-left">Expression(must evaluate to true or false)</div>
        <div style="height: 200px; flex-grow: 1;">
          <jmeter-editor language="groovy" :read-only="false" :script="element.condition" @scriptUpdate="handleConditionUpdate"></jmeter-editor>
        </div>
      </div>
    </div>
    <div class="sugar-flex-row sugar-normal-line" style="margin-top: 10px;">
      <div class="if-left">
        <el-button type="primary" @click="handleStatusClick">Use status of last sample</el-button>
      </div>
      <div style="flex-grow: 1;">${JMeterThread.last_sample_ok} can be used to test if last sampler was successful</div>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.useExpression">Interpret Condition as Variable Expression</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.evaluateAll">Evaluate for all children</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "ControllerIf",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleConditionUpdate(condition){
      this.element.condition = condition
    },

    handleStatusClick(){
      this.element.condition = this.element.condition + '${JMeterThread.last_sample_ok}'
    }
  }
}
</script>

<style scoped>
.if-left{
  width: 355px;
  margin-right: 5px;
}
</style>