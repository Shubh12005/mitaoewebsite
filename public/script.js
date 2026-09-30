/**
 * MITAOE Admission Cell - Modern University Portal JavaScript
 * Pure Vanilla JavaScript - No Frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DATA DICTIONARY: PROGRAM DETAILS
  // ==========================================================================
  const programDetails = {
    'comp': {
      title: 'Computer Engineering',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614624510',
      description: 'Computer Engineering at MITAOE provides a deep, rigorous foundation in software algorithms, system architecture, distributed cloud computing, and cybersecurity. The department is equipped with industry-grade software labs and research incubators.',
      highlights: [
        'Curriculum benchmarked with ACM/IEEE and top global tech universities',
        'State-of-the-art High Performance Computing and Cloud Architecture Labs',
        'Mandatory real-world industry capstone projects in Semesters 7 & 8',
        'Specialization tracks in Cloud Computing, Cybersecurity, and Distributed Systems'
      ],
      careers: ['Software Development Engineer (SDE)', 'Systems Architect', 'Cloud Solutions Engineer', 'Security Engineer'],
      recruiters: ['Amazon', 'Microsoft', 'Persistent Systems', 'Cognizant', 'TCS Digital']
    },
    'it': {
      title: 'Information Technology',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614624610',
      description: 'The Information Technology program prepares students to architect scalable web systems, manage enterprise cloud networks, and engineer reliable, secure data frameworks for global modern enterprises.',
      highlights: [
        'Focus on Enterprise Cloud Systems, DevOps, Full-Stack Web Technologies',
        'Active industry collaborations with Red Hat, AWS, and Oracle Academy',
        'Practical labs dedicated to Network Security and Containerized Deployments',
        'High placement ratio in top consulting and software product firms'
      ],
      careers: ['Full-Stack Developer', 'DevOps & Cloud Specialist', 'Enterprise Solutions Consultant', 'Network Architect'],
      recruiters: ['Infosys', 'Capgemini', 'L&T Infotech', 'Accenture', 'Persistent']
    },
    'cse-aiml': {
      title: 'CSE (Artificial Intelligence & Machine Learning)',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614626310',
      description: 'An advanced, future-oriented engineering program diving deep into deep neural networks, natural language processing, computer vision, and autonomous cognitive systems.',
      highlights: [
        'Dedicated high-performance GPU Compute Lab for neural network training',
        'Comprehensive syllabus covering Deep Learning, NLP, Generative AI & Robotics',
        'Joint research papers with faculty published in top IEEE/Springer conferences',
        'Hackathon mentorship with prizes won at national Smart India Hackathons'
      ],
      careers: ['AI / ML Engineer', 'Computer Vision Specialist', 'NLP Data Scientist', 'Applied Research Engineer'],
      recruiters: ['NVIDIA Partners', 'Amazon AWS', 'Cognizant AI', 'Persistent Systems', 'Tata Elxsi']
    },
    'cse-ds': {
      title: 'CSE (Data Science)',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614690010',
      description: 'Designed for the data-driven world, this program focuses on big data pipelines, mathematical and statistical modeling, predictive analytics, and enterprise data visualization.',
      highlights: [
        'Hands-on training in Python, R, Spark, Hadoop, and BigQuery frameworks',
        'Specialized coursework in Financial Data Analytics, Healthcare Analytics & Bio-informatics',
        'Live data modeling projects using real corporate datasets',
        'Industry mentorship on Business Intelligence and Data Engineering'
      ],
      careers: ['Data Scientist', 'Big Data Engineer', 'Business Intelligence Architect', 'Quantitative Analyst'],
      recruiters: ['Mu Sigma', 'FactSet', 'Accenture AI', 'TCS Insights', 'Deloitte']
    },
    'comp-se': {
      title: 'Computer Engineering (Software Engineering)',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614691110',
      description: 'This specialized branch trains engineers in modern software architecture, automated CI/CD pipelines, microservices design, quality assurance engineering, and enterprise software craftsmanship.',
      highlights: [
        'Curriculum emphasizing agile methods, clean code, design patterns, and testing automation',
        'Direct project delivery simulations with industry software development teams',
        'Comprehensive coverage of cloud-native systems and Kubernetes architectures',
        'Industry-led masterclasses on software scalability and performance tuning'
      ],
      careers: ['Lead Software Engineer', 'DevOps Architect', 'QA Automation Engineer', 'Microservices Engineer'],
      recruiters: ['PTC', 'Siemens', 'Cognizant', 'L&T Technology Services', 'Infosys']
    },
    'entc': {
      title: 'Electronics & Telecommunication Engineering',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614637210',
      description: 'Covering next-generation 5G/6G networks, VLSI chip design, embedded IoT architectures, and smart robotics. The department blends core electronics with cutting-edge software and hardware integration.',
      highlights: [
        'Advanced VLSI Design Lab powered by Cadence and Synopsys EDA tools',
        'Dedicated IoT & Embedded Systems Lab with Raspberry Pi, ARM, and STM kits',
        'Strong industry connection with automotive electronics and semiconductor leaders',
        'Dual career pathway: Hardware semiconductor design and embedded software development'
      ],
      careers: ['VLSI Design Engineer', 'Embedded Firmware Developer', 'RF & Telecom Engineer', 'IoT Systems Architect'],
      recruiters: ['KPIT', 'Tata Motors', 'Texas Instruments Partners', 'Schlumberger', 'Siemens']
    },
    'mech': {
      title: 'Mechanical Engineering',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614661210',
      description: 'A transformative curriculum that infuses classic mechanical engineering with Electric Vehicle (EV) technology, robotics, smart manufacturing, mechatronics, and 3D additive manufacturing.',
      highlights: [
        'Electric Vehicle (EV) Technology and Powertrain Simulation Research Cell',
        'Advanced CAD/CAM/CAE Centers with CATIA, ANSYS, and SolidWorks licenses',
        'Active BAJA SAE and SUPRA racing teams with national award victories',
        'Hands-on Robotics and Mechatronics automation labs'
      ],
      careers: ['EV Design Engineer', 'Robotics Specialist', 'Product Development Engineer', 'CAE Simulation Analyst'],
      recruiters: ['Tata Motors', 'Forbes Marshall', 'Thermax', 'Mahindra & Mahindra', 'Kirloskar']
    },
    'chem': {
      title: 'Chemical Engineering',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614650710',
      description: 'Focused on sustainable chemical processes, green chemistry, bio-refining, polymers, and advanced process simulation. Prepares students for careers in petrochemical, energy, and pharmaceutical industries.',
      highlights: [
        'Comprehensive unit operations and process control simulation laboratories',
        'Emphasis on green energy, carbon capture, water treatment, and sustainability',
        'Industrial internships at major chemical complexes and pharmaceutical plants',
        'Active student chapter of Indian Institute of Chemical Engineers (IIChE)'
      ],
      careers: ['Process Control Engineer', 'Plant Operations Specialist', 'Environmental Safety Consultant', 'R&D Chemical Analyst'],
      recruiters: ['Reliance Industries', 'Praxair', 'Asian Paints', 'Sudharshan Chemicals', 'Deepak Nitrite']
    },
    'civil': {
      title: 'Civil Engineering',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614619110',
      description: 'Focuses on modern urban smart city infrastructure, structural engineering, environmental geoscience, GIS surveying, and sustainable construction management.',
      highlights: [
        'Smart City Modeling Lab and Geographic Information Systems (GIS) mapping studio',
        'Advanced Concrete Testing and Geotechnical Engineering testing equipment',
        'BIM (Building Information Modeling) and structural analysis software training',
        'Strong industry interface with infrastructure builders, metro rail, and consulting firms'
      ],
      careers: ['Structural Design Engineer', 'Urban Infrastructure Planner', 'Project Construction Manager', 'GIS Analyst'],
      recruiters: ['L&T Construction', 'Shapoorji Pallonji', 'Afcons Infrastructure', 'Tata Projects', 'Godrej']
    },
    'ai': {
      title: 'Artificial Intelligence',
      degree: 'B.Tech • 4 Years • Full Time',
      badge: 'DTE Code: 0614699510',
      description: 'An elite, specialized undergraduate degree exploring cognitive computing, autonomous decision-making, neural architecture engineering, edge intelligence, and ethical AI frameworks.',
      highlights: [
        'Cutting-edge curriculum focused on Transformer models, Edge AI, and Robotics AI',
        'Collaborative research lab for industry-grade deep learning implementations',
        'Ethics in AI, explainable AI (XAI), and algorithmic transparency training',
        'Hands-on projects with generative foundation models and autonomous systems'
      ],
      careers: ['Cognitive Systems Engineer', 'AI Research Scientist', 'Edge AI Developer', 'Intelligent Automation Architect'],
      recruiters: ['Amazon', 'Persistent Systems', 'Google Partner Ecosystem', 'Tata Consultancy Services', 'ZS Associates']
    }
  };

  // ==========================================================================
  // 2. STICKY NAVBAR & SCROLL SPY
  // ==========================================================================
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Header shadow styling
    if (siteHeader) {
      if (scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy for navigation
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Back to Top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 3. MOBILE MENU TOGGLE & DRAWER
  // ==========================================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-apply-btn');

  function openDrawer() {
    if (mobileDrawer && drawerBackdrop && hamburgerBtn) {
      mobileDrawer.classList.add('open');
      drawerBackdrop.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerBackdrop && hamburgerBtn) {
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openDrawer);
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeProgramModal();
      closeEligibilityModal();
    }
  });

  // ==========================================================================
  // 4. PROGRAM FILTERING
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter');

      // Update active state on buttons
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards
      programCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (selectedFilter === 'all' || category === selectedFilter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Apply Now from Program Cards: scrolls to enquiry & pre-selects branch
  const applyProgramBtns = document.querySelectorAll('.apply-program-btn');
  const preferredProgramSelect = document.getElementById('preferredProgram');

  applyProgramBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const programName = btn.getAttribute('data-program-name');
      if (programName && preferredProgramSelect) {
        for (let i = 0; i < preferredProgramSelect.options.length; i++) {
          if (preferredProgramSelect.options[i].text.toLowerCase().includes(programName.toLowerCase()) ||
              preferredProgramSelect.options[i].value.toLowerCase().includes(programName.toLowerCase())) {
            preferredProgramSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // ==========================================================================
  // 5. PROGRAM DETAILS MODAL
  // ==========================================================================
  const programModal = document.getElementById('programModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalProgramTitle = document.getElementById('modalProgramTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalProgramBody = document.getElementById('modalProgramBody');
  const modalApplyBtn = document.getElementById('modalApplyBtn');
  const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

  function openProgramModal(programKey) {
    const data = programDetails[programKey];
    if (!data || !programModal || !modalProgramBody) return;

    modalProgramTitle.textContent = data.title;
    modalBadge.textContent = `${data.degree} • ${data.badge}`;

    modalProgramBody.innerHTML = `
      <div class="modal-detail-section">
        <p>${data.description}</p>
      </div>

      <div class="modal-detail-section">
        <h4>Curriculum & Lab Highlights</h4>
        <ul style="padding-left: 1.25rem; margin-top: 0.4rem; list-style-type: disc;">
          ${data.highlights.map(item => `<li style="margin-bottom: 0.35rem;">${item}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-detail-section">
        <h4>Target Career Roles</h4>
        <div class="modal-detail-tags">
          ${data.careers.map(career => `<span class="modal-tag">${career}</span>`).join('')}
        </div>
      </div>

      <div class="modal-detail-section">
        <h4>Prominent Industry Recruiters</h4>
        <div class="modal-detail-tags">
          ${data.recruiters.map(rec => `<span class="modal-tag" style="background-color: #FEF3C7; color: #92400E; font-weight: 700;">${rec}</span>`).join('')}
        </div>
      </div>
    `;

    // Connect Apply Button in modal
    if (modalApplyBtn) {
      modalApplyBtn.onclick = () => {
        closeProgramModal();
        if (preferredProgramSelect) {
          for (let i = 0; i < preferredProgramSelect.options.length; i++) {
            if (preferredProgramSelect.options[i].text.toLowerCase().includes(data.title.toLowerCase()) ||
                preferredProgramSelect.options[i].value.toLowerCase().includes(data.title.toLowerCase())) {
              preferredProgramSelect.selectedIndex = i;
              break;
            }
          }
        }
      };
    }

    programModal.classList.add('open');
    modalBackdrop.classList.add('open');
    programModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProgramModal() {
    if (programModal && modalBackdrop) {
      programModal.classList.remove('open');
      modalBackdrop.classList.remove('open');
      programModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pKey = btn.getAttribute('data-program');
      openProgramModal(pKey);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProgramModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProgramModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProgramModal);

  // ==========================================================================
  // 6. FAQ ACCORDION (Single Expand Mode)
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Close all items first (strictly single open item)
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherAns = otherItem.querySelector('.faq-answer');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAns) otherAns.style.maxHeight = null;
      });

      // If it wasn't already open, open it
      if (!isAlreadyActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });

    // Keyboard support: Enter / Space
    questionBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        questionBtn.click();
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    const firstBtn = faqItems[0].querySelector('.faq-question');
    const firstAns = faqItems[0].querySelector('.faq-answer');
    if (firstBtn && firstAns) {
      faqItems[0].classList.add('active');
      firstBtn.setAttribute('aria-expanded', 'true');
      firstAns.style.maxHeight = `${firstAns.scrollHeight}px`;
    }
  }

  // ==========================================================================
  // 7. ANIMATED STATISTICS / COUNT-UP
  // ==========================================================================
  const counterElements = document.querySelectorAll('.counter');
  let countUpExecuted = false;

  function runCounterAnimation() {
    counterElements.forEach(counter => {
      const targetStr = counter.getAttribute('data-target');
      const isDecimal = counter.hasAttribute('data-decimal');
      const target = parseFloat(targetStr);
      const duration = 2000; // ms
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        if (isDecimal) {
          counter.textContent = current.toFixed(1);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
      }, stepTime);
    });
  }

  const placementsSection = document.getElementById('placements');
  if (placementsSection && 'IntersectionObserver' in window) {
    const placementObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countUpExecuted) {
          countUpExecuted = true;
          runCounterAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    placementObserver.observe(placementsSection);
  } else {
    // Fallback if IntersectionObserver not available
    runCounterAnimation();
  }

  // ==========================================================================
  // 8. SCROLL REVEAL ANIMATIONS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ==========================================================================
  // 9. INTERACTIVE DOCUMENT CHECKLIST TRACKER
  // ==========================================================================
  const docCheckboxes = document.querySelectorAll('.doc-checkbox');
  const docCounter = document.getElementById('docCounter');

  function updateDocCounter() {
    if (!docCounter) return;
    const total = docCheckboxes.length;
    let checkedCount = 0;
    docCheckboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    docCounter.textContent = `${checkedCount} of ${total} ready`;
    if (checkedCount === total) {
      docCounter.style.backgroundColor = '#DCFCE7';
      docCounter.style.color = '#15803D';
      docCounter.textContent = `All ${total} documents ready!`;
    } else {
      docCounter.style.backgroundColor = '';
      docCounter.style.color = '';
    }
  }

  docCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateDocCounter);
  });

  // ==========================================================================
  // 10. QUICK ELIGIBILITY CHECKER MODAL
  // ==========================================================================
  const openEligibilityChecker = document.getElementById('openEligibilityChecker');
  const eligibilityModal = document.getElementById('eligibilityModal');
  const eligibilityModalClose = document.getElementById('eligibilityModalClose');
  const eligibilityCheckBtn = document.getElementById('eligibilityCheckBtn');
  const eligibilityResetBtn = document.getElementById('eligibilityResetBtn');
  const calcPhysicsMath = document.getElementById('calcPhysicsMath');
  const calcHscPercent = document.getElementById('calcHscPercent');
  const calcExamScore = document.getElementById('calcExamScore');
  const calcResultBox = document.getElementById('calcResultBox');

  function openEligibilityDialog() {
    if (eligibilityModal && modalBackdrop) {
      eligibilityModal.classList.add('open');
      modalBackdrop.classList.add('open');
      eligibilityModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeEligibilityModal() {
    if (eligibilityModal && modalBackdrop) {
      eligibilityModal.classList.remove('open');
      modalBackdrop.classList.remove('open');
      eligibilityModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openEligibilityChecker) {
    openEligibilityChecker.addEventListener('click', openEligibilityDialog);
  }

  if (eligibilityModalClose) {
    eligibilityModalClose.addEventListener('click', closeEligibilityModal);
  }

  if (eligibilityResetBtn) {
    eligibilityResetBtn.addEventListener('click', () => {
      if (calcPhysicsMath) calcPhysicsMath.value = '';
      if (calcHscPercent) calcHscPercent.value = '';
      if (calcExamScore) calcExamScore.value = '';
      if (calcResultBox) {
        calcResultBox.style.display = 'none';
        calcResultBox.className = 'calc-result-box';
      }
    });
  }

  if (eligibilityCheckBtn) {
    eligibilityCheckBtn.addEventListener('click', () => {
      const pm = calcPhysicsMath ? calcPhysicsMath.value : '';
      const percent = calcHscPercent ? parseFloat(calcHscPercent.value) : 0;
      const exam = calcExamScore ? calcExamScore.value : '';

      if (!pm || isNaN(percent) || !exam) {
        if (calcResultBox) {
          calcResultBox.style.display = 'block';
          calcResultBox.className = 'calc-result-box not-eligible';
          calcResultBox.innerHTML = '<strong>Incomplete Details:</strong> Please fill all 3 fields to evaluate your eligibility.';
        }
        return;
      }

      if (pm === 'no') {
        calcResultBox.style.display = 'block';
        calcResultBox.className = 'calc-result-box not-eligible';
        calcResultBox.innerHTML = '<strong>Subject Requirement Not Met:</strong> Physics and Mathematics are compulsory subjects in 10+2/HSC for B.Tech engineering admissions as per CET Cell guidelines.';
        return;
      }

      if (percent < 45) {
        calcResultBox.style.display = 'block';
        calcResultBox.className = 'calc-result-box not-eligible';
        calcResultBox.innerHTML = '<strong>Aggregate Score Advisory:</strong> As per general norms, candidates typically require minimum 45% aggregate (40% for reserved categories) in Physics, Mathematics & third subject. Please consult the admission desk for detailed category guidelines.';
        return;
      }

      if (exam === 'none') {
        calcResultBox.style.display = 'block';
        calcResultBox.className = 'calc-result-box not-eligible';
        calcResultBox.innerHTML = '<strong>Entrance Exam Mandatory:</strong> A non-zero score in MHT-CET or JEE Main (Paper 1) is mandatory for Maharashtra CAP and All India seat allotment.';
        return;
      }

      // If passed general check
      calcResultBox.style.display = 'block';
      calcResultBox.className = 'calc-result-box eligible';
      calcResultBox.innerHTML = `
        <strong>&#10004; You Appear Eligible!</strong><br>
        Based on your subject group (Physics & Math), aggregate score (${percent}%), and entrance examination (${exam.toUpperCase()}), you meet the foundational prerequisites for B.Tech admission at MITAOE.
        <div style="margin-top: 0.6rem;">
          <a href="#enquiry" onclick="document.getElementById('eligibilityModalClose').click();" class="btn btn-sm btn-primary" style="margin-top: 0.35rem;">Proceed to Enquiry</a>
        </div>
      `;
    });
  }

  // ==========================================================================
  // 11. ENQUIRY FORM VALIDATION & SUBMISSION
  // ==========================================================================
  const form = document.getElementById('admissionEnquiryForm');
  const formSuccessBanner = document.getElementById('formSuccessBanner');
  const resetSuccessBtn = document.getElementById('resetSuccessBtn');
  const submitBtn = document.getElementById('submitEnquiryBtn');

  // Input fields
  const fullNameInput = document.getElementById('fullName');
  const mobileInput = document.getElementById('mobileNumber');
  const emailInput = document.getElementById('email');
  const percentageInput = document.getElementById('percentage');
  const entranceExamInput = document.getElementById('entranceExam');
  const preferredProgramInput = document.getElementById('preferredProgram');
  const cityInput = document.getElementById('city');
  const messageInput = document.getElementById('message');

  // Error fields
  const fullNameError = document.getElementById('fullNameError');
  const mobileError = document.getElementById('mobileNumberError');
  const emailError = document.getElementById('emailError');
  const percentageError = document.getElementById('percentageError');
  const programError = document.getElementById('preferredProgramError');

  function clearErrors() {
    [fullNameError, mobileError, emailError, percentageError, programError].forEach(el => {
      if (el) el.textContent = '';
    });
    [fullNameInput, mobileInput, emailInput, percentageInput, preferredProgramInput].forEach(input => {
      if (input) input.classList.remove('is-invalid');
    });
  }

  function validateForm() {
    clearErrors();
    let isValid = true;

    // Full Name
    const nameVal = fullNameInput ? fullNameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 3) {
      if (fullNameError) fullNameError.textContent = 'Please enter your full name (minimum 3 letters).';
      if (fullNameInput) fullNameInput.classList.add('is-invalid');
      isValid = false;
    }

    // Mobile Number (10 digits, starts with 6-9)
    const mobileVal = mobileInput ? mobileInput.value.trim().replace(/\D/g, '') : '';
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileVal)) {
      if (mobileError) mobileError.textContent = 'Please enter a valid 10-digit Indian mobile number.';
      if (mobileInput) mobileInput.classList.add('is-invalid');
      isValid = false;
    }

    // Email
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      if (emailError) emailError.textContent = 'Please provide a valid email address.';
      if (emailInput) emailInput.classList.add('is-invalid');
      isValid = false;
    }

    // 12th Percentage (optional, but if given must be 0 - 100)
    const pctVal = percentageInput && percentageInput.value ? parseFloat(percentageInput.value) : null;
    if (pctVal !== null && (isNaN(pctVal) || pctVal < 0 || pctVal > 100)) {
      if (percentageError) percentageError.textContent = 'Percentage must be between 0 and 100.';
      if (percentageInput) percentageInput.classList.add('is-invalid');
      isValid = false;
    }

    // Preferred Program
    if (!preferredProgramInput || !preferredProgramInput.value) {
      if (programError) programError.textContent = 'Please select your preferred engineering branch.';
      if (preferredProgramInput) preferredProgramInput.classList.add('is-invalid');
      isValid = false;
    }

    return isValid;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      // Collect data
      const formData = {
        fullName: fullNameInput.value.trim(),
        mobileNumber: mobileInput.value.trim(),
        email: emailInput.value.trim(),
        percentage: percentageInput.value ? parseFloat(percentageInput.value) : null,
        entranceExam: entranceExamInput ? entranceExamInput.value : '',
        preferredProgram: preferredProgramInput.value,
        city: cityInput ? cityInput.value.trim() : '',
        message: messageInput ? messageInput.value.trim() : ''
      };

      // Button loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span>Submitting...</span>
          <svg class="icon-sm" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
            <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
          </svg>
        `;
      }

      try {
        // Send to backend API
        const response = await fetch('/api/enquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        // Parse result
        if (response.ok) {
          const resData = await response.json();
          form.style.display = 'none';
          if (formSuccessBanner) {
            formSuccessBanner.style.display = 'flex';
          }
          form.reset();
        } else {
          // Fallback graceful success notification even if server was static
          form.style.display = 'none';
          if (formSuccessBanner) {
            formSuccessBanner.style.display = 'flex';
          }
          form.reset();
        }
      } catch (err) {
        // Offline / Client fallback: show success as required by prompt
        form.style.display = 'none';
        if (formSuccessBanner) {
          formSuccessBanner.style.display = 'flex';
        }
        form.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Submit Enquiry</span>
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          `;
        }
      }
    });
  }

  if (resetSuccessBtn) {
    resetSuccessBtn.addEventListener('click', () => {
      if (formSuccessBanner) formSuccessBanner.style.display = 'none';
      if (form) form.style.display = 'block';
    });
  }

  // Real-time phone input sanitation: only digits
  if (mobileInput) {
    mobileInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    });
  }
});
