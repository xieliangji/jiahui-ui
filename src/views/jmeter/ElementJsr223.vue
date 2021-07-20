<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">脚本语言（例如：beanshell、JavaScript、jexl）</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">语言</div>
        <div class="input">
          <el-select v-model="element.scriptLanguage">
            <el-option value="beanshell" label="beanshell（BeanShell 2.0b6/ BeanShell Engine 1.0）"></el-option>
            <el-option value="bsh" label="bsh（BeanShell 2.0b6/ BeanShell Engine 1.0）"></el-option>
            <el-option value="ecmascript" label="ecmascript （ECMAScript ECMA - 262 Edition 5.1/ Oracle Nashorn 1.8.0_231）"></el-option>
            <el-option value="groovy" label="groovy （Groovy 3.0.3 / Groovy Scripting Engine 2.0）"></el-option>
            <el-option value="java" label="java（BeanShell 2.0b6/ BeanShell Engine 1.0）"></el-option>
            <el-option value="javascript" label="javascript （ECMAScript ECMA - 262 Edition 5.1/ Oracle Nashorn 1.8.0_231）"></el-option>
            <el-option value="jexl" label="jexl （JEXL 2.0 / JEXL Engine 2.0）"></el-option>
            <el-option value="jexl1" label="jexl1 （JEXL 2.0 / JEXL Engine 2.0）"></el-option>
            <el-option value="jexl2" label="jexl2 （JEXL 3.0 / JEXL Engine 3.0）"></el-option>
            <el-option value="js" label="js （ECMAScript ECMA - 262 Edition 5.1/ Oracle Nashorn 1.8.0_231）"></el-option>
            <el-option value="nashorn" label="nashorn （ECMAScript ECMA - 262 Edition 5.1/ Oracle Nashorn 1.8.0_231）"></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">将参数传递给脚本（String与String[]）</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">参数</div>
        <div class="input">
          <el-input v-model="element.parameters"></el-input>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">脚本文件（覆盖脚本）</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">文件名</div>
        <div class="input" @dblclick="handleScriptUpload">
          <el-input readonly v-model="scriptFileName" placeholder="双击选择上传脚本文件"></el-input>
          <input id="scriptInput" type="file" style="display: none" accept=".js,.bsh,.groovy,.py" @change="handleScriptFileChange"/>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">脚本编译缓存</div>
      <div class="sugar-normal-line">
        如果可用，缓存编译脚本 <el-checkbox v-model="element.cacheKey"></el-checkbox>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">{{ scriptTitle }}</div>
      <div style="height: 600px">
        <jmeter-editor :language="scriptLanguage" :script="element.script" :read-only="false" @scriptUpdate="handleScriptUpdate"></jmeter-editor>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {JT} from "@/views/jmeter/js/JmeterTestElement";
import JmeterEditor from "@/components/JmeterEditor";
import {upload} from "@/views/jmeter/js/TestPlanFileUploader";
export default {
  name: "ElementJsr223",
  components: {JmeterEditor, SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      scriptFileName: ''
    }
  },
  methods: {
    handleScriptUpload(){
      let scriptInputEl = document.getElementById('scriptInput')
      scriptInputEl.click()
    },

    handleScriptFileChange(){
      let scriptInputEl = document.getElementById('scriptInput')
      let fileName = scriptInputEl.files[0].name
      this.$confirm(`是否上传脚本文件 [${fileName}]`,"", {confirmButtonText: '是', cancelButtonText: '否'}).then(() => {
        let payload = new FormData()
        let uploaderId = (this.$store.state.sugarAccount === undefined || this.$store.state.sugarAccount === null) ? 0: this.$store.state.sugarAccount.id
        payload.append("file", scriptInputEl.files[0])
        payload.append("uploaderId", uploaderId)

        upload(payload).then(path => {
          let pathBits = path.split('/')
          let pathName = pathBits.length > 0 ? pathBits[pathBits.length - 1] : ""
          this.scriptFileName = `${pathName} （${fileName}）`
          this.element.filename = path
          scriptInputEl.value = ''
        }).catch(() => {
          scriptInputEl.value = ''
        })
      }).catch(() => {
        scriptInputEl.value = ''
      })
    },

    handleScriptUpdate(script){
      this.element.script= script
    }
  },
  computed: {
    scriptLanguage(){
      switch (this.element.scriptLanguage){
        case 'beanshell': return 'groovy'
        case 'bsh': return 'groovy'
        case 'groovy': return 'groovy'
        case 'java': return 'java'
        case 'js': return 'javascript'
        case 'javascript': return 'javascript'
        case 'ecmascript': return 'javascript'
        case 'nashorn': return 'javascript'
        case 'jexl': return 'java'
        case 'jexl2': return 'java'
        case 'jexl3': return 'java'
        default: return 'groovy'
      }
    },

    scriptTitle(){
      switch (this.element.type){
        case JT.JSR223Timer: return "脚本（变量：ctx vars props sampler log Label Filename Parameters args OUT）"
        case JT.JSR223Assertion: return "脚本（变量：ctx vars props SampleResult (aka prev) AssertionResult sampler log Label Filename Parameters args OUT）"
        case JT.JSR223PreProcessor: return "脚本（变量：ctx vars props sampler log Label Filename Parameters args OUT）"
        case JT.JSR223PostProcessor: return "脚本（变量：ctx vars props prev sampler log Label Filename Parameters args OUT）"
        default: return "脚本（变量：ctx vars props SampleResult sampler log Label Filename Parameters args OUT）"
      }
    },
  }
}
</script>

<style scoped>
.label{
  width: 45px !important;
}
</style>