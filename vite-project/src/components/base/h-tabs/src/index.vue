<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-25 15:51:10
 * @detail: 
 * @change: 
-->
<template>
  <div class="m-query">
    <a-tabs v-model:activeKey="activeKey" @change="onChange" v-bind="$attrs">
      <template v-if="tabMapOptions && tabMapOptions.length > 0">
        <a-tab-pane v-for="(item,index) in tabMapOptions" :key="item.key" :tab="item.label">
          <slot :data="item" :name="item.key"></slot>
        </a-tab-pane>
      </template>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'hTabs',
  components: {},
  // 继承所有父组件的内容
  inheritAttrs: true,
  props: {
    defaultActive: {
      type: String,
      default: ''
    },
    tabMapOptions: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(props:any, vm) {
    const activeKey = ref(props.defaultActive)
    if(!activeKey.value){
      activeKey.value = props.tabMapOptions[0].key
    }
    const onChange = (active:string)=>{
      activeKey.value = active
    }
    return {onChange,activeKey};
  }
});
</script>
<style lang="less" scoped>

</style>

