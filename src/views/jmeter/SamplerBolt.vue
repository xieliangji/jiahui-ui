<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">查询（Query）</div>
      <div style="text-align: center" class="sugar-normal-line">Cypher Statement</div>
      <div style="height: 400px">
        <jmeter-editor language="plain_text" :script="element.cypher" :read-only="false" @scriptUpdate="handleCypherUpdate"></jmeter-editor>
      </div>
      <div style="text-align: center" class="sugar-normal-line">Params</div>
      <div style="height: 400px">
        <jmeter-editor language="plain_text" :script="element.params" :read-only="false" @scriptUpdate="handleParamsUpdate"></jmeter-editor>
      </div>
      <div class="sugar-normal-line sugar-label-input" style="margin-top: 10px;">
        <div class="label">Record Query Results</div>
        <div class="input">
          <el-select v-model="element.recordQueryResults">
            <el-option :value="false" label="False"></el-option>
            <el-option :value="true" label="True"></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "SamplerBolt",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleCypherUpdate(cypher){
      this.element.cypher = cypher
    },

    handleParamsUpdate(params){
      this.element.params = params
    }
  }
}
</script>

<style scoped>

</style>