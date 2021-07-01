/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-10 11:12:16
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-18 17:32:37
 * @detail: 
 * @change: 
 */
import { reactive ,ref} from 'vue';
export type formProps = {
  formList:any[],
}
export const formRef = ref();
// export const data = reactive<formProps>({
//   formList:[{
//     type:'input',
//     name:'input',
//     label:'名称',
//     value: '', // 字段value值 String 或 Number
//     placeholder:'',
//     disabled:false,
//   },
//   {
//     type:'select',
//     name:'select',
//     label:'选择框',
//     value: '', // 字段value值 String 或 Number
//     placeholder:'',
//     multiple:'',
//     apiUrl:"",
//     disabled:false,
//     selectList:[

//     ]
//   },{
//     type:'inputnumber',
//     name:'inputnumber',
//     label:'数组选择器',
//     value: '', // 字段value值 String 或 Number
//     placeholder:'',
//     disabled:false,
//   },{
//     type:'radiogroup',
//     name:'radiogroup',
//     label:'单选框',
//     value: '', // 字段value值 String 或 Number
//     placeholder:'',
//     disabled:false,
//     apiUrl:"",
//     selectList:[

//     ]
//   },
//   {
//     type:'cascader',
//     name:'cascader',
//     label:'级联选择',
//     value: '', // 字段value值 String 或 Number
//     placeholder:'',
//     disabled:false,
//     apiUrl:"",
//     selectList:[

//     ]
//   }
// ]
// })

// 初始化表单的字段
export const initform = (data:any) => {
  let formData:any = {}
  if(data && data.formData.length > 0){
    data.formData.map((key:any)=>{
      formData[key.key] = key.value
    })
  }
 return reactive(formData)
}



