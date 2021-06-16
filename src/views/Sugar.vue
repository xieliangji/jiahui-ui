<template>
  <div id="sugar">
    <div id="sugar-header">
      <div id="sugar-logo"></div>
      <div id="sugar-nav">
        <el-menu :default-active="activeNavItem" mode="horizontal" style="background: transparent;" @select="handleMenuSelect">
          <el-menu-item :index="menuIndex.home">首页</el-menu-item>
          <el-submenu index="test">
            <template slot="title">测试</template>
            <el-menu-item :index="menuIndex.test.createTest">新建测试计划</el-menu-item>
            <el-menu-item :disabled="!isLogin" :index="menuIndex.test.listTest">测试计划列表</el-menu-item>
          </el-submenu>
          <el-submenu index="project" :disabled="!isLogin">
            <template slot="title">项目</template>
            <el-menu-item :index="menuIndex.project.createProject">新建项目</el-menu-item>
            <el-menu-item :index="menuIndex.project.listProject">项目列表</el-menu-item>
          </el-submenu>
          <el-submenu index="config" :disabled="!isLogin">
            <template slot="title">配置</template>
            <el-menu-item :index="menuIndex.config.configJMeter">配置JMeter</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div id="sugar-user">
        <div id="sugar-user__avatar"></div>
        <div id="sugar-user__username">
          <el-dropdown @command="handleDropdownSelect">
            <div>{{ !isLogin ? '未登录': $store.state.sugarAccount.username }}</div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="isLogin" :command="dropdownCommand.register">注册</el-dropdown-item>
              <el-dropdown-item v-if="isLogin" :command="dropdownCommand.login">登录</el-dropdown-item>
              <el-dropdown-item v-if="isLogin" :command="dropdownCommand.info">个人信息</el-dropdown-item>
              <el-dropdown-item v-if="isLogin" :command="dropdownCommand.logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div id="sugar-body">
      <transition name="fade">
        <component :is="menuPage[activeNavItem]" :key="componentKey"></component>
      </transition>
    </div>
    <div id="sugar-footer">
      {{ `Copyright Reserved By Sugar © 2020 ~ ${new Date().getFullYear()}` }}
    </div>

    <el-dialog width="600px" :visible="selectDropdownCommand === dropdownCommand.register || selectDropdownCommand === dropdownCommand.login" @close="handleAccountDialogClose">
      <template slot="title">
        <div class="sugar-dialog-header">
          <div class="logo"></div>
          <div class="title">{{ selectDropdownCommand === dropdownCommand.register ? "注册":"登录" }}</div>
        </div>
      </template>
      <div class="sugar-dialog-body">
        <el-form :model="sugarAccount" label-width="80px" ref="accountFrom" :rules="accountRule">
          <el-form-item v-if="selectDropdownCommand === dropdownCommand.register" prop="username" label="用户名">
            <el-input v-model="sugarAccount.username"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="sugarAccount.email"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="sugarAccount.password" type="password"></el-input>
          </el-form-item>
          <el-form-item v-if="selectDropdownCommand === dropdownCommand.register" prop="repeatPassword" label="确认密码">
            <el-input v-model="sugarAccount.repeatPassword" type="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button type="primary">{{ selectDropdownCommand === dropdownCommand.register ? "注册":"登录" }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Home from "@/views/Home";
import ProjectCreate from "@/views/project/ProjectCreate";
import ProjectList from "@/views/project/ProjectList";
import SugarJmeter from "@/views/jmeter/SugarJmeter";
export default {
  name: "Sugar",
  components: {SugarJmeter, ProjectList, ProjectCreate, Home},
  data(){
    let checkName = (rule, value, callback) => {
      let regex = new RegExp('[_A-Za-z0-9\u4e00-\u9fa5]{1,20}')
      if(!regex.test(value)) return callback(new Error('用户名只能为长度1~20_、数字、字母、汉字组合'))
      callback()
    }
    let checkEmail = (rule, value, callback) => {
      let regex = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$')
      if(value === '') return callback(new Error('邮箱不能为空'))
      if(!regex.test(value)) return callback(new Error('邮箱格式不正确'))
      callback()
    }
    let checkPassword = (rule, value, callback) => {
      if(value === '') return callback(new Error('密码不能为空'))
      if(value.length < 6 || value.length > 12) return callback(new Error('密码长度必须6 ~ 12'))
      callback()
    }
    let checkRepeatPassword = (rule, value, callback) => {
      if(value === '') return callback('确认密码不能为空')
      if(value !== this.account.password) return callback(new Error('确认密码、密码必须一致'))
      callback()
    }

    return {
      componentKey: 1,
      menuIndex: {
        home: "home",
        test: {createTest: "createTest", listTest: "listTest"},
        project: {createProject: "createProject", listProject: "listProject"},
        config: {configJMeter: "configJMeter"}
      },
      menuPage: {
        "home": Home,
        "createProject": ProjectCreate,
        "listProject": ProjectList,
        "createTest": SugarJmeter,
      },
      dropdownCommand: {
        login: "login",
        register: "register",
        info: "info",
        logout: "logout"
      },
      activeNavItem: "home",
      selectDropdownCommand: undefined,
      sugarAccount: {
        id: undefined,
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      accountRule: {
        username: [{required: true, validator: checkName, trigger: 'blur'}],
        email: [{required: true, validator: checkEmail, trigger: 'blur'}],
        password: [{required: true, validator: checkPassword, trigger: 'blur'}],
        repeatPassword: [{required: true, validator: checkRepeatPassword, trigger: 'blur'}],
      }
    }
  },
  methods: {
    handleMenuSelect(index){
      this.activeNavItem = index
      this.componentKey = this.componentKey + 1
    },

    handleDropdownSelect(command){
      this.selectDropdownCommand = command
    },
    handleAccountDialogClose(){
      this.selectDropdownCommand = undefined
      this.$refs.accountFrom.resetFields()
    }
  },
  computed: {
    isLogin(){
      // return false
      return this.$store.state.sugarAccount !== undefined
    }
  },
  mounted() {
    this.$store.commit("setSugarAccount", {id: 1, username: '管理员'})
  }
}
</script>

<style scoped lang="scss">

$headerHeight: 60px;
$footerHeight: 40px;
$bodyHeight: calc(100vh - 100px);

#sugar{
  &::v-deep div{
    box-sizing: border-box;
  }
}

#sugar-header{
  height: $headerHeight;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #DCDFE6;
  box-sizing: border-box;
  //background: {
  //  image: url("../assets/header.jpg");
  //  size: cover;
  //};
  background-color: #eef2f3;

  #sugar-logo{
    width: 90px;
    background: {
      image: url("../assets/logo.svg");
      size: 90px 60px;
    };
  }

  #sugar-nav{
    flex-grow: 1;
    height: 32px;
    margin-top: 26px;
  }

  #sugar-user{
    display: flex;
    flex-flow: row nowrap;
    margin: 10px;

    #sugar-user__avatar{
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background: {
        image: url("../assets/header.jpg");
        size: cover;
      };
    }

    #sugar-user__username{
      width: 100px;
      line-height: 40px;
      margin-left: 20px;
    }
  }
}


#sugar-body{
  height: $bodyHeight;

  &:before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40px;
    z-index: -1;
    display: block;
    background-image: url('../assets/body.jpg');
    background-size: cover;
    width: 100%;
    height: calc(100% - 40px);
    filter: opacity(30%);
  }
}


#sugar-footer{
  height: $footerHeight;
  line-height: $footerHeight;
  text-align: center;
  border-top: 1px solid #DCDFE6;
}




</style>