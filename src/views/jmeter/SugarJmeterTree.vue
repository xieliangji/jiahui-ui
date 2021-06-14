<template>
  <div id="jmeter-tree">
    <el-tree default-expand-all :data="treeData" :props="treeProps" :key="treeKey" empty-text=" " ref="testPlanTree" node-key="id" :current-node-key="$store.state.currentTestElement.id" highlight-current accordion :expand-on-click-node="false" @node-click="handleNodeClick">
      <div slot-scope="{node, data}" :style="{opacity: (node.level === 1 || (node.level !== 1 && node.parent.data.enabled)) && data.enabled ? '1':'.5'}">
        <img class="tree-node-icon" src="../../assets/tree-icon/applications-science-3.png" v-if="data.category === categories.TestPlan">
        <img class="tree-node-icon" src="../../assets/tree-icon/system-run-5.png" v-if="data.category === categories.ThreadGroup">
        <img class="tree-node-icon" src="../../assets/tree-icon/color-picker-grey.png" v-if="data.category === categories.Sampler">
        <img class="tree-node-icon" src="../../assets/tree-icon/view-list-tree-4.png" v-if="data.category === categories.Controller">
        <!--        <img src="../../assets/tree-icon/view-list-tree-4.png" v-if="data.category === $JME.SEGMENT">-->
        <!--        <img src="../../assets/tree-icon/view-list-tree-4.png" v-if="data.category === $JME.NTEST">-->
        <img class="tree-node-icon" src="../../assets/tree-icon/document-import-2_custom.png" v-if="data.category === categories.Preprocessor">
        <img class="tree-node-icon" src="../../assets/tree-icon/document-export-4_custom.png" v-if="data.category === categories.Postprocessor">
        <img class="tree-node-icon" src="../../assets/tree-icon/office-chart-area.png" v-if="data.category === categories.Listener">
        <img class="tree-node-icon" src="../../assets/tree-icon/preferences-system-4.png" v-if="data.category === categories.ConfigElement">
        <img class="tree-node-icon" src="../../assets/tree-icon/appointment-new-3.png" v-if="data.category === categories.Timer">
        <img class="tree-node-icon" src="../../assets/tree-icon/document-preview.png" v-if="data.category === categories.Assertion">
        <span> {{node.label}}</span>
      </div>
    </el-tree>
  </div>
</template>

<script>
import {JC} from "@/views/jmeter/js/JmeterTestElement";
import { ThreadGroup} from "@/views/jmeter/js/ThreadGroup";
import {
  AuthManager,
  BoltConnectionElement,
  CacheManager,
  CookieManager,
  CSVDataSet,
  DNSCacheManage,
  FtpConfig,
  HeaderManager,
  HttpDefaults,
  JavaConfig,
  JDBCDataSource,
  KeystoreConfig,
  TCPConfig,
  Arguments,
  SimpleConfig,
  LoginConfig,
  CounterConfig, RandomVariableConfig
} from "@/views/jmeter/js/ConfigElement";
import {
  CriticalSectionController,
  ForeachController,
  GenericController,
  IfController,
  IncludeController,
  InterleaveControl,
  LoopController,
  OnceOnlyController,
  RandomController,
  RandomOrderController,
  RunTime,
  SwitchController,
  ThroughputController,
  TransactionController,
  WhileController
} from "@/views/jmeter/js/Controller";
import {
  ConstantThroughputTimer, ConstantTimer, GaussianRandomTimer,
  JSR223Timer,
  PoissonRandomTimer,
  PreciseThroughputTimer,
  SyncTimer, UniformRandomTimer
} from "@/views/jmeter/js/Timer";
import {
  AnchorModifier,
  JDBCPreProcessor,
  JSR223PreProcessor, RegExUserParameter, SampleTimeout,
  URLRewritingModifier,
  UserParameters
} from "@/views/jmeter/js/Preprocessor";
import {
  BoundaryExtractor, DebugPostProcessor,
  HtmlExtractor, JDBCPostProcessor,
  JMESPathExtractor,
  JSONPostProcessor, JSR223PostProcessor,
  RegexExtractor, ResultAction, XPath2Extractor, XPathExtractor
} from "@/views/jmeter/js/Postprocessor";

export default {
  name: "SugarJmeterTree",
  data(){
    return {
      treeKey: performance.now().toString(),
      treeData: [],
      treeProps: {
        children: 'children',
        label: 'testname',
      }
    }
  },
  methods: {
    handleNodeClick(data){
      this.$store.commit('setCurrentTestElement', data)
    }
  },
  created() {
    this.$store.commit('initTestPlan')
    this.treeData[0] = this.$store.state.testPlan
    let c = this.treeData[0].children

    this.treeData[0].children.push(new ThreadGroup())
    this.treeData[0].children.push(new HeaderManager())
    this.treeData[0].children.push(new CSVDataSet())
    this.treeData[0].children.push(new CookieManager())
    this.treeData[0].children.push(new CacheManager())
    this.treeData[0].children.push(new HttpDefaults())
    this.treeData[0].children.push(new BoltConnectionElement())
    this.treeData[0].children.push(new DNSCacheManage())
    this.treeData[0].children.push(new FtpConfig())
    this.treeData[0].children.push(new AuthManager())
    this.treeData[0].children.push(new JDBCDataSource())
    this.treeData[0].children.push(new JavaConfig())
    this.treeData[0].children.push(new TCPConfig())
    this.treeData[0].children.push(new KeystoreConfig())
    this.treeData[0].children.push(new Arguments())
    this.treeData[0].children.push(new SimpleConfig())
    this.treeData[0].children.push(new LoginConfig())
    this.treeData[0].children.push(new CounterConfig())
    this.treeData[0].children.push(new RandomVariableConfig())
    this.treeData[0].children.push(new IfController())
    this.treeData[0].children.push(new TransactionController())
    this.treeData[0].children.push(new LoopController())
    this.treeData[0].children.push(new WhileController())
    this.treeData[0].children.push(new ForeachController())
    this.treeData[0].children.push(new IncludeController())
    c.push(new RunTime())
    c.push(new CriticalSectionController())
    c.push(new InterleaveControl())
    c.push(new OnceOnlyController())
    c.push(new GenericController())
    c.push(new RandomController())
    c.push(new RandomOrderController())
    c.push(new ThroughputController())
    c.push(new SwitchController())
    c.push(new ConstantTimer())
    c.push(new UniformRandomTimer())
    c.push(new PreciseThroughputTimer())
    c.push(new ConstantThroughputTimer())
    c.push(new JSR223Timer())
    c.push(new SyncTimer())
    c.push(new PoissonRandomTimer())
    c.push(new GaussianRandomTimer())
    c.push(new JSR223PreProcessor())
    c.push(new UserParameters())
    c.push(new AnchorModifier())
    c.push(new URLRewritingModifier())
    c.push(new JDBCPreProcessor())
    c.push(new SampleTimeout())
    c.push(new RegExUserParameter())
    c.push(new HtmlExtractor())
    c.push(new JMESPathExtractor())
    c.push(new JSONPostProcessor())
    c.push(new RegexExtractor())
    c.push(new BoundaryExtractor())
    c.push(new JSR223PostProcessor())
    c.push(new JDBCPostProcessor())
    c.push(new XPath2Extractor())
    c.push(new XPathExtractor())
    c.push(new ResultAction())
    c.push(new DebugPostProcessor())
  },
  computed: {
    categories(){
      return JC
    }
  }
}
</script>

<style scoped lang="scss">

.tree-node-icon{
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

</style>