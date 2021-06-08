<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">选项</div>
      <div class="sugar-normal-line">
        <el-checkbox v-model="element.clearEachIteration">在每次迭代中清除缓存</el-checkbox>
      </div>
      <div class="sugar-normal-line">
        <el-radio-group v-model="element.isCustomResolver">
          <el-radio :label="false">Use system DNS resolver</el-radio>
          <el-radio :label="true">Use custom DNS resolver</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">DNS服务器</div>
      <el-table :style="{background: element.isCustomResolver ? '': 'rgba(0,0,0,.1)'}" :data="element.servers" ref="serverTable" height="300px" empty-text=" " row-key="id" highlight-current-row @row-click="handleServerClick">
        <el-table-column prop="host">
          <div slot="header" class="sugar-table-header">主机名或IP地址</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.host" :readonly="!element.isCustomResolver"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 10px; text-align: center;">
        <el-button type="primary" :disabled="!element.isCustomResolver" @click="handleServerAdd">添加</el-button>
        <el-button type="primary" :disabled="!element.isCustomResolver" @click="handleServerDel">删除</el-button>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">静态主机列表</div>
      <el-table :style="{background: element.isCustomResolver ? '': 'rgba(0,0,0,.1)'}" :data="element.hosts" ref="hostTable" highlight-current-row height="300px" empty-text=" " row-key="id" @row-click="handleHostClick">
        <el-table-column prop="host">
          <div slot="header" class="sugar-table-header">主机</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.host" :readonly="!element.isCustomResolver"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="nameOrIp">
          <div slot="header" class="sugar-table-header">主机名或IP地址</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.nameOrId" :readonly="!element.isCustomResolver"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 10px; text-align: center;">
        <el-button type="primary" :disabled="!element.isCustomResolver" @click="handleHostAdd">添加静态主机</el-button>
        <el-button type="primary" :disabled="!element.isCustomResolver" @click="handleHostDel">删除静态主机</el-button>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {DnsHost, DnsServer} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "ConfigElementDns",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      currentServer: undefined,
      currentHost: undefined
    }
  },
  methods: {
    handleServerClick(row){
      this.currentServer = row
    },

    handleHostClick(row){
      this.currentHost = row
    },


    handleServerAdd(){
      let server = new DnsServer()
      this.element.servers.push(server)
      this.currentServer = server
      this.$refs.serverTable.setCurrentRow(this.currentServer)
    },

    handleServerDel(){
      for(let index = 0; index < this.element.servers.length && this.currentServer !== undefined; index++){
        if(this.currentServer.id === this.element.servers[index].id){
          if(this.element.servers.length === 0){
            this.currentServer = undefined
          } else {
            if(index < this.element.servers.length - 1){
              this.currentServer = this.element.servers[index + 1]
            } else {
              this.currentServer = this.element.servers[index - 1]
            }
          }
          this.element.servers.splice(index, 1)
          this.$refs.serverTable.setCurrentRow(this.currentServer)
          break
        }
      }
    },

    handleHostAdd(){
      let host = new DnsHost()
      this.element.hosts.push(host)
      this.currentHost = host
      this.$refs.hostTable.setCurrentRow(this.currentHost)
    },

    handleHostDel(){
      for(let index = 0; index < this.element.hosts.length && this.currentHost !== undefined; index++){
        if(this.currentHost.id === this.element.hosts[index].id){
          if(this.element.hosts.length === 0){
            this.currentHost = undefined
          } else {
            if(index < this.element.hosts.length - 1){
              this.currentHost = this.element.hosts[index + 1]
            } else {
              this.currentHost = this.element.hosts[index - 1]
            }
          }
          this.element.hosts.splice(index, 1)
          this.$refs.hostTable.setCurrentRow(this.currentHost)
          break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>