<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">文件名</div>
      <div class="input" @dblclick="handleCsvUpload">
        <Input v-model="element.filename" readonly placeholder="双击上传csv文件"></Input>
        <input id="csvFile" type="file" style="display: none" accept=".csv" @change="handleCsvChange"/>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">文件编码</div>
      <div class="input">
        <el-select v-model="element.fileEncoding" allow-create filterable placeholder="选择或自定义输入">
          <el-option value="UTF-8" label="UTF-8"></el-option>
          <el-option value="UTF-16" label="UTF-16"></el-option>
          <el-option value="ISO-8859-15" label="ISO-8859-15"></el-option>
          <el-option value="US-ASCII" label="US-ASCII"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">变量名称（西文逗号分隔）</div>
      <div class="input">
        <Input v-model="element.variableNames"></Input>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">忽略首行（只在设置了变量名称后才生效）</div>
      <div class="input">
        <el-select v-model="element.ignoreFirstLine">
          <el-option :value="true" label="True"></el-option>
          <el-option :value="false" label="False"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">分隔符（用'\t'代替制表符）</div>
      <div class="input">
        <Input v-model="element.delimiter"></Input>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">是否允许带引号</div>
      <div class="input">
        <el-select v-model="element.quotedData">
          <el-option :value="true" label="True"></el-option>
          <el-option :value="false" label="False"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">遇到文件结束符再次循环</div>
      <div class="input">
        <el-select v-model="element.recycle">
          <el-option :value="true" label="True"></el-option>
          <el-option :value="false" label="False"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
      <div class="label">遇到文件结束符停止线程</div>
      <div class="input">
        <el-select v-model="element.stopThread">
          <el-option :value="true" label="True"></el-option>
          <el-option :value="false" label="False"></el-option>
        </el-select>
      </div>
    </div>
    <div class="sugar-label-input sugar-normal-line">
    <div class="label">线程共享模式</div>
    <div class="input">
      <el-select v-model="element.shareMode">
        <el-option value="shareMode.all" label="所有现场"></el-option>
        <el-option value="shareMode.group" label="当前线程组"></el-option>
        <el-option value="shareMode.thread" label="当前线程"></el-option>
      </el-select>
    </div>
  </div>

  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "ConfigElementCsv",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {

    }
  },
  methods: {
    handleCsvUpload(){
      let csv = document.getElementById("csvFile")
      csv.click()
    },

    handleCsvChange(){
      let csv = document.getElementById("csvFile")

      console.log(csv.files)
      csv.value = ''
    }
  }
}
</script>

<style scoped lang="scss">

.label{
  width: 266px !important;
}

</style>