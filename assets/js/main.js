/* =========================================================
   Rakshitha H P — Portfolio
   Vanilla JS. No dependencies. No console errors.
   ========================================================= */
(function () {
  "use strict";

  /* -------------------------------------------------------
     1. SITE CONFIG  —  edit these three values only
     -------------------------------------------------------
     linkedin : your full LinkedIn profile URL
                e.g. "https://www.linkedin.com/in/your-handle/"
     resume   : path to your resume PDF once you add the file
                e.g. "assets/files/Rakshitha-H-P-Resume.pdf"
     Leave a value as "" and the site stays honest: the link
     will not pretend to work, it shows a short notice instead.
  ------------------------------------------------------- */
  var SITE = {
    email: "rakshurakshitha182@gmail.com",
    github: "https://github.com/Rakshu123-hp",
    linkedin: "https://www.linkedin.com/in/rakshitha-hp-25ab63300/",
    resume: "assets/files/Rakshitha_HP_Resumee.pdf"
  };

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Toast ---------- */
  var toastEl = $("#toast");
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    window.requestAnimationFrame(function () { toastEl.classList.add("is-visible"); });
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove("is-visible");
      window.setTimeout(function () { toastEl.hidden = true; }, 260);
    }, 3600);
  }

  /* ---------- Apply configurable links ---------- */
  function applyConfig() {
    $$('[data-link="linkedin"]').forEach(function (el) {
      if (SITE.linkedin) {
        el.setAttribute("href", SITE.linkedin);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      } else {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          toast("LinkedIn profile URL hasn\u2019t been added yet.");
        });
      }
    });

    if (SITE.linkedin) {
      $$('[data-text="linkedin"]').forEach(function (el) {
        el.textContent = SITE.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
      });
    }

    $$('[data-link="resume"]').forEach(function (el) {
      if (SITE.resume) {
        el.setAttribute("href", SITE.resume);
        el.setAttribute("download", "");
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      } else {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          toast("Resume PDF hasn\u2019t been added to the site yet.");
        });
      }
    });
  }

  /* ---------- Scroll progress bar ---------- */
  var progressBar = $("#scrollProgressBar");
  if (progressBar) {
    var pTicking = false;
    var setProgress = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (window.pageYOffset / max) * 100 : 0;
      pct = Math.max(0, Math.min(100, pct));
      progressBar.style.width = pct.toFixed(2) + "%";
      pTicking = false;
    };
    window.addEventListener("scroll", function () {
      if (!pTicking) { pTicking = true; window.requestAnimationFrame(setProgress); }
    }, { passive: true });
    window.addEventListener("resize", setProgress);
    setProgress();
  }

  /* ---------- Sticky header shadow ---------- */
  var header = $("#siteHeader");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 8);
  }

  /* ---------- Mobile navigation ---------- */
  var nav = $("#primaryNav");
  var navToggle = $("#navToggle");
  var navScrim = $("#navScrim");

  function setNav(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    if (navScrim) navScrim.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  }
  function isMobileNav() { return window.matchMedia("(max-width: 860px)").matches; }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });
  }
  if (navScrim) navScrim.addEventListener("click", function () { setNav(false); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navToggle && navToggle.getAttribute("aria-expanded") === "true") {
      setNav(false);
      navToggle.focus();
    }
  });

  $$(".nav-list a").forEach(function (link) {
    link.addEventListener("click", function () { if (isMobileNav()) setNav(false); });
  });

  window.addEventListener("resize", function () {
    if (!isMobileNav()) setNav(false);
  });

  /* ---------- Smooth scrolling with sticky-header offset ---------- */
  $$('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#" || link.hasAttribute("data-link")) return;
      var target = document.getElementById(id.slice(1));
      if (!target) return;
      e.preventDefault();
      var offset = (header ? header.offsetHeight : 0) + 12;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top < 0 ? 0 : top, behavior: reduceMotion ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", id);
      target.setAttribute("tabindex", "-1");
      window.setTimeout(function () {
        target.focus({ preventScroll: true });
        target.removeAttribute("tabindex");
      }, reduceMotion ? 0 : 620);
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealItems = $$(".reveal");
  if (!("IntersectionObserver" in window) || reduceMotion) {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealItems.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 55 + "ms";
      revealObserver.observe(el);
    });
  }

  /* ---------- Scroll spy ---------- */
  var navLinks = $$(".nav-list a");
  var sections = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0; });
      var bestId = null, bestRatio = 0;
      sections.forEach(function (s) {
        var r = visible[s.id] || 0;
        if (r > bestRatio) { bestRatio = r; bestId = s.id; }
      });
      if (bestId) setActive(bestId);
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.75, 1] });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Contact form (no backend — opens mail client) ---------- */
  var form = $("#contactForm");
  var status = $("#formStatus");

  function say(msg, state) {
    if (!status) return;
    status.textContent = msg;
    if (state) status.setAttribute("data-state", state);
    else status.removeAttribute("data-state");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#cfName"), email = $("#cfEmail"), message = $("#cfMessage");
      var fields = [name, email, message];
      var firstBad = null;

      fields.forEach(function (f) {
        var bad = !f.value.trim() || (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.value.trim()));
        f.setAttribute("aria-invalid", bad ? "true" : "false");
        if (bad && !firstBad) firstBad = f;
      });

      if (firstBad) {
        say("Please complete all fields with a valid email address.", "error");
        firstBad.focus();
        return;
      }

      var subject = "Portfolio enquiry from " + name.value.trim();
      var body = message.value.trim() + "\n\n—\n" + name.value.trim() + "\n" + email.value.trim();
      var href = "mailto:" + SITE.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      say("Opening your email app with the message ready to send\u2026");
      window.location.href = href;
    });

    $$("#contactForm input, #contactForm textarea").forEach(function (f) {
      f.addEventListener("input", function () {
        if (f.getAttribute("aria-invalid") === "true" && f.value.trim()) {
          f.setAttribute("aria-invalid", "false");
        }
      });
    });
  }

  /* ---------- Init ---------- */
  applyConfig();
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });
})();
