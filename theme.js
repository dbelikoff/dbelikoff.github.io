// Тема ставится до отрисовки, чтобы не мигало.
// По умолчанию тёмная; светлая — только если человек сам её выбрал кнопкой
;(function () {
  var t = null
  try { t = localStorage.getItem('theme') } catch (e) {}
  if (t !== 'light') document.documentElement.classList.add('dark')
})()
