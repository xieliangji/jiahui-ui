<template>
  <div id="sugar-jmeter">
    <div id="sugar-jmeter-tree">
      <function-helper v-if="isShowFuncHelper" @close="isShowFuncHelper = false"></function-helper>
      <div id="tree-opt">
        <div class="sugar-jmeter-opt">保存计划</div>
        <div class="sugar-jmeter-opt">打开本地</div>
        <div class="sugar-jmeter-opt">启动运行</div>
        <div class="sugar-jmeter-opt">停止运行</div>
        <div class="sugar-jmeter-opt" @click="isShowFuncHelper = true">函数助手</div>
      </div>
      <div id="tree-data">
        <sugar-jmeter-tree></sugar-jmeter-tree>
      </div>
      <div style="width: 5px; background: linear-gradient(45deg, #bdc3c7 50%, #FFFFFF 0); background-size: 2px 2px;"></div>
    </div>
    <div id="sugar-jmeter-element" v-if="currentElement !== undefined">
      <test-plan v-if="currentElement.type === JT.TestPlan" :element="currentElement"></test-plan>
    </div>
  </div>
</template>

<script>
import FunctionHelper from "@/views/jmeter/FunctionHelper";
import SugarJmeterTree from "@/views/jmeter/SugarJmeterTree";
import TestPlan from "@/views/jmeter/TestPlan";
import {JT} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "SugarJmeter",
  components: {TestPlan, SugarJmeterTree, FunctionHelper},
  data(){
    return {
      isShowFuncHelper: false,
    }
  },
  computed: {
    JT(){
      return JT
    },
    currentElement(){
      return this.$store.state.currentTestElement
    }
  }
}
</script>

<style scoped lang="scss">

$headerHeight: 40px;
$bodyHeight: calc(100% - 40px);

#sugar-jmeter{
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  &::v-deep div{
    box-sizing: border-box;
  }

  #sugar-jmeter-tree{
    min-width: 400px;
    width: 400px;
    max-width: 600px;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    //border-right: 1px solid #DCDFE6;
    display: flex;
    flex-flow: row nowrap;
    resize: horizontal;


    #tree-opt{
      height: 100%;
      width: 26px;
      box-sizing: border-box;
      border-right: 1px solid #bdc3c7;
      background-color: #eef2f3;

      .sugar-jmeter-opt{
        writing-mode: vertical-lr;
        background-color: #bdc3c7;
        height: 80px;
        text-align: center;
        cursor: pointer;
        user-select: none;
        font-weight: bold;
        border-bottom: 1px solid #859398;
        border-right: 1px solid #859398;
        border-left: 1px solid #859398;
        color: #274046;
        width: 100%;
        padding: 0 1px;

        &:hover{
          background-color: #DCDFE6;
          box-shadow: 0 0 1px 0 #536976;
          color: #0083B0;
        }

        &:active{
          background-color: #F0F2F0;
        }
      }
    }

    #tree-data{
      height: 100%;
      overflow: auto;
      flex-grow: 1;
    }
  }

  #sugar-jmeter-element{
    //min-width: 1600px;
    height: 100%;
    flex-grow: 1;
    overflow: auto;
  }
}

</style>