<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 14:50:50
 * @detail: 
 * @change: 
-->
<template>
   <a-radio-group 
   :disabled="data.disabled" 
   v-model:value="formState[data.key]">
   <template v-for="(itme,index) in data.options" :key="index">
     <a-radio :style="data.isVertical?radioStyle:''" :value="itme.value">{{itme.label}}</a-radio>
   </template>
   </a-radio-group>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'hRadioGroup',
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
    const radioStyle = reactive({
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    });
    return { radioStyle }
  }
});
</script>

<style scoped>
</style>
