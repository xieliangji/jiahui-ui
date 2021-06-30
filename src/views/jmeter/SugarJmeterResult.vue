<template>
  <el-drawer visible :size="1440" :with-header="false" :close-on-click-modal="false" :close-on-press-escape="false">
    <div id="sugar-jmeter-result" class="sugar-drawer">
      <div id="result-header" class="sugar-drawer-header">
        <div class="sugar-drawer-header-logo"></div>
        <div class="sugar-drawer-header-title">取样结果（集）</div>
        <div class="sugar-drawer-header-close" @click="$emit('close')"><i class="iconfont icon-guanbi"></i></div>
      </div>
      <div id="result-content" class="sugar-drawer-content">
        <div id="result-content-format-opt" class="sample-result-format">
          <div style="margin: 0 5px;"><el-button type="danger" @click="$emit('clear')"><span style="color: #FFFFFF;">清空</span></el-button></div>
          <div style="flex-grow: 1;">
            <el-radio-group v-model="resultFormat">
              <el-radio label="raw">Raw JSON</el-radio>
              <el-radio label="jmeterResultTree">查看结果树</el-radio>
              <el-radio label="aggregateReport">聚合报告</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="sample-result-detail">
          <jmeter-editor v-if="resultFormat === 'raw'" read-only :script="rawResult" language="javascript" @scriptUpdate="() => {}"></jmeter-editor>
          <listener-result-tree v-if="resultFormat === 'jmeterResultTree'" :sample-events="jmeterSampleEvents"></listener-result-tree>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import ListenerResultTree from "@/views/jmeter/ListenerResultTree";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "SugarJmeterResult",
  components: {JmeterEditor, ListenerResultTree},
  props: {
    jmeterSampleEvents: Array
  },
  data(){
    return {
      resultFormat: 'jmeterResultTree'
    }
  },
  computed: {
    rawResult(){
      let sampleEvents = []
      let sugarSampleEvents = this.jmeterSampleEvents
      for(let index = 0; sugarSampleEvents !== undefined && index < sugarSampleEvents.length; index++){
        sampleEvents.push(sugarSampleEvents[index]['sampleEvent'])
      }
      return JSON.stringify(sampleEvents, null, 4)
    }
  }
}
</script>

<style scoped lang="scss">

// sugar-drawer根
.sugar-drawer{
  height: 100%;
  background-color: #eef2f3;
  text-align: center;

  // sugar-drawer 页面头部
  .sugar-drawer-header{
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    background-color: #eef2f3;
    border-bottom: 1px solid #DCDFE6;

    .sugar-drawer-header-logo, .sugar-drawer-header-close{
      height: 100%;
    }
    .sugar-drawer-header-title{
      font-size: 16px;
      flex-grow: 1;
    }

    .sugar-drawer-header-logo{
      width: 48px;
      background: {
        image: url("../../assets/logo.svg");
        size: 48px 32px;
      }
    }
    .sugar-drawer-header-close{
      width: 32px;
      background-color: #bdc3c7;
      color: #ff6d6f;
      font-weight: bold;
      font-size: 16px;
    }
  }

  // sugar-content 页面内容
  .sugar-drawer-content{
    height: calc(100% - 42px);

    .sample-result-format{
      display: flex;
      flex-flow: row nowrap;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }

    .sample-result-detail{
      height: calc(100% - 40px);
      margin: 0 5px;
      overflow: auto;
    }
  }
}



</style>