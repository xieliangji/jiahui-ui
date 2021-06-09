<template>
  <div id="sugar-jmeter">
    <div id="sugar-jmeter-tree">
      <transition name="fade">
        <function-helper v-if="isShowFuncHelper" @close="isShowFuncHelper = false"></function-helper>
      </transition>
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
      <transition name="fade">
        <test-plan :key="0" v-if="currentElement.type === JT.TestPlan" :element="currentElement"></test-plan>

        <thread-group :key="1" v-if="currentElement.type === JT.ThreadGroup" :element="currentElement"></thread-group>
        <thread-group :key="2" v-if="currentElement.type === JT.SetupThreadGroup" :element="currentElement"></thread-group>
        <thread-group :key="3" v-if="currentElement.type === JT.PostThreadGroup" :element="currentElement"></thread-group>

        <config-element-csv :Key="4" v-if="currentElement.type === JT.CSVDataSet" :element="currentElement"></config-element-csv>
        <config-element-header :key="5" v-if="currentElement.type === JT.HeaderManager" :element="currentElement"></config-element-header>
        <config-element-cookie :key="6" v-if="currentElement.type === JT.CookieManager" :element="currentElement"></config-element-cookie>
        <config-element-cache :key="7" v-if="currentElement.type === JT.CacheManager" :element="currentElement"></config-element-cache>
        <element-http :key="8" v-if="currentElement.type === JT.HttpDefaults" :element="currentElement"></element-http>
        <config-element-bolt :key="9" v-if="currentElement.type === JT.BoltConnectionElement" :element="currentElement"></config-element-bolt>
        <config-element-dns :key="10" v-if="currentElement.type === JT.DNSCacheManager" :element="currentElement"></config-element-dns>
        <config-element-ftp :key="11" v-if="currentElement.type === JT.FtpConfig" :element="currentElement"></config-element-ftp>
        <config-element-auth :key="12" v-if="currentElement.type === JT.AuthManager" :element="currentElement"></config-element-auth>
        <config-element-jdbc :key="13" v-if="currentElement.type === JT.JDBCDataSource" :element="currentElement"></config-element-jdbc>
        <config-element-java :key="14" v-if="currentElement.type === JT.JavaConfig" :element="currentElement"></config-element-java>
        <element-tcp :key="15" v-if="currentElement.type === JT.TCPConfig" :element="currentElement"></element-tcp>
        <config-element-key :key="16" v-if="currentElement.type === JT.KeystoreConfig" :element="currentElement"></config-element-key>
        <config-element-arguments :key="17" v-if="currentElement.type === JT.Arguments" :element="currentElement"></config-element-arguments>
        <config-element-simple :key="18" v-if="currentElement.type === JT.SimpleConfig" :element="currentElement"></config-element-simple>
        <config-element-login :key="19" v-if="currentElement.type === JT.LoginConfig" :element="currentElement"></config-element-login>
        <config-element-counter :key="20" v-if="currentElement.type === JT.CounterConfig" :element="currentElement"></config-element-counter>
        <config-element-random :key="21" v-if="currentElement.type === JT.RandomVariableConfig" :element="currentElement"></config-element-random>
        <controller-if :key="22" v-if="currentElement.type === JT.IfController" :element="currentElement"></controller-if>
        <controller-transaction :key="23" v-if="currentElement.type === JT.TransactionController" :element="currentElement"></controller-transaction>
        <controller-loop :key="24" v-if="currentElement.type === JT.LoopController" :element="currentElement">ss</controller-loop>
        <controller-while :key="25" v-if="currentElement.type === JT.WhileController" :element="currentElement"></controller-while>
        <controller-foreach :key="26" v-if="currentElement.type === JT.ForeachController" :element="currentElement"></controller-foreach>
        <controller-include :key="27" v-if="currentElement.type === JT.IncludeController" :element="currentElement"></controller-include>
        <controller-runtime :key="28" v-if="currentElement.type === JT.RunTime" :element="currentElement"></controller-runtime>
        <controller-critical :key="29" v-if="currentElement.type === JT.CriticalSectionController" :element="currentElement"></controller-critical>
        <controller-generic :key="30" v-if="currentElement.type === JT.OnceOnlyController" :element="currentElement"></controller-generic>
        <controller-generic :key="31" v-if="currentElement.type === JT.GenericController" :element="currentElement"></controller-generic>
        <controller-random :key="32" v-if="currentElement.type === JT.RandomController" :element="currentElement"></controller-random>
        <controller-generic :key="33" v-if="currentElement.type === JT.RandomOrderController" :element="currentElement"></controller-generic>
        <controller-throughput :key="34" v-if="currentElement.type === JT.ThroughputController" :element="currentElement"></controller-throughput>
        <controller-switch :key="35" v-if="currentElement.type === JT.SwitchController" :element="currentElement"></controller-switch>
        <controller-interleave :key="36" v-if="currentElement.type === JT.InterleaveControl" :element="currentElement"></controller-interleave>


      </transition>
    </div>
  </div>
