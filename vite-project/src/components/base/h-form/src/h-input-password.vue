<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-18 15:59:39
 * @detail: 
 * @change: 
-->
<template>
  <a-input-password
  v-model:value="formState[data.key]"  
  :disabled="data.disabled" 
  :placeholder="data.placeholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'hInputPassword',
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
