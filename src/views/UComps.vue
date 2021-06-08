<template>
  <div id="sugar">
    <div id="btns">
      <el-button type="primary">按钮1</el-button>
      <el-button type="success">按钮2</el-button>
      <el-button type="info">按钮3</el-button>
      <el-button type="danger">按钮4</el-button>
    </div>
    <div id="input" style="margin-top: 5px;">
      <el-input placeholder="输入框"></el-input>
      <div style="height:5px;"></div>
      <el-input type="textarea" placeholder="文本域"></el-input>
    </div>
    <div id="select" style="margin-top: 5px;">
      <el-select v-model="form.value">
        <el-option value="1" label="选项一"></el-option>
        <el-option value="2" label="选项二"></el-option>
      </el-select>
    </div>
    <div id="radio-check" style="margin-top: 5px;">
      <el-radio label="单选按钮" v-model="radio"></el-radio>
      <el-checkbox v-model="radio">复选框</el-checkbox>
    </div>
    <div id="table" style="margin-top: 5px;">
      <el-table :data="table" row-key="id" highlight-current-row>
        <el-table-column prop="id">
          <div slot="header" class="sugar-table-header">编号</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.id"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name">
          <div slot="header" class="sugar-table-header">名称</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="value">
          <div slot="header" class="sugar-table-header">值</div>
          <template slot-scope="scope">
            <el-input v-model="scope.row.value"></el-input>
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
    <div id="tags" style="margin-top: 5px;">
      <el-tag type="success" closable>标签</el-tag>
    </div>
    <div id="message" style="margin-top: 5px; height: 32px;" @click="showMessageBox">
      消息框、确认框（点击显示）
    </div>
    <div id="nav" style="margin-top: 5px;">
      <el-menu mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">测试</template>
          <el-menu-item index="2-1">创建测试</el-menu-item>
          <el-menu-item index="2-2">保存测试</el-menu-item>
          <el-menu-item index="2-3">测试列表</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">工具</template>
          <el-submenu index="3-1">
            <template slot="title">常规工具</template>
            <el-menu-item index="3-1-1">工具一</el-menu-item>
            <el-menu-item index="3-1-2">工具二</el-menu-item>
          </el-submenu>
          <el-submenu index="3-2">
            <template slot="title">其他工具</template>
            <el-menu-item index="3-2-1">工具一</el-menu-item>
            <el-menu-item index="3-2-2">工具二</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <el-menu>
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">测试</template>
          <el-menu-item index="2-1">创建测试</el-menu-item>
          <el-menu-item index="2-2">保存测试</el-menu-item>
          <el-menu-item index="2-3">测试列表</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">工具</template>
          <el-submenu index="3-1">
            <template slot="title">常规工具</template>
            <el-menu-item index="3-1-1">工具一</el-menu-item>
            <el-menu-item index="3-1-2">工具二</el-menu-item>
          </el-submenu>
          <el-submenu index="3-2">
            <template slot="title">其他工具</template>
            <el-menu-item index="3-2-1">工具一</el-menu-item>
            <el-menu-item index="3-2-2">工具二</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
    <div id="dropdown" style="margin-top: 5px;">
      <el-dropdown>
        <div><el-link type="success" :underline="false">下拉菜单</el-link></div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>下拉项1</el-dropdown-item>
          <el-dropdown-item>下拉项2</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div id="dialog" style="margin-top: 5px; height: 32px;" @click="showDialog">
      对话框（点击显示）
    </div>
    <el-dialog :visible="isShowDialog" @close="isShowDialog = false">
      <template slot="title">
        <div class="sugar-dialog-header">
          <div class="logo"></div>
          <div class="title">对话框标题</div>
        </div>
      </template>
      <div class="sugar-dialog-body">
        <p>对话框</p>
        <p>对话框</p>
        <p>对话框</p>
        <p>对话框</p>
        <p>对话框</p>
        <p>对话框</p>
      </div>
      <div slot="footer">
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>
    <div id="context" style="margin-top: 5px;">
      <at-menu mode="vertical">
        <at-submenu name="add">
          <template slot="title">添加</template>
          <at-menu-item name="threadGroup">线程组</at-menu-item>
          <at-menu-item name="setupThreadGroup">setup线程组</at-menu-item>
        </at-submenu>
        <at-menu-item name="copy">复制</at-menu-item>
      </at-menu>
    </div>
    <div id="tree" style="margin-top: 5px;">
      <el-tree :data="tree" :props="treeProps" accordion node-key="id" highlight-current>
        <div slot-scope="{node, data}">
          <img v-if="data.type === undefined" src="../assets/tree-icon/applications-science-3.png">
          <span>{{node.label}}</span>
        </div>
      </el-tree>
    </div>
    <div id="form" style="margin-top: 5px;">
      <el-form :model="form" label-width="60px">
        <el-form-item prop="label">
          <template slot="label">
            <div>名称</div>
          </template>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="值">
          <el-input v-model="form.value"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div id="from-item" style="margin-top: 5px;">
      <sugar-input v-model="indValue" label="名称" label-width="60px"></sugar-input>
      <sugar-input :max-rows="5" type="textarea" v-model="indValue" label="名称" label-width="100px"></sugar-input>
    </div>
    <div id="tab-pane" style="margin-top: 5px;">
      <el-tabs addable closable>
        <el-tab-pane label="标签页1">
          <div>11111</div>
        </el-tab-pane>
        <el-tab-pane label="标签页2">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import SugarInput from "@/components/SugarInput";
