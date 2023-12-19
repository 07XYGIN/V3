<template id="temp">
  <div class="table">
    <el-row :gutter="20" class="l">
      <el-col :span="6" class="row">
        <div class="grid-content ep-bg-purple" />
        <span>客户姓名</span>
        <el-input v-model="from.name" placeholder="请输入客户姓名" clearable />
      </el-col>
      <el-col :span="6" class="row">
        <div class="grid-content ep-bg-purple" />
        <span>客户手机</span>
        <el-input v-model="from.phone" placeholder="请输入客户手机号" clearable />
      </el-col>
      <el-col :span="6" class="row">
        <div class="grid-content ep-bg-purple" />
        <span>归属人</span>
        <el-input v-model="from.owner" placeholder="请输入归属人" clearable />
      </el-col>
      <el-col :span="6" class="row">
        <div class="grid-content ep-bg-purple" />
        <span>渠道来源</span>
        <el-select v-model="from.channelId" clearable placeholder="渠道来源">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="l">
      <el-col :span="8" class="row">
        <span>线索状态</span>
        <el-select v-model="from.status" clearable placeholder="线索状态">
          <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-row class="mb-4">
          <el-button type="primary" :icon="Search" @click="Searchs">搜索</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <div class="tables">
    <el-table ref="multipleTableRef" :data="props.tables" style="width: 100%" @selection-change="handleSelectionChange"
      id="t">
      <el-table-column type="selection" width="55" />
      <el-table-column label="线索编号" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="客户姓名" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="手机号码" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="渠道来源" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="创建时间" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="线索归属" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="线索状态" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="下次跟进时间" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <el-row class="mb-4">
          <el-button type="primary" round :icon="View">查看</el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
        :small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" id="fs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps } from 'vue';
import { Search, View } from '@element-plus/icons-vue'
import { ElTable } from 'element-plus'
interface User {
  date: string
  name: string
  address: string
}
const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const props = defineProps({
  tables: {
    type: Array,
    required: true,
  },
});
console.log(props.tables);

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const options1 = [
  {
    value: '1',
    label: '已跟进',
  },
  {
    value: '2',
    label: '跟进中',
  },
  {
    value: '3',
    label: '回收',
  },
  {
    value: '4',
    label: '伪线索',
  },
]
const from = reactive({
  name: '',
  phone: '',
  owner: '',
  channelId: '',
  date: '',
  status: ''
})
//function
async function Searchs() {
  console.log(from);
}
</script>

<style lang="less" scoped>
.table {
  width: 80vw;
  margin: 30px 0 20px 60px;

  .l {
    display: flex;
    margin: 0 0 20px 60px;

    .row {
      display: flex;

      span {
        width: 100px;
        display: block;
        line-height: 32px;
      }
    }
  }
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.demo-pagination-block+.demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

#fs {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}

#t {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
