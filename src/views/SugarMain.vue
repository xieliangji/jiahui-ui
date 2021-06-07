<template>
  <div id="sugarMain" class="sugar-layout-wrap sugar-flex-col">
    <div id="sugarMainHeader" class="sugar-main-header sugar-flex-col">
      <div id="sugarMainHeaderTop" class="sugar-main-header__logo sugar-flex-row">
        <div id="sugarMainLogo">
          <img src="./../assets/logo.svg" alt="" class="sugar-logo">
        </div>
        <div id="sugarMainHeaderMenu">
          <el-menu :default-active="indexes.home" mode="horizontal" @select="handleMenuSelect">
            <el-menu-item :index="indexes.home">首页</el-menu-item>
            <el-submenu index="test">
              <template slot="title">测试</template>
              <el-menu-item :index="indexes.createTest">新建测试计划</el-menu-item>
              <el-menu-item :index="indexes.saveTest">保存测试计划</el-menu-item>
              <el-menu-item :index="indexes.testList">测试计划列表</el-menu-item>
              <el-menu-item :index="indexes.testReport">测试报告</el-menu-item>
            </el-submenu>
            <el-submenu index="project">
              <template slot="title">项目</template>
              <el-menu-item :index="indexes.createProject">新建项目</el-menu-item>
              <el-menu-item :index="indexes.projectList">项目列表</el-menu-item>
            </el-submenu>
            <el-submenu index="tool">
              <template slot="title">工具</template>
              <el-menu-item :index="indexes.functionHelper">JMeter函数助手</el-menu-item>
              <el-menu-item :index="indexes.toolOthers">其他工具</el-menu-item>
            </el-submenu>
            <el-submenu index="configuration">
              <template slot="title">配置</template>
              <el-menu-item :index="indexes.jmeterConfig">JMeter配置</el-menu-item>
            </el-submenu>
            <el-submenu index="system">
              <template slot="title">系统</template>
              <el-menu-item :index="indexes.systemManual">系统手册</el-menu-item>
              <el-menu-item :index="indexes.aboutSystem">关于系统</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div id="sugarMainAvatar" class="sugar-line">
          <el-dropdown>
            <span :style="{color: !isPrivate ? '#f64f59': ''}">{{ username }}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>登录</el-dropdown-item>
              <el-dropdown-item>注册</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>

    <div id="sugarMainBody" class="sugar-main-body">
      <component :is="sugarPage"></component>
    </div>
    <function-helper v-if="isShowFuncHelper" @close="isShowFuncHelper = false"></function-helper>
    <div id="sugarMainFooter" class="sugar-main-footer">
      {{ "Copyright © Reserved By Sugar 2021 ~ " + new Date().getFullYear() }}
    </div>
  </div>
</template>

<script>
import ProjectCreate from "@/views/project/ProjectCreate";
import Home from "@/views/Home";
import ProjectList from "@/views/project/ProjectList";
import FunctionHelper from "@/views/jmeter/FunctionHelper";
export default {
  name: "SugarMain",
  components: {FunctionHelper, ProjectList, Home, ProjectCreate},
  data(){
    return {
      indexes: {
        home: 'home',
        createTest: 'createTest',
        saveTest: 'saveTest',
        testList: 'testList',
        testReport: 'testReport',
        createProject: 'createProject',
        projectList: 'projectList',
        functionHelper: 'functionHelper',
        toolOthers: 'toolOthers',
        jmeterConfig: 'jmeterConfig',
        systemManual: 'systemManual',
        aboutSystem: 'aboutSystem',
      },
      sugarPage: Home,
      isShowFuncHelper: false,
    }
  },
  methods: {
    setSugarPage(index){
      let indexes = this.indexes
      switch (index){
        case indexes.home: this.sugarPage = Home; break
        case indexes.createProject: this.sugarPage = ProjectCreate; break
        case indexes.projectList: this.sugarPage = ProjectList; break
        case indexes.functionHelper: this.isShowFuncHelper = true; break

      }
    },
    handleMenuSelect(index){
      this.setSugarPage(index)
    }
  },
  computed: {
    isPrivate(){
      return this.$store.state.sugarAccount !== undefined
    },

    username(){
      return this.isPrivate ? this.$store.state.sugarAccount.username : '未登录'
    }
  },
}
</script>

<style scoped lang="scss">

#sugarMain{
  min-width: 1024px;
  min-height: 768px;
}

#sugarMainHeader{
  border-bottom: 1px solid #F0F2F0;
}

#sugarMainHeaderMenu{
  padding: 8px 0 0 40px;
  flex-grow: 1;
}

#sugarMainHeaderMenu ::v-deep .el-menu-item, #sugarMainHeaderMenu ::v-deep .el-submenu__title{
  height: 32px; line-height: 32px;
  padding: 0 15px;
  color: #2c3e50;
}

#sugarMainHeaderMenu ::v-deep .el-menu-item.is-active, #sugarMainHeaderMenu ::v-deep .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom: none;
  color: #4CA1AF;
}

#sugarMainHeaderMenu ::v-deep .el-menu.el-menu--horizontal{
  border-bottom: none;
}

#sugarMainAvatar{
  padding: 0 30px;
}


.sugar-main-header{
  height: 40px;
}

.sugar-logo{
  width: 120px;
  height: 40px;
}

.sugar-main-header__menu{

}

.sugar-main-body{
  height: calc(100vh - 85px);
}

.sugar-main-footer{
  line-height: 32px;
  text-align: center;
  border-top: 1px solid #F0F2F0;
}
</style>

<style lang="scss">
.el-menu--horizontal .el-menu .el-menu-item{
  height: 32px !important; line-height: 32px !important;
  padding: 0 15px !important;
}
</style>