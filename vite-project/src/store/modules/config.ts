/*
 * @Description: 系统公共参数配置数据
 * @version:
 * @Author: HuQiang
 * @Date: 021-06-09 11:03:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-17 10:06:16
 */

const state = {
	pageShow: 10,  // 列表页翻页展示条数
	action:100,// 列表最后一列操作列的宽度
	size:"small",// 统一大小设置default | middle | small
	tableListBus:[{
    name:'edit',
    label:'编辑'
  },{
    name:'delete',
    label:'删除'
  }],// 列表页面操作的按钮公共配置
	Enum:{} // 公共枚举库 
};

const mutations = {
	// 更新state都用该方法
	UPDATE_STATE(state: { [x: string]: any; }, data: { [x: string]: any; }) {
		for (const key in data) {
			if (!Object.prototype.hasOwnProperty.call(data, key)) { return; }
			state[key] = data[key];
		}
	}
};

const actions = {
	UPDATE_STATE_ASYN({ commit }: any, data: any) {
		commit("UPDATE_STATE", data);
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
