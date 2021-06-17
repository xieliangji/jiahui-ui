<template>
  <div id="jmeter-tree">
    <el-tree default-expand-all :data="treeData" :props="treeProps" :key="treeKey" empty-text=" " ref="testPlanTree" @node-contextmenu="handleNodeContextClick" node-key="id" :current-node-key="$store.state.currentTestElement.id" highlight-current draggable :allow-drag="handleAllowDrag" :allow-drop="handleAllowDrop" :expand-on-click-node="false" @node-click="handleNodeClick">
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

    <div v-if="showContextMenu" id="jmeterTreeContextMenu">
      <at-menu mode="vertical" @on-select.once="handleContextSelect">
        <template v-for="level0Item in menu">
          <at-submenu :key="level0Item.name" v-if="level0Item.children !== undefined">
            <template slot="title">{{level0Item.label}}</template>
            <template v-for="level1Item in level0Item.children">
              <at-submenu :key="level1Item.name" v-if="level1Item.children !== undefined">
                <template slot="title">{{level1Item.label}}</template>
                <at-menu-item v-for="level2Item in level1Item.children" :key="level2Item.name" :name="level2Item.name">{{level2Item.label}}</at-menu-item>
              </at-submenu>
              <at-menu-item v-if="level1Item.children === undefined" :key="level1Item.name" :name="level1Item.name">{{level1Item.label}}</at-menu-item>
            </template>
          </at-submenu>
          <at-menu-item v-if="level0Item.children === undefined" :key="level0Item.name" :name="level0Item.name">{{level0Item.label}}</at-menu-item>
        </template>
      </at-menu>
    </div>
  </div>
</template>

<script>
import {JC} from "@/views/jmeter/js/JmeterTestElement";
import {getMenuData} from "@/views/jmeter/js/JmeterTreeContextMenuData";