export default {
  name: "UComps",
  components: {SugarInput},
  data(){
    return {
      radio: false,
      table: [{id: 1, name: '列1', value: '列2'}, {id: 2, name: '列1', value: '列2'}],
      isShowDialog: false,
      tree: [
        {id: 0, name: "测试计划", children: [
            {id: 1, name: "线程组", children: [{id: 2, name: "简单控制器"}]},
            {id: 3, name: "自定义变量"},
            {id: 4, name: "json断言"}
          ]
        }
      ],
      treeProps: {children: "children", label: "name"},
      form: {
        name: '',
        value: '',
        description: ''
      },
      indValue: "haha"
    }
  },
  methods: {
    showMessageBox(){
      this.$message({message: "消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框消息对话框", type: "success", duration: 60000})
      this.$confirm("是否确认是否确认是否确认是否确认是否确认是否确认是否确认是否确认是否确认是否确认是否确认是否确认是否确认是否确认", "询问", {cancelButtonText: "否", confirmButtonText: "是"})
    },
    showDialog(){
      this.isShowDialog = true
    }
  }
}
</script>

<style lang="scss">
$color: #536976; // 字体颜色
$activeColor: #4AC29A; // 激活状态颜色
$borderColor: #DCDFE6; // 边框颜色
$hoverBorderColor: #F0F2F0;
$backgroundColor: #FFFFFF;
$hoverBgColor: #F0F2F0;
$borderRadius: 3px;

$lineHeight: 32px;
$padding: 5px;

// 按钮
.el-button{
  padding: 0 12px !important;
  height: $lineHeight !important;
  line-height: $lineHeight !important;
  border-radius: $borderRadius !important;
  box-sizing: border-box !important;
  color: $color !important;
  &:hover, &:focus{
    //background-color: $hoverBgColor !important;
    //border-color: $hoverBgColor !important;
    opacity: .9 !important;
  }
}

.el-button--primary{
  background-color: $backgroundColor !important;
  border-color: $borderColor !important;
  &:hover, &:focus{
    background-color: $hoverBgColor !important;
    //border-color: $hoverBgColor !important;
  }
}

// 输入框
.el-input__inner, .el-textarea__inner{
  border-radius: 2px !important;
  line-height: $lineHeight !important;
  padding: 0 5px !important;
  color: $color !important;
  &:focus{
    border-color: #bdc3c7 !important;
  }
}
.el-input__inner {
  height: $lineHeight !important;
}

