/**
 * ZYNITH TECHNOLOGY - Main Interactive Logic
 * Company: ZYNITH TECHNOLOGY
 * Tagline: Building Intelligent Digital Experiences
 * Primary CTA: Let's Talk
 * Secondary CTA: Explore Our Work
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Header
  const header = document.querySelector('header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Navigation Drawer
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openMobileMenu);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileMenu);

  // Mobile submenu accordion toggles
  document.querySelectorAll('.mobile-submenu-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.mobile-menu-item');
      const submenu = parent.querySelector('.mobile-submenu');
      const arrow = btn.querySelector('.mobile-arrow');
      if (submenu) {
        submenu.classList.toggle('hidden');
        if (arrow) arrow.classList.toggle('rotate-180');
      }
    });
  });

  // Close mobile drawer on link click
  document.querySelectorAll('#mobile-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // 3. Stats Counter Animation on Scroll
  const statsElements = document.querySelectorAll('.stat-counter');
  let statsCounted = false;

  const countUp = (el, target, suffix = '') => {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (target - start) * ease);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    };
    requestAnimationFrame(update);
  };

  const statsSection = document.getElementById('stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          statsElements.forEach(stat => {
            const val = parseFloat(stat.getAttribute('data-target') || '0');
            const suffix = stat.getAttribute('data-suffix') || '';
            countUp(stat, val, suffix);
          });
        }
      });
    }, { threshold: 0.25 });
    observer.observe(statsSection);
  }

  // 4. Bespoke Software Solutions Carousel
  const solutionsWrapper = document.getElementById('solutions-slider');
  const solutionsPrevBtn = document.getElementById('solutions-prev');
  const solutionsNextBtn = document.getElementById('solutions-next');
  const solutionsDotsContainer = document.getElementById('solutions-dots');

  if (solutionsWrapper) {
    const cards = solutionsWrapper.querySelectorAll('.solutions-card');
    const cardCount = cards.length;

    // Create pagination dots
    if (solutionsDotsContainer) {
      solutionsDotsContainer.innerHTML = '';
      const dotCount = Math.ceil(cardCount / 2);
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          const cardWidth = cards[0].offsetWidth + 24;
          solutionsWrapper.scrollTo({ left: i * cardWidth * 2, behavior: 'smooth' });
          updateDots(i);
        });
        solutionsDotsContainer.appendChild(dot);
      }
    }

    const updateDots = (activeIndex) => {
      if (!solutionsDotsContainer) return;
      const dots = solutionsDotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((d, idx) => {
        if (idx === activeIndex) d.classList.add('active');
        else d.classList.remove('active');
      });
    };

    solutionsWrapper.addEventListener('scroll', () => {
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth + 24;
      const index = Math.round(solutionsWrapper.scrollLeft / (cardWidth * 2));
      updateDots(index);
    }, { passive: true });

    if (solutionsPrevBtn) {
      solutionsPrevBtn.addEventListener('click', () => {
        const cardWidth = cards[0].offsetWidth + 24;
        solutionsWrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });
    }

    if (solutionsNextBtn) {
      solutionsNextBtn.addEventListener('click', () => {
        const cardWidth = cards[0].offsetWidth + 24;
        solutionsWrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
    }
  }

  // 5. Featured Projects Filter & Slider
  const projectCards = document.querySelectorAll('.project-card');
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCategory.includes(category)) {
          card.style.display = 'flex';
          card.classList.remove('hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('hidden');
        }
      });
    });
  });

  const projectsWrapper = document.getElementById('projects-slider');
  const projectsPrevBtn = document.getElementById('projects-prev');
  const projectsNextBtn = document.getElementById('projects-next');

  if (projectsWrapper && projectsPrevBtn && projectsNextBtn) {
    projectsPrevBtn.addEventListener('click', () => {
      const firstCard = projectsWrapper.querySelector('.project-card:not(.hidden)');
      const scrollStep = firstCard ? firstCard.offsetWidth + 24 : 320;
      projectsWrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    projectsNextBtn.addEventListener('click', () => {
      const firstCard = projectsWrapper.querySelector('.project-card:not(.hidden)');
      const scrollStep = firstCard ? firstCard.offsetWidth + 24 : 320;
      projectsWrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });
  }

  // 6. Testimonials Slider
  const testimonialsWrapper = document.getElementById('testimonials-slider');
  const testimonialsPrevBtn = document.getElementById('testimonials-prev');
  const testimonialsNextBtn = document.getElementById('testimonials-next');
  const testimonialsDots = document.querySelectorAll('.testimonial-dot');

  if (testimonialsWrapper) {
    const slides = testimonialsWrapper.querySelectorAll('.testimonial-slide');

    const updateTestimonialDots = (index) => {
      testimonialsDots.forEach((d, i) => {
        if (i === index) d.classList.add('active');
        else d.classList.remove('active');
      });
    };

    testimonialsDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        const slideWidth = slides[0].offsetWidth;
        testimonialsWrapper.scrollTo({ left: idx * slideWidth, behavior: 'smooth' });
        updateTestimonialDots(idx);
      });
    });

    if (testimonialsPrevBtn) {
      testimonialsPrevBtn.addEventListener('click', () => {
        const slideWidth = slides[0].offsetWidth;
        testimonialsWrapper.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      });
    }

    if (testimonialsNextBtn) {
      testimonialsNextBtn.addEventListener('click', () => {
        const slideWidth = slides[0].offsetWidth;
        testimonialsWrapper.scrollBy({ left: slideWidth, behavior: 'smooth' });
      });
    }

    testimonialsWrapper.addEventListener('scroll', () => {
      const slideWidth = slides[0].offsetWidth;
      const idx = Math.round(testimonialsWrapper.scrollLeft / slideWidth);
      updateTestimonialDots(idx);
    }, { passive: true });
  }

  // 7. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const btn = other.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 8. Contact Consultation Modal ("Let's Talk")
  const contactModal = document.getElementById('contact-modal');
  const modalCloseBtns = document.querySelectorAll('[data-close-modal]');
  const modalOpenBtns = document.querySelectorAll('[data-open-modal="contact"]');

  function openContactModal() {
    if (!contactModal) return;
    contactModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalOpenBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
  }));

  modalCloseBtns.forEach(btn => btn.addEventListener('click', closeContactModal));

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeContactModal();
      closeMobileMenu();
      closeCaseStudyModal();
      closeChatWindow();
    }
  });

  // 9. Case Study Details Modal
  const caseStudyModal = document.getElementById('case-study-modal');
  const caseStudyDetails = {
    'md-ally': {
      title: 'MD Ally — Emergency 911 Telehealth Workflow Platform',
      category: 'Healthcare & Emergency Services',
      description: 'An advanced 911 ecosystem providing non-emergency diversion and real-time telehealth clinical triage, reducing ambulance burden and emergency room wait times by over 38%.',
      technologies: ['React.js', 'Node.js', 'AWS Cloud', 'HIPAA Compliant WebRTC', 'PostgreSQL', 'Microservices'],
      challenge: 'Integrating into heterogeneous county dispatch software (CAD systems) with sub-second latency and absolute data compliance.',
      solution: 'ZYNITH TECHNOLOGY architected an ultra-resilient distributed message bus with instant clinical video handoff and automated state reporting.',
      metric: '38% reduction in non-critical emergency transports; 100% HIPAA audit compliance.'
    },
    'codeaid': {
      title: 'Codeaid — Automated Developer Skill Testing Engine',
      category: 'EdTech & HR Enterprise Systems',
      description: 'An automated testing system that validates developers’ technical prowess across 20+ programming languages through containerized sandboxes.',
      technologies: ['Docker', 'Kubernetes', 'Python', 'Go', 'React', 'TypeScript', 'Redis Queue'],
      challenge: 'Executing untrusted user code safely at scale with microsecond timeout enforcement.',
      solution: 'Constructed an isolated, ephemeral multi-tenant sandbox mesh orchestrated on Kubernetes with automated static and runtime verification.',
      metric: 'Evaluated 500,000+ candidates with 99.99% sandbox isolation reliability.'
    },
    'mediphany': {
      title: 'Mediphany — Cloud PACS & Radiology Diagnostics',
      category: 'Medical Imaging & AI',
      description: 'Cloud-native medical imaging portal delivering interactive DICOM visualization, real-time doctor collaboration, and AI anomaly detection directly in standard web browsers.',
      technologies: ['Cornerstone.js', 'WebGL', 'Python AI / PyTorch', 'AWS S3', 'Terraform', 'WebAssembly'],
      challenge: 'Rendering high-resolution 3D volumetric CT/MRI scans at 60 FPS on low-power client machines.',
      solution: 'Engineered custom GPU-accelerated WebAssembly rendering pipelines alongside secure cloud streaming.',
      metric: 'Decreased diagnostic review lag by 65% for 120+ clinical partner sites.'
    },
    'shadewave': {
      title: 'ShadeWave — Dental Colorimetry & Computer Vision',
      category: 'Dental & 3D Imaging',
      description: 'A revolutionary dental aesthetic matching system converting smartphone dental photography into laboratory-grade porcelain shade maps.',
      technologies: ['Computer Vision (OpenCV)', 'Convolutional Neural Networks', 'Flutter', 'FastAPI', 'AWS'],
      challenge: 'Eliminating flash distortion, ambient lighting bias, and saliva reflection from color measurements.',
      solution: 'Developed custom calibration targets and neural illumination normalization algorithms to guarantee tooth shade accuracy.',
      metric: 'Over 250,000 successful restorations delivered worldwide.'
    },
    'akillion': {
      title: 'Akillion — Algorithmic Financial Intelligence Portal',
      category: 'FinTech & Real-Time Trading',
      description: 'Enterprise financial market analytics platform parsing multi-exchange market depth, institutional order flows, and machine learning sentiment indicators.',
      technologies: ['React', 'WebSocket Engine', 'C++', 'Python', 'TimescaleDB', 'Apache Kafka'],
      challenge: 'Handling bursts of 100,000+ financial events per second without UI stutter or memory leaks.',
      solution: 'Implemented high-speed ring buffers, Web Workers data parsing, and WebGL financial chart rendering.',
      metric: 'Sub-5ms tick-to-trade rendering for global proprietary trading desks.'
    },
    'ecs-clinical': {
      title: 'ECS Clinical — Regulatory Clinical Trial Management',
      category: 'Life Sciences & Enterprise Software',
      description: 'Comprehensive 21 CFR Part 11 compliant clinical trial orchestration platform managing participant consent, lab tracking, and FDA data export pipelines.',
      technologies: ['Angular', '.NET Core', 'Microsoft Azure', 'SQL Server AlwaysOn', 'DocuSign API'],
      challenge: 'Ensuring immutable audit logging and zero data loss during multi-site international drug trials.',
      solution: 'Delivered an immutable ledger architecture with role-based cryptographic verification and real-time electronic signatures.',
      metric: 'Accelerated phase-II clinical trial submission turnaround by 4.5 months.'
    }
  };

  function openCaseStudyModal(studyId) {
    if (!caseStudyModal) return;
    const data = caseStudyDetails[studyId] || caseStudyDetails['md-ally'];
    document.getElementById('cs-modal-title').textContent = data.title;
    document.getElementById('cs-modal-category').textContent = data.category;
    document.getElementById('cs-modal-desc').textContent = data.description;
    document.getElementById('cs-modal-challenge').textContent = data.challenge;
    document.getElementById('cs-modal-solution').textContent = data.solution;
    document.getElementById('cs-modal-metric').textContent = data.metric;

    const techContainer = document.getElementById('cs-modal-tech');
    if (techContainer) {
      techContainer.innerHTML = '';
      data.technologies.forEach(t => {
        const badge = document.createElement('span');
        badge.className = 'px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold';
        badge.textContent = t;
        techContainer.appendChild(badge);
      });
    }

    caseStudyModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudyModal() {
    if (!caseStudyModal) return;
    caseStudyModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-case-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyId = btn.getAttribute('data-open-case-study');
      openCaseStudyModal(studyId);
    });
  });

  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeCaseStudyModal();
    });
    const csCloseBtn = caseStudyModal.querySelector('[data-close-case-study]');
    if (csCloseBtn) csCloseBtn.addEventListener('click', closeCaseStudyModal);
  }

  // 10. Contact Form Submission with Feedback Toast
  const contactForm = document.getElementById('main-contact-form');
  const modalContactForm = document.getElementById('modal-contact-form');
  const toastNotice = document.getElementById('toast-notice');

  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-msg').textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4500);
  }

  function handleFormSubmit(form, isModal = false) {
    return (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Sending Inquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        form.reset();
        if (isModal) closeContactModal();
        showToast('Thank you! A ZYNITH TECHNOLOGY solutions architect will contact you within 24 hours.');
      }, 1200);
    };
  }

  if (contactForm) contactForm.addEventListener('submit', handleFormSubmit(contactForm, false));
  if (modalContactForm) modalContactForm.addEventListener('submit', handleFormSubmit(modalContactForm, true));

  // 11. Interactive Zynith AI Chat Assistant
  const chatLauncher = document.getElementById('chat-launcher');
  const chatWindow = document.getElementById('chat-window');
  const chatCloseBtn = document.getElementById('chat-close-btn');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');
  const chatChips = document.querySelectorAll('.chat-chip');

  function toggleChatWindow() {
    if (!chatWindow) return;
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      chatInput.focus();
    }
  }

  function closeChatWindow() {
    if (chatWindow) chatWindow.classList.remove('open');
  }

  if (chatLauncher) chatLauncher.addEventListener('click', toggleChatWindow);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChatWindow);

  function appendChatMessage(text, isUser = false) {
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`;
    msgDiv.innerHTML = `
      <div class="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
        isUser 
          ? 'bg-blue-600 text-white rounded-br-none' 
          : 'bg-slate-100 text-slate-900 rounded-bl-none shadow-sm'
      }">
        ${text}
      </div>
    `;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleChatSubmit() {
    const text = (chatInput.value || '').trim();
    if (!text) return;
    appendChatMessage(text, true);
    chatInput.value = '';

    // Simulate smart bot response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let response = "Thank you for reaching out! At ZYNITH TECHNOLOGY, we craft tailored digital experiences and AI-powered solutions. Would you like to schedule an introductory consultation with our engineering team?";
      
      if (lower.includes('service') || lower.includes('what do you do')) {
        response = "We offer 10 core services: Custom Software Development, Web & Mobile App Development, AI & ML, Cloud Computing & DevOps, UI/UX Design, Enterprise Solutions, QA Automation, Dedicated Teams, and Digital Transformation Consulting. Which area matches your current priorities?";
      } else if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('talk')) {
        response = "We'd love to prepare a detailed proposal! Click the 'Let's Talk' button at the top of the page or leave your work email here and our team will get in touch immediately.";
      } else if (lower.includes('ai') || lower.includes('machine learning')) {
        response = "Our AI & Machine Learning team builds intelligent models, computer vision systems, generative AI integrations, and predictive analytics that optimize enterprise workflows. Would you like to review our case studies?";
      }

      appendChatMessage(response, false);
    }, 700);
  }

  if (chatSendBtn) chatSendBtn.addEventListener('click', handleChatSubmit);
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleChatSubmit();
    });
  }

  chatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.getAttribute('data-prompt') || chip.textContent;
      chatInput.value = promptText;
      handleChatSubmit();
    });
  });
});
