document.addEventListener('DOMContentLoaded', function () {
  const isMobile = window.matchMedia('(max-width: 1025px)').matches;
  const resultsCount = isMobile ? '8' : '9';

  document.addEventListener('click', function (e) {
    const el = e.target.closest('a[href*="/search/label/"]');
    if (!el) return;

    e.preventDefault();

    let href = el.getAttribute('href');
    if (!href) return;

    let url = new URL(href, window.location.origin);
    url.searchParams.delete('max-results');
    url.searchParams.set('max-results', resultsCount);

    window.location.href = url.toString();
  });
});
