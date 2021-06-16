<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-top-border">
      <div class="sugar-border-text">选择比较运算符</div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">比较的内容</div>
        <div class="input">
          <el-select v-model="element.compareContent">
            <el-option :value="true" label="True"></el-option>
            <el-option :value="false" label="False"></el-option>
          </el-select>
        </div>
      </div>
      <div class="sugar-normal-line sugar-label-input">
        <div class="label">比较的时间</div>
        <div class="input">
          <el-input v-model="element.compareTime"></el-input>
        </div>
      </div>
    </div>
    <div class="sugar-top-border">
      <div class="sugar-border-text">比较过滤器</div>
      <div style="text-align: center;">正则表达式替换</div>
      <div style="border-left: 1px solid #DCDFE6; border-right: 1px solid #DCDFE6; border-bottom: 1px solid #DCDFE6">
        <el-table ref="subTable" :key="subTableKey" :data="element.stringsToSkip" row-key="id" height="600px" highlight-current-row empty-text=" " @row-click="setCurrentSubstitution">
          <el-table-column prop="regex">
            <div slot="header" class="sugar-table-header">正则表达式</div>
            <template slot-scope="scope">
              <el-input v-model="scope.row.regex"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="substitute">
            <div slot="header" class="sugar-table-header">替换</div>
            <template slot-scope="scope">
              <el-input v-model="scope.row.substitute"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="text-align: center; margin-top: 5px;">
        <el-button type="primary" @click="handleSubstituteAdd">添加</el-button>
        <el-button type="primary" @click="handleSubstituteDel">删除</el-button>
        <el-button type="primary" @click="handleSubstituteClear">清除</el-button>
        <el-button type="primary" @click="handleSubstituteUp">向上</el-button>
        <el-button type="primary" @click="handleSubstituteDown">向下</el-button>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
import {Substitution} from "@/views/jmeter/js/JmeterTestElement";
export default {
  name: "AssertionCompare",
  components: {SugarJmeterElement},
  props: {
    element: Object
  },
  data(){
    return {
      currentSubstitution: undefined,
      subTableKey: 1
    }
  },
  methods: {
    setCurrentSubstitution(row){
      this.currentSubstitution = row
    },


    handleSubstituteAdd(){
      let newSubstitute = new Substitution()
      this.element.stringsToSkip.push(newSubstitute)
      this.currentSubstitution = newSubstitute
      this.$refs.subTable.setCurrentRow(this.currentSubstitution)
    },

    handleSubstituteDel(){
      for(let index = 0; index < this.element.stringsToSkip.length && this.currentSubstitution !== undefined; index++){
        if(this.currentSubstitution.id === this.element.stringsToSkip[index].id){
          if(index < this.element.stringsToSkip.length - 1){
            this.currentSubstitution = this.element.stringsToSkip[index + 1]
          } else {
            this.currentSubstitution = this.element.stringsToSkip[index - 1]
          }
          this.element.stringsToSkip.splice(index, 1)
          this.$refs.subTable.setCurrentRow(this.currentSubstitution)
        }
      }
    },

    handleSubstituteClear(){
      this.element.stringsToSkip = []
      this.currentSubstitution = undefined
    },

    handleSubstituteUp(){
      let currentIndex = this.element.stringsToSkip.indexOf(this.currentSubstitution)
      if(currentIndex <= 0) return
      let temp = this.element.stringsToSkip[currentIndex - 1]
      this.element.stringsToSkip[currentIndex - 1] = this.element.stringsToSkip[currentIndex]
      this.element.stringsToSkip[currentIndex] = temp
      this.subTableKey = performance.now().toString()
      this.$nextTick(() => this.$refs.subTable.setCurrentRow(this.currentSubstitution))
    },

    handleSubstituteDown(){
      let currentIndex = this.element.stringsToSkip.indexOf(this.currentSubstitution)
      if(currentIndex < 0 || currentIndex >= this.element.stringsToSkip.length - 1) return

      let temp = this.element.stringsToSkip[currentIndex + 1]
      this.element.stringsToSkip[currentIndex + 1] = this.element.stringsToSkip[currentIndex]
      this.element.stringsToSkip[currentIndex] = temp
      this.subTableKey = performance.now().toString()
      this.$nextTick(() => this.$refs.subTable.setCurrentRow(this.currentSubstitution))
    }
  }
}
</script>

<style scoped>

</style>