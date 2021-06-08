<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">输出变量</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">变量名称</div>
        <div class="input">
          <el-input v-model="element.variableName"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">输出格式</div>
        <div class="input">
          <el-input v-model="element.outputFormat"></el-input>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">配置随机发生器</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">最小值</div>
        <div class="input">
          <el-input v-model="element.minimumValue"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">最大值</div>
        <div class="input">
          <el-input v-model="element.maximumValue"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">随机种子</div>
        <div class="input">
          <el-input v-model="element.randomSeed"></el-input>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">选项</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">每线程（用户）</div>
        <div class="input">
          <el-select v-model="element.perThread">
            <el-option :value="true" label="True"></el-option>
            <el-option :value="false" label="False"></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementRandom",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 100px !important;
}
</style>