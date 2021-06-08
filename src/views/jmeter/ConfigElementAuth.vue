<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line">
      <el-checkbox :disabled="element.controlledByThreadGroup" v-model="element.clearEachIteration">在每次迭代清除认证</el-checkbox>
    </div>
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.controlledByThreadGroup">Use Thread Group configuration to control clearing</el-checkbox>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">存储在授权管理器中的授权</div>
      <el-table :data="element.authList" ref="authTable" height="600px" row-key="id" highlight-current-row empty-text=" " @row-click="handleAuthClick">
        <el-table-column prop="url">
          <div slot="header" class="sugar-table-header">基础URL</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.url"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="username">
          <div slot="header" class="sugar-table-header">用户名</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.username"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="password">
          <div slot="header" class="sugar-table-header">密码</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.password" type="password"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="domain">
          <div slot="header" class="sugar-table-header">域</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.domain"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="realm">
          <div slot="header" class="sugar-table-header">Realm</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.realm"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="mechanism">
          <div slot="header" class="sugar-table-header">Mechanism</div>
          <template slot-scope="scope">
            <el-select v-model="scope.row.mechanism">
              <el-option value="BASIC_DIGEST"></el-option>
              <el-option value="BASIC"></el-option>
              <el-option value="DIGEST"></el-option>
              <el-option value="KERBEROS"></el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 10px; text-align: center;">
        <el-button type="primary" @click="handleAuthAdd">添加</el-button>
        <el-button type="primary" @click="handleAuthDel">删除</el-button>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {Authorization} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "ConfigElementAuth",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      currentAuth: undefined
    }
  },
  methods: {
    handleAuthClick(row){
      this.currentAuth = row
    },
    
    handleAuthAdd(){
      let auth = new Authorization()
      this.element.authList.push(auth)
      this.currentAuth = auth
      this.$refs.authTable.setCurrentRow(this.currentAuth)
    },
    
    
    handleAuthDel(){
      for(let index = 0; index < this.element.authList.length && this.currentAuth !== undefined; index++){
        if(this.currentAuth.id === this.element.authList[index].id){
          if(this.element.authList.length === 0){
            this.currentAuth = undefined
          } else {
            if(index < this.element.authList.length - 1){
              this.currentAuth = this.element.authList[index + 1]
            } else {
              this.currentAuth = this.element.authList[index - 1]
            }
          }
          this.element.authList.splice(index, 1)
          this.$refs.authTable.setCurrentRow(this.currentAuth)
          break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>