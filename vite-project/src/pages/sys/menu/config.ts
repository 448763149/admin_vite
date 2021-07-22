/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-16 09:39:20
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-21 14:42:30
 * @detail: 
 * @change: 
 */
import { reactive,h } from 'vue'
// import { useStore } from "vuex"
// const store = useStore();
const PageConfig = reactive({
  form:{
    title:'',
    formData: [
      {
        type: 'hInput',
        key: 'title',
        label: '名称',
        value: '', 
        placeholder: '',
        disabled: false,
        required:false,
        // rules: [
        //   { required: true, message: '请输入名称', trigger: 'blur' }
        // ]
      },
      // {
      //   type: 'hSelect',
      //   key: 'select',
      //   label: '选择框',
      //   value: '', 
      //   placeholder: '',
      //   multiple: '',
      //   apiUrl: "",
      //   disabled: false,
      //   options: [
      //     {
      //       value: "",
      //       label: "请选择",
      //       key: "state",
      //       children: [],
      //     }
      //   ],
      //   rules: []
      // }, {
      //   type: 'hInputNumber',
      //   key: 'inputnumber',
      //   label: '数组选择器',
      //   value: '', 
      //   placeholder: '',
      //   disabled: false,
      // }, {
      //   type: 'hRadioGroup',
      //   key: 'radiogroup',
      //   label: '单选框',
      //   value: '', // 字段value值 String 或 Number
      //   placeholder: '',
      //   disabled: false,
      //   apiUrl: "",
      //   isVertical:false,
      //   options: [
      //     { label: '单选1', value: 'Apple' },
      //     { label: '单选2', value: 'Pear' },
      //     { label: '单选3', value: 'Orange' }
      //   ]
      // },
      // {
      //   type: 'hCascader',
      //   key: 'cascader',
      //   label: '级联选择',
      //   value: [], 
      //   placeholder: '',
      //   disabled: false,
      //   apiUrl: "",
      //   options: [
      //     {
      //       value: 'zhejiang',
      //       label: '一级',
      //       children: [
      //         {
      //           value: 'hangzhou',
      //           label: '二级',
      //           children: [
      //             {
      //               value: 'xihu',
      //               label: '三级',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       value: 'jiangsu',
      //       label: 'Jiangsu',
      //       children: [
      //         {
      //           value: 'nanjing',
      //           label: 'Nanjing',
      //           children: [
      //             {
      //               value: 'zhonghuamen',
      //               label: 'Zhong Hua Men',
      //             },
      //           ],
      //         },
      //       ],
      //     }
      //   ]
      // }
    ]
  },
  table: {
    columns:[
      {
        title: '菜单名称',
        key: 'name',
        dataIndex: 'name',
        width:'10%'
      },
      {
        title: '菜单链接',
        key: 'menuPath',
        dataIndex: 'menuPath',
        width:'20%'
      },
      {
        title: '上级菜单',
        key: 'address',
        dataIndex: 'address',
        width:'20%'
      },
      {
        title: '显示顺序',
        dataIndex: 'showIndex',
        key: 'showIndex',
        width:'20%'
      },
      {
        title: '菜单状态',
        dataIndex: 'state',
        key: 'state',
        width:'10%'
      },
      {
        title: '创建时间',
        dataIndex: 'createOpeTime',
        key: 'createOpeTime',
        width:'20%'
      },
      {
        title: '操作',
        key: 'action',
        fixed: 'right',
        width: 100,
        slots: { customRender: 'action' },
        scopedSlots: { customRender: 'action' }
      },
    ],
    tableTopBus:[
      {
        label:"新增",
        type:'link',// 跳转的类型
        key:'ADD',
        link:'/sys/menu/add'
      }
    ],
    tableListBus: [
      {
        type:'edit',
        label:'编辑'
      },
      {
        type:'delete',
        api:{
          url: '/api/qw/delete',
          method: 'get'
        },
        label:'删除'
      }
    ],
    query: {
      url: '/api/sys/menuTree',
      method: 'post'
    }
  }
})

export default PageConfig