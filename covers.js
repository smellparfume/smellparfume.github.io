// Фирменные обложки ароматов (вместо фото). Показываются, пока у аромата нет своего фото.
// bg — два цвета фона (центр → край), glow — цвет лучей и надписей, shape — силуэт флакона,
// body — цвет флакона, label — текст таблички, notes — 2–3 ключевые ноты для подписи.
window.SP_COVERS = {
  p048: { bg: ['#6e1422', '#1a0407'], glow: '#f2b8be', shape: 'tf_private', liquid: ['#8e0f22', '#3d0410'], label: ['LOST', 'CHERRY'], notes: 'вишня · горький миндаль · тонка' }
};

(function () {
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const LINE = '#f4efe6';

  // Силуэты флаконов. Каждый рисует флакон в кадре 400×400 и возвращает разметку SVG.
  const SHAPES = {
    // Tom Ford Private Blend (Lost Cherry, Oud Wood, Tobacco Vanille…):
    // прямоугольный флакон из толстого прозрачного стекла, жидкость в цвет аромата,
    // белая прямоугольная этикетка, хрустальная Т-образная крышка (широкая пластина + узкая ножка).
    tf_private(c, id) {
      const B = { x: 138, y: 172, w: 124, h: 178 };      // флакон
      const wall = 9, base = 20;                           // толщина стенок и дна
      const L = { x: 160, y: 232, w: 80, h: 78 };          // этикетка
      const tint = c.liquid[0];
      return `
      <defs>
        <linearGradient id="${id}liq" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="${c.liquid[1]}"/><stop offset=".3" stop-color="${c.liquid[0]}"/>
          <stop offset=".7" stop-color="${c.liquid[0]}"/><stop offset="1" stop-color="${c.liquid[1]}"/>
        </linearGradient>
        <linearGradient id="${id}gl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".5" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".18"/>
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="352" rx="74" ry="5" fill="#000" opacity=".4"/>
      <!-- отражение на поверхности -->
      <rect x="${B.x + wall}" y="${B.y + B.h + 3}" width="${B.w - wall * 2}" height="26" fill="${tint}" opacity=".18"/>
      <!-- стекло флакона -->
      <rect x="${B.x}" y="${B.y}" width="${B.w}" height="${B.h}" rx="4" fill="url(#${id}gl)" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="${B.x + wall}" y="${B.y + 12}" width="${B.w - wall * 2}" height="${B.h - 12 - base}" rx="2" fill="url(#${id}liq)"/>
      <line x1="${B.x + wall}" y1="${B.y + B.h - base}" x2="${B.x + B.w - wall}" y2="${B.y + B.h - base}" stroke="${LINE}" stroke-opacity=".35"/>
      <rect x="${B.x + 3}" y="${B.y + 6}" width="3" height="${B.h - 12}" rx="1.5" fill="#fff" opacity=".35"/>
      <rect x="${B.x + B.w - 6}" y="${B.y + 6}" width="2" height="${B.h - 12}" rx="1" fill="#fff" opacity=".2"/>
      <!-- горлышко и хрустальная крышка -->
      <rect x="184" y="${B.y - 12}" width="32" height="12" fill="${tint}" fill-opacity=".35" stroke="${LINE}" stroke-width="1.1"/>
      <path d="M178 ${B.y - 12} V128 H222 V${B.y - 12} Z" fill="${tint}" fill-opacity=".28" stroke="${LINE}" stroke-width="1.2"/>
      <rect x="190" y="132" width="20" height="${B.y - 12 - 136}" fill="${tint}" opacity=".45"/>
      <path d="M146 128 L150 106 H250 L254 128 Z" fill="${tint}" fill-opacity=".22" stroke="${LINE}" stroke-width="1.2" stroke-linejoin="round"/>
      <line x1="152" y1="110" x2="248" y2="110" stroke="#fff" stroke-opacity=".35"/>
      <!-- этикетка -->
      <rect x="${L.x}" y="${L.y}" width="${L.w}" height="${L.h}" fill="#f4f0ec"/>
      <text x="200" y="${L.y + 15}" text-anchor="middle" fill="#1d1d1d" font-family="Manrope, sans-serif" font-weight="500" font-size="9.5" letter-spacing="1.6">TOM FORD</text>
      <text x="200" y="${L.y + 36}" text-anchor="middle" fill="#1d1d1d" font-family="Manrope, sans-serif" font-size="7.5" letter-spacing="1.4">${esc(c.label[0])}</text>
      <text x="200" y="${L.y + 46}" text-anchor="middle" fill="#1d1d1d" font-family="Manrope, sans-serif" font-size="7.5" letter-spacing="1.4">${esc(c.label[1] || '')}</text>
      <text x="200" y="${L.y + 63}" text-anchor="middle" fill="#1d1d1d" font-family="Manrope, sans-serif" font-size="5.2" letter-spacing="1">EAU DE PARFUM</text>
      <text x="200" y="${L.y + 71}" text-anchor="middle" fill="#1d1d1d" font-family="Manrope, sans-serif" font-size="5.2" letter-spacing="1">50 ML</text>`;
    }
  };

  window.SP_coverSvg = function (p, c) {
    const id = 'c' + String(p.id).replace(/\W/g, '');
    const shape = SHAPES[c.shape] || SHAPES.tf_private;

    // Лучи, как на логотипе: расходятся веером из-за флакона
    let rays = '';
    for (let i = 0; i <= 20; i++) {
      const a = Math.PI * (0.08 + 0.84 * i / 20);
      const r1 = 70, r2 = (i % 2 ? 128 : 158) + (i % 4 === 0 ? 14 : 0);
      rays += `<line x1="${(200 - Math.cos(a) * r1).toFixed(1)}" y1="${(150 - Math.sin(a) * r1).toFixed(1)}" x2="${(200 - Math.cos(a) * r2).toFixed(1)}" y2="${(150 - Math.sin(a) * r2).toFixed(1)}"/>`;
    }

    return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(p.brand + ' ' + p.name)}" style="width:100%;height:100%;display:block">
    <defs><radialGradient id="${id}bg" cx="50%" cy="40%" r="72%"><stop offset="0" stop-color="${c.bg[0]}"/><stop offset="1" stop-color="${c.bg[1]}"/></radialGradient></defs>
    <rect width="400" height="400" fill="url(#${id}bg)"/>
    <g stroke="${c.glow}" stroke-width="1" stroke-linecap="round" opacity=".5">${rays}</g>
    ${shape(c, id)}
    <text x="200" y="382" text-anchor="middle" fill="${c.glow}" font-family="Manrope, sans-serif" font-size="12" letter-spacing="2.4">${esc(String(c.notes || '').toUpperCase())}</text>
  </svg>`;
  };
})();
