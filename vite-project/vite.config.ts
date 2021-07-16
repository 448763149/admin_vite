/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-08 16:41:00
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 09:59:08
 * @detail: 
 * @change: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import vueJsx from '@vitejs/plugin-vue-jsx'
// import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vueJsx({}),
    vue(),
    // styleImport({
    //   libs: [{
    //     libraryName: 'ant-design-vue',
    //     esModule: true,
    //     resolveStyle: (name) => {
    //       return `ant-design-vue/es/${name}/style/css`;
    //     },
    //   }]
    // })
  ],
  /**
 * 在生产中服务时的基本公共路径。
 * @default '/'
 */
  base: './',
  build:{
    outDir:'pcweb',
    // 指定生成静态资源的存放路径(相对于build.outDir)
    assetsDir: 'assets',
    // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
    cssCodeSplit: true,
    // 构建后是否生成source map文件，默认false
    sourcemap: true,
    // 去除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      "@com": path.resolve(__dirname, "src/components"),
      "@lay": path.resolve(__dirname, "src/layouts"),
      
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // "@primary-color":'#000'
          // 用于全局导入，以避免需要单独导入每个样式文件。
          // reference:  避免重复引用
          // hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
          // ↓这行代码下一章讲
          // ...generateModifyVars(),
        },
        javascriptEnabled: true,
      }
    }
  },
  // 反向代理
  // 是否自动在浏览器打开
  server: {
    host: '0.0.0.0',
    port: 8000, // 默认是 3000 端口
    open: true,
    proxy: {
      // 字符串简写写法
      '/api': 'http://192.168.4.121:3000',
      // '/api': 'http://192.168.4.121:3000',
      // '/api': 'http://192.168.1.104:3000',
      // 选项写法
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // }
    }
  }
})