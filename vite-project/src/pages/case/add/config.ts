/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-16 09:39:20
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 16:14:05
 * @detail: 
 * @change: 
 */
import { reactive } from 'vue'
// import { useStore } from "vuex"
// const store = useStore();
import { h } from 'vue'
const PageConfig = reactive({
  form:{
    title:'新增',
    column:1,// 每行展示几个表单，默认一行3个
    labelAlign:'right',// 表单字段的对齐方式 可以left right
    labelCol:{ lg: { span: 7 }, sm: { span: 7 }}, //24 表单label的展示宽度
    wrapperCol:{ lg: { span: 10 }, sm: { span: 10 }},// 
    formBus:[
      {
        label:"保存",
        type:'submit',// 跳转的类型
        bustype:'primary',// link primary Default danger
        key:'submit',
        api: {
          url: '/api/qw/caseAdd',
          method: 'post'
        },
        submit:(params:any,formRef:any) => {
          console.log(params)
          formRef.validate().then((valid:any) => {
            console.log(valid)
          }).catch(() => {
            console.log('error', '表单验证失败');
          });
        }
      }
    ],
    formData: [
      {
        type: 'hInput',
        key: 'title',
        label: '名称',
        value: '', 
        placeholder: '',
        disabled: false,
        required:false,
        rules: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      {
        type: 'hTextarea',
        key: 'content',
        label: '描述',
        value: '', 
        placeholder: '',
        multiple: '',
        apiUrl: "",
        disabled: false,
        rules: [{ required: true, message: '请输入描述', trigger: 'blur' }]
      }, {
        type: 'hUpload',
        key: 'url',
        label: '图片',
        value: '', 
        placeholder: '',
        disabled: false,
        isMultiple:false, // 是否支持多长上传
        fileList:[],
        maxLen:1,
        action: '/api/base/upload',
        rules: [
          { required: true, message: '图片不能为空', trigger: 'blur' }
        ],
      }, {
        type: 'hCheckboxGroup',
        key: 'labelList',  
        label: '标签',
        value: [], // 字段value值 String 或 Number
        placeholder: '',
        disabled: false,
        apiUrl: "",
        isVertical:false,
        options: [
          { label: '中国500强', value: '中国500强' },
          { label: '电子信息十强', value: '电子信息十强' },
          { label: '全球品牌', value: '全球品牌' },
          { label: '全国文化企业30强', value: '全国文化企业30强' },
          { label: '上市公司', value: '上市公司' },
          { label: '保险经纪前三', value: '保险经纪前三' }
        ]
      }
    ]
  }
})

export default PageConfig