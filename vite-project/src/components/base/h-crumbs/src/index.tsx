/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-19 22:23:16
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 15:00:57
 * @detail: 
 * @change: 
 */
import { defineComponent } from 'vue';
import { useRouter,Router } from 'vue-router';
import {getParent} from '@/utils/utils'
const hCrumbs = defineComponent({
  name:"hCrumbs",
  setup() {
    const router: Router = useRouter();
    const currentRoute = router.currentRoute.value
    const title = currentRoute.meta.title
    console.log(currentRoute)
    console.log(router.options.routes)
    const parentRouter = getParent(router.getRoutes(),currentRoute.path)
    console.log(parentRouter)
    return () => (
      <a-breadcrumb style={'marginBottom:50px'} separator="">
        <a-breadcrumb-item href="/">
          <router-link  to="/">主页</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-separator />
        <a-breadcrumb-item href={parentRouter.path}>
          <router-link to={parentRouter.path}>
            {parentRouter.meta.title}
          </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-separator />
        <a-breadcrumb-item>{title}</a-breadcrumb-item>
      </a-breadcrumb>
    )
  }
})
export default hCrumbs