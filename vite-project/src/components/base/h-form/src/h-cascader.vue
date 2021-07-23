<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-23 11:56:04
 * @detail: 
 * @change: 
-->
<template>
  <a-cascader 
  v-model:value="formState[data.key]"
   :disabled="data.disabled"  
  :options="data.options" 
  :placeholder="data.placeholder" 
   />
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import {getRequest} from '@/api/common'
// import {turnToTreeOfManyRootPlus} from '@/utils/utils'
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
  
  setup(props) {
    let data = props.data
    if(data && data.query){
      getRequest(data.query,'').then((res:any) => {
        data.options = res.data.list
      })
    }
  }
});
</script>

<style scoped>
</style>
