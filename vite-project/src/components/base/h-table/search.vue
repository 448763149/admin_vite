<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-11 11:44:31
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-18 15:02:37
 * @detail: 
 * @change: 
-->
<template>
  <div class="table-page-search-wrapper">
      <a-form layout="inline" @finish="onSubmit" :model="formState" ref="formRef">
        <a-row :gutter="48">
          <template v-if="data && data.formData && data.formData.length > 0">
            <template v-for="(itme,index) in data.formData" :key="index">
              <a-col :md="8" :sm="24" v-if="itme.type === 'qwInput'">
                <a-form-item :label="itme.label" :name="itme.key" :rules="itme.rules">
                  <a-input v-model:value="formState[itme.key]" :disabled="itme.disabled" :placeholder="itme.placeholder"/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24" v-if="itme.type === 'qwSelect'">
                <a-form-item :label="itme.label" :name="itme.key">
                <a-select  v-model:value="formState[itme.key]" :disabled="itme.disabled" :placeholder="itme.placeholder">
                    <template  v-for="(b,i) in itme.options" :key="b.key">
                      <a-select-option :value="i.key">{{b.label}}</a-select-option>
                    </template>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24" v-if="itme.type === 'qwInputNumber'">
                <a-form-item :label="itme.label" :name="itme.key">
                  <a-input-number v-model:value="formState[itme.key]" :disabled="itme.disabled" :placeholder="itme.placeholder" :min="1" :max="10" />
                </a-form-item>
              </a-col>
            </template>
            <template v-if="advanced">
              
            </template>
          </template>
          <a-col :md="!advanced && 8 || 24" :sm="24">
            <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
              <a-button type="primary" html-type="submit">查询</a-button>
              <a-button style="margin-left: 8px" @click="resetForm">重置</a-button>
              <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? '收起' : '展开' }}
                <!-- <a-icon :type="advanced ? 'up' : 'down'"/> -->
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
</template>

<script lang="ts">
import { ref, toRefs, reactive, defineComponent, toRaw } from 'vue'
import { SubmitForm, resetForm, formRef, initform } from './form'
// import type { formProps } from './form';
export default defineComponent({
  name: 'Search',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup: (props) => {
    console.log(props);
    const advanced = ref<Boolean>(false)
    const toggleAdvanced = () => {
      advanced.value = !advanced.value
    }
    const data = reactive({
      formState: initform(props.data)
    })
    const onSubmit = () => {
      console.log(formRef.value.getFieldsValue())
      console.log(toRaw(props.data));
    };
    return {
      ...toRefs(data), 
      formRef, 
      onSubmit,
      SubmitForm, 
      resetForm,
      advanced, 
      toggleAdvanced }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
