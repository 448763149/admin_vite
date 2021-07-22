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
    <div class="m-tree">
        <a-tree
            :checkable="checkable"
            :tree-data="treeData"
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
        >
        </a-tree>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch} from 'vue';
import { TreeDataItem } from 'ant-design-vue/es/tree/Tree';

export default defineComponent({
    name: 'hTree',
    components: {},
    props: {
        treeList: Array, // 树选择数组
        expandedKeys: Array, // 指定展开的节点
        selectedKeys: Array, //设置选中的树节点
        checkedKeys: Array, //设置选中的选择框
        checkable: Boolean //是否展示选择框
    },
    setup(props: any) {
        const expandedKeys = ref<string[]>(props.expandedKeys);
        const selectedKeys = ref<string[]>(props.selectedKeys);
        const checkedKeys = ref<string[]>(props.checkedKeys);
        const treeData: TreeDataItem[] = props.treeList;
        watch(expandedKeys, () => {
            console.log('expandedKeys', expandedKeys.value);
        });
        watch(selectedKeys, () => {
            console.log('selectedKeys', selectedKeys.value);
        });
        watch(checkedKeys, () => {
            console.log('checkedKeys', checkedKeys.value);
        });
        return {
            treeData,
            expandedKeys,
            selectedKeys,
            checkedKeys
        };
    }
});
</script>
<style lang="less" scoped>
</style>

