document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.site-header, body > header').forEach(function (header) {
    var toggle = header.querySelector('.menu-toggle');
    var nav = header.querySelector('nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
});
