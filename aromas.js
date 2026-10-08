// Характер ароматов: на этом строятся фильтр по типу, квиз, шкалы в карточке и «похожие ароматы».
// Формат: 'типы|сезон|время|стойкость 1–5|шлейф 1–5'
// типы: fresh — свежие, floral — цветочные, sweet — сладкие, woody — древесные, spicy — пряные и восточные, leather — кожа и дым
// сезон: s — весна-лето, w — осень-зима, a — круглый год; время: d — день, n — вечер, a — любое
window.SP_FAMILIES = [
  ['fresh', 'Свежие'], ['floral', 'Цветочные'], ['sweet', 'Сладкие'],
  ['woody', 'Древесные'], ['spicy', 'Пряные и восточные'], ['leather', 'Кожа и дым']
];

window.SP_AROMAS = (function (raw) {
  const out = {};
  Object.keys(raw).forEach(id => {
    const [f, season, time, lon, sil] = raw[id].split('|');
    out[id] = { families: f.split(','), season: season, time: time, longevity: Number(lon), sillage: Number(sil) };
  });
  return out;
})({
  p001: 'fresh|s|d|2|2', p002: 'sweet,spicy|w|n|4|4', p003: 'fresh,woody|s|d|3|3', p004: 'sweet|w|a|3|3',
  p005: 'fresh,woody|a|a|4|3', p006: 'fresh,woody|a|a|4|4', p007: 'fresh|s|d|3|3', p008: 'sweet,woody|w|n|4|4',
  p009: 'sweet|w|n|4|4', p010: 'spicy,sweet|w|n|5|5', p011: 'sweet,spicy|w|n|5|5', p012: 'woody,leather|w|n|5|4',
  p013: 'fresh|s|d|3|3', p014: 'fresh,woody|a|d|3|3', p015: 'sweet,spicy|w|n|4|4', p016: 'sweet,spicy|w|n|4|4',
  p017: 'sweet,spicy,fresh|a|n|4|4', p018: 'leather|w|n|5|4', p019: 'woody|w|a|4|3', p020: 'fresh,woody|a|d|3|3',
  p021: 'fresh|s|d|3|3', p022: 'fresh|s|d|3|3', p023: 'woody,leather,spicy|w|n|5|5', p024: 'woody,leather|w|n|5|4',
  p025: 'fresh|s|d|3|3', p026: 'fresh,sweet|s|d|3|3', p027: 'fresh,floral|s|a|3|3', p028: 'floral|a|d|3|3',
  p029: 'fresh,woody|a|d|4|3', p030: 'fresh|s|d|3|3', p031: 'fresh,woody|s|d|3|2', p032: 'woody,floral|w|n|4|4',
  p033: 'leather,spicy,woody|w|n|5|4', p034: 'fresh|s|d|3|3', p035: 'fresh|s|d|3|3', p036: 'floral|a|a|4|3',
  p037: 'fresh|s|d|3|3', p038: 'floral,sweet|a|a|4|4', p039: 'spicy,woody,leather|w|n|5|5', p040: 'floral,fresh|s|d|3|2',
  p041: 'fresh,floral|s|d|3|2', p042: 'floral|a|a|4|3', p043: 'floral,fresh|s|d|3|2', p044: 'floral|s|d|3|3',
  p045: 'floral,sweet|s|d|3|2', p046: 'woody,spicy|w|n|5|5', p047: 'sweet|s|d|3|3', p048: 'sweet|w|n|4|4',
  p049: 'floral|s|d|3|2', p050: 'floral,fresh|s|d|3|2', p051: 'floral,sweet|a|d|3|3', p052: 'sweet,floral|a|a|2|2',
  p053: 'floral,fresh|s|d|2|2', p054: 'floral|a|n|4|4', p055: 'fresh,sweet|s|d|3|2', p056: 'sweet|w|a|4|3',
  p057: 'floral,sweet|a|a|4|4', p058: 'woody|a|a|4|3', p059: 'sweet,woody|w|a|4|3', p060: 'floral,fresh|s|d|3|2',
  p061: 'floral|a|a|3|3', p062: 'floral|s|d|3|3', p063: 'sweet,spicy|w|n|5|4', p064: 'sweet,woody,spicy|w|n|5|5',
  p065: 'spicy,sweet|w|n|4|4', p066: 'floral,spicy,sweet|w|n|4|4', p067: 'floral,sweet|a|n|4|4', p068: 'sweet,spicy|w|n|5|5',
  p069: 'fresh|s|d|3|3', p070: 'fresh|s|a|5|5', p071: 'sweet,floral|a|a|5|5', p072: 'sweet|w|n|4|4',
  p073: 'sweet,leather|w|n|4|4', p074: 'sweet,spicy|w|n|5|4', p075: 'sweet|w|n|4|4', p076: 'fresh|s|d|2|2',
  p077: 'sweet,leather|w|n|4|4', p078: 'woody,fresh|a|a|4|3', p079: 'leather|w|n|5|4', p080: 'sweet,spicy|w|n|4|4',
  p081: 'fresh|s|d|2|2', p082: 'floral,sweet|s|d|3|3', p083: 'sweet,fresh|s|d|3|3', p084: 'fresh,woody|a|a|3|3',
  p085: 'floral,sweet|a|n|5|4', p086: 'floral,woody|a|d|3|2', p087: 'fresh,floral,woody|s|d|3|3', p088: 'floral,sweet|a|a|3|3',
  p089: 'floral|a|n|4|4', p090: 'floral,fresh|s|d|2|2', p091: 'woody,fresh|a|d|3|3', p092: 'floral,fresh|s|d|3|2',
  p093: 'sweet,woody|a|a|5|5', p094: 'sweet,spicy|w|n|5|5', p095: 'sweet,spicy|w|n|4|4', p096: 'sweet|w|n|4|4',
  p097: 'sweet,floral|w|a|4|4', p098: 'fresh,sweet|s|d|3|3', p099: 'sweet,spicy|w|n|5|4', p100: 'sweet,fresh|a|a|3|3',
  p101: 'fresh,spicy|a|a|4|4', p102: 'leather,woody|w|a|4|4', p103: 'fresh,sweet|a|d|3|3', p104: 'fresh,sweet|a|n|4|4',
  p105: 'sweet,spicy|w|n|4|4', p106: 'woody|a|a|3|3', p107: 'fresh,woody,leather|a|a|5|5', p108: 'sweet,spicy|w|n|5|4',
  p109: 'floral,sweet|a|a|3|3'
});
