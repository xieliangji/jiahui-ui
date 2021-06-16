<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">应用于（Apply to）</div>
      <div class="sugar-normal-line sugar-flex-row">
        <el-radio-group v-model="element.scope">
          <el-radio label="all">Main sample and sub-samples</el-radio>
          <el-radio label="parent">Main sample only</el-radio>
          <el-radio label="child">Sub-samples only</el-radio>
          <el-radio label="variable">JMeter Variable Name to use</el-radio>
        </el-radio-group>
        <div style="flex-grow: 1;">
          <el-input v-model="element.variable" @focus="handleVariableFocus"></el-input>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">响应字段大小（Response Size Field to Test）</div>
      <div style="text-align: center;">
        <el-radio-group v-model="element.testField">
          <el-radio label="SizeAssertion.response_network_sze">完整响应</el-radio>
          <el-radio label="SizeAssertion.response_headers">响应头</el-radio>
          <el-radio label="SizeAssertion.response_data">响应体</el-radio>
          <el-radio label="SizeAssertion.response_code">响应代码</el-radio>
          <el-radio label="SizeAssertion.response_message">响应信息</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">大小断言（Size to Assert）</div>
      <div class="sugar-flex-row">
        <div class="sugar-flex-col" style="justify-content: center; flex-grow: 1; margin-right: 5px;">
          <div class="sugar-normal-line" style="text-align: right;">
            <div class="sugar-label-input" style="width: 200px; float: right;">
              <div class="label">字节大小</div>
              <div class="input">
                <el-input v-model="element.size"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div style="flex-grow: 1;">
          <div class="sugar-normal-line">比较类型</div>
          <el-radio-group v-model="element.operator">
            <div class="sugar-flex-col">
              <div class="sugar-normal-line">
                <el-radio :label="1">=</el-radio>
              </div>
              <div class="sugar-normal-line">
                <el-radio :label="2">!=</el-radio>
              </div>
              <div class="sugar-normal-line">
                <el-radio :label="3">&gt;</el-radio>
              </div>
              <div class="sugar-normal-line">
                <el-radio :label="4">&lt;</el-radio>
              </div>
              <div class="sugar-normal-line">
                <el-radio :label="5">&gt;=</el-radio>
              </div>
              <div class="sugar-normal-line">
                <el-radio :label="6">&lt;=</el-radio>
              </div>
            </div>
          </el-radio-group>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "AssertionSize",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleVariableFocus(){
      this.element.scope = 'variable'
    },
  }
}
</script>

<style scoped>

</style>