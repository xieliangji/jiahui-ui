<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line sugar-label-input">
      <div class="label">TCPClient classname</div>
      <div class="input">
        <el-input v-model="element.classname"></el-input>
      </div>
    </div>
    <div class="sugar-flex-row">
      <div class="sugar-top-border" style="flex-grow: 1; margin-right: 5px;">
        <div class="sugar-border-text">Target Server</div>
        <div class="sugar-flex-row sugar-normal-line">
          <div class="sugar-label-input" style="flex-grow: 1; margin-right: 5px;">
            <div class="label">服务器名称或IP</div>
            <div class="input">
              <el-input v-model="element.server"></el-input>
            </div>
          </div>
          <div class="sugar-label-input">
            <div class="label">端口号</div>
            <div class="input">
              <el-input v-model="element.port"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="sugar-top-border" style="width: 500px;">
        <div class="sugar-border-text">超时（毫秒）</div>
        <div class="sugar-flex-row sugar-normal-line">
          <div class="sugar-label-input" style="flex-grow: 1; margin-right: 5px;">
            <div class="label">连接</div>
            <div class="input">
              <el-input v-model="element.cTimeout"></el-input>
            </div>
          </div>
          <div class="sugar-label-input" style="flex-grow: 1;">
            <div class="label">响应</div>
            <div class="input">
              <el-input v-model="element.timeout"></el-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;" class="sugar-normal-border">
      <div class="sugar-normal-line sugar-flex-row">
        <div style="flex-grow: 1;">
          <el-checkbox v-model="element.reUseConnection">Re-use Connection</el-checkbox>
        </div>
        <div style="flex-grow: 1;">
          <el-checkbox v-model="element.closeConnection">关闭连接</el-checkbox>
        </div>
        <div style="flex-grow: 1;">
          <el-checkbox v-model="element.noDelay">设置无延迟</el-checkbox>
        </div>
        <div class="sugar-label-input" style="flex-grow: 1;">
          <div class="sugar-label-input" style="width: 250px">
            <div class="label">SO_LINGER</div>
            <div class="input">
              <el-input v-model="element.soLinger"></el-input>
            </div>
          </div>
        </div>
        <div class="sugar-label-input" style="flex-grow: 1;">
          <div class="sugar-label-input" style="width: 300px">
            <div class="label">行尾（EOL)字节值</div>
            <div class="input">
              <el-input v-model="element.eolByte"></el-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sugar-flex-row sugar-normal-border" style="margin: 20px 0;">
      <div class="sugar-flex-col tcp-request-label">
        <div>要发送的文本</div>
      </div>
      <div class="tcp-request-content">
        <jmeter-editor language="plain_text" :read-only="false" :script="element.request" @scriptUpdate="handleRequestUpdate"></jmeter-editor>
      </div>
    </div>
    <div class="sugar-top-border" v-if="element.username !== undefined && element.password !== undefined">
      <div class="sugar-border-text">登陆配置</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label" style="width: 60px;">用户名</div>
        <div class="input">
          <el-input v-model="element.username"></el-input>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label" style="width: 60px;">密码</div>
        <div class="input">
          <el-input v-model="element.password" type="password"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "ConfigElementTcp",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleRequestUpdate(script){
      this.element.request = script
    }
  }
}
</script>

<style scoped>
.tcp-request-label, .tcp-request-content{
  height: 300px;
}

.tcp-request-label{
  justify-content: center;
  margin-right: 5px;
}

.tcp-request-content{
  flex-grow: 1;
}
</style>