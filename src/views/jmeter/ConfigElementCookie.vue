<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">选项</div>
      <div class="sugar-normal-line">
        <el-checkbox v-model="element.clearEachIteration">每次反复清除Cookies</el-checkbox>
      </div>
      <div class="sugar-normal-line">
        <el-checkbox v-model="element.controlledByThreadGroup">Use Thread Group configuration to control cookie clearing</el-checkbox>
      </div>
      <div class="sugar-normal-line" style="width: 200px;">
        <el-select v-model="element.policy">
          <el-option value="standard" label="standard"></el-option>
          <el-option value="standard-strict" label="standard-strict"></el-option>
          <el-option value="ignoreCookies" label="ignoreCookies"></el-option>
          <el-option value="default" label="default"></el-option>
          <el-option value="netscape" label="netscape"></el-option>
          <el-option value="rfc2019" label="rfc2019"></el-option>
          <el-option value="rfc2965" label="rfc2965"></el-option>
          <el-option value="best-match" label="best-match"></el-option>
          <el-option value="compatibility" label="compatibility"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">存储在Cookie管理器中的Cookie</div>
      <el-table :data="element.cookies" ref="cookieTable" style="border: 1px solid #DCDFE6;" height="600px" row-key="id" empty-text=" " highlight-current-row @row-click="handleRowClick">
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
        <el-table-column prop="domain">
          <div slot="header" class="sugar-table-header">域</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.domain"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="path">
          <div slot="header" class="sugar-table-header">路径</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.path"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="secure">
          <div slot="header" class="sugar-table-header">安全</div>
          <template slot-scope="scope">
            <div class="sugar-table-header">
              <el-checkbox v-model="scope.row.secure"></el-checkbox>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center; margin-top: 10px;">
        <el-button type="primary" @click="handleCookieAdd">添加</el-button>
        <el-button type="primary" @click="handleCookieDel">删除</el-button>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {Cookie} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "ConfigElementCookie",
  components: {SugarJmeterElement},
  props: {
    element: Object,
  },
  data(){
    return {
      currentCookie: undefined
    }
  },
  methods: {
    handleRowClick(row){
      this.currentCookie = row
    },


    handleCookieAdd(){
      let cookie = new Cookie()
      this.element.cookies.push(cookie)
      this.currentCookie = cookie
      this.$refs.cookieTable.setCurrentRow(cookie)
    },


    handleCookieDel(){
      for(let index = 0; index < this.element.cookies.length && this.currentCookie !== undefined; index++){
        if(this.currentCookie.id === this.element.cookies[index].id){
          if(this.element.cookies.length === 0){
            this.currentCookie = undefined
          } else {
            if(index < this.element.cookies.length - 1){
              // 当前cookie删除后，下一个cookie为当前cookie
              this.currentCookie = this.element.cookies[index + 1]
            } else {
              // 当前cookie删除后，上一个cookie为当前cookie
              this.currentCookie = this.element.cookies[index - 1]
            }
          }
          this.element.cookies.splice(index, 1)
          this.$refs.cookieTable.setCurrentRow(this.currentCookie)
          break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>