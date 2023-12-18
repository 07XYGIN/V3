<script setup lang="ts">
const emit = defineEmits(['abcd'])
const ev = ()=>{
  emit('abcd','子组件数据')
}
</script>

<template id="temp">
  <div>
    <button @click="ev">子传父</button>
  </div>
</template>