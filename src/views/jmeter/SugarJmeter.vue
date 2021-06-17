<template>
  <div id="sugar-jmeter">
    <div id="sugar-jmeter-tree">
      <transition name="fade">
        <function-helper v-if="isShowFuncHelper" @close="isShowFuncHelper = false"></function-helper>
        <project v-if="isShowProject" @close="isShowProject = false"></project>
      </transition>
      <div id="tree-opt">
        <div class="sugar-jmeter-opt" @click="handleProjectClick">项目</div>
        <div class="sugar-jmeter-opt">保存计划</div>
        <div class="sugar-jmeter-opt">打开本地</div>
        <div class="sugar-jmeter-opt">启动运行</div>
        <div class="sugar-jmeter-opt">停止运行</div>
        <div class="sugar-jmeter-opt" @click="isShowFuncHelper = true">函数助手</div>
      </div>
      <div style="width: 2px; background: linear-gradient(45deg, #bdc3c7 50%, #FFFFFF 0); background-size: 2px 2px;"></div>
      <div id="tree-data">
        <sugar-jmeter-tree></sugar-jmeter-tree>
      </div>
      <div style="width: 6px; background: linear-gradient(45deg, #bdc3c7 50%, #FFFFFF 0); background-size: 2px 2px;"></div>
    </div>
    <div id="sugar-jmeter-element" v-if="currentElement !== undefined">
      <transition name="fade">
        <test-plan :key="keyId" v-if="currentElement.type === JT.TestPlan" :element="currentElement"></test-plan>
        <thread-group :key="keyId" v-if="currentElement.type === JT.ThreadGroup" :element="currentElement"></thread-group>
        <thread-group :key="keyId" v-if="currentElement.type === JT.SetupThreadGroup" :element="currentElement"></thread-group>
        <thread-group :key="keyId" v-if="currentElement.type === JT.PostThreadGroup" :element="currentElement"></thread-group>
        <config-element-csv :key="keyId" v-if="currentElement.type === JT.CSVDataSet" :element="currentElement"></config-element-csv>
        <config-element-header :key="keyId" v-if="currentElement.type === JT.HeaderManager" :element="currentElement"></config-element-header>
        <config-element-cookie :key="keyId" v-if="currentElement.type === JT.CookieManager" :element="currentElement"></config-element-cookie>
        <config-element-cache :key="keyId" v-if="currentElement.type === JT.CacheManager" :element="currentElement"></config-element-cache>
        <element-http :key="keyId" v-if="currentElement.type === JT.HttpDefaults" :element="currentElement"></element-http>
        <config-element-bolt :key="keyId" v-if="currentElement.type === JT.BoltConnectionElement" :element="currentElement"></config-element-bolt>
        <config-element-dns :key="keyId" v-if="currentElement.type === JT.DNSCacheManager" :element="currentElement"></config-element-dns>
        <element-ftp :key="keyId" v-if="currentElement.type === JT.FtpConfig" :element="currentElement"></element-ftp>
        <config-element-auth :key="keyId" v-if="currentElement.type === JT.AuthManager" :element="currentElement"></config-element-auth>
        <config-element-jdbc :key="keyId" v-if="currentElement.type === JT.JDBCDataSource" :element="currentElement"></config-element-jdbc>
        <config-element-java :key="keyId" v-if="currentElement.type === JT.JavaConfig" :element="currentElement"></config-element-java>
        <element-tcp :key="keyId" v-if="currentElement.type === JT.TCPConfig" :element="currentElement"></element-tcp>
        <config-element-key :key="keyId" v-if="currentElement.type === JT.KeystoreConfig" :element="currentElement"></config-element-key>
        <config-element-arguments :key="keyId" v-if="currentElement.type === JT.Arguments" :element="currentElement"></config-element-arguments>
        <config-element-simple :key="keyId" v-if="currentElement.type === JT.SimpleConfig" :element="currentElement"></config-element-simple>
        <config-element-login :key="keyId" v-if="currentElement.type === JT.LoginConfig" :element="currentElement"></config-element-login>
        <config-element-counter :key="keyId" v-if="currentElement.type === JT.CounterConfig" :element="currentElement"></config-element-counter>
        <config-element-random :key="keyId" v-if="currentElement.type === JT.RandomVariableConfig" :element="currentElement"></config-element-random>
        <controller-if :key="keyId" v-if="currentElement.type === JT.IfController" :element="currentElement"></controller-if>
        <controller-transaction :key="keyId" v-if="currentElement.type === JT.TransactionController" :element="currentElement"></controller-transaction>
        <controller-loop :key="keyId" v-if="currentElement.type === JT.LoopController" :element="currentElement">ss</controller-loop>
        <controller-while :key="keyId" v-if="currentElement.type === JT.WhileController" :element="currentElement"></controller-while>
        <controller-foreach :key="keyId" v-if="currentElement.type === JT.ForeachController" :element="currentElement"></controller-foreach>
        <controller-include :key="keyId" v-if="currentElement.type === JT.IncludeController" :element="currentElement"></controller-include>
        <controller-runtime :key="keyId" v-if="currentElement.type === JT.RunTime" :element="currentElement"></controller-runtime>
        <controller-critical :key="keyId" v-if="currentElement.type === JT.CriticalSectionController" :element="currentElement"></controller-critical>
        <controller-generic :key="keyId" v-if="currentElement.type === JT.OnceOnlyController" :element="currentElement"></controller-generic>
        <controller-generic :key="keyId" v-if="currentElement.type === JT.GenericController" :element="currentElement"></controller-generic>
        <controller-random :key="keyId" v-if="currentElement.type === JT.RandomController" :element="currentElement"></controller-random>
        <controller-generic :key="keyId" v-if="currentElement.type === JT.RandomOrderController" :element="currentElement"></controller-generic>
        <controller-throughput :key="keyId" v-if="currentElement.type === JT.ThroughputController" :element="currentElement"></controller-throughput>
        <controller-switch :key="keyId" v-if="currentElement.type === JT.SwitchController" :element="currentElement"></controller-switch>
        <controller-interleave :key="keyId" v-if="currentElement.type === JT.InterleaveControl" :element="currentElement"></controller-interleave>
        <timer-constant :key="keyId" v-if="currentElement.type === JT.ConstantTimer" :element="currentElement"></timer-constant>
        <timer-uniform :key="keyId" v-if="currentElement.type === JT.UniformRandomTimer" :element="currentElement"></timer-uniform>
        <element-jsr223 :key="keyId" v-if="currentElement.type === JT.JSR223Timer" :element="currentElement"></element-jsr223>
        <timer-precise :key="keyId" v-if="currentElement.type === JT.PreciseThroughputTimer" :element="currentElement"></timer-precise>
        <timer-sync :key="keyId" v-if="currentElement.type === JT.SyncTimer" :element="currentElement"></timer-sync>
        <timer-poisson :key="keyId" v-if="currentElement.type === JT.PoissonRandomTimer" :element="currentElement"></timer-poisson>
        <timer-poisson :key="keyId" v-if="currentElement.type === JT.GaussianRandomTimer" :element="currentElement"></timer-poisson>
        <timer-constant-throughput :key="keyId" v-if="currentElement.type === JT.ConstantThroughputTimer" :element="currentElement"></timer-constant-throughput>
        <element-jsr223 :key="keyId" v-if="currentElement.type === JT.JSR223PreProcessor" :element="currentElement"></element-jsr223>
        <preprocessor-user-parameters :key="keyId" v-if="currentElement.type === JT.UserParameters" :element="currentElement"></preprocessor-user-parameters>
        <preprocessor-anchor :key="keyId" v-if="currentElement.type === JT.AnchorModifier" :element="currentElement"></preprocessor-anchor>
        <preprocessor-url :key="keyId" v-if="currentElement.type === JT.URLRewritingModifier" :element="currentElement"></preprocessor-url>
        <element-jdbc :key="keyId" v-if="currentElement.type === JT.JDBCPreProcessor" :element="currentElement"></element-jdbc>
        <preprocessor-sample-timeout :key="keyId" v-if="currentElement.type === JT.SampleTimeout" :element="currentElement"></preprocessor-sample-timeout>
        <preprocessor-regex :key="keyId" v-if="currentElement.type === JT.RegExUserParameters" :element="currentElement"></preprocessor-regex>
        <postprocessor-html :key="keyId" v-if="currentElement.type === JT.HtmlExtractor" :element="currentElement"></postprocessor-html>
        <postprocessor-jmes :key="keyId" v-if="currentElement.type === JT.JMESPathExtractor" :element="currentElement"></postprocessor-jmes>
        <postprocessor-json :key="keyId" v-if="currentElement.type === JT.JSONPostProcessor" :element="currentElement"></postprocessor-json>
        <postprocessor-regex :key="keyId" v-if="currentElement.type === JT.RegexExtractor" :element="currentElement"></postprocessor-regex>
        <postprocessor-boundary :key="keyId" v-if="currentElement.type === JT.BoundaryExtractor" :element="currentElement"></postprocessor-boundary>
        <element-jsr223 :key="keyId" v-if="currentElement.type === JT.JSR223PostProcessor" :element="currentElement"></element-jsr223>
        <element-jdbc :key="keyId" v-if="currentElement.type === JT.JDBCPostProcessor" :element="currentElement"></element-jdbc>
        <postprocessor-xpath2 :key="keyId" v-if="currentElement.type === JT.XPath2Extractor" :element="currentElement"></postprocessor-xpath2>
        <postprocessor-xpath :key="keyId" v-if="currentElement.type === JT.XPathExtractor" :element="currentElement"></postprocessor-xpath>
        <postprocessor-result-action :key="keyId" v-if="currentElement.type === JT.ResultAction" :element="currentElement"></postprocessor-result-action>
        <postprocessor-debug :key="keyId" v-if="currentElement.type === JT.DebugPostProcessor" :element="currentElement"></postprocessor-debug>
        <assertion-response :key="keyId" v-if="currentElement.type === JT.ResponseAssertion" :element="currentElement"></assertion-response>
        <assertion-json :key="keyId" v-if="currentElement.type === JT.JSONPathAssertion" :element="currentElement"></assertion-json>
        <assertion-size :key="keyId" v-if="currentElement.type === JT.SizeAssertion" :element="currentElement"></assertion-size>
        <element-jsr223 :key="keyId" v-if="currentElement.type === JT.JSR223Assertion" :element="currentElement"></element-jsr223>
        <assertion-xpath2 :key="keyId" v-if="currentElement.type === JT.XPath2Assertion" :element="currentElement"></assertion-xpath2>
        <assertion-html :key="keyId" v-if="currentElement.type === JT.HTMLAssertion" :element="currentElement"></assertion-html>
        <assertion-json :key="keyId" v-if="currentElement.type === JT.JMESPathAssertion" :element="currentElement"></assertion-json>
        <assertion-md5 :key="keyId" v-if="currentElement.type === JT.MD5HexAssertion" :element="currentElement"></assertion-md5>
        <assertion-xml-schema :key="keyId" v-if="currentElement.type === JT.XMLSchemaAssertion" :element="currentElement"></assertion-xml-schema>
        <assertion-xml :key="keyId" v-if="currentElement.type === JT.XMLAssertion" :element="currentElement"></assertion-xml>
        <assertion-xpath :key="keyId" v-if="currentElement.type === JT.XPathAssertion" :element="currentElement"></assertion-xpath>
        <assertion-duration :key="keyId" v-if="currentElement.type === JT.DurationAssertion" :element="currentElement"></assertion-duration>
        <assertion-compare :key="keyId" v-if="currentElement.type === JT.CompareAssertion" :element="currentElement"></assertion-compare>
        <element-http :key="keyId" v-if="currentElement.type === JT.HttpTestSample" :element="currentElement"></element-http>
        <element-jsr223 :key="keyId" v-if="currentElement.type === JT.JSR223Sampler" :element="currentElement"></element-jsr223>
        <element-jdbc :key="keyId" v-if="currentElement.type === JT.JDBCSampler" :element="currentElement"></element-jdbc>
        <element-tcp :key="keyId" v-if="currentElement.type === JT.TCPSampler" :element="currentElement"></element-tcp>
        <element-http :key="keyId" v-if="currentElement.type === JT.AjpSampler" :element="currentElement"></element-http>
        <sampler-test-action :key="keyId" v-if="currentElement.type === JT.TestAction" :element="currentElement"></sampler-test-action>
        <sampler-debug :key="keyId" v-if="currentElement.type === JT.DebugSampler" :element="currentElement"></sampler-debug>
        <sampler-bolt :key="keyId" v-if="currentElement.type === JT.BoltSampler" :element="currentElement"></sampler-bolt>
        <element-ftp :key="keyId" v-if="currentElement.type === JT.FTPSampler" :element="currentElement"></element-ftp>
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
import TimerConstant from "@/views/jmeter/TimerConstant";
import TimerUniform from "@/views/jmeter/TimerUniform";
import ElementJsr223 from "@/views/jmeter/ElementJsr223";
import TimerPrecise from "@/views/jmeter/TimerPrecise";
import TimerSync from "@/views/jmeter/TimerSync";
import TimerPoisson from "@/views/jmeter/TimerPoisson";
import TimerConstantThroughput from "@/views/jmeter/TimerConstantThroughput";
import PreprocessorUserParameters from "@/views/jmeter/PreprocessorUserParameters";
import PreprocessorAnchor from "@/views/jmeter/PreprocessorAnchor";
import PreprocessorUrl from "@/views/jmeter/PreprocessorUrl";
import ElementJdbc from "@/views/jmeter/ElementJdbc";
import PreprocessorSampleTimeout from "@/views/jmeter/PreprocessorSampleTimeout";
import PreprocessorRegex from "@/views/jmeter/PreprocessorRegex";
import PostprocessorHtml from "@/views/jmeter/PostprocessorHtml";
import PostprocessorJmes from "@/views/jmeter/PostprocessorJmes";
import PostprocessorJson from "@/views/jmeter/PostprocessorJson";
import PostprocessorRegex from "@/views/jmeter/PostprocessorRegex";
import PostprocessorBoundary from "@/views/jmeter/PostprocessorBoundary";
import PostprocessorXpath2 from "@/views/jmeter/PostprocessorXpath2";
import PostprocessorXpath from "@/views/jmeter/PostprocessorXpath";
import PostprocessorResultAction from "@/views/jmeter/PostprocessorResultAction";
import PostprocessorDebug from "@/views/jmeter/PostprocessorDebug";
import AssertionResponse from "@/views/jmeter/AssertionResponse";
import AssertionJson from "@/views/jmeter/AssertionJson";
import AssertionSize from "@/views/jmeter/AssertionSize";
import AssertionXpath2 from "@/views/jmeter/AssertionXpath2";
import AssertionHtml from "@/views/jmeter/AssertionHtml";
import AssertionMd5 from "@/views/jmeter/AssertionMd5";
import AssertionXmlSchema from "@/views/jmeter/AssertionXmlSchema";
import AssertionXml from "@/views/jmeter/AssertionXml";
import AssertionXpath from "@/views/jmeter/AssertionXpath";
import AssertionDuration from "@/views/jmeter/AssertionDuration";
import AssertionCompare from "@/views/jmeter/AssertionCompare";
import SamplerTestAction from "@/views/jmeter/SamplerTestAction";
import SamplerDebug from "@/views/jmeter/SamplerDebug";
import SamplerBolt from "@/views/jmeter/SamplerBolt";
import ElementFtp from "@/views/jmeter/ElementFtp";
import Project from "@/views/project/Project";
export default {
  name: "SugarJmeter",
  components: {
    Project,
    ElementFtp,
    SamplerBolt,
    SamplerDebug,
    SamplerTestAction,
    AssertionCompare,
    AssertionDuration,
    AssertionXpath,
    AssertionXml,
    AssertionXmlSchema,
    AssertionMd5,
    AssertionHtml,
    AssertionXpath2,
    AssertionSize,
    AssertionJson,
    AssertionResponse,
    PostprocessorDebug,
    PostprocessorResultAction,
    PostprocessorXpath,
    PostprocessorXpath2,
    PostprocessorBoundary,
    PostprocessorRegex,
    PostprocessorJson,
    PostprocessorJmes,
    PostprocessorHtml,
    PreprocessorRegex,
    PreprocessorSampleTimeout,
    ElementJdbc,
    PreprocessorUrl,
    PreprocessorAnchor,
    PreprocessorUserParameters,
    TimerConstantThroughput,
    TimerPoisson,
    TimerSync,
    TimerPrecise,
    ElementJsr223,
    TimerUniform,
    TimerConstant,
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
    ConfigElementDns,
    ConfigElementBolt,
    ElementHttp,
    ConfigElementCache,
    ConfigElementCookie,
    ConfigElementHeader, ConfigElementCsv, ThreadGroup, TestPlan, SugarJmeterTree, FunctionHelper},
  data(){
    return {
      isShowProject: false,
      isShowFuncHelper: false,

    }
  },
  methods: {
    handleProjectClick(){
      this.isShowProject = true
    },

    handleProjectClose(){
      this.isShowProject = false
    }
  },
  computed: {
    JT(){
      return JT
    },
    currentElement(){
      return this.$store.state.currentTestElement
    },
    keyId(){
      return this.$store.state.currentTestElement.id
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
      background-color: #eef2f3;

      .sugar-jmeter-opt{
        writing-mode: vertical-lr;
        //background-color: #DCDFE6;
        //background: linear-gradient(to bottom, #eef2f3, #8e9eab);
        background: #DCDFE6;
        height: 75px;
        text-align: center;
        cursor: pointer;
        user-select: none;
        font-size: 13px;
        //font-weight: bold;
        //border-bottom: 1px solid #859398;
        //border-right: 1px solid #859398;
        //border-left: 1px solid #859398;
        color: #274046;
        width: 100%;
        padding: 0 1px;
        transition: background .25s;


        &:hover{
          //background-color: #eef2f3;
          //background: linear-gradient(to bottom, #8e9eab, #eef2f3);
          background: #eef7f2;
          box-shadow: 0 0 1px 0 #536976;
          //color: #0083B0;
        }

        &:active{
          //background-color: #F0F2F0;
          //background: linear-gradient(to bottom, #eef2f3, #8e9eab, #eef2f3);
          background: #eef2f3;

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