// 选择器
.el-select{
  width: 100% !important;
}
.el-select-dropdown{
  border-radius: $borderRadius !important;
}
.el-select-dropdown__list{
  padding: 2px 0 !important;
  background-color: $backgroundColor !important;
}
.el-select-dropdown__item {
  line-height: $lineHeight !important;
  height: $lineHeight !important;
  padding: 0 10px !important;
  color: $color !important;
  &:hover{
    background-color: $hoverBgColor !important;
  }
  &:focus-visible{
    outline: none !important;
  }
}
.el-input__icon{
  line-height: $lineHeight !important;
}
.el-select .el-input.is-focus .el-input__inner{
  border-color: $borderColor !important;
}

// 单选按钮、复选框
.el-radio{
  margin-right: 20px !important;
}
.el-radio__label, .el-checkbox__label{
  padding-left: 5px !important;
  color: $color !important;
}
.el-radio__input.is-checked+.el-radio__label, .el-checkbox__input.is-checked+.el-checkbox__label{
  color: $activeColor !important;
}
.el-radio__input.is-checked .el-radio__inner, .el-checkbox__input.is-checked .el-checkbox__inner{
  background-color: $activeColor !important;
  border-color: $activeColor !important;
}
.el-radio__label:hover, .el-checkbox__label:hover,.el-radio__inner:hover, .el-checkbox__inner:hover{
  border-color: $activeColor !important;
}

// 表格
.el-table td, .el-table th, .el-table .cell {
  padding: 0 !important;
  line-height: $lineHeight !important;
  color: $color !important;
}
.el-table .cell{
  .el-input__inner {
    border: none !important;
    background-color: transparent !important;
  }
}
.el-table th{
  border-top: 1px solid $borderColor !important;
}
.el-table tr{
  th, td {
    border-right: 1px solid $borderColor !important;

    &:nth-of-type(odd){
      border-left: 1px solid $borderColor !important;
    }
    &:nth-of-type(odd){
      border-right: 1px solid $borderColor !important;
    }
  }
}
.el-table td, .el-table th.is-leaf {
  border-bottom: 1px solid $borderColor !important;
}
.el-table{
  &::before{
    background-color: transparent !important;
  }
}


// 标签
.el-tag{
  background-color: $backgroundColor !important;
  color: $color !important;
  user-select: none !important;
}

// 消息框
.el-message{
  min-width: 300px !important;
  max-width: 600px !important;
  padding: 10px !important;
  border-radius: $borderRadius !important;
}
.el-message__icon{
  margin-right: 5px !important;
}
.el-message__content{
  line-height: 1.3 !important;
}

// 确认框
.el-message-box{
  width: 360px !important;
  border-radius: $borderRadius !important;
  padding-bottom: 5px !important;
  .el-message-box__btns{
    .el-button{
      border-color: $borderColor !important;
    }
  }
}
.el-message-box__header{
  padding: 10px !important;
}
.el-message-box__title{
  font-size: 16px !important;
}
.el-message-box__headerbtn{
  top: 8px !important;
  right: 8px !important;
}
.el-message-box__content{
  padding: 10px !important;
}

// 横向导航栏
.el-menu--horizontal{
  .el-menu-item, .el-submenu__title{
    height: $lineHeight !important; line-height: $lineHeight !important;
    color: $color !important;
    font-size: 15px !important;
  }
  .el-menu-item{
    padding: 0 15px !important;
  }
  .el-submenu__title{
    padding: 0 15px !important;
  }
  .el-submenu__title i{
    color: inherit !important;
    margin-left: 5px !important;
  }
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 1px solid $activeColor !important;
  color: $activeColor !important;
  font-weight: bold !important;
  background-color: $hoverBgColor !important;
}
.el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title{
  color: $activeColor !important;
  font-weight: bold !important;
  background-color: $hoverBgColor !important;
}

// 下拉菜单
.el-dropdown-menu{
  border-radius: $borderRadius !important;
  padding: 5px 0 !important;
}
.el-dropdown-menu__item{
  line-height: $lineHeight !important;
  padding: 0 15px !important;
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
  background-color: $hoverBgColor !important;
  color: $activeColor !important;
}

