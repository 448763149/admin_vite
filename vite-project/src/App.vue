<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-08 16:41:00
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-16 12:52:02
 * @detail: 
 * @change: 
-->
<template>
  <a-config-provider :locale="locale">
    <suspense>
     <router-view />
    </suspense>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      locale: zhCN
    }
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
