<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">Tidy Settings</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">文档类型</div>
        <div class="input">
          <el-select v-model="element.htmlAssertionDocType">
            <el-option value="omit" label="omit"></el-option>
            <el-option value="auto" label="auto"></el-option>
            <el-option value="strict" label="strict"></el-option>
            <el-option value="loose" label="loose"></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">格式（Format）</div>
      <el-radio-group v-model="element.htmlAssertionFormat">
        <div>
          <el-radio :label="0">HTML</el-radio>
        </div>
        <div>
          <el-radio :label="1">XHTML</el-radio>
        </div>
        <div>
          <el-radio :label="2">XML</el-radio>
        </div>
      </el-radio-group>
      <div>
        <el-checkbox v-model="element.htmlAssertionErrorOnly">Errors Only</el-checkbox>
      </div>
      <div class="sugar-normal-line sugar-flex-row">
        <div class="sugar-label-input" style="flex-grow: 1; margin-right: 5px;">
          <div class="label">Error Threshold</div>
          <div class="input">
            <el-input v-model="element.htmlAssertionErrorThreshold"></el-input>
          </div>
        </div>
        <div class="sugar-label-input" style="flex-grow: 1;">
          <div class="label">Warning Threshold</div>
          <div class="input">
            <el-input v-model="element.htmlAssertionWarningThreshold"></el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">将JTidy报告写入文件</div>
      <el-alert type="error" :closable="false">注：生成的文件在文件下载页面进行下载查看</el-alert>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">文件名</div>
        <div class="input">
          <el-input v-model="element.htmlAssertionFilename"></el-input>
        </div>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "AssertionHtml",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>