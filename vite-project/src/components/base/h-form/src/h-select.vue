<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-18 16:00:27
 * @detail: 
 * @change: 
-->
<template>
  <a-select v-model:value="formState[data.value]" :disabled="data.disabled" :placeholder="data.placeholder">
    <template  v-for="(b,i) in data.options" :key="b.key">
      <a-select-option :value="i.key">{{b.label}}</a-select-option>
    </template>
  </a-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'hSelect',
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
