/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-16 09:39:20
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 11:55:03
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
        dataIndex: 'name'
      },
      {
        title: '菜单链接',
        key: 'age',
        dataIndex: 'age'
      },
      {
        title: '上级菜单',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '是否显示',
        dataIndex: 'address',
        key: 'address',
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
    tableList:[
      {
        key: 1,
        name: 'John Brown sr.',
        age: 60,
        address: 'New York No. 1 Lake Park',
        children: [
          {
            key: 11,
            name: 'John Brown',
            age: 42,
            address: 'New York No. 2 Lake Park',
          },
          {
            key: 12,
            name: 'John Brown jr.',
            age: 30,
            address: 'New York No. 3 Lake Park',
            children: [
              {
                key: 121,
                name: 'Jimmy Brown',
                age: 16,
                address: 'New York No. 3 Lake Park',
              },
            ],
          },
          {
            key: 13,
            name: 'Jim Green sr.',
            age: 72,
            address: 'London No. 1 Lake Park',
            children: [
              {
                key: 131,
                name: 'Jim Green',
                age: 42,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 1311,
                    name: 'Jim Green jr.',
                    age: 25,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 1312,
                    name: 'Jimmy Green sr.',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ]
    
    // query: {
    //   url: '/api/qw/case',
    //   method: 'get'
    // }
  }
})

export default PageConfig