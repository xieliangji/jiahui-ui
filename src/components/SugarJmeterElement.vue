<template>
  <div id="sugar-jmeter-element" class="sugar-layout-wrap">
    <div id="sugar-jmeter-element-title">{{ title }}</div>
    <div id="sugar-jmeter-element-setting">
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">名称</div>
        <div class="input">
          <el-input v-model="jmeterElement.testname"></el-input>
        </div>
      </div>
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">注释</div>
        <div class="input">
          <el-input v-model="jmeterElement.comments"></el-input>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SugarJmeterElement",
  props: {
    title: String,
    jmeterElement: Object
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

#sugar-jmeter-element-title{
  font-size: 18px;
  margin-bottom: 20px;
}

</style>