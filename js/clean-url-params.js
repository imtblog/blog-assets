document.addEventListener('DOMContentLoaded', () => {
  try {
    if (!window.history || typeof window.history.replaceState !== 'function') {
      return;
    }

    const url = new URL(window.location.href);
    const paramsToRemove = ['by-date', 'mr', 'm'];
    let modified = false;

    paramsToRemove.forEach(param => {
      if (url.searchParams.has(param)) {
        url.searchParams.delete(param);
        modified = true;
      }
    });

    if (modified) {
      window.history.replaceState({}, document.title, url.toString());
    }
  } catch (e) {
    console.warn('Clean URL Params script error:', e);
  }
});
