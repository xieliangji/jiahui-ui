<template>
  <div id="jmeter-tree">
    <el-tree :data="treeData" :props="treeProps" :key="treeKey" empty-text=" " ref="testPlanTree" node-key="id" :current-node-key="$store.state.currentTestElement.id" highlight-current accordion>
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
        <span>{{node.label}}</span>
      </div>
    </el-tree>
  </div>
</template>

<script>
import {JC} from "@/views/jmeter/js/JmeterTestElement";

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

  },
  created() {
    this.$store.commit('initTestPlan')
    this.treeData[0] = this.$store.state.testPlan
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
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
}

</style>