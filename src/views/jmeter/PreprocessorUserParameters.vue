<template>
  <sugar-jmeter-element :jmeter-element="element">
    <div class="sugar-normal-line">
      <el-checkbox v-model="element.perIteration">每次迭代更新一次</el-checkbox>
    </div>
    <div class="sugar-normal-line sugar-flex-row">
      <div style="width: fit-content; white-space: nowrap;">参数</div>
      <el-alert :closable="false" title="参数数据量较大时，建议使用<CSV数据文件设置>配置元素" type="error"></el-alert>
    </div>
    <div style="border: 1px solid #DCDFE6;">
      <el-table ref="parametersTable" style="width: 100%;" :data="tableData" row-key="id" :key="parameterTableKey" empty-text=" " highlight-current-row @cell-click="handleCellClick" height="800px">
        <el-table-column v-for="(col, index) in parameterCols" :key="col" :prop="col" width="180px" :fixed="index === 0 || index === 1">
          <div class="sugar-table-header" slot="header">{{index === 0 ? '名称': `用户_${index}`}}</div>
          <template slot-scope="scope">
            <el-input class="parameter-focus" v-model="scope.row[col]" @change="handleParametersUpdate"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 5px;" class="sugar-flex-col">
      <div class="sugar-flex-row">
        <el-button type="primary" style="flex-grow: 1;" @click="handleParameterRowAdd">添加变量</el-button>
        <el-button type="primary" style="flex-grow: 1;" @click="handleParameterRowDel">删除变量</el-button>
        <el-button type="primary" style="flex-grow: 1;" @click="handleParameterRowUp">向上</el-button>
      </div>
      <div class="sugar-flex-row">
        <el-button type="primary" style="flex-grow: 1;" @click="handleParameterColAdd">添加用户</el-button>
        <el-button type="primary" style="flex-grow: 1;" @click="handleParameterColDel">删除用户</el-button>
        <el-button type="primary" style="flex-grow: 1;" @click="handleParameterRowDown">向下</el-button>
      </div>
    </div>
  </sugar-jmeter-element>
</template>

