<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">Variable Name Bound to Pool</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Variable Name</div>
        <div class="input">
          <el-input v-model="element.dataSource"></el-input>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">SQL Query</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Query Type</div>
        <div class="input">
          <el-select v-model="element.queryType">
            <el-option value="Select Statement" label="Select Statement"></el-option>
            <el-option value="Update Statement" label="Update Statement"></el-option>
            <el-option value="Prepared Select Statement" label="Prepared Select Statement"></el-option>
            <el-option value="Callable Statement" label="Callable Statement"></el-option>
            <el-option value="Prepared Update Statement" label="Prepared Update Statement"></el-option>
            <el-option value="Commit" label="Commit"></el-option>
            <el-option value="Rollback" label="Rollback"></el-option>
            <el-option value="AutoCommit(false)" label="AutoCommit(false)"></el-option>
            <el-option value="AutoCommit(true)" label="AutoCommit(true)"></el-option>
          </el-select>
        </div>
      </div>
      <div style="height: 500px; margin-bottom: 10px;">
        <jmeter-editor language="sql" :read-only="false" :script="element.query" @scriptUpdate="handleSqlUpdate"></jmeter-editor>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Parameter Values</div>
        <div class="input">
          <el-input v-model="element.queryArguments"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Parameter Types</div>
        <div class="input">
          <el-input v-model="element.queryArgumentsTypes"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Variable Names</div>
        <div class="input">
          <el-input v-model="element.variableNames"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Result Variable Name</div>
        <div class="input">
          <el-input v-model="element.resultVariable"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Query Timeout</div>
        <div class="input">
          <el-input v-model="element.queryTimeout"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Limit ResultSet</div>
        <div class="input">
          <el-input v-model="element.resultSetMaxRows"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Handle ResultSet</div>
        <div class="input">
          <el-select v-model="element.resultSetHandler">
            <el-option value="Store as String" label=""></el-option>
            <el-option value="Store as Object" label=""></el-option>
            <el-option value="Count Records" label=""></el-option>
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
  name: "ElementJdbc",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleSqlUpdate(sql) {
      this.element.query = sql
    }
  }
}
</script>

<style scoped lang="scss">

.label{
  width: 136px !important;
}

</style>