/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-10 16:31:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-10 16:35:24
 * @detail: 
 * @change: 
 */
export function watermark(app:any){
  app.directive('watermark', (el: { appendChild: (arg0: HTMLCanvasElement) => void; style: { backgroundImage: string; }; }, binding: { value: { text: string; font: string; textColor: string; }; }) => {
    function addWaterMarker(str: string, parentNode: { appendChild: (arg0: HTMLCanvasElement) => void; style: { backgroundImage: string; }; }, font: string, textColor: string) {// 水印文字，父元素，字体，文字颜色
      var can:any = document.createElement('canvas');
      parentNode.appendChild(can);
      can.width = 400;
      can.height = 200;
      can.style.display = 'none';
      var cans = can.getContext('2d');
      cans.rotate(-20 * Math.PI / 180);
      cans.font = font || "16px Microsoft JhengHei";
      cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
      cans.textAlign = 'left';
      cans.textBaseline = 'Middle';
      cans.fillText(str, can.width / 3, can.height / 2);
      parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
    }
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  })
}
