import { notification,message  } from 'ant-design-vue';

import setting from '@/setting';

export const error = (err) =>{
  // 显示提示，可配置使用 ant-design-vue 的 $message 还是 $notification 组件来显示
  if (setting.errorModalType === 'message') {
    message.error({
      content: err.message,
      duration: setting.modalDuration
    });
  } else if (setting.errorModalType === 'notification') {
    notification.error({
      title: '提示',
      desc: err.message,
      duration: setting.modalDuration
    });
  }
}

// 环境请求地址
export const baseURL = setting.baseURL