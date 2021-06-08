<template>
  <sugar-jmeter-element :title="$JL[element.type]" :jmeter-element="element">
    <el-tabs id="sugar-http-config" :active-name="activeTab">
      <el-tab-pane name="basic">
        <template slot="label"><div>基础</div></template>
        <div class="sugar-top-border" style="margin-top: 10px;">
          <div class="sugar-border-text">Web服务器</div>
          <div class="sugar-flex-row sugar-normal-line">
            <div class="sugar-label-input">
              <div class="label">协议</div>
              <div class="input">
                <el-input v-model="element.protocol"></el-input>
              </div>
            </div>
            <div class="sugar-label-input" style="flex-grow: 1; margin: 0 5px;">
              <div class="label">服务器名称或IP</div>
              <div class="input">
                <el-input v-model="element.domain"></el-input>
              </div>
            </div>
            <div class="sugar-label-input" style="width: 350px;">
              <div class="label">端口号</div>
              <div class="input">
                <el-input v-model="element.port"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="sugar-top-border">
          <div class="sugar-border-text">Http请求</div>
          <div class="sugar-flex-row sugar-normal-line">
            <div v-if="element.method !== undefined" style="width: 200px; margin-right: 5px;">
              <el-select v-model="element.method">
                <el-option value="GET"></el-option>
                <el-option value="POST"></el-option>
                <el-option value="HEAD"></el-option>
                <el-option value="PUT"></el-option>
                <el-option value="OPTIONS"></el-option>
                <el-option value="TRACE"></el-option>
                <el-option value="DELETE"></el-option>
                <el-option value="PATCH"></el-option>
                <el-option value="PROPFIND"></el-option>
                <el-option value="PROPPATCH"></el-option>
                <el-option value="MKCOL"></el-option>
                <el-option value="LOCK"></el-option>
                <el-option value="UNLOCK"></el-option>
                <el-option value="REPORT"></el-option>
                <el-option value="MKCALENDAR"></el-option>
                <el-option value="SEARCH"></el-option>
              </el-select>
            </div>
            <div class="sugar-label-input" style="flex-grow: 1; margin: 0 5px 0 0;">
              <div class="label">路径</div>
              <div class="input">
                <el-input v-model="element.path"></el-input>
              </div>
            </div>
            <div class="sugar-label-input" style="width: 300px;">
              <div class="label">内容编码</div>
              <el-input v-model="element.contentEncoding"></el-input>
            </div>
          </div>
        </div>
        <div class="sugar-layout-wrap">
          <el-tabs :active-name="activeTab2">
            <el-tab-pane name="argument" :disabled="element.postBodyRaw">
              <template slot="label"><div>参数</div></template>
              <div class="sugar-table-header sugar-normal-line">同请求一起发送参数</div>
              <el-table height="600px" ref="argumentTable" :data="element.arguments" row-key="id" highlight-current-row empty-text=" " @row-click="handleRowClick">
                <el-table-column prop="name">
                  <div slot="header" class="sugar-table-header">名称</div>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.name"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="name">
                  <div slot="header" class="sugar-table-header">值</div>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.value"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="name">
                  <div slot="header" class="sugar-table-header">编码</div>
                  <template slot-scope="scope">
                    <div class="sugar-table-header">
                      <el-checkbox v-model="scope.row.alwaysEncode"></el-checkbox>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="name">
                  <div slot="header" class="sugar-table-header">内容类型</div>
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.contentType"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="name">
                  <div slot="header" class="sugar-table-header">包含等于</div>
                  <template slot-scope="scope">
                    <div class="sugar-table-header">
                      <el-checkbox v-model="scope.row.useEquals"></el-checkbox>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
              <div style="text-align: center; margin-top: 10px;">
                <el-button type="primary" @click="handleArgumentAdd">添加</el-button>
                <el-button type="primary" @click="handleArgumentDel">删除</el-button>
                <el-button type="primary" @click="handleArgumentUp">向上</el-button>
                <el-button type="primary" @click="handleArgumentDown">向下</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane name="raw" :disabled="!element.postBodyRaw && element.arguments.length !== 0">
              <template slot="label"><div>消息体数据</div></template>
              <div style="height: 600px">
                <jmeter-editor language="plain_text" :read-only="false" :script="rawScript" @scriptUpdate="handleRawUpdate"></jmeter-editor>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>

      <el-tab-pane name="advanced">
        <template slot="label"><div>高级</div></template>
        <div class="sugar-flex-row" style="margin-top: 10px;">
          <div class="sugar-top-border" style="flex-grow: 1; margin-right: 5px;">
            <div class="sugar-border-text">客户端实现</div>
            <div class="sugar-label-input sugar-normal-line">
              <div class="label">实现</div>
              <div class="input">
                <el-select v-model="element.implementation" placeholder="">
                  <el-option value="HttpClient4"></el-option>
                  <el-option value="Java"></el-option>
                  <el-option value=""></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="sugar-top-border" style="flex-grow: 1;">
            <div class="sugar-border-text">超时（毫秒）</div>
            <div class="sugar-flex-row sugar-normal-line">
              <div class="sugar-label-input" style="flex-grow: 1; margin-right: 5px;">
                <div class="label">连接</div>
                <div class="input">
                  <el-input v-model="element.connectTimeout"></el-input>
                </div>
              </div>
              <div class="sugar-label-input" style="flex-grow: 1;">
                <div class="label">响应</div>
                <div class="input">
                  <el-input v-model="element.responseTimeout"></el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sugar-top-border">
          <div class="sugar-border-text">从HTML文件嵌入资源</div>
          <div class="sugar-normal-line sugar-flex-row">
            <div>
              <el-checkbox v-model="element.imageParser">从HTML文件获取所有内含的资源</el-checkbox>
              <el-checkbox v-model="element.concurrentDwn">并行下载. 数量</el-checkbox>
            </div>
            <div style="margin-left: 5px; width: 100px;">
              <el-input v-model="element.concurrentPool"></el-input>
            </div>
          </div>
          <div class="sugar-normal-line sugar-label-input">
            <div class="label" style="width: 160px;">网址必须匹配</div>
            <div class="input">
              <el-input v-model="element.embeddedUrlRe"></el-input>
            </div>
          </div>
          <div class="sugar-normal-line sugar-label-input">
            <div class="label" style="width: 160px;">Urls must not match</div>
            <div class="input">
              <el-input v-model="element.embeddedUrlExcludeRe"></el-input>
            </div>
          </div>
        </div>
        <div class="sugar-top-border">
          <div class="sugar-border-text">源地址</div>
          <div class="sugar-normal-line sugar-label-input">
            <div class="label">
              <el-select v-model="element.ipSourceType">
                <el-option :value="0" label="IP/主机名"></el-option>
                <el-option :value="1" label="设备"></el-option>
                <el-option :value="2" label="设备 IPv4"></el-option>
                <el-option :value="3" label="设备 IPv6"></el-option>
              </el-select>
            </div>
            <div class="input">
              <el-input v-model="element.ipSource"></el-input>
            </div>
          </div>
        </div>
        <div class="sugar-top-border">
          <div class="sugar-border-text">代理服务器</div>
          <div class="sugar-normal-line sugar-flex-row">
            <div class="sugar-label-input" style="width: 150px; margin-right: 5px;">
              <div class="label">Scheme</div>
              <div class="input">
                <el-input v-model="element.proxyScheme"></el-input>
              </div>
            </div>
            <div class="sugar-label-input" style="flex-grow: 1;">
              <div class="label">服务器或IP</div>
              <div class="input">
                <el-input v-model="element.proxyHost"></el-input>
              </div>
            </div>
            <div class="sugar-label-input" style="width: 150px; margin: 0 5px;">
              <div class="label">端口号</div>
              <div class="input">
                <el-input v-model="element.proxyPort"></el-input>
              </div>
            </div>
            <div class="sugar-label-input" style="margin-right: 5px;">
              <div class="label">用户名</div>
              <div class="input">
                <el-input v-model="element.proxyUser"></el-input>
              </div>
            </div>
            <div class="sugar-label-input">
              <div class="label">密码</div>
              <div class="input">
                <el-input type="password" v-model="element.proxyPass"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="sugar-top-border">
          <div class="sugar-border-text">其他任务</div>
          <div class="sugar-normal-line">
            <el-checkbox v-model="element.md5">保存响应为MD5哈希</el-checkbox>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
