<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line">
      <el-select v-model="element.classname" @change="handleSelectChange">
        <el-option value="org.apache.jmeter.protocol.java.test.JavaTest"></el-option>
        <el-option value="org.apache.jmeter.protocol.java.test.SleepTest"></el-option>
      </el-select>
    </div>
    <div class="sugar-normal-line" style="text-align: center;">同请求一起发送参数</div>
    <el-table :key="tableKey" :data="element.arguments" ref="javaArgumentTable" height="600px" empty-text=" " row-key="id" highlight-current-row @row-click="handleJavaArgumentClick">
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
    <div style="text-align: center; margin-top: 10px;">
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
  name: "ConfigElementJava",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      javaArguments: {
        'org.apache.jmeter.protocol.java.test.JavaTest': [
          {id: 1, name: 'Sleep_Time', value: '100'},
          {id: 2, name: 'Sleep_Mask', value: '0xFF'},
          {id: 3, name: 'Label', value: ''},
          {id: 4, name: 'ResponseCode', value: ''},
          {id: 5, name: 'ResponseMessage', value: ''},
          {id: 6, name: 'Status', value: 'OK'},
          {id: 7, name: 'SamplerData', value: ''},
          {id: 8, name: 'ResultData', value: ''},
        ],
        'org.apache.jmeter.protocol.java.test.SleepTest': [
          {id: 1, name: 'Sleep_Time', value: '100'},
          {id: 2, name: 'Sleep_Mask', value: '0xFF'},
        ]
      },
      currentJavaArgument: undefined,
      tableKey: performance.now().toString()
    }
  },
  methods: {
    handleJavaArgumentClick(row){
      this.currentJavaArgument = row
    },

    handleSelectChange(){
      this.element.arguments = this.javaArguments[this.element.classname]
    },

    handleAdd(){
      let ja = new Argument()
      this.element.arguments.push(ja)
      this.currentJavaArgument = ja
      this.$refs.javaArgumentTable.setCurrentRow(this.currentJavaArgument)
    },


    handleDel(){
      for(let index = 0; index < this.element.arguments.length && this.currentJavaArgument !== undefined; index++){
        if(this.currentJavaArgument.id === this.element.arguments[index].id){
          if(this.element.arguments.length === 0){
            this.currentJavaArgument = undefined
          } else {
            if(index < this.element.arguments.length - 1){
              this.currentJavaArgument = this.element.arguments[index + 1]
            } else {
              this.currentJavaArgument = this.element.arguments[index - 1]
            }
          }
          this.element.arguments.splice(index, 1)
          this.$refs.javaArgumentTable.setCurrentRow(this.currentJavaArgument)
          break
        }
      }
    },

    moveArgument(downOrUp) {
      if (this.currentJavaArgument === undefined) {
        return
      }
      let args = this.element.arguments
      for (let index = 0; index < args.length; index++) {
        if (this.currentJavaArgument.id === args[index].id) {
          let tempArgument = undefined
          if (downOrUp === 'up') {
            if (index !== 0) {
              tempArgument = args[index]
              args[index] = args[index - 1]
              args[index - 1] = tempArgument
              this.tableKey = performance.now().toString()
              this.$nextTick(() => this.$refs.javaArgumentTable.setCurrentRow(this.currentJavaArgument))
            }
          } else {
            if (index !== args.length - 1) {
              tempArgument = args[index]
              args[index] = args[index + 1]
              args[index + 1] = tempArgument
              this.tableKey = performance.now().toString()
              this.$nextTick(() => this.$refs.javaArgumentTable.setCurrentRow(this.currentJavaArgument))
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
  created(){
    this.element.arguments = this.javaArguments[this.element.classname]
  }
}
</script>

<style scoped>

</style>