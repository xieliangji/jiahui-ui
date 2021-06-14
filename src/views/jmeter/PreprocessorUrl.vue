<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">会话参数名称</div>
      <div class="input">
        <el-input v-model="element.argumentName"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.pathExtension">路径扩展（使用";"作分隔符）</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.pathExtensionNoEqual">Do not use equals in path extension(Intershop Enfinity compatibility)</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.pathExtensionNoQuestionMark">Do not use questionmark in path extension(Intershop Enfinity compatibility)</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.cacheValue">缓存会话Id</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.encode">URL编码</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PreprocessorUrl",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>