/* ============================================================
   main.js — Clinique AlShifa Landing Page
   Fonctionnalités :
     1. Navbar sticky avec glassmorphism au scroll
     2. Animations fade-in au scroll (IntersectionObserver)
     3. Menu hamburger mobile
     4. Smooth scroll sur les ancres
     5. Validation formulaire de contact
   ============================================================ */

'use strict';

/* ============================
   1. NAVBAR — Sticky au scroll
============================ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // On observe le hero pour déclencher l'état "scrolled"
  const hero = document.getElementById('accueil');

  const observer = new IntersectionObserver(
    ([entry]) => {
      navbar.classList.toggle('scrolled', !entry.isIntersecting);
    },
    { rootMargin: '-72px 0px 0px 0px', threshold: 0 }
  );

  if (hero) {
    observer.observe(hero);
  } else {
    // Fallback si la section hero est absente
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }
})();

/* ============================
   2. ANIMATIONS AU SCROLL
============================ */
(function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // jouer l'animation une seule fois
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
})();

/* ============================
   3. MENU HAMBURGER (Mobile)
============================ */
(function initHamburger() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.style.maxHeight = '0px';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Fermer quand on clique sur un lien dans le menu mobile
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Fermer en cliquant en dehors du menu
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });
})();

/* ============================
   4. SMOOTH SCROLL (ancres)
============================ */
(function initSmoothScroll() {
  const NAVBAR_HEIGHT = 72; // hauteur de la navbar en px

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ============================
   5. FORMULAIRE DE CONTACT
============================ */
(function initContactForm() {
  const form        = document.getElementById('contact-form');
  const successMsg  = document.getElementById('form-success');
  const submitBtn   = document.getElementById('submit-btn');
  if (!form || !submitBtn) return;

  /* Utilitaires de validation */
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function setError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) {
      input.classList.add('error');
      input.classList.remove('success');
    }
    if (error) error.textContent = message;
    return false;
  }

  function setSuccess(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) {
      input.classList.remove('error');
      input.classList.add('success');
    }
    if (error) error.textContent = '';
    return true;
  }

  function clearState(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) input.classList.remove('error', 'success');
    if (error) error.textContent = '';
  }

  /* Validation en temps réel (à la saisie) */
  ['nom', 'email', 'message'].forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('input', () => {
      if (input.value.trim()) clearState(id, `${id}-error`);
    });
  });

  /* Validation complète à la soumission */
  function validateForm() {
    let valid = true;

    const nom     = document.getElementById('nom')?.value.trim()     || '';
    const email   = document.getElementById('email')?.value.trim()   || '';
    const message = document.getElementById('message')?.value.trim() || '';

    // Nom
    if (!nom) {
      setError('nom', 'nom-error', 'Veuillez entrer votre nom complet.');
      valid = false;
    } else if (nom.length < 2) {
      setError('nom', 'nom-error', 'Le nom doit contenir au moins 2 caractères.');
      valid = false;
    } else {
      setSuccess('nom', 'nom-error');
    }

    // Email
    if (!email) {
      setError('email', 'email-error', 'Veuillez entrer votre adresse email.');
      valid = false;
    } else if (!isEmailValid(email)) {
      setError('email', 'email-error', 'Adresse email invalide (ex : nom@domaine.tn).');
      valid = false;
    } else {
      setSuccess('email', 'email-error');
    }

    // Message
    if (!message) {
      setError('message', 'message-error', 'Veuillez entrer votre message.');
      valid = false;
    } else if (message.length < 10) {
      setError('message', 'message-error', 'Le message doit contenir au moins 10 caractères.');
      valid = false;
    } else {
      setSuccess('message', 'message-error');
    }

    return valid;
  }

  /* Soumission du formulaire */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // État "chargement"
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Envoi en cours…';

    // Simulation d'envoi (1.5 s)
    setTimeout(() => {
      form.reset();
      ['nom', 'email', 'message'].forEach((id) => clearState(id, `${id}-error`));

      if (successMsg) {
        successMsg.classList.remove('hidden');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      submitBtn.disabled    = false;
      submitBtn.textContent = 'Envoyer le message';

      // Masquer le message de succès après 7 secondes
      if (successMsg) {
        setTimeout(() => successMsg.classList.add('hidden'), 7000);
      }
    }, 1500);
  });
})();
