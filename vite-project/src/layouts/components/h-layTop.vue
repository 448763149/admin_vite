<template>
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <div class="h-header-trigger">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsedChange" />
                <menu-fold-outlined v-else class="trigger" @click="collapsedChange" />
                <RedoOutlined style="margin-left: 30px" @click="checkedView" />
                <FullscreenOutlined class="FullscreenOutlined" @click="clickFullscreen" />
            </div>
        </a-layout-header>
        <div class="m-content">
            <a-layout-content
                class="layoutcontent"
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }"
            >
                <div
                    class="m-watermark"
                    v-watermark="{ text: '全网数商', textColor: 'rgba(24,144,255,0.3)' }"
                ></div>
                <router-view v-if="showView" />
            </a-layout-content>
        </div>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue';
import { message } from 'ant-design-vue';
import screenfull from 'screenfull';
import {
    AppstoreOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    RedoOutlined,
    FullscreenOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
    name: 'h-layTop',
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        AppstoreOutlined,
        RedoOutlined,
        FullscreenOutlined
    },
    setup(props, vm) {
        let collapsed = ref<boolean>(false);
        const spinning = ref<boolean>(false);
        const showView = ref<boolean>(true);
        const collapsedChange = () => {
            collapsed.value = !collapsed.value;
            vm.emit('topChange', collapsed.value);
        };
        const checkedView = () => {
            showView.value = false;
            nextTick(() => {
                showView.value = true;
            });
        };
        const clickFullscreen = () => {
            if (!screenfull.isEnabled) {
                message.error('当前不允许全屏');
                return false;
            }
            screenfull.toggle();
        };
        return {
            collapsed,
            showView,
            collapsedChange,
            clickFullscreen,
            checkedView
        };
    }
});
</script>
<style scoped lang='less'>
.h-header-trigger {
    width: 100%;
    cursor: auto;
    position: relative;
    .FullscreenOutlined {
        position: absolute;
        right: 60px;
        top: 22px;
        height: 20px;
        cursor: pointer;
    }
}
</style>