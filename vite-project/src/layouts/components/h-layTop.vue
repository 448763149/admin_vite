<template>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
        <div class="h-header-trigger">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsedChange" />
          <menu-fold-outlined v-else class="trigger" @click="collapsedChange" />
        </div>
      </a-layout-header>
      <div class="m-content">
        <a-layout-content class="layoutcontent"  :style="{ margin: '24px 16px', padding: '24px',background:'#fff' }">
           <div class="m-watermark" v-watermark="{text:'全网数商',textColor:'rgba(24,144,255,0.3)'}"></div>
           <router-view />
        </a-layout-content>
      </div>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import {
  AppstoreOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  name: 'h-layTop',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
  }, 
  setup(props,vm) {
    let collapsed=ref<boolean>(false);
    const collapsedChange = () => {
      collapsed.value=!collapsed.value
      vm.emit('topChange',collapsed.value)
    }
    return {
      collapsed,
      collapsedChange
    }
  },
})

</script>
<style scoped lang='less'>
</style>