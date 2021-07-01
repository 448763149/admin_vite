<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-09 09:39:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 16:23:21
 * @detail: 
 * @change: 
-->
<template>
  <div>
    <h-table :tableData="table" :form="form"></h-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, toRefs } from 'vue'
// import { useStore } from 'vuex'
import baseData from './config'
export default defineComponent({
  name: 'App',
  components: {
    hTable: defineAsyncComponent(() =>
      import('@/components/base/h-table/table.vue')
    )
  },
  async setup() {
    return { ...toRefs(baseData) }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
