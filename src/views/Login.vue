<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { Login } from "../api/Login";
let form = reactive({
  username: '',
  password: ''
})
async function login() {
  let res = await Login(form)
  console.log(res);
}
</script>
<template id="temp">
  <div class="box">
    <div class="login">
      <div class="tit">
        <p>健身后台管理系统</p>
      </div>
      <div class="from">
        <el-input v-model="form.username" placeholder="账号" clearable />
        <el-input v-model="form.password" placeholder="密码" clearable />
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
    width: 400px;
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