<template>
  <sugar-dialog height="630px" width="800px" @close="$emit('close')">
    <div slot="title">函数助手</div>
    <div>
      <div id="funcSelect" class="sugar-layout-wrap">
        <div style="width: 250px;">
          <el-select size="small" v-model="selectedFunction" no-data-text=" " placeholder=" ">
            <el-option v-for="func in functionList" :key="func.id" :value="func.id" :label="func.name"></el-option>
          </el-select>
        </div>
        <el-button size="small" style="margin-left: 5px;">帮助</el-button>
      </div>
      <div class="sugar-layout-wrap">
        <div>函数参数</div>
        <el-table :data="selectedFunction.arguments" row-key="id" highlight-current-row height="200px" empty-text=" ">
          <el-table-column prop="name">
            <div slot="header" class="sugar-table-header">名称</div>
            <template slot-scope="scope">
              <el-input readonly v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="value">
            <div slot="header" class="sugar-table-header">值</div>
            <template slot-scope="scope">
              <el-input v-model="scope.row.value"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="sugar-layout-wrap sugar-flex-row sugar-line">
        <div style="margin-right: 5px;">拷贝并粘贴函数字符串</div>
        <div style="flex-grow: 1;">
          <el-input v-model="functionResult.functionExpression"></el-input>
        </div>
        <div>
          <el-button type="primary" style="margin-left: 10px;">生成</el-button>
          <el-button type="primary">重置变量</el-button>
        </div>
      </div>
      <div class="sugar-layout-wrap sugar-flex-row" style="margin-top: 20px;">
        <div style="width: 120px; text-align: right; margin-right: 5px;">函数结果</div>
        <div style="height: 100px; flex-grow: 1;">
          <jmeter-editor :script="functionResult.result" language="plan_text"></jmeter-editor>
        </div>
      </div>
      <div class="sugar-layout-wrap sugar-flex-row">
        <div style="width: 120px; text-align: right; margin-right: 5px;">当前JMeter变量</div>
        <div style="height: 150px; flex-grow: 1;">
          <jmeter-editor :script="functionResult.result" language="plan_text"></jmeter-editor>
        </div>
      </div>
    </div>
  </sugar-dialog>
</template>

<script>
import SugarDialog from "@/components/SugarDialog";
import JmeterEditor from "@/components/JmeterEditor";
export default {
  name: "FunctionHelper",
  components: {JmeterEditor, SugarDialog},
  data(){
    return {
      selectedFunction: {arguments: [{id: 1, name: '引用变量', value: ''}, {id: 2, name: '引用变量', value: ''},
          {id: 5, name: '引用变量', value: ''},
          {id: 3, name: '引用变量', value: ''},{id: 4, name: '引用变量', value: ''}]},
      functionList: [{}],
      functionResult: {
        functionExpression: '',
        result: '',
        variables: ''
      }
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="scss">

#funcSelect{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.function-table{
  border: 1px solid #bdc3c7;
  margin: 0 5px;
}

.function-table-header{
  text-align: center;
  .function-table-header-nv{
    width: 50%;
    background: #F0F2F0;
  }
}

#function-arguments{
  height: 200px;
  overflow: auto;
}

.function-table-row-nv{
  text-align: left;
  font-weight: normal;
  width: 50%;
  border-top: 1px solid #bdc3c7;
  border-bottom: 1px solid #bdc3c7;
  &::v-deep input{
    border:  none;
    height: 28px;
    line-height: 28px;
    margin-bottom: 2px;
  }
}

</style>