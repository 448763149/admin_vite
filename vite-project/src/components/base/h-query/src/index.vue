<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-24 11:26:15
 * @detail: 
 * @change: 
-->
<template>
  <div class="m-query">
    <h-form :data="data" :isAdvanced="advanced" ref="queryRef"></h-form>
    <a-row :gutter="48">
      <a-col :md="12" :sm="12">
      <span class="table-page-search-submitButtons" >
        <a-button type="primary" @click="SubmitForm">查询</a-button>
        <a-button  @click="resetForm">重置</a-button>
        <template v-if="data.formData && data.formData.length > (data.column || 3)">
          <a @click="advanced = !advanced" style="margin-left: 10px">
            {{ !advanced ? '收起' : '展开' }}
            <UpOutlined v-if="!advanced"/>
            <DownOutlined v-else/>
            <!-- <a-icon :type="advanced ? 'up' : 'down'"/> -->
          </a>
        </template>
      </span>
    </a-col>
     <a-col :md="12" :sm="12" class="t-r">
       <template v-if="tableTopBus && tableTopBus.length > 0">
         <template v-for="(itme,index) in tableTopBus">
            <a-button type="primary" @click="busOperation(itme)">{{itme.label}}</a-button>
         </template>
       </template>
       <h-csvdownload v-bind="$attrs"></h-csvdownload>
     </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import { UpOutlined,DownOutlined } from '@ant-design/icons-vue';
import hCsvdownload from '@/components/base/h-csvdownload.vue'
export default defineComponent({
  name: 'hQuery',
  components:{
    hCsvdownload,
    UpOutlined,
    DownOutlined
  },
  // 继承所有父组件的内容
  inheritAttrs: true,
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    tableTopBus: {
      type: Array,
      default: () => []
    }
  },
  setup(props, vm) {
    const router = useRouter();
    const queryRef = ref();
    const advanced = ref<Boolean>(true)
    // // 表单重置
    const resetForm = () => {
      queryRef.value.formRef.resetFields();
      const valid = queryRef.value.formRef.getFieldsValue()
      for (const key in valid) {
        if (valid[key] instanceof Array) {
          valid[key] = valid[key].join()
        }
      }
      vm.emit('getTabData', valid)
    };
    const toggleAdvanced = () => {
      advanced.value = !advanced.value
    }
    // // 表单提交
    const SubmitForm = () => {
      queryRef.value.formRef.validate().then((valid:any) => {
        for (const key in valid) {
          if (valid[key] instanceof Array) {
            valid[key] = valid[key].join()
          }
        }
        vm.emit('getTabData', valid)
      }).catch(() => {
        console.log('error', '表单验证失败');
      });
    }
    // 按钮的操作
    const busOperation = (obj:any) => {
      console.log('你点击了', obj.label)
      if (obj.type === 'link') {
        router.push(obj.link)
      }
    }
    return {
      resetForm,
      queryRef,
      SubmitForm,
      busOperation,
      toggleAdvanced,
      advanced
    }
  }
});
</script>
<style lang="less" scoped>
.m-query{
  margin-bottom: 10px;
  ::v-deep(.ant-btn) {
    margin-right: 8px;
    margin-bottom: 12px;
  }
  .t-r{
    ::v-deep(.ant-btn) {
      margin-right: 8px;
      margin-bottom: 12px;
      &:last-child{
        margin-right:0px
      }
    }
  }
}


</style>

