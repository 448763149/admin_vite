<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-22 13:50:33
 * @detail: 
 * @change: 
-->
<template>
   <a-checkbox-group :disabled="data.disabled" v-model:value="formState[data.key]">
    <template v-for="(itme,index) in data.options" :key="index">
      <a-checkbox :style="data.isVertical?radioStyle:''" :value="itme.value">{{itme.label}}</a-checkbox>
    </template>
   </a-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'hCheckboxGroup',
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

<style lang="less" scoped>
.ant-checkbox-wrapper + .ant-checkbox-wrapper{
  margin: 0 10px 10px 0 
}
</style>

