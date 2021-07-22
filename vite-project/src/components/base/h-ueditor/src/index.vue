<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-25 15:51:10
 * @detail: 
 * @change: 
-->
<template>
    <div class="h-iconDialog">
        <Wangeditor v-model:value="formState[data.key]" @getWangEditorValue="getWangEditorValue" ></Wangeditor>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import Wangeditor from "../components/Wangeditor.vue";
export default defineComponent({
    name: 'hUeditor',
    components: {
        Wangeditor
    },
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
        const state = reactive({
            
        });
        const getWangEditorValue = (str:string) => {
            console.log(str)
            vm.emit('update:modelValue', str);
        } 
        return {
            ...toRefs(state),
            getWangEditorValue
        };
    }
});
</script>
<style lang="less" scoped>
</style>

