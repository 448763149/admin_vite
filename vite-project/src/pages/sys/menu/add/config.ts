/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-16 09:39:20
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 15:08:51
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
        }
      }
    ],
    formData: [
      {
        type: 'hInput',
        key: 'name',
        label: '菜单名称',
        value: '', 
        placeholder: '',
        disabled: false,
        required:false,
        rules: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ]
      },
      {
        type: 'hRadioGroup',
        key: 'type',
        label: '菜单类型',
        value: '1', 
        placeholder: '',
        disabled: false,
        required:false,
        isVertical:false, // 展示方式
        options: [
          { label: '菜单', value: '1' },
          { label: '按钮', value: '2' },
        ],
        rules: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ]
      },
      {
        type: 'hSelect',
        key: 'select',
        label: '业务域',
        value: '', 
        placeholder: '',
        multiple: '',
        apiUrl: "",
        disabled: false,
        options: [
          {
            value: "",
            label: "请选择",
            key: "state",
            children: [],
          }
        ],
        rules: []
      },
      {
        type: 'hInput',
        key: 'menuPath',
        label: '前端路由地址',
        value: '', 
        placeholder: '',
        disabled: false,
        required:false,
        rules: [
          { required: true, message: '请输入路由地址', trigger: 'blur' }
        ]
      },
      {
        type: 'hInput',
        key: 'iconCssName',
        label: '菜单图标',
        value: '', 
        placeholder: '',
        disabled: false,
        required:false,
        rules: [
          { required: true, message: '请输入菜单图标', trigger: 'blur' }
        ]
      },
    ]
  }
})

export default PageConfig