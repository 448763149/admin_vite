/*
 * @Description:
 * @version:
 * @Author: HuQiang
 * @Date: 2021-06-16 09:51:46
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-17 10:07:17
 */
interface StateType{
	config:{
		pageShow: number,
		action: number,
		tableListBus:any[]
		size:string
	}
}
const getters = {
	pageShow: (state:StateType) => state.config.pageShow,
	actionw:(state:StateType) => state.config.action,
	tableListBus:(state:StateType) => state.config.tableListBus,
	getsize:(state:StateType) => state.config.size,
};
export default getters;
