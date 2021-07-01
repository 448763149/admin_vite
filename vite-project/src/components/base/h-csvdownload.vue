<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-23 17:41:36
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-24 11:51:37
 * @detail: 
 * @change: 
-->
<template>
  <a-button type="primary" @click="handleClick()">导出</a-button>
</template>


<script lang="ts">
import { defineComponent, computed , ref} from 'vue';
import CsvExportor from "csv-exportor";
import { message  } from 'ant-design-vue';
export default defineComponent({
  name:"hCsvdownload",
  props: {
    header: {
      type: Array,
      default: function() {
        return [];
      }
    },
    tableList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    fileName: {
      type: String,
      default: '表格.csv'
    }
  },
  setup(props:any) {
    const download = ref()
    // 过滤表格头部
    const headerLabel = computed(() => {
      let result;
      result = props.header.map((item:any) => {
        if(item.key !== 'action'){
          return item.title; 
        }
      })
      return result;
    }) 
    // 过滤表格数据
    const headerProp = computed(() => {
      let result;
      result = props.header.map((item:any) => {
          return item.key;
      })
      return result;
    })
    
   const handleClick = ()=> {
     if(!props.tableList || props.tableList.length === 0){
       message.error('请选择要导出的数据 ！！');
       return
     }
      let tableData:any = [];
      props.tableList.map((item:any) => {
        let formData:any = {}
        for (let i = 0; i < headerProp.value.length; i++) {
          if(headerProp.value[i] !== 'action'){
            formData[headerProp.value[i]] = item[headerProp.value[i]]}
          }
        tableData.push(formData)
      })
      let header = headerLabel.value
      CsvExportor.downloadCsv(tableData, { header }, props.fileName);
    }
    return {
      handleClick,
    }
  }
})
</script>
<style lang="less" scoped>
.download-btn {
  display: inline-block;
  margin-left: 10px;
  padding: 2px 15px;
  font-size: 12px;
  border-radius: 4px;
  color: #FFF;
  background-color: #f7ba2a;
  border-color: #f7ba2a;
  outline: 0;
  text-align: center;
  -webkit-appearence: none;
  cursor: pointer;
}

</style>