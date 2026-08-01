(() => {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.progress-line');
  const menuButton = document.querySelector('.menu-btn');
  const mobilePanel = document.querySelector('.mobile-panel');

  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 18);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    }
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = mobilePanel?.classList.toggle('open');
    document.body.classList.toggle('nav-open', Boolean(open));
    menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  });
  mobilePanel?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobilePanel.classList.remove('open'); document.body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  document.querySelectorAll('[data-tabs]').forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const panels = group.querySelectorAll('.tab-panel');
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
      panels.forEach(x => x.classList.remove('active'));
      btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
      group.querySelector(`#${CSS.escape(btn.dataset.tab)}`)?.classList.add('active');
    }));
  });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = Number(el.dataset.counter || 0);
    const suffix = el.dataset.suffix || '';
    let started = false;
    const counterObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting || started) return;
      started = true; const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / 1100, 1);
        const value = Math.round(target * (1 - Math.pow(1 - p, 3)));
        el.textContent = value.toLocaleString('en-ZA') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); counterObserver.disconnect();
    }), { threshold: .5 });
    counterObserver.observe(el);
  });

  document.querySelectorAll('.multi-step').forEach(form => {
    const steps = [...form.querySelectorAll('.form-step')];
    const dots = [...form.querySelectorAll('.step-dot')];
    let current = 0;
    const render = () => {
      steps.forEach((s, i) => s.classList.toggle('active', i === current));
      dots.forEach((d, i) => d.classList.toggle('active', i <= current));
    };
    form.querySelectorAll('[data-next]').forEach(btn => btn.addEventListener('click', () => {
      const required = [...steps[current].querySelectorAll('[required]')];
      if (required.some(input => !input.reportValidity())) return;
      current = Math.min(current + 1, steps.length - 1); render();
    }));
    form.querySelectorAll('[data-back]').forEach(btn => btn.addEventListener('click', () => {
      current = Math.max(current - 1, 0); render();
    }));
    render();
  });

  document.querySelectorAll('form[data-lead-form]').forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const submit = form.querySelector('[type="submit"]');
      const status = form.querySelector('.form-status');
      const original = submit?.textContent;
      if (submit) { submit.disabled = true; submit.textContent = 'Sending…'; }
      if (status) { status.className = 'form-status'; status.textContent = ''; }
      const payload = Object.fromEntries(new FormData(form).entries());
      payload.page = location.pathname;
      payload.referrer = document.referrer || '';
      payload.utm_source = new URLSearchParams(location.search).get('utm_source') || '';
      payload.utm_campaign = new URLSearchParams(location.search).get('utm_campaign') || '';
      try {
        const response = await fetch('/api/leads', {
          method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload)
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.error || 'We could not send your request.');
        form.reset();
        if (status) { status.classList.add('success'); status.textContent = data.message || 'Thanks — your request has been received.'; }
        form.dispatchEvent(new CustomEvent('lead:success'));
      } catch (error) {
        if (status) { status.classList.add('error'); status.textContent = error.message || 'Something went wrong. Please try again.'; }
      } finally {
        if (submit) { submit.disabled = false; submit.textContent = original; }
      }
    });
  });
})();
