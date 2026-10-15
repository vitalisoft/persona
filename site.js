(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle');
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.querySelector('.site-nav');

  function isDark() { return root.getAttribute('data-theme') === 'dark'; }

  function syncThemeBtn() {
    if (!themeBtn) return;
    themeBtn.setAttribute('aria-pressed', isDark() ? 'true' : 'false');
    themeBtn.setAttribute('aria-label', isDark() ? 'Включить светлую тему' : 'Включить тёмную тему');
  }

  if (themeBtn) {
    syncThemeBtn();
    themeBtn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeBtn();
    });
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
