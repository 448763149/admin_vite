<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-10 11:12:23
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-23 14:58:39
 * @detail: 
 * @change: 
-->
<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <h1>huqiang</h1>
      </div>
      <a-menu theme="dark"
      mode="inline" 
      v-model:selectedKeys="selectedKeys"
       @click="handlemenus"
       v-model:openKeys="openKeys"
      >
        <template v-for="(item,index) in menus" :key="item.path">
          <template v-if="item.children && item.children.length > 0">
            <a-sub-menu :key="item.path" v-for="(sub,index) in item.children">
              <template #title>
                <span>
                  <AppstoreOutlined />
                  <span>{{ item.meta.title }}</span>
                </span>
              </template>
              <a-menu-item :key="sub.path">
                {{sub.meta.title}}
              </a-menu-item>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="item.path">
              <AppstoreOutlined />
              <span>{{ item.meta.title }}</span>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="h-header-trigger">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </div>
      </a-layout-header>
      <div class="m-content">
        <a-layout-content class="layoutcontent"  :style="{ margin: '24px 16px', padding: '24px',background:'#fff' }">
           <div class="m-watermark" v-watermark="{text:'全网数商',textColor:'rgba(24,144,255,0.3)'}"></div>
           <router-view />
        </a-layout-content>
      </div>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  AppstoreOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
import { defineComponent, onMounted,watch, ref, toRefs } from 'vue';
import { data } from './menu'
import { useRouter } from 'vue-router'
import {getisRoute} from '@/utils/utils'
export default defineComponent({
  name: 'BasicLayout',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined
  },
  setup() {
    const router = useRouter();
    let curRoute = ref<string[]>([])
    const openKeys = ref<string[]>([]);
    let arr:any = router.currentRoute.value.path.match(/^(\/\w+)/g)
    openKeys.value = [arr[0]]
    // 导航跳转
    const handlemenus = (item:any) => {
      localStorage.setItem("getRouter", item.key);
      curRoute.value = [item.key]
      router.push(item.key)
    }
    // 监听路由变化修改选中效果
    watch(() => router.currentRoute.value.path,(val) => {
      let isRouter = getisRoute(data.menus,val)
        if(isRouter){
          localStorage.setItem("getRouter", val);
          curRoute.value = [val]
        }
      }
    )
    // color 传入颜色值
      // const handleColorChange = (color:string)=> {
      //   console.log(color)
      //   console.log(window.less)
      //     window.less.modifyVars({  // 调用 `less.modifyVars` 方法来改变变量值'
      //        "@primary-color":color
      //       }).then(() => {
      //       console.log('修改成功');
      //     });
      // }
    // watch(() => openKeys,val => {
    //     console.log('openKeys', val);
    //   },
    // )
    onMounted(() => {
      const getRouter:any = localStorage.getItem("getRouter");
      // if(router.currentRoute.value.path === getRouter){
      curRoute.value = [getRouter]
      // }else{
        // curRoute.value = [router.currentRoute.value.path]
        // localStorage.setItem("getRouter", router.currentRoute.value.path);
      // }
    })
   
    return {
      handlemenus,
      openKeys,
      ...toRefs(data),
      selectedKeys:curRoute,
      collapsed: ref<boolean>(false)
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
