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
    <FullscreenOutlined class="FullscreenOutlined" @click="clickFullscreen" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import screenfull from 'screenfull';
import { message } from 'ant-design-vue';
import { FullscreenOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    name: 'hTabs',
    components: {
        FullscreenOutlined
    },
    // 继承所有父组件的内容
    inheritAttrs: true,
    props: {
        defaultActive: {
            type: String,
            default: ''
        },
        tabMapOptions: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    setup(props: any, vm) {
        const clickFullscreen = () => {
            if (!screenfull.isEnabled) {
                message.error('当前不允许全屏');
                return false;
            }
            screenfull.toggle();
        };
        return { clickFullscreen };
    }
});
</script>
<style lang="less" scoped>
.FullscreenOutlined {
        position: absolute;
        right: 60px;
        top: 22px;
        height: 20px;
        cursor: pointer;
    }
</style>

