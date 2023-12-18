<template id="temp"> <!-- vue实例外创建 -->
  <div>
    我是组件 父组件给我传了 {{ props.num[0] }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';  
  
  const props = defineProps({  
    num: {  
      type: Array || Object,  
      required: true,  
    },  
  });  
</script>

<style lang="less">
  
</style>