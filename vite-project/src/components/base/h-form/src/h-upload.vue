<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 16:12:40
 * @detail: 
 * @change: 
-->
<template>
  <div class="clearfix">
    <a-upload :action="data.action" list-type="picture-card" 
    v-model:file-list="fileList"
    :multiple="data.isMultiple"
    @preview="handlePreview"
    :disabled="data.disabled" 
    name="fileData"     
    @change="handleChange" 
    :beforeUpload="beforeUpload">
      <div v-if="fileList.length < data.maxLen">
        <plus-outlined />
        <div class="ant-upload-text">上传图片</div>
      </div>
    </a-upload>

    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent,computed, ref, watch,toRefs } from 'vue';
import {mixins} from '@/mixins'
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function getFileName(path: string) {
  if (path.lastIndexOf('\\') >= 0) {
    let reg = new RegExp('\\\\', 'g');
    path = path.replace(reg, '/');
  }
  return path.substring(path.lastIndexOf('/') + 1);
};

interface FileItem {
  type?: any;
  uid?: string;
  name?: string;
  status?: string;
  response?: string;
  percent?: number;
  url?: string;
  preview?: string;
  originFileObj?: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export default defineComponent({
   name: 'hUpload',
    // model: {
    //   prop: 'url', // prop说:我要将value1作为该组件被使用(被父组件调用)时,v-model能取到的值
    //   event: 'change' // event说:我emit(触发)change的时候，参数的值就是父组件v-model收到的值。
    // },
    props: {
      data: {
        type: Object,
        default: () => {
          return {
            isMultiple: false, // 默认上传单张
            maxLen: 1,
            FileList: [],
            action: ''
          };
        }
      },
      formState: {
        type: Object,
        default: () => {}
      }
    },
    components: {
      PlusOutlined
    },
    setup(props, vm) {
      const previewVisible = ref<boolean>(false);
      const previewImage = ref<string | undefined>('');
      let fileList:any = ref<FileItem[]>([]);

      const getModel = computed(() => props.formState[props.data.key]) 
      // 清除
      
      const handleCancel = () => {
          previewVisible.value = false;
      };
      // 显示已有图片
      const initFileList = (paths: any) => {
        if (!paths || paths.length == 0) {
          fileList.value = [];
          return;
        }
        let filList = [];
        let arr = paths.split(',');
        for (var a = 0; a < arr.length; a++) {
          let url = arr[a];
          filList.push({
            type:'',
            uid: Date.now() + Math.random() * 999 + Math.random() * 2222 + '',
            name: getFileName(arr[a]),
            status: 'done',
            url: url,
            response: {
              status: 'history',
              message: arr[a]
            }
          });
        }
        fileList.value = filList;
        console.log('fileList', fileList.value);
      };
      watch(() => {
        return props.data.fileList;
        },(val, oldval) => {
          if (val instanceof Array) {
            initFileList(val.join(','));
          } else {
            initFileList(val);
          }
        },
        {
        deep: true,
        immediate: true
      });
      
      
      // 预览
      const handlePreview = async (file: FileItem) => {
        if (!file.url && !file.preview) {
          file.preview = (await getBase64(file.originFileObj)) as string;
        }
        previewImage.value = file.url || file.preview;
        previewVisible.value = true;
      };
      // 上传
      const handleChange = (info: FileInfo) => {
        if (info.file.status === 'done' || info.file.status === 'removed') {
          fileList.value = info.fileList;
          handlePathChange();
        }
      };

      const beforeUpload = (file: FileItem) => {
        var fileType = file.type;
        if (fileType.indexOf('image') < 0) {
          console.log('请上传图片');
          return false;
        }
      };

      // 回传父组件
      const handlePathChange = () => {
        let uploadFiles: any = fileList.value;
        let path = '';
        if (!uploadFiles || uploadFiles.length == 0) {
            path = '';
        }
        let arr = [];
        if (!props.data.isMultiple) {
          arr.push(mixins.imgUrl+uploadFiles[uploadFiles.length - 1].response.data.imgUrl);
        } else {
          for (var a = 0; a < uploadFiles.length; a++) {
            arr.push(mixins.imgUrl+uploadFiles[a].response.data.imgUrl);
          }
        }
        if (arr.length > 0) {
          path = arr.join(',');
        }
        vm.emit('update:modelValue', path);
      };

      return {
        getModel,
        previewVisible,
        beforeUpload,
        previewImage,
        fileList,
        handleCancel,
        handlePreview,
        handleChange
      };
    }
});
</script>
<style lang="less" scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
}
</style>
