<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-flex-row">
      <div style="margin-right: 5px;">Condition (function or variable)</div>
      <div style="flex-grow: 1; height: 200px;">
        <jmeter-editor language="groovy" :read-only="false" :script="element.condition" @scriptUpdate="handleConditionUpdate"></jmeter-editor>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "ControllerWhile",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  methods: {
    handleConditionUpdate(condition){
      this.element.condition = condition
    }
  }
}
</script>

<style scoped>

</style>