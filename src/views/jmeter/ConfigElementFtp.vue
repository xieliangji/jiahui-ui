<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">服务器名称或IP</div>
      <div class="input">
        <el-input v-model="element.server"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">远程文件</div>
      <div class="input">
        <el-input v-model="element.filename"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">本地文件</div>
      <div class="input">
        <el-input v-model="element.localFilename"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">本地文件内容</div>
      <div class="input">
        <el-input v-model="element.inputData"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line">
      <el-radio-group v-model="element.upload">
        <el-radio :label="false">get(RETR)</el-radio>
        <el-radio :label="true">put(STOR)</el-radio>
      </el-radio-group>
      <el-checkbox v-model="element.binaryMode">使用二进制模式</el-checkbox>
      <el-checkbox v-model="element.saveResponse">保存文件响应</el-checkbox>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementFtp",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped>
.label{
  width: 101px !important;
}
</style>