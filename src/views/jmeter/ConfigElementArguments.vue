<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line" style="text-align: center;">用户自定义变量</div>
    <div style="border: 1px solid #DCDFE6;">
      <el-table :key="argumentsTableKey" :data="element.arguments" ref="argumentsTable" height="600px" row-key="id" highlight-current-row empty-text=" " @row-click="handleArgumentClick">
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
        <el-table-column prop="desc">
          <div slot="header" class="sugar-table-header">描述</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.desc"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 10px; text-align: center;">
      <el-button type="primary" @click="handleAdd">添加</el-button>
      <el-button type="primary" @click="handleDel">删除</el-button>
      <el-button type="primary" @click="handleUp">向上</el-button>
      <el-button type="primary" @click="handleDown">向下</el-button>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {Argument} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "ConfigElementArguments",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      argumentsTableKey: 1,
      currentArgument: undefined
    }
  },
  methods: {
    handleArgumentClick(row){
      this.currentArgument = row
    },

    handleAdd(){
      let argument = new Argument()
      this.element.arguments.push(argument)
      this.currentArgument = argument
      this.$refs.argumentsTable.setCurrentRow(this.currentArgument)
    },

    handleDel(){
      for(let index = 0; index < this.element.arguments.length && this.currentArgument !== undefined; index++){
        if(this.currentArgument.id === this.element.arguments[index].id){
          if(this.element.arguments.length === 0){
            this.currentArgument = undefined
          } else {
            if(index < this.element.arguments.length - 1){
              this.currentArgument = this.element.arguments[index + 1]
            } else {
              this.currentArgument = this.element.arguments[index - 1]
            }
          }
          this.element.arguments.splice(index, 1)
          this.$refs.argumentsTable.setCurrentRow(this.currentArgument)
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
              this.argumentsTableKey = performance.now().toString()
              this.$nextTick(() => this.$refs.argumentsTable.setCurrentRow(this.currentArgument))
            }
          } else {
            if(index !== args.length - 1){
              tempArgument = args[index]
              args[index] = args[index + 1]
              args[index + 1] = tempArgument
              this.argumentsTableKey = performance.now().toString()
              this.$nextTick(() => this.$refs.argumentsTable.setCurrentRow(this.currentArgument))
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
  }
}
</script>

<style scoped>

</style>