</template>

<script>
import FunctionHelper from "@/views/jmeter/FunctionHelper";
import SugarJmeterTree from "@/views/jmeter/SugarJmeterTree";
import TestPlan from "@/views/jmeter/TestPlan";
import {JT} from "@/views/jmeter/js/JmeterTestElement";
import ThreadGroup from "@/views/jmeter/ThreadGroup";
import ConfigElementCsv from "@/views/jmeter/ConfigElementCsv";
import ConfigElementHeader from "@/views/jmeter/ConfigElementHeader";
import ConfigElementCookie from "@/views/jmeter/ConfigElementCookie";
import ConfigElementCache from "@/views/jmeter/ConfigElementCache";
import ElementHttp from "@/views/jmeter/ElementHttp";
import ConfigElementBolt from "@/views/jmeter/ConfigElementBolt";
import ConfigElementDns from "@/views/jmeter/ConfigElementDns";
import ConfigElementFtp from "@/views/jmeter/ConfigElementFtp";
import ConfigElementAuth from "@/views/jmeter/ConfigElementAuth";
import ConfigElementJdbc from "@/views/jmeter/ConfigElementJdbc";
import ConfigElementJava from "@/views/jmeter/ConfigElementJava";
import ElementTcp from "@/views/jmeter/ElementTcp";
import ConfigElementKey from "@/views/jmeter/ConfigElementKey";
import ConfigElementArguments from "@/views/jmeter/ConfigElementArguments";
import ConfigElementSimple from "@/views/jmeter/ConfigElementSimple";
import ConfigElementLogin from "@/views/jmeter/ConfigElementLogin";
import ConfigElementCounter from "@/views/jmeter/ConfigElementCounter";
import ConfigElementRandom from "@/views/jmeter/ConfigElementRandom";
import ControllerIf from "@/views/jmeter/ControllerIf";
import ControllerTransaction from "@/views/jmeter/ControllerTransaction";
import ControllerLoop from "@/views/jmeter/ControllerLoop";
import ControllerWhile from "@/views/jmeter/ControllerWhile";
import ControllerForeach from "@/views/jmeter/ControllerForeach";
import ControllerInclude from "@/views/jmeter/ControllerInclude";
import ControllerRuntime from "@/views/jmeter/ControllerRuntime";
import ControllerCritical from "@/views/jmeter/ControllerCritical";
import ControllerGeneric from "@/views/jmeter/ControllerGeneric";
import ControllerRandom from "@/views/jmeter/ControllerRandom";
import ControllerThroughput from "@/views/jmeter/ControllerThroughput";
import ControllerSwitch from "@/views/jmeter/ControllerSwitch";
import ControllerInterleave from "@/views/jmeter/ControllerInterleave";
export default {
  name: "SugarJmeter",
  components: {
    ControllerInterleave,
    ControllerSwitch,
    ControllerThroughput,
    ControllerRandom,
    ControllerGeneric,
    ControllerCritical,
    ControllerRuntime,
    ControllerInclude,
    ControllerForeach,
    ControllerWhile,
    ControllerLoop,
    ControllerTransaction,
    ControllerIf,
    ConfigElementRandom,
    ConfigElementCounter,
    ConfigElementLogin,
    ConfigElementSimple,
    ConfigElementArguments,
    ConfigElementKey,
    ElementTcp,
    ConfigElementJava,
    ConfigElementJdbc,
    ConfigElementAuth,
    ConfigElementFtp,
    ConfigElementDns,
    ConfigElementBolt,
    ElementHttp,
    ConfigElementCache,
    ConfigElementCookie,
    ConfigElementHeader, ConfigElementCsv, ThreadGroup, TestPlan, SugarJmeterTree, FunctionHelper},
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
        background-color: #DCDFE6;
        height: 80px;
        text-align: center;
        cursor: pointer;
        user-select: none;
        font-weight: bold;
        //border-bottom: 1px solid #859398;
        //border-right: 1px solid #859398;
        //border-left: 1px solid #859398;
        color: #274046;
        width: 100%;
        padding: 0 1px;

        &:hover{
          background-color: #eef2f3;
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
    background-color: #eef2f3;
  }

}

</style>