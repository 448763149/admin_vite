<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-25 09:46:57
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-29 11:01:15
 * @detail: 
 * @change: 
-->
<template>
  <div class="mian">
    <a-form
    ref="formLogin"
    :model="formState"
    :rules="rules"
  >
      <h-tabs :tabBarStyle="{ 
        textAlign: 'center', 
        borderBottom: 'unset' }" 
        v-bind="$attrs" 
        :tabMapOptions="tabMapOptions" >
        <template #account>
          <a-form-item  
           name="name"> 
            <a-input
              size="large"
              type="text"
              v-model:value="formState.name"
              placeholder="请输入账号"
              
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>
          <a-form-item
           name="password">
            <a-input-password
              size="large"
              v-model:value="formState.password"
              placeholder="请输入密码"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input-password>
          </a-form-item>
        </template>
      </h-tabs>
      <a-form-item name="checked">
        <a-checkbox v-model:checked="formState.checked">自动登录</a-checkbox>
        <router-link
          class="forge-password"
          style="float: right;"
          to=""
        >忘记密码</router-link>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          @click="handleSubmit"
          class="login-button"
          block
        >登录</a-button>
      </a-form-item>
    </a-form>
  </div> 
</template>
<script lang="ts">
import { defineComponent,ref,reactive,toRaw } from 'vue'
import { useRouter } from 'vue-router'
import hTabs from '@/components/base/h-tabs'
import {login} from '@/api/common'
export default defineComponent({
  components:{
    hTabs
  },
  setup() {
    const router = useRouter();
    const formLogin = ref()
    const data = reactive({
      tabMapOptions:[{
        label:'账户密码登录',
        key:'account'
      },{
        label:'手机号登录',
        key:'mobile'
      }],
    })
    const formState = reactive({
      name: '',
      password: undefined,
      checked:false
     
    });
    const rules = {
      name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
    };
    const handleSubmit = () =>{
       formLogin.value.validate().then((valid:any) => {
          console.log(valid)
          login(valid).then((res)=>{
            router.push('/')
          })
       }).catch(() => {
        console.log('error', '表单验证失败');
      });
     
    }
    return {
      handleSubmit,
      formLogin,
      rules,
      formState,
      ...toRaw(data)
    }
  },
})
</script>
<style lang="less" scoped>
.mian{
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}
</style>
