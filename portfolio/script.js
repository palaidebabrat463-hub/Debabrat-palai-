/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT - Debabrat Palai
 * Pure Vanilla JavaScript (ES6+) - Clean, Beginner-Friendly, and Robust
 * ==========================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. THEME SWITCHER (Dark & Light Mode with LocalStorage)
  // ------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION HAMBURGER MENU
  // ------------------------------------------------------------------------
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          menuToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. ACTIVE NAV LINK ON SCROLL (IntersectionObserver)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // ------------------------------------------------------------------------
  // 4. PROJECT CATEGORY FILTERING
  // ------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button state
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const selectedFilter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (selectedFilter === 'all' || category === selectedFilter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 5. CONTACT FORM VALIDATION & CLIENT-SIDE DEMONSTRATION
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    // Email validation regex helper
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(String(email).toLowerCase());
    };

    // Generic field validator
    const validateField = (input, isValidCondition) => {
      if (isValidCondition) {
        input.classList.remove('invalid');
        return true;
      } else {
        input.classList.add('invalid');
        return false;
      }
    };

    // Real-time input listeners to clear errors once corrected
    if (nameInput) nameInput.addEventListener('input', () => validateField(nameInput, nameInput.value.trim().length >= 2));
    if (emailInput) emailInput.addEventListener('input', () => validateField(emailInput, isValidEmail(emailInput.value.trim())));
    if (subjectInput) subjectInput.addEventListener('input', () => validateField(subjectInput, subjectInput.value.trim().length > 0));
    if (messageInput) messageInput.addEventListener('input', () => validateField(messageInput, messageInput.value.trim().length >= 10));

    // Handle Form Submission
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2);
      const isEmailValid = validateField(emailInput, isValidEmail(emailInput.value.trim()));
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length > 0);
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10);

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Form is valid! Show simulated success alert
        if (formAlert) {
          formAlert.className = 'form-alert success';
          formAlert.style.display = 'block';
          formAlert.innerHTML = `
            <strong>✅ Thank you, ${escapeHtml(nameInput.value.trim())}!</strong><br>
            Your message has been validated successfully in this frontend demo.<br>
            <small>Note for Debabrat: To receive real emails in your inbox, connect Formspree (action="https://formspree.io/f/your-id") as taught in Step 11.</small>
          `;
        }

        // Reset inputs
        contactForm.reset();

        // Auto-hide alert after 8 seconds
        setTimeout(() => {
          if (formAlert) formAlert.style.display = 'none';
        }, 8000);
      } else {
        // Form has errors
        if (formAlert) {
          formAlert.className = 'form-alert error';
          formAlert.style.display = 'block';
          formAlert.textContent = '⚠️ Please check the red highlighted fields above and correct the errors.';
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. BACK TO TOP BUTTON
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 7. CURRENT YEAR DYNAMIC UPDATE
  // ------------------------------------------------------------------------
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------------
  // 8. CV DOWNLOAD HELPER
  // ------------------------------------------------------------------------
  const cvBtn = document.getElementById('cv-download-btn');
  if (cvBtn) {
    cvBtn.addEventListener('click', (e) => {
      // If the file doesn't exist yet, guide the user gracefully
      console.log('Debabrat Palai CV Download requested.');
    });
  }
});

/**
 * Basic HTML escaping utility to prevent XSS in demo notifications
 */
function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}
