/* =========================================================
   Desa Bapangi — Interactivity
   Pure vanilla JS. No dependencies beyond AOS (CDN, optional).
   Theme state is kept in memory only (no localStorage), so the
   toggle works for the current visit; wire up localStorage
   yourself if you deploy this outside a preview sandbox.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Loader ---------- */
  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    if (loader) {
      setTimeout(function () { loader.classList.add("hide"); }, 350);
    }
    if (window.AOS) AOS.init({ duration: 700, once: true, offset: 60, easing: "ease-out-cubic" });
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuBtn.querySelector(".icon-open").classList.toggle("hidden", isOpen);
      menuBtn.querySelector(".icon-close").classList.toggle("hidden", !isOpen);
    });
    document.querySelectorAll("#mobile-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.querySelector(".icon-open").classList.remove("hidden");
        menuBtn.querySelector(".icon-close").classList.add("hidden");
      });
    });
  }

  /* ---------- Sticky nav shadow + scroll spy ---------- */
  var header = document.getElementById("site-header");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  function onScroll() {
    if (header) {
      header.classList.toggle("shadow-lg", window.scrollY > 8);
      header.classList.toggle("py-2", window.scrollY > 8);
      header.classList.toggle("py-4", window.scrollY <= 8);
    }
    var scrollPos = window.scrollY + 140;
    var currentId = "";
    sections.forEach(function (sec) {
      if (scrollPos >= sec.offsetTop) currentId = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });

    var backTop = document.getElementById("back-to-top");
    if (backTop) backTop.classList.toggle("show", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Back to top ---------- */
  var backTopBtn = document.getElementById("back-to-top");
  if (backTopBtn) {
    backTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Dark mode (in-memory only) ---------- */
  var root = document.documentElement;
  var darkToggles = document.querySelectorAll("[data-theme-toggle]");
  function setIcon(isDark) {
    document.querySelectorAll("[data-theme-toggle] .fa-moon").forEach(function (i) { i.classList.toggle("hidden", isDark); });
    document.querySelectorAll("[data-theme-toggle] .fa-sun").forEach(function (i) { i.classList.toggle("hidden", !isDark); });
  }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.classList.add("dark");
  }
  setIcon(root.classList.contains("dark"));
  darkToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      root.classList.toggle("dark");
      setIcon(root.classList.contains("dark"));
    });
  });

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll("[data-count]");
  var counted = new WeakSet();
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = value.toLocaleString("id-ID", { maximumFractionDigits: decimals, minimumFractionDigits: decimals }) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counted.has(entry.target)) {
          counted.add(entry.target);
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* ---------- Gallery filter + lightbox ---------- */
  var filterBtns = document.querySelectorAll("[data-filter]");
  var galleryItems = document.querySelectorAll("[data-category]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("btn-green"); b.classList.add("bg-surface"); });
      btn.classList.add("btn-green"); btn.classList.remove("bg-surface");
      var filter = btn.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        var match = filter === "semua" || item.getAttribute("data-category") === filter;
        item.style.display = match ? "" : "none";
      });
    });
  });

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  document.querySelectorAll(".gallery-item img").forEach(function (img) {
    img.addEventListener("click", function () {
      if (!lightbox) return;
      lightboxImg.src = img.getAttribute("data-full") || img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
  }
  var lightboxClose = document.getElementById("lightbox-close");
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLightbox(); });

  /* ---------- FAQ search + accordion (single-open) ---------- */
  var faqSearch = document.getElementById("faq-search");
  var faqItems = document.querySelectorAll(".faq-item");
  var faqEmpty = document.getElementById("faq-empty");
  if (faqSearch) {
    faqSearch.addEventListener("input", function () {
      var q = faqSearch.value.trim().toLowerCase();
      var visibleCount = 0;
      faqItems.forEach(function (item) {
        var text = item.textContent.toLowerCase();
        var match = text.indexOf(q) !== -1;
        item.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });
      if (faqEmpty) faqEmpty.classList.toggle("hidden", visibleCount !== 0);
    });
  }
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) { if (other !== item) other.open = false; });
      }
    });
  });

  /* ---------- News "read more" modal (dummy full content) ---------- */
  var newsModal = document.getElementById("news-modal");
  var newsModalBody = document.getElementById("news-modal-body");
  document.querySelectorAll("[data-news-more]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!newsModal) return;
      var card = btn.closest("[data-news-full]");
      newsModalBody.innerHTML = card.querySelector("[data-news-full-content]").innerHTML;
      newsModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });
  var newsModalClose = document.getElementById("news-modal-close");
  function closeNewsModal() {
    if (!newsModal) return;
    newsModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
  if (newsModalClose) newsModalClose.addEventListener("click", closeNewsModal);
  if (newsModal) newsModal.addEventListener("click", function (e) { if (e.target === newsModal) closeNewsModal(); });

  /* ---------- Current year in footer ---------- */
  var yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
