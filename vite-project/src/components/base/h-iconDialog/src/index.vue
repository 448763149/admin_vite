<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-20 16:33:56
 * @detail: 
 * @change: 
-->
<template>
  <div class="h-iconDialog">
    <div @click="visible = true">
      <a-input-search class="iconInput" v-model:value="formState[data.key]" :disabled="data.disabled"
        :placeholder="data.placeholder">
        <template #enterButton>
          <a-button style="border: 1px solid #d9d9d9; color: rgba(0, 0, 0, 0.85)">选择</a-button>
        </template>
      </a-input-search>
    </div>
    <div class="m-icon-dialog">
      <a-modal title="选择图标" class="m-iconmodal" :width="900" :footer="null" v-model:visible="visible">
        <div class="iconList">
          <div class="iconItem" v-for="(item, index) in IconList.glyphs" :key="index">
            <i @click="setIcon(item, IconList.css_prefix_text)"
              :class="['iconfont', IconList.css_prefix_text + item.font_class]" />
            <p>{{item.name}}</p>
          </div>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IconList from '@/assets/json/iconfont.json';
import { formRef } from '../../h-form/form'
export default defineComponent({
    name: 'hIconDialog',
    components: {},
    // 继承所有父组件的内容
    props: {
        data: {
          type: Object,
          default: () => {}
        },
        formState: {
          type: Object,
          default: () => {}
        }
    },
    setup(props: any, vm) {
        const visible = ref<boolean>(false);
        const setIcon = (item: any, text: any) => {
            vm.emit('update:modelValue', text + item.font_class);
            formRef.value.clearValidate([`${props.data.key}`]);
            visible.value = false;
        };
        return {
            visible,
            setIcon,
            IconList
        };
    }
});
</script>
<style lang="less">
.m-iconmodal{
  .ant-modal-body{
    height: 440px;
    overflow: scroll;
    overflow-x: hidden;
  }
}
</style>
<style lang="less" scoped>
.h-iconDialog {
  .iconInput {
    :deep(.ant-input) {
        background-color: #ffffff;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.65);
    }
  }
}

.iconList {
    width: 800px;
    margin: auto;
    .iconItem {
      width: 10%;
      display: inline-block;
      margin: 10px 0px;
      text-align: center;
      i {
          font-size: 24px;
          cursor: pointer;
      }
      .iconBorder {
          color: #2ad2c9;
      }
      p{
        font-size: 12px;
      }
    }
}
</style>