// 对话框
.el-dialog{
  margin-top: 100px !important;
}
.el-dialog__body{
  padding: 10px !important;
  color: $color !important;
}
.el-dialog__header{
  user-select: none !important;
  padding: 0 !important;
  color: $color !important;
  font-size: 12px !important;
  border-bottom: 1px solid $hoverBorderColor !important;
}
.el-dialog__headerbtn{
  top: 0 !important;
  right: 0 !important;
  line-height: 28px !important;
  width: 28px !important;
  font-size: 14px !important;
  background-color: rgba(0,0,0,.2) !important;
}
.el-dialog__close{
  color: $color !important;
}
.el-dialog__headerbtn:hover .el-dialog__close{
  color: #ff6d6f !important;
}
.el-dialog__footer{
  padding: 10px 10px 10px !important;
}

// 右键菜单
.at-menu--vertical{
  border: 1px solid $hoverBorderColor !important;
}
.at-menu--vertical .at-menu__submenu:hover > .at-menu__submenu-title, .at-menu--vertical .at-menu__submenu.at-menu__submenu--active > .at-menu__submenu-title {
  color: $color !important;
}
.at-menu--vertical .at-menu__submenu::after,.at-menu--vertical .at-menu__item-link::after{
  width: 0 !important;
}
.at-menu--vertical .at-menu__submenu .at-menu__submenu-title, .at-menu--vertical .at-menu__item-link,.at-menu .at-dropdown-menu .at-menu__item{
  padding: 0 0 0 5px !important;
  line-height: $lineHeight !important;
  font-size: 14px !important;
  &:hover{
    color: $color !important;
    background-color: $hoverBgColor !important;
  }
}
.at-dropdown-menu{
  border-radius: $borderRadius !important;
}
.at-menu--vertical .at-menu__item.at-menu__item--active .at-menu__item-link{
  color: $color !important;
}

// 树形组件
.el-tree{
  color: $color !important;
}
.el-tree-node__content{
  height: 26px !important;
  line-height: 26px !important;
  &:hover{
    background-color: $hoverBgColor !important;
  }
}
.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{
  background-color: #eef2f3 !important;
  font-weight: bold !important;
}
.el-tree-node__content>.el-tree-node__expand-icon{
  padding: 4px !important;
  color: $color !important;
}
.el-tree-node__expand-icon.is-leaf{
  color: transparent !important;
}

// 表单样式
.el-form-item{
  margin-bottom: 20px !important;
  display: flex !important;
  flex-flow: row nowrap !important;

  .el-form-item__label{
    display: block !important;
    padding: 0 !important;
  }
  .el-form-item__content{
    flex-grow: 1 !important;
    margin-left: 5px !important;
  }
  .el-form-item__label, .el-form-item__content {
    line-height: $lineHeight !important;
  }
}

// 标签页
//.el-tabs{
//  height: 100% !important;
//
//  .el-tabs__header{
//    height: 32px !important;
//    margin: 0 !important;
//  }
//
//  .el-tabs__content{
//    height: calc(100% - 32px) !important;
//
//    .el-tab-pane{
//      height: 100% !important;
//    }
//  }
//}
.el-tabs__item.is-active{
  color: $activeColor !important;
  font-weight: bold !important;
  background-color: $hoverBgColor !important;
}
.el-tabs__item{
  padding: 0 15px 0 5px !important;
  height: $lineHeight !important;
  line-height: $lineHeight !important;
  color: $color !important;
  &:hover{
    color: $activeColor !important;
  }
}
.el-tabs__active-bar{
  height: 0 !important;
}
.el-tabs__nav-wrap{
  border-bottom: 1px solid #DCDFE6;
  &::after{
    background-color: transparent !important;
  }
}
.el-tabs__new-tab{
  color: $activeColor !important;
  width: 24px !important;
  height: 24px !important;
  line-height: 24px !important;
  font-size: 18px !important;
  border: 1px solid $activeColor !important;
  margin: 4px 5px !important;
  border-radius: 2px !important;
  &:hover{
    color: $activeColor !important;
    background-color: $hoverBgColor !important;
  }
}

// ace-editor xcode 皮肤的左侧边样式
.ace-xcode .ace_gutter{
  background: #eef2f3 !important;
  color: $color !important;
}

</style>