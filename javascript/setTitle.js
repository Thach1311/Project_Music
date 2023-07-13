const t = document.querySelector('title'), w = 'THIENTHACH_MUSIC-PAGE',e = '️🎶 ️🎶 ️🎶 ️🎶'

let c = 0;
setInterval(() => {
  c = (c < w.length) ? c + 1 : 0;
  t.textContent = w.slice(0,c);
  if  (c === w.length) setTimeout (() => t.textContent += `${e}`,500)

}, 500);