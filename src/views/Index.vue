<template>
  <div class="box">
    <div class="left">
      <el-row class="tac">
        <p>欢迎使用</p>
        <el-col :span="12">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" id="ul" v-for="item in navdata" router>
            <el-menu-item :index="ited.component" v-for="ited in item.children">
              <el-icon><icon-menu /></el-icon>
              <span>{{ ited.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>

</template>    
<script lang="ts" setup>
import { reactive } from 'vue'
import nav from '../assets/nav.json'
const navdata = reactive(nav.data)
</script>

<style lang="less">
ul {
  width: 200px;
}

.el-col-12 {
  max-width: 200px !important;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}

.box {
  width: 200px;
  height: 100vh;
  display: flex;

  .left {
    background-color: #545c64;
    width: 200px;
    height: 100%;

    .tac {
      height: 100%;
      p{
        width: 200px;
        height: 56px;
        color: #ffd04b;
        text-align: center;
        line-height: 56px;
      }
    }
  }
  .text{
    width: 86vw;
    height: 30px;
    line-height: 30px;
    background-color: #545c64;
    margin: 0 0 0 10px;
    p{
      text-align: center;
    }
  }
}
</style>