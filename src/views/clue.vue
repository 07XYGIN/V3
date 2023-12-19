<template id="temp">
  <!-- vue实例外创建 -->
  <div>
    <Table :tables="tables" :text="text"></Table>
  </div>
</template>
<script setup lang="ts">
import Table from '../components/table.vue'
import { reactive } from 'vue'
const tables = reactive([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
const text = reactive({
  text1:'客户姓名',
  text2:'请输入客户姓名',
  text3:'客户手机',
  text4:'请输入客户手机号',
  text5:'归属人',
  text6:'请输入归属人',
  text7:'渠道来源',
  text8:'状态'
})
import {getList} from '../api/GetList'
async function get(){
  let res = await getList()
  console.log(res);
  
}
get()
</script>

<style lang="less" scoped></style>