export default {
  name: "SugarJmeterTree",
  data(){
    return {
      treeKey: 19890512,
      treeData: [],
      treeProps: {
        children: 'children',
        label: 'testname',
      },
      showContextMenu: false,
      nodeClipboard: undefined,
    }
  },
  methods: {
    // 单击测试计划树节点 - 设置为当前的选中节点
    handleNodeClick(data){
      this.$store.commit('setCurrentTestElement', data)

      let ctxMenu = document.getElementById('jmeterTreeContextMenu')
      if(ctxMenu !== undefined){
        this.showContextMenu = false
      }
    },

    // 右击元素显示对应的右键菜单
    handleNodeContextClick(event, data){
      this.showContextMenu = true
      this.$store.commit('setCurrentTestElement', data)
      this.$refs.testPlanTree.setCurrentKey(data.id)

      this.$nextTick(() => {
        let ctxMenu = document.getElementById('jmeterTreeContextMenu')
        let menuX = event.clientX
        let menuY = event.clientY
        ctxMenu.style.position = 'fixed'
        ctxMenu.style.top = menuY + 'px'
        ctxMenu.style.left = menuX + 'px'
        ctxMenu.style.zIndex = '2021'
        document.onclick = (e) => {
          if(e.clientX < menuX || e.clientX > menuX + ctxMenu.offsetWidth || e.clientY < menuY || e.clientY > menuY + ctxMenu.offsetHeight){
            this.showContextMenu = false
          }
          document.removeEventListener('onclick', undefined);
        }
      })
    },

    // 从指定菜单列表中搜索指定名字的菜单项对象
    searchItemObject(itemName, itemArray){
      let target = undefined
      for(let index = 0; index < itemArray.length; index++){
        let currentItemObject = itemArray[index]
        if(currentItemObject.name === itemName){
          target = currentItemObject
          break
        }
        if(currentItemObject.children !== undefined){
          target = this.searchItemObject(itemName, currentItemObject.children)
        }
        if(target !== undefined){
          break
        }
      }
      return target
    },

    // 选中右键菜单，处理其对应的逻辑
    handleContextSelect(itemName){
      this.showContextMenu = false
      let itemObject = this.searchItemObject(itemName, this.menu)

      // 此时点击菜单为复制、剪切、粘贴、删除、禁用、启用、切换等
      let currentElement = this.$store.state.currentTestElement
      if(itemObject.elementConstructor === undefined){
        if(itemName === 'copy'){
          // 复制
          this.nodeClipboard = JSON.stringify(this.$store.state.currentTestElement)
        } else if(itemName === 'cut'){
          // 剪切
          this.nodeClipboard = JSON.stringify(this.$store.state.currentTestElement)
          let cutNodeParent = this.$refs.testPlanTree.getNode(this.$store.state.currentTestElement).parent.data
          let currentIndex = cutNodeParent.children.indexOf(this.$store.state.currentTestElement)
          cutNodeParent.children.splice(currentIndex, 1)
          this.$store.commit('setCurrentTestElement', this.treeData[0])
          this.$refs.testPlanTree.setCurrentKey(this.$store.state.currentTestElement.id)
        } else if(itemName === 'paste'){
          // 粘贴
          if(this.nodeClipboard !== undefined){
            let pasteNode = JSON.parse(this.nodeClipboard)
            let pasteCategory = pasteNode.category
            let currentCategory = this.$store.state.currentTestElement.category

            if(currentCategory === JC.ConfigElement || currentCategory === JC.Timer || currentCategory === JC.Preprocessor || currentCategory === JC.Postprocessor || currentCategory === JC.Listener){
              return
            }

            if(currentCategory === JC.TestPlan && (pasteCategory === JC.Controller || pasteCategory === JC.Sampler)){
              return
            }

            if(pasteCategory === JC.ThreadGroup && currentCategory !== JC.TestPlan){
              return
            }

            if(currentCategory === JC.Sampler && (pasteCategory === JC.Controller || pasteCategory === JC.Sampler)){
              return
            }

            pasteNode.id = this.$store.getters.testElementId()
            this.$store.state.currentTestElement.children.push(pasteNode)
            this.treeKey = this.treeKey - 1
            this.$nextTick(() => this.$refs.testPlanTree.setCurrentKey(pasteNode.id))
          }
        } else if(itemName === 'delete'){
          // 删除
          this.$confirm('是否删除当前测试计划元素？', '', {type: 'warning', confirmButtonText: '是', cancelButtonText: '否'}).then(() => {
            // 确认删除
            let currentParent = this.$refs.testPlanTree.getNode(this.$store.state.currentTestElement).parent.data
            let currentIndex = currentParent.children.indexOf(this.$store.state.currentTestElement)
            if(currentIndex >= 0){
              currentParent.children.splice(currentIndex, 1)
              this.$store.commit('setCurrentTestElement', this.treeData[0])
              this.$refs.testPlanTree.setCurrentKey(this.$store.state.currentTestElement.id)
            }
          }).catch(() => {
            console.log('取消删除测试计划树节点')
          })
        } else if(itemName === 'disable'){
          currentElement.enabled = false
        } else if(itemName === 'enable'){
          currentElement.enabled = true
        } else if(itemName === 'switch'){
          currentElement.enabled = !currentElement.enabled
        }
      } else { // 添加、插入上级、改变逻辑控制器
        let ElementConstructor = itemObject.elementConstructor
        let element = new ElementConstructor()

        if(itemName.startsWith('insert')){
          // 插入上级
          let currentParent = this.$refs.testPlanTree.getNode(this.$store.state.currentTestElement).parent.data
          let futureParent = new ElementConstructor()
          let currentIndex = currentParent.children.indexOf(this.$store.state.currentTestElement)
          futureParent.children.push(this.$store.state.currentTestElement)
          currentParent.children[currentIndex] = futureParent
          this.$store.commit('setCurrentTestElement', futureParent)
          this.$refs.testPlanTree.setCurrentKey(this.$store.state.currentTestElement.id)
        } else if(itemName.startsWith('change')){
          // 改变逻辑控制器
          let currentParent = this.$refs.testPlanTree.getNode(this.$store.state.currentTestElement).parent.data
          let currentIndex = currentParent.children.indexOf(this.$store.state.currentTestElement)
          let newElement = new ElementConstructor()
          currentParent.children[currentIndex] = newElement
          newElement.children = this.$store.state.currentTestElement.children
          this.$store.commit('setCurrentTestElement', newElement)
          this.$refs.testPlanTree.setCurrentKey(this.$store.state.currentTestElement.id)
        } else {
          // 添加子元素
          this.$store.state.currentTestElement.children.push(element)
          this.$store.commit('setCurrentTestElement', element)
        }
      }

      this.treeKey = this.treeKey - 1
      this.$nextTick(() => this.$refs.testPlanTree.setCurrentKey(this.$store.state.currentTestElement.id))
    },

    // 可允许被拖动的树节点 - 测试计划元素节点不可拖动
    handleAllowDrag(node){
      return node.data.category !== JC.TestPlan
    },

    // 当前拖动节点与目标下方节点是否构成可拖动并下放关系
    handleAllowDrop(draggingNode, dropNode, type){
      let dragCategory = draggingNode.data.category
      let dropCategory = dropNode.data.category
      let dropParentCategory = dropNode.parent.data.category

      if(type === 'inner'){
        if(dropCategory === JC.TestPlan && (dragCategory === JC.Controller || dragCategory === JC.Sampler)){
          return false
        }
        if((dropCategory === JC.ThreadGroup || dropCategory === JC.Controller) && dragCategory === JC.ThreadGroup){
          return false
        }
        if(dropCategory === JC.Sampler && (dragCategory === JC.ThreadGroup || dragCategory === JC.Controller)){
          return false
        }
        if(dropCategory === JC.ConfigElement || dropCategory === JC.Preprocessor || dropCategory === JC.Postprocessor || dropCategory === JC.Assertion || dropCategory === JC.Timer || dropCategory === JC.Listener){
          return false
        }
      } else {
        if(dropCategory === JC.TestPlan){
          return false
        } else if(dropCategory === JC.ThreadGroup){
          if(dragCategory === JC.Controller || dragCategory === JC.Sampler){
            return false
          }
        } else if(dropCategory === JC.ConfigElement || dropCategory === JC.Preprocessor || dropCategory === JC.Postprocessor || dropCategory === JC.Assertion || dropCategory === JC.Timer){
          if(dropParentCategory === JC.TestPlan && (dragCategory === JC.Controller || dragCategory === JC.Sampler)){
            return false
          }
        } else if(dropCategory === JC.Sampler || dropCategory === JC.Controller){
          if(dragCategory === JC.ThreadGroup){
            return false
          }
        }
      }
      return true
    }
  },
  created() {
    this.$store.commit('initTestPlan')
    this.treeData[0] = this.$store.state.testPlan
  },

  computed: {
    categories(){
      return JC
    },
    menu(){
      return getMenuData(this.$store.state.currentTestElement.category)
    },
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