<script>
import SugarJmeterElement from "@/components/SugarJmeterElement";
export default {
  name: "PreprocessorUserParameters",
  components: {SugarJmeterElement},
  props: {
    element: Object,
  },
  data(){
    return {
      parameterTableKey: 1,
      currentColumnProp: undefined,
      currentRow: undefined,
    }
  },
  methods: {
    /**
     * 所有的数据更新都是围绕names、threadValues来进行的。因为它俩的更新，会自动更新到参数列表视图
     */
    // 参数值更新只会影响names、threadValues列表中某个字列表的对应行位置的值
    handleParametersUpdate(){
      let parameterTableData = this.tableData
      let newNames = []
      let newThreadValues = []
      let threadValueCount = this.element.threadValues.length

      for(let rowIndex = 0; rowIndex < parameterTableData.length; rowIndex++){
        let rowParameter = parameterTableData[rowIndex]
        newNames.push(rowParameter['col_0']) // col_o是对应的name

        // 对于每个参数行，需要将每个列位置处的值添加到对应列的对应行位置处
        for(let threadValueIndex = 0; threadValueIndex < threadValueCount; threadValueIndex++){
          if(newThreadValues[threadValueIndex] === undefined){
            newThreadValues[threadValueIndex] = []
          }
          newThreadValues[threadValueIndex].push(rowParameter[`col_${threadValueIndex + 1}`])
        }
      }
      // 更新names、threadValues会自动更新tableData
      this.element.names = newNames
      this.element.threadValues = newThreadValues
    },

    handleCellClick(row, column){
      this.currentRow = row
      this.currentColumnProp = column.property
    },

    handleParameterRowAdd(){
      /**
       * 追加行：names追加一个元素、threadValues每列追加一个元素
       */
      this.element.names.push('')
      for(let threadValueIndex = 0; threadValueIndex < this.element.threadValues.length; threadValueIndex++){
        this.element.threadValues[threadValueIndex].push('')
      }
      this.currentRow = this.tableData[this.tableData.length - 1]
      this.parameterTableKey = this.parameterTableKey + 1
      this.$nextTick(() => {
        this.$refs.parametersTable.setCurrentRow(this.currentRow)
      })
    },

    handleParameterRowDel(){
      /**
       * 删除行：1、删除名称列对应的行 2、删除所有用户列每列对应的行
       */
      let name = this.currentRow['col_0']
      let nameIndex =this.element.names.indexOf(name)
      this.element.names.splice(nameIndex, 1)
      for(let threadIndex = 0; threadIndex < this.element.threadValues.length; threadIndex++){
        this.element.threadValues[threadIndex].splice(nameIndex, 1)
      }

      if(nameIndex === this.element.names.length){
        this.currentRow = this.tableData[nameIndex - 1]
      } else {
        this.currentRow = this.tableData[nameIndex]
      }
      this.parameterTableKey = performance.now().toString()
      this.$nextTick(() => {
        this.$refs.parametersTable.setCurrentRow(this.currentRow)
      })
    },

    handleParameterColAdd(){
      /**
       * 追加列，根据行数初始化新追加列的元素
       */
      let newCol = []
      for(let index = 0; index < this.element.names.length; index++){
        newCol.push('')
      }
      this.element.threadValues.push(newCol)
      this.parameterTableKey = performance.now().toString()
    },

    handleParameterColDel(){
      // 名称列、用户_1列这两列是不允许删除的
      if(this.currentColumnProp === 'col_0' || this.currentColumnProp === 'col_1'){
        this.$message({message: '当前列禁止删除', type: "error", duration: 2000})
      } else {
        if(this.currentColumnProp !== undefined){
          let delColIndex = this.parameterCols.indexOf(this.currentColumnProp)
          this.element.threadValues.splice(delColIndex - 1, 1)
          this.currentColumnProp = undefined
        } else {
          this.$message({message: '请选中任意要删除列的单元格', type:"error", duration: 2000})
        }
      }
      this.parameterTableKey = performance.now().toString()
    },

    // 移动参数行，我们实际上是去更新names、threadValues中对应元素的位置
    handleParameterRowUp(){
      if(this.currentRow !== undefined) {
        let oldNames = this.element.names
        let newNames = []
        let name = this.currentRow['col_0']
        let nameIndex = oldNames.indexOf(name)
        if(nameIndex !== 0){
          for(let index = 0; index < oldNames.length; index++){
            if(index !== nameIndex){
              newNames.push(oldNames[index])
            } else {
              let tmp = newNames[index - 1]
              newNames[index - 1] = oldNames[index]
              newNames[index] = tmp
            }
          }
          let oldThreadValues = this.element.threadValues
          let newThreadValues = []
          for(let threadValueIndex = 0; threadValueIndex < oldThreadValues.length; threadValueIndex++){
            let threadValue = oldThreadValues[threadValueIndex]
            let tmp = threadValue[nameIndex - 1]
            threadValue[nameIndex - 1] = threadValue[nameIndex]
            threadValue[nameIndex] = tmp
            newThreadValues.push(threadValue)
          }
          this.element.names = newNames
          this.element.threadValues = newThreadValues

          // 更新当前行
          this.currentRow = this.tableData[nameIndex - 1]
          this.$refs.parametersTable.setCurrentRow(this.currentRow)
        }
      }
    },

    handleParameterRowDown(){
      if(this.currentRow !== undefined){
        let oldNames = this.element.names
        let newNames = []
        let name = this.currentRow['col_0']
        let nameIndex = oldNames.indexOf(name)

        if(nameIndex !== oldNames.length - 1){
          for(let index = 0; index < oldNames.length; index++){
            if(index !== nameIndex + 1){
              newNames.push(oldNames[index])
            } else {
              let tmp = newNames[index - 1]
              newNames[index - 1] = oldNames[index]
              newNames[index] = tmp
            }
          }
          let oldThreadValues = this.element.threadValues
          let newThreadValues = []
          for(let threadValueIndex = 0; threadValueIndex < oldThreadValues.length; threadValueIndex++){
            let threadValue = oldThreadValues[threadValueIndex]
            let tmp = threadValue[nameIndex + 1]
            threadValue[nameIndex + 1] = threadValue[nameIndex]
            threadValue[nameIndex] = tmp
            newThreadValues.push(threadValue)
          }
          this.element.names = newNames
          this.element.threadValues = newThreadValues

          // 更新当前行
          this.currentRow = this.tableData[nameIndex + 1]
          this.$refs.parametersTable.setCurrentRow(this.currentRow)
        }
      }
    }
  },
  computed: {
    // 参数列表数据
    tableData(){
      let tableData = []

      for(let nameIndex = 0; nameIndex < this.element.names.length; nameIndex++){
        let parameterRow = {}
        this.$set(parameterRow, 'id', nameIndex)
        this.$set(parameterRow, 'col_0', this.element.names[nameIndex])
        for(let threadIndex = 0; threadIndex < this.element.threadValues.length; threadIndex++){
          this.$set(parameterRow, 'col_' + (threadIndex + 1), this.element.threadValues[threadIndex][nameIndex])
        }
        tableData[nameIndex] = parameterRow
      }
      return tableData
    },

    // 参数列表列
    parameterCols(){
      let cols = []
      for(let colIndex = 0; colIndex <= this.element.threadValues.length; colIndex++){
        cols.push(`col_${colIndex}`)
      }
      return cols
    },
  }
}
</script>

<style scoped lang="scss">

.parameter-focus::v-deep .el-input__inner{
  &:focus{
    background-color: #FFF2E2 !important;
  }
}

</style>