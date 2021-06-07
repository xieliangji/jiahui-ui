<template>
  <sugar-jmeter-element :title="$JL.TestPlan" :jmeter-element="element">
    <div class="sugar-flex-col test-plan-arg">
      <div>用户自定义变量</div>
      <div style="border: 1px solid #F0F2F0;">
        <el-table :key="testPlanArgumentTableKey" ref="testPlanArgumentTable" height="600px" :data="element.arguments" empty-text=" " highlight-current-row row-key="id" @row-click="handleRowClick">
          <el-table-column prop="name">
            <div slot="header" class="sugar-table-header">名称</div>
            <template slot-scope="scope">
              <el-input v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="value">
            <div slot="header" class="sugar-table-header">值</div>
            <template slot-scope="scope">
              <el-input v-model="scope.row.value"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="margin-top: 10px;">
        <el-button type="primary" @click="handleAdd">添加</el-button>
        <el-button type="primary" @click="handleDel">删除</el-button>
        <el-button type="primary" @click="handleUp">向上</el-button>
        <el-button type="primary" @click="handleDown">向下</el-button>
      </div>
    </div>
    <div class="sugar-line">
      <el-checkbox v-model="element.serializeThreadgroups">独立运行每个线程组（在一个线程组运行结束后启动下一个）</el-checkbox>
    </div>
    <div class="sugar-line">
      <el-checkbox v-model="element.teardownOnShutdown">主线程运行结束后启动teardown线程组</el-checkbox>
    </div>
    <div class="sugar-line">
      <el-checkbox v-model="element.functionalMode">函数测试模式</el-checkbox>
    </div>
    <div :style="{color: element.functionalMode ? '#2ebf91':''}">
      只有当你需要记录每个请求从服务器取得的数据到文件时才需要选择函数测试模式。选择这个选项很影响性能
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {Argument} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "TestPlan",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      testPlanArgumentTableKey: performance.now().toString(),
      currentArgument: undefined,
    }
  },
  methods: {
    handleRowClick(row){
      this.currentArgument = row
    },

    handleAdd(){
      let argument = new Argument()
      this.element.arguments.push(argument)
      this.currentArgument = argument
      this.$refs.testPlanArgumentTable.setCurrentRow(this.currentArgument)
    },

    handleDel(){
      for(let index = 0; index < this.element.arguments.length && this.currentArgument !== undefined; index++){
        if(this.currentArgument.id === this.element.arguments[index].id){
          this.element.arguments.splice(index, 1)
          this.currentArgument = undefined
          break
        }
      }
    },

    moveArgument(downOrUp){
      if(this.currentArgument === undefined){
        return
      }
      let args = this.element.arguments
      for(let index = 0; index < args.length; index++){
        if(this.currentArgument.id === args[index].id){
          let tempArgument = undefined
          if(downOrUp === 'up'){
            if(index !== 0){
              tempArgument = args[index]
              args[index] = args[index - 1]
              args[index - 1] = tempArgument
              this.testPlanArgumentTableKey = performance.now().toString()
              this.$nextTick(() => this.$refs.testPlanArgumentTable.setCurrentRow(this.currentArgument))
            }
          } else {
            if(index !== args.length - 1){
              tempArgument = args[index]
              args[index] = args[index + 1]
              args[index + 1] = tempArgument
              this.testPlanArgumentTableKey = performance.now().toString()
              this.$nextTick(() => this.$refs.testPlanArgumentTable.setCurrentRow(this.currentArgument))
            }
          }

          return
        }
      }

    },

    handleUp(){
      this.moveArgument('up')

    },

    handleDown(){
      this.moveArgument('down')
    }
  },

}
</script>

<style scoped lang="scss">

.test-plan-arg{
  text-align: center;
}

</style>