/* ============================================
   MAIN JS — Mari Portfolio
   Minimal: nav toggle, reveal animations, focus
   ============================================ */

(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  function initNav() {
    var toggle = document.querySelector('.nav__toggle');
    var links = document.querySelector('.nav__links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.setAttribute('data-open', String(!isOpen));

      if (!isOpen) {
        var firstLink = links.querySelector('.nav__link');
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
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Respect reduced motion: show everything immediately
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
        threshold: 0.05,
        rootMargin: '50px 0px -20px 0px'
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Active nav link --- */
  function setActiveNav() {
    var path = window.location.pathname;
    var href = window.location.href;
    var links = document.querySelectorAll('.nav__link');

    links.forEach(function (link) {
      var linkHref = link.getAttribute('href');
      if (!linkHref || linkHref.startsWith('http')) return;

      // For file:// protocol, compare by filename
      if (window.location.protocol === 'file:') {
        var currentFile = path.split('/').pop() || 'index.html';
        var linkFile = linkHref.split('/').pop() || 'index.html';
        if (linkFile === '' || linkFile === '..' || linkFile === '.') {
          linkFile = 'index.html';
        }
        if (currentFile === linkFile) {
          link.setAttribute('aria-current', 'page');
        }
        return;
      }

      // For http(s), normalize paths
      var linkPath = linkHref.replace(/^\.\.?\//, '/').replace(/index\.html$/, '');
      var currentPath = path.replace(/index\.html$/, '');

      if (currentPath === linkPath ||
        (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* --- Auto-update copyright year --- */
  function updateYear() {
    var el = document.querySelector('.footer__copy');
    if (el) {
      el.textContent = '© ' + new Date().getFullYear() + ' Maricar S. Tiongson';
    }
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initReveals();
    setActiveNav();
    updateYear();
  });
})();
