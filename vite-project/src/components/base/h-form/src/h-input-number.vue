<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-18 15:57:56
 * @detail: 
 * @change: 
-->
<template>
   <a-input-number 
   v-model:value="formState[data.key]"
   :disabled="data.disabled"
   :placeholder="data.placeholder"
   :min="1"
    />
   <!-- :max="10" -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'hInputNumber',
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
