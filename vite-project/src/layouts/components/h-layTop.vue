<template>
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <div class="h-header-trigger">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsedChange" />
                <menu-fold-outlined v-else class="trigger" @click="collapsedChange" />
                <h-out-line @showViewChange="showViewChange" />
                <h-full-screen />
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
import hFullScreen from './h-fullScreen.vue';
import hOutLine from './h-outLine.vue';
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
        FullscreenOutlined,
        hFullScreen,
        hOutLine
    },
    setup(props, vm) {
        let collapsed = ref<boolean>(false);
        const showView = ref<boolean>(true);
        const collapsedChange = () => {
            collapsed.value = !collapsed.value;
            vm.emit('topChange', collapsed.value);
        };
        const showViewChange = (item:any) => {
            showView.value=item;
            nextTick(() => {
                showView.value = true;
            });
        };

        return {
            collapsed,
            showView,
            collapsedChange,
            showViewChange
        };
    }
});
</script>
<style scoped lang='less'>
.h-header-trigger {
    width: 100%;
    cursor: auto;
    position: relative;
}
</style>