<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-21 17:42:46
 * @detail: 
 * @change: 
-->
<template>
  <a-form  :model="formState" ref="formRef">
    <a-row :gutter="48" v-if="data.formData && data.formData.length > 0">
      <template v-for="(itme,index) in  (isAdvanced ? data.formData.slice(0,data.column || 3) : data.formData)" :key="index">
        <a-col :span="24 / (data.column || 3)">
          <a-form-item 
          :labelCol="data.labelCol || labelCol"
          :wrapperCol="data.wrapperCol || wrapperCol"
           :label="itme.label" 
           :rules="itme.rules"
           :name="itme.key"
           :labelAlign="data.labelAlign || 'left'"
          >
            <component :is="itme.type"  v-model="formState[itme.key]" :data="itme" :formState="formState"></component>
          </a-form-item>
        </a-col>
      </template>
      
      <a-col :md="24" :sm="24" style="text-align: center;" v-if="data.formBus && data.formBus.length > 0" >
         <template v-for="(itme,index) in data.formBus">
            <a-button :type="itme.bustype" @click="SubmitForm(itme)">{{itme.label}}</a-button>
         </template>
      </a-col>
      <!-- <a-col :md="!advanced && 8 || 24" :sm="24">
        <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
          <a-button type="primary" @click="SubmitForm">查询</a-button>
          <a-button style="margin-left: 8px" @click="resetForm">重置</a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{ advanced ? '收起' : '展开' }}
            <a-icon :type="advanced ? 'up' : 'down'"/>
          </a>
        </span>
      </a-col> -->
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw, UnwrapRef,defineAsyncComponent  } from 'vue'
import { formRef, initform } from '../form'
import {getRequest} from '@/api/common'
import { useRouter } from 'vue-router'
import { message  } from 'ant-design-vue';
export default defineComponent({
  name: 'hForm',
  components: {
    hInput: defineAsyncComponent(() => import('./h-input.vue')),
    hSelect: defineAsyncComponent(() => import('./h-select.vue')),
    hInputNumber:defineAsyncComponent(() => import('./h-input-number.vue')),
    hTextarea:defineAsyncComponent(() => import('./h-textarea.vue')),
    hRadioGroup:defineAsyncComponent(() => import('./h-radio-group.vue')),
    hCascader:defineAsyncComponent(() => import('./h-cascader.vue')),
    hCheckboxGroup:defineAsyncComponent(() => import('./h-checkbox-group.vue')),
    hUpload:defineAsyncComponent(() => import('./h-upload.vue')),
    hIconDialog:defineAsyncComponent(() => import('../../h-iconDialog/src/index.vue')),
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    isAdvanced:{
      type: Boolean,
      default:false
    }
  },
  setup(props, vm) {
    const labelCol = { lg: { span: 5 }, sm: { span: 5 }}
    const wrapperCol = { lg: { span: 19 }, sm: { span: 19 }}
    const router = useRouter();
    // const advanced = ref<Boolean>(false)
    // const toggleAdvanced = () => {
    //   advanced.value = !advanced.value
    // }
    interface stateType {
      formState:any
    }
    const state:UnwrapRef<stateType> = reactive({
      formState: initform(props.data)
    })
        
    // 表单提交
    const SubmitForm = (value:any) => {
      // 提交类型
      if(value.type === 'submit'){
        formRef.value.validate().then((valid:any) => {
        for (const key in valid) {
          if (valid[key] instanceof Array) {
            valid[key] = valid[key].join()
          }
        }
        console.log(valid)
        getRequest(value.api,valid).then((res)=>{
          message.success('新增成功')
          setTimeout(() => {
            router.go(-1)
          }, 1000);
        })
      }).catch(() => {
        console.log('error', '表单验证失败');
      });
      }
      
    }
    return { 
      ...toRaw(state),
      labelCol,
      wrapperCol, 
      // advanced, 
      // toggleAdvanced,
      // resetForm,
      formRef,
      SubmitForm
    }
  }
});
</script>

<style lang="less" scoped>
// ::v-deep(.ant-form-item){margin-bottom: 10px;}
</style>

