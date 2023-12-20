<template id="temp">
  <!-- vue实例外创建 -->
  <div>
    <Table :demo="demo" :tables="tables.dataList" :text="text" :title="title" :total="tables.total" @getfrom="gets" @cz="cz">
    </Table>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import Table from '../components/table.vue'
import { reactive, onMounted } from 'vue'
import { useStore } from '../store/index';
const useStores = useStore()
//data
const tables = reactive({
  dataList: [],
  total: '',
  from: {}
});
//add
const demo = reactive({

})
const text = reactive({
  text1: '客户姓名',
  text2: '请输入客户姓名',
  text3: '客户手机',
  text4: '请输入客户手机号',
  text5: '归属人',
  text6: '请输入归属人',
  text7: '渠道来源',
  text8: '状态'
})
const title = reactive({
  text1: '线索编号',
  text2: '客户姓名',
  text3: '手机号码',
  text4: '渠道来源',
  text5: '创建时间',
  text6: '线索归属',
  text7: '线索状态',
  text8: '下次跟进时间'
})


import { getList, getDatalist, getS } from '../api/GetList'
async function get() {
  let res = await getList()
}
async function gets(from) {
  tables.from = from
  let res = await getS(from)
  tables.dataList = res.rows;
}
function cz(from){
  getLists()
}
async function getLists() {
  let res = await getDatalist();
  if (res.code != 200) {
    ElMessage({
      message: 'Token验证失败,请重新登录',
      type: 'error',
    })
  }
  tables.dataList = res.rows;
  tables.total = res.total
}
onMounted(() => {
  get()
  getLists()
});

</script>

<style lang="less" scoped></style>
