<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">信息头存储在信息头管理器中</div>
      <el-table :data="element.headers" :key="headerTableKey" ref="headerTable" style="border: 1px solid #DCDFE6;" height="600px" empty-text=" " highlight-current-row row-key="id" @row-click="handleRowClick">
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
        <el-button type="primary" @click="handleHeaderAdd">添加</el-button>
        <el-button type="primary" @click="handleHeaderDel">删除</el-button>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {Header} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "ConfigElementHeader",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      headerTableKey: performance.now().toString(),
      currentHeader: undefined
    }
  },
  methods: {
    handleRowClick(row) {
      this.currentHeader = row
    },

    handleHeaderAdd(){
      let header = new Header()
      this.element.headers.push(header)
      this.$refs.headerTable.setCurrentRow(header)
      this.currentHeader = header
    },

    handleHeaderDel(){
      for(let index = 0; index < this.element.headers.length && this.currentHeader !== undefined; index++){
        if(this.currentHeader.id === this.element.headers[index].id){
          this.element.headers.splice(index, 1)
          break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>