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
    <RedoOutlined style="margin-left: 30px" @click="checkedView" />
</template>

<script lang="ts">
import { defineComponent, ref,nextTick } from 'vue';
import { RedoOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    name: 'hOutLine',
    components: {
        RedoOutlined
    },
    setup(props: any, vm) {
        const checkedView = () => {
            vm.emit('showViewChange',false)
        };
        return { checkedView };
    }
});
</script>
<style lang="less" scoped>
</style>

