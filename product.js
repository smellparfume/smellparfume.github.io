// Страницы ароматов (/aromat/…): рисует обложки и обновляет цены и наличие из актуального каталога.
(function () {
  'use strict';
  const money = n => Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ') + ' ₸';

  // Обложки
  document.querySelectorAll('[data-cover]').forEach(el => {
    const d = window.SP_COVERS && window.SP_COVERS[el.dataset.cover];
    if (!d || el.dataset.photo) return;
    const p = { id: el.dataset.cover, brand: el.dataset.brand || '', name: el.dataset.name || '' };
    el.style.background = window.SP_coverBg(d);
    el.innerHTML = window.SP_coverSvg(p, d, true, el.hasAttribute('data-mini'));
  });

  // Актуальные цены: сначала из сохранённого каталога, затем с сервера
  const box = document.querySelector('[data-product]');
  if (!box) return;
  const id = box.dataset.product;

  function apply(data) {
    const p = (data.products || []).find(x => x.id === id);
    if (!p) return;
    const unit = p.sale_price || p.price;
    document.querySelectorAll('[data-ml]').forEach(cell => {
      cell.textContent = money(unit * Number(cell.dataset.ml));
    });
    const per = document.querySelector('[data-unit]');
    if (per) per.textContent = money(unit) + ' за 1 мл';
    const stock = document.querySelector('[data-stock]');
    if (stock) {
      stock.textContent = p.in_stock ? 'В наличии' : 'Нет в наличии';
      stock.classList.toggle('out', !p.in_stock);
    }
  }

  try {
    const cached = JSON.parse(localStorage.getItem('sp_catalog') || 'null');
    if (cached) apply(cached);
  } catch (e) { /* нет сохранённого каталога */ }

  const api = window.SP_CONFIG && window.SP_CONFIG.API_URL;
  if (api) {
    fetch(api + '?action=catalog').then(r => r.json()).then(data => {
      if (!data.ok) return;
      try { localStorage.setItem('sp_catalog', JSON.stringify(data)); } catch (e) {}
      apply(data);
    }).catch(() => {});
  }
})();
