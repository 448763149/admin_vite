/**
 * iView Admin Pro 业务配置
 * */

const env = import.meta.env.MODE;

const setting = {
    // 页面切换时，是否显示模拟的进度条
    showProgressBar: true,
    // 接口请求地址
    baseURL: env === 'development' ? '/' : '/',
    // 接口请求返回错误时，弹窗的持续时间，单位：秒
    modalDuration: 3,
    // 接口请求返回错误时，弹窗的类型，可选值为 message 或 notification
    errorModalType: 'message',
    // Cookies 默认保存时间，单位：天
    cookiesExpires: 1,
  
    
};

export default setting;
