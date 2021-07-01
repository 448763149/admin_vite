<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 16:12:01
 * @detail: 
 * @change: 
-->
<template>
  <a-textarea v-model:value="formState[data.key]"
   :disabled="data.disabled" 
   :rows="4" 
   :placeholder="data.placeholder"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'hTextarea',
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
