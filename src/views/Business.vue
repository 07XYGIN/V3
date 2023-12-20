<template id="temp">
  <div>
  </div>
</template>
<script setup lang="ts">
import {reactive,onMounted} from 'vue'
const tables = reactive({
  dataList: [],
  total: '',
  from: {}
});

import { getDatalist } from '../api/business' 
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
  getLists()
});

</script>