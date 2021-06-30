<template>
  <div id="sugar">
    <div id="sugar-header">
      <div id="sugar-logo"></div>
      <div id="sugar-nav">
      </div>
      <div id="sugar-user">
        <div id="sugar-user__avatar"></div>
        <div id="sugar-user__username">
          <el-dropdown @command="handleDropdownSelect">
            <div>{{ !isLogin ? '未登录': $store.state.sugarAccount.username }}</div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="!isLogin" :command="dropdownCommand.register">注册</el-dropdown-item>
              <el-dropdown-item v-if="!isLogin" :command="dropdownCommand.login">登录</el-dropdown-item>
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

    <el-dialog width="600px" :visible="selectDropdownCommand === dropdownCommand.register || selectDropdownCommand === dropdownCommand.login" :close-on-click-modal="false" :close-on-press-escape="false" @close="handleAccountDialogClose">
      <template slot="title">
        <div class="sugar-dialog-header">
          <div class="logo"></div>
<!--          <div class="title">{{ selectDropdownCommand === dropdownCommand.register ? " ":" " }}</div>-->
        </div>
      </template>
      <div class="sugar-dialog-body sugar-layout-wrap">
        <i-form style="margin: 20px 10px 0;" :model="sugarAccount" :label-width="80" ref="accountFrom" :rules="accountRule">
          <form-item v-if="selectDropdownCommand === dropdownCommand.register" label="用户名" prop="username">
            <Input v-model="sugarAccount.username" placeholder="请输入用户名"></Input>
          </form-item>
          <form-item label="邮箱" prop="email">
            <Input v-model="sugarAccount.email" placeholder="请输入邮箱"></Input>
          </form-item>
          <form-item label="密码" prop="password">
            <Input v-model="sugarAccount.password" type="password" placeholder="请输入密码"></Input>
          </form-item>
          <form-item v-if="selectDropdownCommand === dropdownCommand.register" label="确认密码" prop="repeatPassword">
            <Input v-model="sugarAccount.repeatPassword" type="password" placeholder="请输入确认密码"></Input>
          </form-item>
        </i-form>
      </div>
      <div slot="footer" class="sugar-layout-wrap">
        <el-button style="margin-right: 10px;" type="primary" @click="handleAccountRequest">{{ selectDropdownCommand === dropdownCommand.register ? "注册":"登录" }}</el-button>
      </div>
    </el-dialog>
    <el-dialog width="600px" :visible="selectDropdownCommand === dropdownCommand.info" @close="handleUpdateCancel">
      <template slot="title">
        <div class="sugar-dialog-header">
          <div class="logo"></div>
<!--          <div class="title">个人信息</div>-->
        </div>
      </template>
      <div class="sugar-dialog-body sugar-layout-wrap">
        <i-form :model="sugarAccount" :label-width="80" ref="infoForm" :rules="accountRule">
          <form-item prop="username" label="用户名" @dblclick.native="handleUpdating">
            <Input v-model="sugarAccount.username" :readonly="!isInfoEdit"></Input>
          </form-item>
          <form-item prop="email" label="邮箱">
            <Input v-model="sugarAccount.email" disabled></Input>
          </form-item>
          <form-item prop="createTime" label="注册时间">
            <Input v-model="sugarAccount.createTime" disabled></Input>
          </form-item>
          <form-item prop="updateTime" label="更新时间">
            <Input v-model="sugarAccount.updateTime" disabled></Input>
          </form-item>
        </i-form>
      </div>
      <div slot="footer" v-if="isInfoEdit" class="sugar-layout-wrap">
        <el-button type="primary" @click="handleUpdateSave">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SugarJmeter from "@/views/jmeter/SugarJmeter";
export default {
  name: "Sugar",
  components: {SugarJmeter},
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
      if(value !== this.sugarAccount.password) return callback(new Error('确认密码、密码必须一致'))
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
        "createTest": SugarJmeter,
      },
      dropdownCommand: {
        login: "login",
        register: "register",
        info: "info",
        logout: "logout"
      },
      activeNavItem: "createTest",
      selectDropdownCommand: undefined,
      sugarAccount: {
        id: undefined,
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        createTime: undefined,
        updateTime: undefined
      },
      isInfoEdit: false,
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
      if(command === this.dropdownCommand.logout){
        this.$store.commit("setSugarAccount", undefined)
      }
    },


    handleAccountDialogClose(){
      this.selectDropdownCommand = undefined
      this.$refs.accountFrom.resetFields()
    },

    handleAccountRequest(){
      if(this.selectDropdownCommand === this.dropdownCommand.register){
        // 注册
        this.$confirm("确定要注册？", "", {confirmButtonText: "确定", cancelButtonText: "取消"}).then(() => {
          let requestData = this.sugarAccount
          this.$axios.post(this.$store.state.restApi.sugarAccountSingUp, requestData).then(response => {
            if(response.data.code === 0){
              this.$message({message: "注册成功", type: "success", duration: 3000})
              this.selectDropdownCommand = undefined
            } else {
              this.$message({message: response.data.message, type: "error", duration: 3000})
            }
          }).catch(err => {
            this.$message({message: err, type: "error", duration: 3000})
          })
        }).catch(() => {})
      } else if(this.selectDropdownCommand === this.dropdownCommand.login){
        // 登录
        let requestData = this.sugarAccount
        this.$axios.post(this.$store.state.restApi.sugarAccountSignIn, requestData).then(response => {
          if(response.data.code === 0){
            this.$message({message: "登录成功！", type: "success", duration: 3000})
            this.sugarAccount = JSON.parse(JSON.stringify(response.data.payload))
            this.$store.commit("setSugarAccount", response.data.payload)
            this.selectDropdownCommand = undefined
          } else {
            this.$message({message: response.data.message, type: "error", duration: 3000})
          }
        }).catch(err => {
          this.$message({message: err, type: "error", duration: 3000})
        })
      } else {
        // 不处理
        return
      }
    },

    handleUpdating(){
      console.log("updating")
      this.isInfoEdit = true
    },

    handleUpdateSave(){

    },

    handleUpdateCancel(){
      this.selectDropdownCommand = undefined
      this.isInfoEdit = false
      this.sugarAccount = JSON.parse(JSON.stringify(this.$store.state.sugarAccount))
    }
  },
  computed: {
    isLogin(){
      return this.$store.state.sugarAccount !== undefined
    }
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