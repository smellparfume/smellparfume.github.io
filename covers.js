// Фирменные обложки ароматов (вместо фото). Показываются, пока у аромата нет своего фото.
// bg — два цвета фона (центр → край), glow — цвет лучей и надписей, liquid — цвет «жидкости» во флаконе,
// shape — форма флакона, notes — 2–3 ключевые ноты для подписи.
window.SP_COVERS = {
  p048: { bg: ['#7a1626', '#1a0407'], glow: '#f2b8be', liquid: '#c22a40', shape: 'tf', notes: 'вишня · горький миндаль · тонка' }
};

window.SP_coverSvg = function (p, c) {
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const id = 'c' + String(p.id).replace(/\W/g, '');
  const cx = 200;

  // Лучи, как на логотипе: расходятся веером из-за флакона
  let rays = '';
  for (let i = 0; i <= 20; i++) {
    const a = Math.PI * (0.08 + 0.84 * i / 20);
    const r1 = 78, r2 = (i % 2 ? 132 : 162) + (i % 4 === 0 ? 14 : 0);
    rays += `<line x1="${(cx - Math.cos(a) * r1).toFixed(1)}" y1="${(176 - Math.sin(a) * r1).toFixed(1)}" x2="${(cx - Math.cos(a) * r2).toFixed(1)}" y2="${(176 - Math.sin(a) * r2).toFixed(1)}"/>`;
  }

  // Формы флаконов
  const shapes = {
    tf: { cap: 'M168 102h64v44h-64z', neck: 'M186 146h28v14h-28z', body: 'M146 160h108a10 10 0 0 1 10 10v150a14 14 0 0 1-14 14H150a14 14 0 0 1-14-14V170a10 10 0 0 1 10-10Z', liquidTop: 196, label: [164, 248, 72, 44] }
  };
  const s = shapes[c.shape] || shapes.tf;
  const initials = String(p.brand || '').split(/[\s&-]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();

  return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(p.brand + ' ' + p.name)}" style="width:100%;height:100%;display:block">
  <defs>
    <radialGradient id="${id}bg" cx="50%" cy="42%" r="70%"><stop offset="0" stop-color="${c.bg[0]}"/><stop offset="1" stop-color="${c.bg[1]}"/></radialGradient>
    <linearGradient id="${id}lq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.liquid}" stop-opacity=".75"/><stop offset="1" stop-color="${c.liquid}" stop-opacity=".35"/></linearGradient>
    <clipPath id="${id}cl"><path d="${s.body}"/></clipPath>
  </defs>
  <rect width="400" height="400" fill="url(#${id}bg)"/>
  <g stroke="${c.glow}" stroke-width="1" stroke-linecap="round" opacity=".55">${rays}</g>
  <g clip-path="url(#${id}cl)">
    <rect x="120" y="${s.liquidTop}" width="160" height="160" fill="url(#${id}lq)"/>
    <path d="M120 ${s.liquidTop} q20 -6 40 0 t40 0 t40 0 t40 0" fill="none" stroke="#f4efe6" stroke-opacity=".35"/>
    <path d="M150 175 v130" stroke="#f4efe6" stroke-opacity=".18" stroke-width="6" stroke-linecap="round"/>
  </g>
  <g fill="none" stroke="#f4efe6" stroke-width="1.4" stroke-linejoin="round">
    <path d="${s.body}"/><path d="${s.neck}"/><path d="${s.cap}" fill="#141414"/>
    <rect x="${s.label[0]}" y="${s.label[1]}" width="${s.label[2]}" height="${s.label[3]}" rx="2" fill="${c.bg[1]}" fill-opacity=".55" stroke-opacity=".7"/>
  </g>
  <text x="${cx}" y="${s.label[1] + 29}" text-anchor="middle" fill="#f4efe6" font-family="Italiana, 'Cormorant Garamond', serif" font-size="22" letter-spacing="2">${esc(initials)}</text>
  <text x="${cx}" y="378" text-anchor="middle" fill="${c.glow}" font-family="Manrope, sans-serif" font-size="12" letter-spacing="2.4">${esc(String(c.notes || '').toUpperCase())}</text>
</svg>`;
};
