<template id="temp">
  <div>
    <div class="table">
      <el-row :gutter="24" class="l">
        <el-col :span="6" class="row">
          <div class="grid-content ep-bg-purple">
            <b>课程名称</b>
            <el-input v-model="data.from.name" placeholder="请输入客户姓名" clearable />
          </div>
        </el-col>
        <el-col :span="6" class="row">
          <div class="grid-content ep-bg-purple">
            <b>课程类型</b>
            <el-input v-model="data.from.phone" placeholder="手机号" clearable />
          </div>
        </el-col>
        <el-col :span="6" class="row">
          <div class="grid-content ep-bg-purple">
            <b>适用人群</b>
            <el-input v-model="data.from.owner" placeholder="归属人" clearable />
          </div>
        </el-col>
        <el-col :span="6" class="row">
          <div class="grid-content ep-bg-purple">
            <b>最低价格 </b>
            <el-input v-model="data.from.owner" placeholder="归属人" clearable />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table-data">
      <el-table ref="multipleTableRef" :data="data.options" style="width: 100%" @selection-change="handleSelectionChange"
        id="t">
        <el-table-column type="selection" width="55" />
        <el-table-column label="课程编号" width="120">
          <template #default="scope">{{ scope.row.courseId }}</template>
        </el-table-column>
        <el-table-column label="课程类型" width="120">
          <template #default="scope">{{ scope.row.type }}</template>
        </el-table-column>
        <el-table-column label="课程名称" width="120">
          <template #default="scope">{{ scope.row.info}}</template>
        </el-table-column>
        <el-table-column label="课程价格" width="180">
          <template #default="scope">{{ scope.row.price}}</template>
        </el-table-column>
        <el-table-column label="课程试用人群" width="120">
          <template #default="scope">
            <template v-if="scope.row.applyTo == 2">
              上班族
            </template>
            <template v-else>
              健身达人
            </template>
          </template>
        </el-table-column>
        <el-table-column label="课程介绍" width="180">
          <template #default="scope">{{ scope.row.info}}</template>
        </el-table-column>
        <el-table-column label="创建时间" width="180">
          <template #default="scope">{{ scope.row.createTime}}</template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block">
        <el-pagination v-model:current-page="data.from.pageNum" v-model:page-size="data.from.pageSize"
          :page-sizes="[10, 20, 30, 50]" :small="small" :disabled="disabled" background
          layout="total, sizes, prev, pager, next, jumper" :total="data.total" @size-change="handleSizeChange"
          @current-change="fs" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import { ElMessage, ElTable } from 'element-plus'
import days from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
//data
interface User {
  date: string
  name: string
  address: string
}
const data = reactive({
  from: {
    name: null,
    phone: null,
    owner: null,
    pageNum: 1,
    pageSize: 10
  },
  options: [],
  total: ''
});

import { gets  } from '../api/business'
async function getLists() {
  let res = await gets (data.from);
  if (res.code != 200) {
    ElMessage({
      message: 'Token验证失败,请重新登录',
      type: 'error',
    })
  }

  data.options = res.rows
  data.total = res.total
  console.log(data);
}
function fs() {   
  getLists();  
}
onMounted(() => {
  getLists()
});

</script>

<style lang="less" scoped>
.demo-pagination-block+.demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

.table {
  width: 80vw;
  margin: 30px 0 20px 60px;
}

.grid-content {
  display: flex;

  b {
    width: 85px;
    line-height: 32px;
    margin-right: 10px;
  }
}

.el-table__inner-wrapper {
  margin-left: 30px;
}

.demo-pagination-block {
  margin-top: 20px;
}

.el-paginationk {
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
}

.table-data {
  margin: 0 0 0 230px;
}
</style>