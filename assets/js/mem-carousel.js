(function () {
  document.querySelectorAll('[data-mem-carousel]').forEach(function (shell) {
    var track = shell.querySelector('.mem-carousel');
    var slides = Array.prototype.slice.call(shell.querySelectorAll('.mem-carousel__slide'));
    var prev = shell.querySelector('.mem-carousel__arrow--prev');
    var next = shell.querySelector('.mem-carousel__arrow--next');
    if (!track || !slides.length) return;

    function nearestIndex() {
      var center = track.scrollLeft + track.clientWidth / 2;
      var index = 0;
      var best = Infinity;
      slides.forEach(function (slide, i) {
        var slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        var distance = Math.abs(slideCenter - center);
        if (distance < best) { best = distance; index = i; }
      });
      return index;
    }

    function markActive() {
      var active = nearestIndex();
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === active);
      });
    }

    function goTo(index) {
      var target = slides[Math.max(0, Math.min(index, slides.length - 1))];
      track.scrollTo({ left: target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2, behavior: 'smooth' });
    }

    if (prev) prev.addEventListener('click', function () { goTo(nearestIndex() - 1); });
    if (next) next.addEventListener('click', function () { goTo(nearestIndex() + 1); });
    track.addEventListener('scroll', function () { window.requestAnimationFrame(markActive); }, { passive: true });
    window.addEventListener('resize', markActive);
    markActive();
  });
})();
