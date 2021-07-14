/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-08 16:41:00
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-14 09:22:39
 * @detail: 
 * @change: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Antd from 'ant-design-vue';
import '@/global.less' // global style
import {watermark} from '@/directive'
// import { axiosPlugin } from '@/utils/request/axios';
import qwBase from '@com/base';

const app = createApp(App)
watermark(app)
app.use(Antd).use(qwBase);
// app.use(axiosPlugin);
app.use(router).use(store).mount('#app')