import {HttpArgument} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "ElementHttp",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      activeTab: 'basic',
      activeTab2: 'argument',
      currentArgument: undefined,
    }
  },
  methods: {
    handleRowClick(row){
      this.currentArgument = row
    },

    handleArgumentAdd(){
      let httpArgument = new HttpArgument()
      this.element.arguments.push(httpArgument)
      this.currentArgument = httpArgument
      this.$refs.argumentTable.setCurrentRow(httpArgument)
      this.element.postBodyRaw = false
    },

    handleArgumentDel(){
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
          this.$refs.argumentTable.setCurrentRow(this.currentArgument)
          break
        }
      }
    },

    handleArgumentUp(){

    },

    handleArgumentDown(){

    },

    handleRawUpdate(script){
      this.rawScript = script
    }
  },
  computed: {
    rawScript: {
      get(){
        return this.element.postBodyRaw ? "" : (this.element.arguments.length > 0 ? this.element.arguments[0].value: "")
      },
      set(value){
        if(value !== ""){
          this.element.postBodyRaw = true
          let httpArgument = new HttpArgument()
          httpArgument.value = value
          this.element.arguments[0] = httpArgument
        } else {
          this.element.postBodyRaw = false
          this.element.arguments.splice(0, 1)
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">

#sugar-http-config {
  &::v-deep .el-tabs__item.is-active > div{
    line-height: 30px;
    border-bottom: 2px solid #2ebf91;
  }
}

</style>