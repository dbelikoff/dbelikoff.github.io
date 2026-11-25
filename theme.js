// Тема ставится до отрисовки, чтобы не мигало.
// По умолчанию темная; светлая — только если человек сам ее выбрал кнопкой
;(function () {
  var t = null
  try { t = localStorage.getItem('theme') } catch (e) {}
  if (t !== 'light') document.documentElement.classList.add('dark')
})()
