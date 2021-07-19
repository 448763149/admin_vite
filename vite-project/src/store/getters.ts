/*
 * @Description:
 * @version:
 * @Author: HuQiang
 * @Date: 2021-06-16 09:51:46
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 14:02:50
 */
interface StateType{
	config:{
		pageShow: number,
		action: number,
		tableListBus:any[]
		size:string,
	},
	permission:{
		hasAuths:boolean
	}
}
const getters = {
	pageShow: (state:StateType) => state.config.pageShow,
	actionw:(state:StateType) => state.config.action,
	tableListBus:(state:StateType) => state.config.tableListBus,
	getsize:(state:StateType) => state.config.size,
	hasAuths:(state:StateType) => state.permission.hasAuths,
};
export default getters;
