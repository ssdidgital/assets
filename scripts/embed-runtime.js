(function () {
  /* ===== Settings ===== */
  // Paste your Go High Level form link here. Every "Book a systems audit" button and the
  // "Ready to talk" tile will go to it, tagged with which button was clicked.
  var BOOK_URL = 'https://YOUR-GHL-FORM-LINK';

  var root = document.querySelector('.s');
  if (!root) return;
  var $ = function (s, el) { return (el || root).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || root).querySelectorAll(s)); };

  /* ===== Booking links ===== */
  function placement(a) {
    if (a.closest('.s-head')) return 'header';
    if (a.closest('.s-hero')) return 'hero';
    if (a.closest('.v2-calc')) return 'calculator';
    if (a.closest('.s-strip')) return 'router';
    if (a.closest('.s-band')) return 'band-home';
    if (a.closest('.s-foot')) return 'footer';
    return 'page';
  }
  function bookHref(where, extra) {
    try {
      var u = new URL(BOOK_URL);
      var p = { utm_source: 'website', utm_medium: 'cta', utm_content: where };
      for (var k in extra) p[k] = extra[k];
      for (var key in p) if (!u.searchParams.has(key)) u.searchParams.set(key, p[key]);
      return u.toString();
    } catch (e) { return BOOK_URL; }
  }
  var bookLinks = $$('[data-book]');
  function setBookLinks(estimate) {
    bookLinks.forEach(function (a) {
      var w = placement(a);
      a.href = bookHref(w, w === 'calculator' && estimate ? { leak_estimate: estimate + '/month' } : {});
    });
  }

  /* ===== Header: solid once the page scrolls ===== */
  var head = $('.s-head');
  if (head) {
    var onScroll = function () { if (window.scrollY > 8) head.setAttribute('data-scrolled', ''); else head.removeAttribute('data-scrolled'); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ===== Scroll reveal (sections fade up as they enter view) ===== */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    var GROUPS = '.s-strip,.s-rows,.ss-cards,.s-grid,.s-faq,.s-steplist';
    var els = [];
    $$('main .s-sec:not(.s-hero) .s-wrap').forEach(function (w) {
      Array.prototype.forEach.call(w.children, function (ch) {
        if (ch.matches(GROUPS)) Array.prototype.forEach.call(ch.children, function (g, i) { g.style.transitionDelay = i * 70 + 'ms'; els.push(g); });
        else els.push(ch);
      });
    });
    $$('main .s-illo').forEach(function (el) { els.push(el); });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add('s-in');
        io.unobserve(el);
        var ms = el.classList.contains('s-illo') ? 2400 : 750 + (parseInt(el.style.transitionDelay) || 0);
        setTimeout(function () { el.classList.remove('s-rv', 's-in'); el.style.transitionDelay = ''; }, ms);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { if (!el.classList.contains('s-rv')) { el.classList.add('s-rv'); io.observe(el); } });
  }

  /* ===== FAQ: one open at a time ===== */
  $$('.s-faq').forEach(function (faq) {
    var items = $$('.s-faq-i', faq);
    items.forEach(function (it) {
      var btn = $('button', it);
      btn.addEventListener('click', function () {
        var wasOpen = btn.getAttribute('aria-expanded') === 'true';
        items.forEach(function (o) {
          o.classList.remove('s-on');
          $('button', o).setAttribute('aria-expanded', 'false');
          $('.s-faq-a', o).hidden = true;
        });
        if (!wasOpen) {
          it.classList.add('s-on');
          btn.setAttribute('aria-expanded', 'true');
          $('.s-faq-a', it).hidden = false;
        }
      });
    });
  });

  /* ===== Currency (£ / $), remembered per visitor ===== */
  var cur = 'GBP';
  try { if (localStorage.getItem('ssd-currency') === 'USD') cur = 'USD'; } catch (e) {}
  function money(n, c) {
    var step = n >= 1000000 ? 1000 : 100;
    return new Intl.NumberFormat(c === 'GBP' ? 'en-GB' : 'en-US', { style: 'currency', currency: c, maximumFractionDigits: 0 }).format(Math.round(n / step) * step);
  }

  /* ===== Leak calculator ===== */
  var calc = $('.v2-calc');
  var inputs = {
    enquiries: $('#calc-enq'), closeRate: $('#calc-now'), laterElsewhere: $('#calc-later'), value: $('#calc-val')
  };
  var pc = function (x) { return Math.round(x * 100) + '%'; };

  function render() {
    $$('[data-ss="cur"]').forEach(function (s) { s.textContent = cur === 'USD' ? '$' : '£'; });
    if (!calc || !inputs.enquiries) { setBookLinks(); return; }
    var v = {};
    for (var k in inputs) v[k] = Number(inputs[k].value);
    var now = v.closeRate / 100, lost = (1 - now) * (v.laterElsewhere / 100), wait = 1 - now - lost;
    var monthly = v.enquiries * lost * v.value;
    var keep = now + lost > 0 ? now / (now + lost) : 1;

    // Slider fills, value read-outs and range ends.
    for (var key in inputs) {
      var el = inputs[key], min = Number(el.min), max = Number(el.max), val = Number(el.value);
      el.style.setProperty('--p', ((val - min) / (max - min)) * 100 + '%');
      var text = key === 'enquiries' ? String(val) : key === 'value' ? money(val, cur) : val + '%';
      el.setAttribute('aria-valuetext', text);
      var f = el.closest('.v2-calc-f');
      $('.v2-calc-v', f).textContent = text;
      if (key === 'value') {
        var ends = $$('.v2-calc-ends span', f);
        ends[0].textContent = money(min, cur); ends[1].textContent = money(max, cur);
      }
    }
    // Bar and key.
    var w = [now, wait, lost];
    var bars = $$('.v2-calc-bar', calc);
    bars[0].style.gridTemplateColumns = w.map(function (x) { return Math.max(x, 0.001) + 'fr'; }).join(' ');
    bars[0].setAttribute('aria-label', pc(now) + ' bought straight away, ' + pc(wait) + ' said not now, ' + pc(lost) + ' bought later from someone else.');
    if (bars[1]) {
      bars[1].style.gridTemplateColumns = w.map(function (x) { return Math.max(x, 0.26) + 'fr'; }).join(' ');
      $$('.v2-calc-pc', bars[1]).forEach(function (s, i) { s.textContent = pc(w[i]); });
    }
    // Results.
    var set = function (sel, t) { var n = $(sel, calc); if (n) n.textContent = t; };
    set('[data-ss="keep"]', pc(keep));
    set('[data-ss="monthly"]', money(monthly, cur));
    set('[data-ss="yearly"]', money(monthly * 12, cur));
    $$('.v2-cur button', calc).forEach(function (b) {
      b.setAttribute('aria-checked', String(b.textContent.indexOf(cur === 'GBP' ? '£' : '$') === 0));
    });
    setBookLinks(money(monthly, cur));
  }

  function touched() {
    $$('.is-idle', calc).forEach(function (n) { n.classList.remove('is-idle'); });
    var cue = $('.v2-calc-cue', calc);
    if (cue) cue.lastChild.textContent = 'Updated to your numbers.';
  }

  if (calc) {
    for (var k in inputs) if (inputs[k]) inputs[k].addEventListener('input', function () { touched(); render(); });
    $$('.v2-cur button', calc).forEach(function (b) {
      b.addEventListener('click', function () {
        cur = b.textContent.indexOf('$') === 0 ? 'USD' : 'GBP';
        try { localStorage.setItem('ssd-currency', cur); } catch (e) {}
        touched(); render();
      });
    });
  }
  render();
})();
