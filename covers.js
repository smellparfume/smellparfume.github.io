// Фирменные обложки ароматов (вместо фото). Показываются, пока у аромата нет своего фото.
// Формат: id: [силуэт, основной цвет, ноты, второй цвет (для градиента LV)].
// Цвет — жидкость (для прозрачных флаконов) или сам флакон (Initio, Parfums de Marly).
// Фон, лучи и подписи подбираются из основного цвета автоматически.
window.SP_COVERS = {
  p001: ['classic', '#e6c25a', 'бергамот · лаванда · мускус'],
  p002: ['classic', '#b5651d', 'коньяк · корица · пралине'],
  p003: ['classic', '#c9b458', 'лемонграсс · ветивер · амбра'],
  p004: ['classic', '#e8d3a2', 'ваниль · амбра · мускус'],
  p005: ['classic', '#1f3a68', 'грейпфрут · ладан · кедр'],
  p006: ['classic', '#3a3a3a', 'ананас · берёза · мускус'],
  p007: ['classic', '#9cc9e0', 'морские ноты · бергамот · розмарин'],
  p008: ['initio', '#e8e2d4', 'уд · кардамон · ваниль'],
  p009: ['classic', '#8a5a2b', 'карамель · тонка · ветивер'],
  p010: ['classic', '#7a1f1f', 'табак · корица · уд'],
  p011: ['classic', '#8a5a2b', 'тонка · уд · шафран'],
  p012: ['classic', '#2a2418', 'смолы · уд · табак'],
  p013: ['classic', '#9fb8cc', 'грейпфрут · морские ноты · гваяк'],
  p014: ['classic', '#b8c2c8', 'грейпфрут · полынь · пачули'],
  p015: ['classic', '#c9a227', 'корица · кожа · амбра'],
  p016: ['pdm', '#b4652f', 'табак · корица · ваниль'],
  p017: ['pdm', '#1f2a44', 'яблоко · лаванда · ваниль'],
  p018: ['tf', '#2a1c14', 'кожа · кардамон · пачули'],
  p019: ['tf', '#6a4428', 'уд · сандал · кардамон'],
  p020: ['classic', '#2a4f9a', 'бергамот · ладан · амбра'],
  p021: ['classic', '#7fb7c9', 'морская соль · цитрусы · древесина'],
  p022: ['classic', '#4a86a8', 'морской бриз · цитрусы · древесина'],
  p023: ['lv', '#7a4430', 'уд · ладан · малина', '#2a140c'],
  p024: ['lv', '#5a3a24', 'уд · шафран · кожа', '#1d0f08'],
  p025: ['lv', '#f6b33c', 'мандарин · апельсин · имбирь', '#ef7d2b'],
  p026: ['lv', '#f39b5b', 'мандарин · перец · амбретта', '#f5cf6b'],
  p027: ['lv', '#f05a3c', 'цитрусы · тиаре · сандал', '#b8247a'],
  p028: ['lv', '#f2c7d6', 'роза · жасмин · мускус', '#d98aa8'],
  p029: ['lv', '#f0dfb8', 'цитрон · чёрный чай · амбра', '#c9a46a'],
  p030: ['lv', '#d8e7ef', 'грейпфрут · имбирь · амбра', '#9fc2d6'],
  p031: ['lv', '#cfe3f0', 'мандарин · ветивер · перец', '#7fa9c9'],
  p032: ['lv', '#4a2238', 'уд · чёрная смородина · нарцисс', '#120810'],
  p033: ['lv', '#7a3214', 'уд · специи · кожа', '#2a0f06'],
  p034: ['lv', '#f3d27a', 'юдзу · нероли · розмарин', '#e9a24a'],
  p035: ['lv', '#6fd3f0', 'цитрон · мята · смородина', '#19c27a'],
  p036: ['lv', '#f3c2cf', 'ирис · роза · акация', '#e07d9a'],
  p037: ['lv', '#f6d65a', 'грейпфрут · имбирь · бергамот', '#f08a3c'],
  p038: ['classic', '#e48aa4', 'роза · фрукты · мускус'],
  p039: ['classic', '#3a5a8a', 'ладан · амбра · уд'],
  p040: ['classic', '#f2b5c4', 'грейпфрут · айва · жасмин'],
  p041: ['classic', '#d7e58a', 'цитрусы · жасмин · кедр'],
  p042: ['classic', '#f1c7cf', 'розовый перец · жасмин · пачули'],
  p043: ['classic', '#f2c4d0', 'пион · роза · мускус'],
  p044: ['classic', '#f4a7b6', 'дамасская роза · бергамот · мускус'],
  p045: ['classic', '#c8a2d8', 'фиалка · фрукты · мускус'],
  p046: ['initio', '#161616', 'уд · шафран · пачули'],
  p047: ['classic', '#f39ac2', 'бабл-гам · имбирь · мускус'],
  p048: ['tf', '#8e0f22', 'вишня · горький миндаль · тонка'],
  p049: ['tf', '#f2a5b5', 'роза · розовый перец · мускус'],
  p050: ['classic', '#f4b8c8', 'юдзу · пион · магнолия'],
  p051: ['classic', '#a77bca', 'груша · бергамот · фрезия'],
  p052: ['classic', '#e9a0c0', 'фрукты · орхидея · мускус'],
  p053: ['classic', '#f2b7a8', 'роза · бергамот · мускус'],
  p054: ['classic', '#f2a8b8', 'тубероза · жасмин · османтус'],
  p055: ['classic', '#f07a9a', 'арбуз · киви · мускус'],
  p056: ['tf', '#e9d8bd', 'ваниль · сандал · тонка'],
  p057: ['classic', '#e8c46a', 'лаванда · флёрдоранж · ваниль'],
  p058: ['classic', '#6a8a6a', 'акигалавуд · ветивер · пачули'],
  p059: ['classic', '#e8dccf', 'мускус · ваниль · дерево'],
  p060: ['classic', '#d9e6a8', 'липа · жасмин · мускус'],
  p061: ['classic', '#f1d2c4', 'бергамот · тубероза · ваниль'],
  p062: ['classic', '#f2a3b8', 'азалия · роза · мускус'],
  p063: ['classic', '#c99a5a', 'сладкие специи · ваниль · дерево'],
  p064: ['classic', '#3a2a4a', 'уд · ваниль · амбра'],
  p065: ['classic', '#8a4a2a', 'табак · яблоко · корица'],
  p066: ['classic', '#9a2a3a', 'вишня · шафран · роза'],
  p067: ['initio', '#b4426a', 'роза · бергамот · ваниль'],
  p068: ['initio', '#4a2a5a', 'ром · табак · ваниль'],
  p069: ['classic', '#3a7ab8', 'бергамот · морской бриз · мускус'],
  p070: ['classic', '#1f4a5a', 'водоросли · морская соль · амбра'],
  p071: ['classic', '#e58aa0', 'маракуйя · персик · сандал'],
  p072: ['tf', '#e8955a', 'персик · ром · ваниль'],
  p073: ['tf', '#5a1a24', 'вишня · дым · кожа'],
  p074: ['tf', '#7a4a24', 'табак · ваниль · какао'],
  p075: ['classic', '#1a1a1a', 'ром · кофе · карамель'],
  p076: ['classic', '#f0a63a', 'мандарин · базилик · зелёный чай'],
  p077: ['initio', '#2a2a2a', 'ваниль · кожа · мускус'],
  p078: ['classic', '#9aa5a8', 'мандарин · фиалка · замша'],
  p079: ['classic', '#3a2a20', 'кожа · смолы · мускус'],
  p080: ['pdm', '#e3d3b4', 'ваниль · кардамон · пралине'],
  p081: ['tf', '#8fc6e0', 'нероли · бергамот · амбра'],
  p082: ['tf', '#f2e3c0', 'кокос · иланг-иланг · амбра'],
  p083: ['classic', '#f2a03a', 'манго · смородина · ваниль'],
  p084: ['classic', '#f2a2b8', 'розовый перец · ветивер · мускус'],
  p085: ['pdm', '#e6a5b8', 'роза · личи · уд'],
  p086: ['byredo', '#e8e4c8', 'амбретта · магнолия · сандал'],
  p087: ['byredo', '#f0e2a8', 'бергамот · бархатцы · ветивер'],
  p088: ['classic', '#f2c2c8', 'фрукты · цветы · мускус'],
  p089: ['classic', '#f4f0ea', 'тубероза · гардения · перец'],
  p090: ['byredo', '#f2d8d8', 'тюльпан · цикламен · ветивер'],
  p091: ['byredo', '#e8e0c0', 'бергамот · можжевельник · ваниль'],
  p092: ['byredo', '#f4f2ee', 'альдегиды · белая роза · мускус'],
  p093: ['classic', '#c2283a', 'шафран · горький миндаль · амбра'],
  p094: ['classic', '#c9a227', 'лаванда · мёд · тонка'],
  p095: ['classic', '#2a3a6a', 'кардамон · ирис · ваниль'],
  p096: ['classic', '#2a2a2a', 'груша · лаванда · ваниль'],
  p097: ['classic', '#3a7a5a', 'груша · бергамот · ваниль'],
  p098: ['classic', '#8ac0a0', 'кокос · тонка · бергамот'],
  p099: ['classic', '#8a2a1a', 'тоффи · корица · ваниль'],
  p100: ['classic', '#5a4a6a', 'цитрусы · ваниль · тонка'],
  p101: ['classic', '#2a4a7a', 'бергамот · перец · амброксан'],
  p102: ['classic', '#a8481a', 'кожа · фиалка · мускатный орех'],
  p103: ['classic', '#b8b8c0', 'лаванда · лимон · ваниль'],
  p104: ['classic', '#2fa3a0', 'мята · яблоко · ваниль'],
  p105: ['classic', '#6a2a4a', 'яблоко · корица · ваниль'],
  p106: ['classic', '#8a8a8a', ''],
  p107: ['classic', '#2a2a2a', 'ананас · берёза · мускус'],
  p108: ['classic', '#5a2a1a', 'ром · ваниль · кедр'],
  p109: ['classic', '#f2d8e8', 'лилия · ягоды · ваниль']
};

