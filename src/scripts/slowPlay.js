// 动图自动循环播放，并且可以放慢速度。
// 先显示静态的第一帧；支持 ImageDecoder 的浏览器（Chrome、Edge、Firefox）下载完动图后逐帧画到 canvas 上，
// 每帧停留时间 = 原时长 ÷ speed（speed 0.5 就是慢一倍）。
// 不支持的浏览器（目前主要是 Safari）直接换成原动图，按原速播放。
// 系统开了「减少动态效果」时保持静止；切到别的标签页时自动暂停。
//   slowPlay(boxEl, { src: '动图地址', speed: 0.5 })
// boxEl 里要有一张 <img>（静态第一帧），canvas 会插在它上面、样式与它相同。

export function slowPlay(box, { src, speed = 0.5, type = 'image/webp' }) {
  const still = box.querySelector('img');
  if (!still) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (!('ImageDecoder' in window)) {
    still.src = src;
    return;
  }

  let decoder = null;
  let canvas = null;
  let ctx = null;
  let count = 0;
  let index = 0;
  let timer = 0;
  let decoding = false;

  const tick = async () => {
    timer = 0;
    if (document.hidden || decoding) return;
    decoding = true;
    let image;
    try {
      ({ image } = await decoder.decode({ frameIndex: index }));
    } finally {
      decoding = false;
    }
    if (canvas.width !== image.displayWidth) {
      canvas.width = image.displayWidth;
      canvas.height = image.displayHeight;
    }
    ctx.drawImage(image, 0, 0);
    const wait = (image.duration ?? 83000) / 1000 / speed; // 帧时长单位是微秒
    image.close();
    if (!canvas.isConnected) still.after(canvas); // 画好第一帧再盖到静态图上
    index = (index + 1) % count;
    if (!document.hidden) timer = setTimeout(tick, wait);
  };

  const start = async () => {
    try {
      const response = await fetch(src);
      decoder = new ImageDecoder({ data: await response.arrayBuffer(), type });
      await decoder.tracks.ready;
      await decoder.completed;
      count = decoder.tracks.selectedTrack.frameCount;
    } catch {
      return;
    }
    if (count < 2) return;
    canvas = document.createElement('canvas');
    canvas.className = still.className;
    canvas.setAttribute('aria-hidden', 'true');
    ctx = canvas.getContext('2d');
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && !timer) tick();
    });
    tick();
  };

  // 等页面其他内容加载完再下载动图，不和首屏抢带宽
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}
