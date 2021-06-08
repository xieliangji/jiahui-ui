<template>
  <div id="sugar-jmeter-element" class="sugar-layout-wrap">
    <div id="sugar-jmeter-element-title">{{ $JL[jmeterElement.type] }}</div>
    <div id="sugar-jmeter-element-setting">
      <div class="sugar-label-input sugar-normal-line">
        <div class="label">名称</div>
        <div class="input">
          <el-input v-model="jmeterElement.testname"></el-input>
        </div>
      </div>
      <div class="jmeter-element-comment sugar-flex-row">
        <div class="label">注释</div>
        <div class="input">
          <el-input type="textarea" resize="none" :autosize="{minRows: 2, maxRows: 10}" v-model="jmeterElement.comments"></el-input>
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

.jmeter-element-comment{
  margin-bottom: 20px;
  line-height: 32px;
  .label{
    margin-right: 5px;
  }

  .input{
    flex-grow: 1;
  }
}

</style>