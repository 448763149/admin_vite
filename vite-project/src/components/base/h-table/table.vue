<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-11 11:44:31
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-14 09:28:13
 * @detail: 
 * @change: 
-->
<template>
  <div>
    <h-query 
    :data="form" 
    @getTabData="getTabData" 
    :tableTopBus="tableTopBus"
    :tableList="selectedRows"
    :header="columns"
    v-bind="$attrs">
    </h-query>
    <!-- <search :data="form" /> -->
    <div class="table-page">
      <a-table :size="store.getters.getsize"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" 
        :columns="columns"
        :rowKey="(record) => record.id" 
        :data-source="tableList" 
        :loading="loading" 
        :pagination="{
          current: nowPage,
          defaultPageSize: pageShow,
          showSizeChanger: true,
          total,
          pageSizeOptions,
          showTotal: (total,range) => `共${total}条`,
          onShowSizeChange:onChange,
          onChange
        }" :scroll="{ x: 1500, y: 'auto' }">
        <slot>
        </slot>
        <template #action = "{ record }">
          <a-space size="small">
            <a-button style="padding:0" type="link" @click="handleBus(itme,record)" v-for="(itme,index) in tableListBus" :key="index">{{itme.label}}</a-button>
          </a-space>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, defineComponent, getCurrentInstance, watch, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { message  } from 'ant-design-vue';
import {getRequest} from '@/api/common'
interface stateType {
  loading:boolean,
  nowPage: number,
  pageShow:number,
  total: number,
  pageSizeOptions:any[],
  tableList: any[],
  selectedRowKeys:any[],
  selectedRows:any[]
}
export default defineComponent({
  name: 'hTable',
  props: {
    tableData: {
      type: Object,
      default: () => {}
    },
    form: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    // search: defineAsyncComponent(() =>
    //   import('@/components/base/TableList/search.vue')
    // )
  },
  setup: (props, vm) => {
    const store = useStore();
    const state = reactive<stateType>({
      loading: true,
      nowPage: 1,
      pageShow: store.getters.pageShow,
      total: 1,
      tableList: [],
      pageSizeOptions: ['10', '20', '30', '40'],
      selectedRowKeys: [], // Check here to configure the default column
      selectedRows:[],// 选择的每一项
    })
    const axios = getCurrentInstance()?.appContext.config.globalProperties.$axios
    const data = props.tableData;
    // data.tableListBus = store.getters.tableListBus
    // 获取表格数据
    const getTabData = (query:Object = {}) => {
      state.loading = true
      const par = Object.assign(query, { nowPage: state.nowPage, pageShow: state.pageShow })
      getRequest(data.query,par).then((res:any) => {
        state.tableList = res.data?.list || [];
        state.total = res.data?.page?.total
      }).finally(() => {
        state.loading = false
      })
    }
   
    getTabData()
    
    watch(() => { return props.tableData.loading; }, 
      (state) => { console.log(state); }, {
        deep: true
      });

    // 全选功能
    const hasSelected = computed(() => state.selectedRowKeys.length > 0);
    const onSelectChange = (selectedRowKeys: any,selectedRows:any) => {
      // console.log('selectedRowKeys changed: ', selectedRowKeys);
      state.selectedRows = selectedRows
      state.selectedRowKeys = selectedRowKeys;
    };

    // 翻页
    const onChange = (nowPage: number, pageShow: number) => {
      state.nowPage = nowPage;
      state.pageShow = pageShow;
      getTabData()
    };

    //  表格内部按钮操作项
    const handleBus = (data:any,record:any) =>{
      if(data.type === 'delete'){
        const par ={ id: record.id}
        const params = data.api.method === 'get' ? { params: par, ...data.api } : { data: par, ...data.api }
        console.log(params)
        axios.request(params).then((res:any) => {
          message.success('删除成功！！')
          getTabData()
        })
      }
    }
 
    return {
      ...toRefs(data),
      ...toRefs(state),
      hasSelected,
      onSelectChange,
      handleBus,
      ...toRefs(state),
      onChange,
      store,
      getTabData
    };
  }
});
</script>
<style lang="less">
.m-img {
    width: 100px;
    height: 50px;
    overflow: hidden;
    img {
        width: 100%;
    }
}
</style>

