/* ============================================
   MAIN JS — Mari Portfolio
   Minimal: nav toggle, reveal animations, focus
   ============================================ */

(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  function initNav() {
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.setAttribute('data-open', String(!isOpen));

      if (!isOpen) {
        const firstLink = links.querySelector('.nav__link');
        if (firstLink) firstLink.focus();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        links.setAttribute('data-open', 'false');
        toggle.focus();
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') === 'true' &&
        !toggle.contains(e.target) &&
        !links.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        links.setAttribute('data-open', 'false');
      }
    });
  }

  /* --- Reveal on scroll --- */
  function initReveals() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Active nav link --- */
  function setActiveNav() {
    var path = window.location.pathname;
    var links = document.querySelectorAll('.nav__link');

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      // Normalize paths for comparison
      var linkPath = href.replace(/^\.\.?\//, '/').replace(/index\.html$/, '');
      var currentPath = path.replace(/index\.html$/, '');

      if (currentPath === linkPath ||
        (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initReveals();
    setActiveNav();
  });
})();
