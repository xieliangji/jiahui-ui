<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label" style="width: 60px;">用户名</div>
      <div class="input">
        <el-input v-model="element.username"></el-input>
      </div>
    </div>
    <div class="sugar-normal-line sugar-label-input">
      <div class="label" style="width: 60px;">密码</div>
      <div class="input">
        <el-input type="password" v-model="element.password"></el-input>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementLogin",
  components: {SugarJmeterElement},
  props: {
    element: Object,
  }
}
</script>

<style scoped>

</style>