(function () {
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const LINE = '#f4efe6';

  const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const hex = a => '#' + a.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const x = rgb(a), y = rgb(b); return hex(x.map((v, i) => v + (y[i] - v) * t)); };
  const lum = h => { const [r, g, b] = rgb(h); return (0.299 * r + 0.587 * g + 0.114 * b) / 255; };

  // Название в 1–3 строки, чтобы помещалось на этикетке
  function wrap(text, max) {
    const out = [];
    String(text).toUpperCase().split(/\s+/).forEach(w => {
      const last = out[out.length - 1];
      if (last && (last + ' ' + w).length <= max) out[out.length - 1] = last + ' ' + w; else out.push(w);
    });
    return out.slice(0, 3);
  }
  const textLines = (lines, x, y, step, attrs) => lines.map((l, i) => `<text x="${x}" y="${y + i * step}" text-anchor="middle" ${attrs}>${esc(l)}</text>`).join('');
  const SANS = 'font-family="Manrope, sans-serif"';

  const SHAPES = {
    // Tom Ford Private Blend: толстое прозрачное стекло, жидкость в цвет аромата,
    // белая этикетка, хрустальная Т-образная крышка.
    tf(c, id, p) {
      const B = { x: 140, y: 162, w: 120, h: 190 }, wall = 9, base = 20;
      const L = { x: 157, y: 226, w: 86, h: 86 };
      const t = c.color;
      const name = wrap(p.name, 12);
      return `
      <defs>
        <linearGradient id="${id}liq" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c.deep}"/><stop offset=".3" stop-color="${t}"/><stop offset=".7" stop-color="${t}"/><stop offset="1" stop-color="${c.deep}"/></linearGradient>
        <linearGradient id="${id}gl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".5" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".18"/></linearGradient>
      </defs>
      <ellipse cx="200" cy="352" rx="74" ry="5" fill="#000" opacity=".4"/>
      <rect x="${B.x + wall}" y="${B.y + B.h + 3}" width="${B.w - wall * 2}" height="26" fill="${t}" opacity=".18"/>
      <rect x="${B.x}" y="${B.y}" width="${B.w}" height="${B.h}" rx="4" fill="url(#${id}gl)" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="${B.x + wall}" y="${B.y + 12}" width="${B.w - wall * 2}" height="${B.h - 12 - base}" rx="2" fill="url(#${id}liq)"/>
      <line x1="${B.x + wall}" y1="${B.y + B.h - base}" x2="${B.x + B.w - wall}" y2="${B.y + B.h - base}" stroke="${LINE}" stroke-opacity=".35"/>
      <rect x="${B.x + 3}" y="${B.y + 6}" width="3" height="${B.h - 12}" rx="1.5" fill="#fff" opacity=".35"/>
      <rect x="${B.x + B.w - 6}" y="${B.y + 6}" width="2" height="${B.h - 12}" rx="1" fill="#fff" opacity=".2"/>
      <rect x="186" y="${B.y - 12}" width="28" height="12" fill="${t}" fill-opacity=".3" stroke="${LINE}" stroke-width="1.1"/>
      <path d="M176 ${B.y - 12} V120 H224 V${B.y - 12} Z" fill="${t}" fill-opacity=".14" stroke="${LINE}" stroke-width="1.2"/>
      <rect x="190" y="124" width="20" height="${B.y - 140}" fill="${t}" opacity=".4"/>
      <path d="M137 120 L141 98 H259 L263 120 Z" fill="${t}" fill-opacity=".12" stroke="${LINE}" stroke-width="1.2" stroke-linejoin="round"/>
      <line x1="143" y1="102" x2="257" y2="102" stroke="#fff" stroke-opacity=".35"/>
      <rect x="${L.x}" y="${L.y}" width="${L.w}" height="${L.h}" fill="#f4f0ec"/>
      <text x="200" y="${L.y + 17}" text-anchor="middle" fill="#1d1d1d" ${SANS} font-weight="500" font-size="10.5" letter-spacing="1.6">TOM FORD</text>
      ${textLines(name, 200, L.y + 39 - (name.length - 2) * 5, 11, `fill="#1d1d1d" ${SANS} font-size="8.5" letter-spacing="1.4"`)}
      <text x="200" y="${L.y + 69}" text-anchor="middle" fill="#1d1d1d" ${SANS} font-size="5.8" letter-spacing="1">EAU DE PARFUM</text>
      <text x="200" y="${L.y + 78}" text-anchor="middle" fill="#1d1d1d" ${SANS} font-size="5.8" letter-spacing="1">50 ML</text>`;
    },

    // Louis Vuitton: аптечный флакон с покатыми плечами, стеклянный «воротник»,
    // чёрная крышка-диск, градиент жидкости, название на стекле и рельефная надпись бренда.
    lv(c, id, p) {
      const top = c.color, bottom = c.color2 || c.deep;
      const ink = lum(mix(top, bottom, .5)) < 0.45 ? '#f4efe6' : '#141414';
      const name = wrap(p.name, 14);
      return `
      <defs>
        <linearGradient id="${id}liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
        <linearGradient id="${id}cap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3a3a"/><stop offset=".4" stop-color="#0d0d0d"/><stop offset="1" stop-color="#1a1a1a"/></linearGradient>
      </defs>
      <ellipse cx="200" cy="352" rx="76" ry="5" fill="#000" opacity=".4"/>
      <path d="M130 206 Q130 172 166 172 H234 Q270 172 270 206 V340 Q270 352 258 352 H142 Q130 352 130 340 Z" fill="url(#${id}liq)" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="137" y="196" width="4" height="146" rx="2" fill="#fff" opacity=".35"/>
      <ellipse cx="200" cy="344" rx="44" ry="5" fill="none" stroke="#fff" stroke-opacity=".25"/>
      <rect x="178" y="146" width="44" height="28" fill="${top}" fill-opacity=".55" stroke="${LINE}" stroke-width="1.1"/>
      <rect x="168" y="134" width="64" height="14" rx="5" fill="${top}" fill-opacity=".45" stroke="${LINE}" stroke-width="1.2"/>
      <rect x="181" y="106" width="38" height="30" fill="url(#${id}cap)" stroke="${LINE}" stroke-width="1"/>
      <rect x="150" y="88" width="100" height="20" rx="9" fill="url(#${id}cap)" stroke="${LINE}" stroke-width="1.2"/>
      <rect x="160" y="91" width="56" height="2.5" rx="1.2" fill="#fff" opacity=".35"/>
      ${textLines(name, 200, 262 - (name.length - 1) * 7, 15, `fill="${ink}" ${SANS} font-weight="700" font-size="13" letter-spacing="1"`)}
      <text x="200" y="${262 + (name.length) * 8 + 8}" text-anchor="middle" fill="#fff" fill-opacity=".38" ${SANS} font-weight="600" font-size="10" letter-spacing="2.5">LOUIS VUITTON</text>`;
    },

    // Byredo: широкий низкий цилиндр, большая чёрная крышка-купол, белая этикетка.
    byredo(c, id, p) {
      const name = wrap(p.name, 13);
      return `
      <defs>
        <linearGradient id="${id}cap" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#050505"/><stop offset=".35" stop-color="#2c2c2c"/><stop offset="1" stop-color="#070707"/></linearGradient>
      </defs>
      <ellipse cx="200" cy="352" rx="86" ry="5" fill="#000" opacity=".4"/>
      <rect x="120" y="198" width="160" height="154" rx="14" fill="${c.color}" fill-opacity=".38" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="126" y="206" width="4" height="138" rx="2" fill="#fff" opacity=".35"/>
      <rect x="178" y="190" width="44" height="10" fill="${c.color}" fill-opacity=".5" stroke="${LINE}" stroke-width="1"/>
      <path d="M146 192 V150 A54 54 0 0 1 254 150 V192 Z" fill="url(#${id}cap)" stroke="${LINE}" stroke-width="1.2"/>
      <ellipse cx="176" cy="122" rx="7" ry="5" fill="#fff" opacity=".5"/>
      <rect x="134" y="222" width="132" height="112" fill="#ecebe8"/>
      <text x="200" y="244" text-anchor="middle" fill="#151515" ${SANS} font-size="10" letter-spacing="2.4">BYREDO</text>
      ${textLines(name, 200, 280 - (name.length - 1) * 8, 16, `fill="#151515" ${SANS} font-size="14" letter-spacing="1.2"`)}
      <text x="200" y="326" text-anchor="middle" fill="#151515" ${SANS} font-size="6.5" letter-spacing="1.6">EAU DE PARFUM</text>`;
    },

    // Initio: квадратный непрозрачный флакон, ребристая золотая крышка, ромб-эмблема.
    initio(c, id, p) {
      const gold = '#d4b06a';
      let ribs = '';
      for (let x = 168; x <= 232; x += 6) ribs += `<line x1="${x}" y1="124" x2="${x}" y2="164"/>`;
      const name = wrap(p.name, 18);
      return `
      <defs>
        <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c.deep}"/><stop offset=".25" stop-color="${c.color}"/><stop offset=".75" stop-color="${c.color}"/><stop offset="1" stop-color="${c.deep}"/></linearGradient>
        <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a6a2e"/><stop offset=".45" stop-color="#f3dc9e"/><stop offset="1" stop-color="#8a6a2e"/></linearGradient>
      </defs>
      <ellipse cx="200" cy="352" rx="72" ry="5" fill="#000" opacity=".4"/>
      <rect x="134" y="170" width="132" height="182" rx="6" fill="url(#${id}b)" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="140" y="178" width="3" height="166" rx="1.5" fill="#fff" opacity=".25"/>
      <rect x="176" y="162" width="48" height="10" fill="url(#${id}g)"/>
      <rect x="162" y="122" width="76" height="44" rx="3" fill="url(#${id}g)" stroke="${LINE}" stroke-width="1"/>
      <g stroke="#6a4f1e" stroke-width="1" opacity=".55">${ribs}</g>
      <g fill="none" stroke="${gold}">
        <path d="M200 196 L246 242 L200 288 L154 242 Z" stroke-width="1.6"/>
        <path d="M200 206 L236 242 L200 278 L164 242 Z" stroke-width=".8"/>
        <path d="M184 242 Q200 228 216 242 Q200 256 184 242 Z" stroke-width="1.2"/>
      </g>
      <circle cx="200" cy="242" r="4" fill="${gold}"/>
      <text x="200" y="314" text-anchor="middle" fill="${gold}" font-family="'Cormorant Garamond', serif" font-size="15" letter-spacing="3">INITIO</text>
      ${textLines(name, 200, 330, 9, `fill="${gold}" ${SANS} font-size="6.5" letter-spacing="1.4"`)}`;
    },

    // Parfums de Marly: непрозрачный флакон с покатыми плечами, серебряная крышка,
    // рельефная эмблема (медальон) и надпись бренда.
    pdm(c, id, p) {
      const emb = lum(c.color) < 0.5 ? mix(c.color, '#ffffff', .28) : mix(c.color, '#000000', .25);
      return `
      <defs>
        <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c.deep}"/><stop offset=".3" stop-color="${c.color}"/><stop offset=".7" stop-color="${c.color}"/><stop offset="1" stop-color="${c.deep}"/></linearGradient>
        <linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8d9196"/><stop offset=".45" stop-color="#f2f3f5"/><stop offset="1" stop-color="#7d8186"/></linearGradient>
      </defs>
      <ellipse cx="200" cy="352" rx="70" ry="5" fill="#000" opacity=".4"/>
      <path d="M150 352 Q138 352 138 340 V214 Q138 184 166 176 H234 Q262 184 262 214 V340 Q262 352 250 352 Z" fill="url(#${id}b)" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="146" y="200" width="3" height="140" rx="1.5" fill="#fff" opacity=".25"/>
      <rect x="180" y="166" width="40" height="12" fill="url(#${id}s)"/>
      <rect x="170" y="104" width="60" height="64" rx="4" fill="url(#${id}s)" stroke="${LINE}" stroke-width="1"/>
      <g fill="none" stroke="${emb}" stroke-width="1.6">
        <path d="M176 270 V232 Q176 210 200 206 Q224 210 224 232 V270 Z"/>
        <path d="M186 258 q4 -18 12 -24 q-2 8 4 10 M214 258 q-4 -18 -12 -24"/>
      </g>
      <text x="200" y="266" text-anchor="middle" fill="${emb}" font-family="'Cormorant Garamond', serif" font-size="11" letter-spacing="1">1743</text>
      <text x="200" y="318" text-anchor="middle" fill="${emb}" ${SANS} font-weight="600" font-size="8" letter-spacing="2.2">PARFUMS DE MARLY</text>
      <text x="200" y="330" text-anchor="middle" fill="${emb}" ${SANS} font-size="6.5" letter-spacing="2">PARIS</text>`;
    },

    // Общий флакон для брендов без своего силуэта: стекло с закруглёнными углами,
    // жидкость в цвет аромата, чёрная цилиндрическая крышка, этикетка с брендом и названием.
    classic(c, id, p) {
      const brand = wrap(p.brand || '', 20);
      const name = wrap(p.name, 14);
      return `
      <defs>
        <linearGradient id="${id}liq" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c.deep}"/><stop offset=".3" stop-color="${c.color}"/><stop offset=".7" stop-color="${c.color}"/><stop offset="1" stop-color="${c.deep}"/></linearGradient>
        <linearGradient id="${id}cap" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#060606"/><stop offset=".4" stop-color="#2e2e2e"/><stop offset="1" stop-color="#080808"/></linearGradient>
      </defs>
      <ellipse cx="200" cy="352" rx="68" ry="5" fill="#000" opacity=".4"/>
      <rect x="140" y="172" width="120" height="180" rx="18" fill="#fff" fill-opacity=".06" stroke="${LINE}" stroke-width="1.3"/>
      <rect x="148" y="186" width="104" height="150" rx="12" fill="url(#${id}liq)" opacity=".92"/>
      <rect x="145" y="186" width="3" height="150" rx="1.5" fill="#fff" opacity=".35"/>
      <rect x="184" y="160" width="32" height="14" fill="${c.color}" fill-opacity=".45" stroke="${LINE}" stroke-width="1"/>
      <rect x="170" y="110" width="60" height="52" rx="5" fill="url(#${id}cap)" stroke="${LINE}" stroke-width="1.2"/>
      <rect x="176" y="116" width="3" height="40" rx="1.5" fill="#fff" opacity=".3"/>
      <rect x="158" y="236" width="84" height="72" fill="#f4f0ec" fill-opacity=".94"/>
      ${textLines(brand, 200, 254, 9, `fill="#5a5a5a" ${SANS} font-size="6.5" letter-spacing="1.6"`)}
      ${textLines(name, 200, 278 + (brand.length - 1) * 4 - (name.length - 1) * 5, 11, `fill="#151515" ${SANS} font-weight="600" font-size="9.5" letter-spacing="1"`)}`;
    }
  };

  // bare = без собственного фона: фон рисует контейнер (SP_coverBg), чтобы он тянулся на любую высоту.
  window.SP_coverBg = function (d) {
    const color = d[1];
    const bg0 = mix(color, "#000000", lum(color) > 0.6 ? .62 : .45), bg1 = mix(color, "#000000", .9);
    return `radial-gradient(ellipse 75% 60% at 50% 42%, ${bg0}, ${bg1})`;
  };

  // mini = превью: кадр ближе к флакону, без подписи с нотами (в маленьком размере её не прочитать).
  window.SP_coverSvg = function (p, d, bare, mini) {
    const id = 'c' + String(p.id).replace(/\W/g, '');
    const color = d[1];
    const c = { color: color, color2: d[3], deep: mix(color, '#000000', .45), notes: d[2] };
    const bg0 = mix(color, '#000000', lum(color) > 0.6 ? .62 : .45);
    const bg1 = mix(color, '#000000', .9);
    const glow = mix(color, '#ffffff', .6);
    const shape = SHAPES[d[0]] || SHAPES.classic;

    // Лучи, как на логотипе: расходятся веером из-за флакона
    let rays = '';
    for (let i = 0; i <= 20; i++) {
      const a = Math.PI * (0.08 + 0.84 * i / 20);
      const r1 = 70, r2 = (i % 2 ? 128 : 158) + (i % 4 === 0 ? 14 : 0);
      rays += `<line x1="${(200 - Math.cos(a) * r1).toFixed(1)}" y1="${(150 - Math.sin(a) * r1).toFixed(1)}" x2="${(200 - Math.cos(a) * r2).toFixed(1)}" y2="${(150 - Math.sin(a) * r2).toFixed(1)}"/>`;
    }

    return `<svg viewBox="${mini ? "60 70 280 290" : "0 0 400 400"}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(p.brand + ' ' + p.name)}" style="width:100%;height:100%;display:block">
    <defs><radialGradient id="${id}bg" cx="50%" cy="40%" r="72%"><stop offset="0" stop-color="${bg0}"/><stop offset="1" stop-color="${bg1}"/></radialGradient></defs>
    ${bare ? "" : `<rect width="400" height="400" fill="url(#${id}bg)"/>`}
    <g class="rays" stroke="${glow}" stroke-width="1" stroke-linecap="round" opacity=".45">${rays}</g>
    <g class="bottle">${shape(c, id, p)}</g>
    ${c.notes && !mini ? `<text x="200" y="382" text-anchor="middle" fill="${glow}" ${SANS} font-size="12" letter-spacing="2.2">${esc(c.notes.toUpperCase())}</text>` : ''}
  </svg>`;
  };
})();
