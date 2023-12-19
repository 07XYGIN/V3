<script lang="ts" setup>
import { Search,User,Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { Login } from "../api/Login";
import { useRouter } from 'vue-router'
const router = useRouter()
import { ElMessage } from 'element-plus'
let form = reactive({
  username: '',
  password: ''
})
async function login() {
  let res = await Login(form)
  console.log(res);
  
  if (res.code == 200) {
    ElMessage({
      message: res.msg,
      type: 'success',
    })
    router.push('/')
  } else {
    ElMessage({
      message: res.msg,
      type: 'warning',
    })
  }
}
</script>
<template id="temp">
  <div class="box">
    <div class="login">
      <div class="tit">
        <p>健身后台管理系统</p>
      </div>
      <div class="from">
        <el-input v-model="form.username" placeholder="请输入账号" clearable :prefix-icon="User"/>
        <el-input v-model="form.password" placeholder="请输入密码" clearable type="password" show-password :prefix-icon="Lock"/>
        <el-button type="primary" :icon="Search" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.box {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/login-background.3cdb3222.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .login {
    padding: 25px 25px 5px;
    background-color: #fff;
    border-radius: 6px;

    .tit {
      text-align: center;
    }

    .from {
      width: 300px;
      height: 180px;
      display: flex;
      margin: auto;
      justify-content: space-evenly;
      flex-direction: column;

      input {
        width: 200px;
      }
    }
  }
}
</style>