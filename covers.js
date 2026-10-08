// Фирменные обложки ароматов (вместо фото). Показываются, пока у аромата нет своего фото.
// bg — два цвета фона (центр → край), glow — цвет лучей и надписей, shape — силуэт флакона,
// body — цвет флакона, label — текст таблички, notes — 2–3 ключевые ноты для подписи.
window.SP_COVERS = {
  p048: { bg: ['#7a1626', '#1a0407'], glow: '#f2b8be', shape: 'tf_lacquer', body: ['#b0182e', '#5c0714'], metal: '#d8b26a', label: ['TOM FORD', 'LOST CHERRY'], notes: 'вишня · горький миндаль · тонка' }
};

(function () {
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const LINE = '#f4efe6';

  // Силуэты флаконов. Каждый рисует флакон в кадре 400×400 и возвращает разметку SVG.
  const SHAPES = {
    // Tom Ford Private Blend, лаковая серия (Lost Cherry, Bitter Peach…):
    // высокий прямоугольный флакон, массивная прямоугольная крышка в цвет, золотое кольцо и табличка.
    tf_lacquer(c, id) {
      const body = { x: 150, y: 160, w: 100, h: 186 };
      const cap = { x: 163, y: 84, w: 74, h: 68 };
      const plate = { x: 162, y: 232, w: 76, h: 34 };
      return `
      <defs>
        <linearGradient id="${id}lac" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="${c.body[1]}"/><stop offset=".22" stop-color="${c.body[0]}"/>
          <stop offset=".55" stop-color="${c.body[0]}"/><stop offset="1" stop-color="${c.body[1]}"/>
        </linearGradient>
        <linearGradient id="${id}met" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${c.metal}"/><stop offset=".5" stop-color="#fff2cf"/><stop offset="1" stop-color="${c.metal}"/>
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="350" rx="66" ry="5" fill="#000" opacity=".45"/>
      <rect x="${body.x}" y="${body.y}" width="${body.w}" height="${body.h}" rx="5" fill="url(#${id}lac)" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="${body.x + 9}" y="${body.y + 8}" width="5" height="${body.h - 16}" rx="2.5" fill="#fff" opacity=".22"/>
      <rect x="${body.x + body.w - 12}" y="${body.y + 8}" width="2" height="${body.h - 16}" rx="1" fill="#fff" opacity=".12"/>
      <rect x="${cap.x + 4}" y="${cap.y + cap.h}" width="${cap.w - 8}" height="8" fill="url(#${id}met)" stroke="${LINE}" stroke-width=".8"/>
      <rect x="${cap.x}" y="${cap.y}" width="${cap.w}" height="${cap.h}" rx="3" fill="url(#${id}lac)" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="${cap.x + 8}" y="${cap.y + 6}" width="4" height="${cap.h - 12}" rx="2" fill="#fff" opacity=".22"/>
      <rect x="${plate.x}" y="${plate.y}" width="${plate.w}" height="${plate.h}" rx="1.5" fill="url(#${id}met)" stroke="#5a4320" stroke-width=".6"/>
      <text x="200" y="${plate.y + 14}" text-anchor="middle" fill="#2a1d0a" font-family="Manrope, sans-serif" font-weight="700" font-size="8.5" letter-spacing="2.2">${esc(c.label[0])}</text>
      <text x="200" y="${plate.y + 26}" text-anchor="middle" fill="#2a1d0a" font-family="Manrope, sans-serif" font-weight="600" font-size="6.5" letter-spacing="1.6">${esc(c.label[1])}</text>`;
    }
  };

  window.SP_coverSvg = function (p, c) {
    const id = 'c' + String(p.id).replace(/\W/g, '');
    const shape = SHAPES[c.shape] || SHAPES.tf_lacquer;

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
