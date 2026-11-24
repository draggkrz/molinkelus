// Przełącznik PL/EN. Bez JS strona pokazuje obie wersje.
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  function pick() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'pl' || q === 'en') return q;
    if (saved === 'pl' || saved === 'en') return saved;
    return (navigator.language || 'en').toLowerCase().indexOf('pl') === 0 ? 'pl' : 'en';
  }

  function apply(lang) {
    root.lang = lang;
    document.querySelectorAll('[lang-block]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('lang-block') === lang);
    });
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });
    var t = document.querySelector('meta[name="title-' + lang + '"]');
    if (t) document.title = t.content;
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(pick());
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () {
        try { localStorage.setItem('lang', b.dataset.lang); } catch (e) {}
        apply(b.dataset.lang);
      });
    });
  });
})();
