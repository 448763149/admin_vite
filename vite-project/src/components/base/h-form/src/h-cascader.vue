<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 16:11:21
 * @detail: 
 * @change: 
-->
<template>
  <a-cascader 
  v-model:value="formState[data.key]"
   :disabled="data.disabled"  
  :options="data.options" 
  :placeholder="data.placeholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'hCascader',
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    formState: {
      type: Object,
      default: () => {}
    }
   
  },
  setup() {
    
  }
});
</script>

<style scoped>
</style>
