<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">别名选择配置</div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">预加载</div>
        <div class="input">
          <el-select v-model="element.preload">
            <el-option value="True"></el-option>
            <el-option value="False"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">指向证书别名的变量名称</div>
        <div class="input">
          <el-input v-model="element.clientCertAliasVarName"></el-input>
        </div>
      </div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">别名起始索引（0-起始）</div>
        <div class="input">
          <el-input v-model="element.startIndex"></el-input>
        </div>
      </div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">别名末尾索引（0-起始）</div>
        <div class="input">
          <el-input v-model="element.endIndex"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementKey",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 160px !important;
}
</style>