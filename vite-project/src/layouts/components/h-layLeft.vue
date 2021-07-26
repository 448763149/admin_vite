<template>
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
        <template v-for="(item) in menus" :key="item.path">
          <template v-if="item.children && item.children.length > 0">
            <a-sub-menu :key="sub.path" v-for="(sub) in item.children">
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
import { defineComponent, onMounted,watch, ref, toRefs } from 'vue'
import { data } from '../menu'
import { useRouter } from 'vue-router'
import {getisRoute} from '@/utils/utils'
export default defineComponent({
  props:{
    collapsed:Boolean,
  },
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
  },
  name: '',
  setup(props) {
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
    onMounted(() => {
      const getRouter:any = localStorage.getItem("getRouter");
      curRoute.value = [getRouter]
      // if(router.currentRoute.value.path === getRouter){
      //   curRoute.value = [getRouter]
      // }else{
      //   curRoute.value = [router.currentRoute.value.path]
      //   localStorage.setItem("getRouter", router.currentRoute.value.path);
      // }
    })
    return {
      handlemenus,
      openKeys,
      ...toRefs(data),
      selectedKeys:curRoute,
    }
  },
})

</script>
<style scoped lang='less'>
</style>