<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-10 11:12:23
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-26 09:27:46
 * @detail: 
 * @change: 
-->
<template>
  <a-layout>
    <h-lay-left :collapsed="collapsed" />
    <h-lay-top :collapsed="collapsed" @topChange="collChange" />
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import HLayLeft from './components/h-layLeft.vue'
import HLayTop from './components/h-layTop.vue';
export default defineComponent({
  name: 'BasicLayout',
  components: {
    HLayLeft,
    HLayTop
  }, 
  setup() {
    let collapsed=ref<boolean>(false);
    const collChange = (item:any) => {
      collapsed.value=item
    }
    return {
      collChange,
      collapsed
    };
  }
});
</script>
<style lang="less">
@import './BasicLayout.less';
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
.m-content{
  overflow:hidden ;
  overflow-y: auto;
}
.layoutcontent{
  position: relative;
  min-height: calc(100vh - 115px) !important
}

.m-watermark{
  pointer-events: none;
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: 100000;
  width: 1396px;
  bottom:0px;
}
</style>
