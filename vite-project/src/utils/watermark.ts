/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-20 17:06:55
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-20 17:20:58
 * @detail: 
 * @change: 
 */
let watermark: any = {}

let setWatermark = (params:any) => {
  let id = '1.23452384164.123412416';

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }

  //创建一个画布
  let can: any = document.createElement('canvas');
  //设置画布的长宽
  can.width = 120;
  can.height = 120;

  let cans: any = can.getContext('2d');
  //旋转角度
  cans.rotate(-15 * Math.PI / 180);
  cans.font = '16px Vedana';
  //设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = params.textColor || 'rgba(24,144,255,0.3)';
  //设置文本内容的当前对齐方式
  cans.textAlign = 'left';
  //设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle';
  //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
  cans.fillText(params.text, can.width / 8, can.height / 2);

  let div = document.createElement('div');
  div.id = id;
  div.style.pointerEvents = 'none';
  div.style.top = '30px';
  div.style.left = '0px';
  div.style.position = 'fixed';
  div.style.zIndex = '100000';
  div.style.width = document.documentElement.clientWidth + 'px';
  div.style.height = document.documentElement.clientHeight + 'px';
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
  document.body.appendChild(div);
  return id;
}

// 该方法只允许调用一次
watermark.set = (params:any) => {
  let id = setWatermark(params);
  setInterval(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(params);
    }
  }, 500);
  window.onresize = () => {
    setWatermark(params);
  };
}
export default watermark;