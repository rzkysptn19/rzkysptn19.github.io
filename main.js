'use strict';

// ─── Cursor Glow ───────────────────────────────────────────
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top  = e.clientY + 'px';
  });
}

// ─── Particle Canvas ────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randBetween(a, b) { return a + Math.random() * (b - a); }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: randBetween(0.6, 1.8),
      dx: randBetween(-0.15, 0.15),
      dy: randBetween(-0.25, -0.05),
      alpha: randBetween(0.1, 0.5),
    };
  }

  function init() {
    particles = Array.from({ length: 80 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(130,140,255,${p.alpha})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      if (p.x < -5)  p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
    }
    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', () => { resize(); init(); });
})();

// ─── Header scroll state ────────────────────────────────────
if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
  const header = document.getElementById('site-header');
  const update = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ─── Mobile nav toggle ──────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
});

navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

// ─── Active nav on scroll ───────────────────────────────────
const sections    = document.querySelectorAll('section[id]');
const navLinkEls  = document.querySelectorAll('.nav-link');

new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      navLinkEls.forEach(link => {
        const active = link.getAttribute('href') === `#${target.id}`;
        link.classList.toggle('active', active);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' }).observe(sections.length ? sections[0] : document.body);

sections.forEach(s => {
  new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        navLinkEls.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' }).observe(s);
});

// ─── Scroll reveal ──────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      target.classList.add('revealed');
      revealObs.unobserve(target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
  .forEach(el => revealObs.observe(el));

// ─── Skill bar animation ────────────────────────────────────
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      const level = target.dataset.level || 0;
      const fill  = target.querySelector('.skill-bar-fill');
      if (fill) {
        setTimeout(() => { fill.style.width = level + '%'; }, 200);
      }
      skillObs.unobserve(target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-bar-item').forEach(el => skillObs.observe(el));

// ─── Counter animation ──────────────────────────────────────
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  const update = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      animateCounter(target, parseInt(target.dataset.target, 10));
    }
  });
}, { threshold: 0.6 }).observe(document.querySelector('.hero-stats') || document.body);

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) animateCounter(el, parseInt(el.dataset.target, 10));
    });
  }, { threshold: 0.6 }).observe(el);
});

// ─── Hero role rotator ──────────────────────────────────────
(function initRoleRotator() {
  const items = document.querySelectorAll('.role-item');
  if (items.length < 2) return;

  let current = 0;
  items[0].classList.add('active');

  setInterval(() => {
    items[current].classList.remove('active');
    items[current].classList.add('leaving');

    setTimeout(() => {
      items[current].classList.remove('leaving');
      current = (current + 1) % items.length;
      items[current].classList.add('active');
    }, 400);
  }, 3000);
})();

// ─── Typing effect ──────────────────────────────────────────
(function initTyping() {
  const el = document.querySelector('.typing-prefix');
  if (!el) return;
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 55 + Math.random() * 30);
    }
  };
  setTimeout(type, 600);
})();

// ─── Project filter ─────────────────────────────────────────
const filterBtns  = document.querySelectorAll('.filter-btn');
const projCards   = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.dataset.filter;

    projCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      if (show) {
        card.style.opacity = '0';
        card.classList.remove('hidden');
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.4s, transform 0.4s';
          card.style.opacity    = '1';
          card.style.transform  = 'translateY(0)';
        });
      } else {
        card.style.opacity   = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => card.classList.add('hidden'), 350);
      }
    });
  });
});

// ─── Contact form ────────────────────────────────────────────
const form       = document.getElementById('contact-form');
const submitBtn  = document.getElementById('submit-btn');
const successEl  = document.getElementById('form-success');

const validators = {
  name:    v => v.trim().length >= 2  ? '' : 'Nama minimal 2 karakter.',
  email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Format email tidak valid.',
  subject: v => v.trim().length >= 3  ? '' : 'Subjek minimal 3 karakter.',
  message: v => v.trim().length >= 10 ? '' : 'Pesan minimal 10 karakter.',
};

function showErr(input, msg) {
  const el = input.closest('.form-group')?.querySelector('.form-err');
  if (el) el.textContent = msg;
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
}

Object.keys(validators).forEach(name => {
  const input = form?.elements[name];
  if (!input) return;
  input.addEventListener('blur', () => showErr(input, validators[name](input.value)));
  input.addEventListener('input', () => {
    if (input.getAttribute('aria-invalid') === 'true')
      showErr(input, validators[name](input.value));
  });
});

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  let valid = true;
  Object.keys(validators).forEach(name => {
    const input = form.elements[name];
    const err   = validators[name](input.value);
    showErr(input, err);
    if (err) valid = false;
  });
  if (!valid) return;

  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-text').textContent = 'Mengirim...';

  await new Promise(r => setTimeout(r, 1000));

  form.reset();
  submitBtn.disabled = false;
  submitBtn.querySelector('.btn-text').textContent = 'Kirim Pesan';
  successEl.hidden = false;
  setTimeout(() => { successEl.hidden = true; }, 5000);
});

// ─── Scroll-to-top button ────────────────────────────────────
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ─── Smooth anchor scroll ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
