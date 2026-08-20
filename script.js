// Intentionally minimal: the CSS entrance animation on load is enough.
// This just guards against the animation re-triggering oddly on
// back/forward navigation cache restores.
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    document.body.style.animation = 'none';
  }
});
