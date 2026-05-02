/* ============================================================
   SUDHA PAUDEL PORTFOLIO — script.js
   ============================================================ */

// ── Smooth scrolling ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ── Hamburger menu ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ── Navbar scroll shadow ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Reveal on scroll ─────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Certificate Modal (image-based) ──────────────────────────
const modal      = document.getElementById('certModal');
const modalImg   = document.getElementById('certModalImg');
const modalTitle = document.getElementById('certModalTitle');

function openCertModal(src, title) {
    if (!modal) return;
    if (modalTitle) modalTitle.textContent = title || '';
    if (modalImg)   modalImg.src = src;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
        if (modalImg) modalImg.src = '';
    }, 380);
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCertModal();
});

window.openCertModal  = openCertModal;
window.closeCertModal = closeCertModal;

// ── Profile photo fallback ────────────────────────────────────
const profilePhoto = document.getElementById('profilePhoto');
if (profilePhoto) {
    profilePhoto.addEventListener('load', () => {
        profilePhoto.style.display = 'block';
        const initials = profilePhoto.closest('.avatar-circle')?.querySelector('.avatar-initials');
        if (initials) initials.style.display = 'none';
    });
}