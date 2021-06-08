<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div style="border: 1px solid #DCDFE6;">
      <el-table ref="simpleConfigTable" height="600px" :data="element.arguments" empty-text=" " highlight-current-row row-key="id" @row-click="handleRowClick">
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
    <div style="margin-top: 10px; text-align: center;">
      <el-button type="primary" @click="handleAdd">添加</el-button>
      <el-button type="primary" @click="handleDel">删除</el-button>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {Argument} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "ConfigElementSimple",
  components: {SugarJmeterElement},
  props: {
    element: Object,
  },
  data(){
    return {
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
      this.$refs.simpleConfigTable.setCurrentRow(this.currentArgument)
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
          this.$refs.simpleConfigTable.setCurrentRow(this.currentArgument)
          break
        }
      }
    }

  }
}
</script>

<style scoped>

</style>