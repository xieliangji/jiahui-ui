<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Regular Expression Reference Name</div>
      <div class="input">
        <el-input v-model="element.regexRefName"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Parameter Names Regexp Group Number</div>
      <div class="input">
        <el-input v-model="element.paramNamesGrNr"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">Parameter Values Regexp Group Number</div>
      <div class="input">
        <el-input v-model="element.paramValuesGrNr"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PreprocessorRegex",
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

<style scoped>
.label{
  width: 260px !important;
}
</style>