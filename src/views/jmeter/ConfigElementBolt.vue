<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">Bolt Configuration</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Bolt URI</div>
        <div class="input">
          <el-input v-model="element.boltUri"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Username</div>
        <div class="input">
          <el-input v-model="element.username"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">Password</div>
        <div class="input">
          <el-input type="password" v-model="element.password"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementBolt",
  components: {SugarJmeterElement},
  props: {
    element: Object
  }
}
</script>

<style scoped lang="scss">
.label {
  width: 70px;
}
</style>