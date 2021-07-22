<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-09 09:39:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 16:07:34
 * @detail: 
 * @change: 
-->
<template>
  <div>
    <h-crumbs></h-crumbs>
    <h-form :data="form" :column="1"></h-form>
  </div>
</template>

<script lang="ts">
import { defineComponent,  toRefs } from 'vue'
import baseData from './config'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
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
