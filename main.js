// SVG icon definitions (unchanged except added Facebook, Telegram, WhatsApp)
const SVG = {
    checkmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    monitor: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    video: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
    penTool: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    cube: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>',
    compass: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>',
    image: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
    layers: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    users: '<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
    youtube: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.06c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>',
    telegram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2.5L2.5 10.5l5 2.5-2 5 5-2.5 5 5z"></path></svg>',
    instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    tiktok: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>'
};

const skillIcons = {
    'Premiere Pro': SVG.monitor,
    'DaVinci Resolve': SVG.video,
    'After Effects': SVG.penTool,
    'Photoshop': SVG.cube,
    'Illustrator': SVG.compass,
    'Lightroom': SVG.image,
    'Blender / Cinema 4D': SVG.layers,
    'Figma': SVG.users
};

const contactIcons = {
    'Email': SVG.email,
    'Phone': SVG.phone,
    'WhatsApp': SVG.whatsapp
};

const socialIcons = {
    'LinkedIn': SVG.linkedin,
    'Facebook': SVG.facebook,
    'YouTube': SVG.youtube,
    'Telegram': SVG.telegram,
    'Instagram': SVG.instagram,
    'TikTok': SVG.tiktok
};

let currentLang = 'en';

function initPage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Navigation
    renderNavLinks(t.nav.links);
    renderMobileNavLinks(t.nav.links);
    document.getElementById('langToggle').textContent = lang === 'en' ? 'AMH' : 'ENG';

    // Hero
    document.getElementById('heroLabel').textContent = t.hero.label;
    const heroTitleEl = document.getElementById('heroTitle');
    heroTitleEl.textContent = t.hero.title;
    heroTitleEl.setAttribute('data-text', t.hero.title);


    // document.getElementById('heroLabel').textContent = t.hero.label;
    // document.getElementById('heroTitle').textContent = t.hero.title;
    document.getElementById('heroSubtitle').textContent = t.hero.subtitle;
    document.getElementById('heroCta').innerHTML = `
        <a href="#portfolio" class="btn btn-primary">${t.hero.ctaPrimary}</a>
        <a href="#contact" class="btn btn-outline">${t.hero.ctaSecondary}</a>
    `;
    document.getElementById('heroStats').innerHTML = t.hero.stats.map(s => `
        <div class="stat-item">
            <span class="stat-number">${s.number}</span>
            <span class="stat-label">${s.label}</span>
        </div>
    `).join('');
    // Count-up stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(el => {
        const finalText = el.textContent;
        const match = finalText.match(/(\d+)(\+?)/);
        if (match) {
            const target = parseInt(match[1], 10);
            const suffix = match[2] || '';
            let current = 0;
            const step = target / 40;
            el.textContent = '0' + suffix;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.textContent = finalText;
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        }
    });

    // About
    document.getElementById('aboutLabel').textContent = t.about.label;
    document.getElementById('aboutTitle').textContent = t.about.title;
    document.getElementById('aboutParagraphs').innerHTML = t.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    document.getElementById('skillsGrid').innerHTML = t.about.skills.map(s => `
        <div class="skill-item">
            ${skillIcons[s.name] || SVG.monitor}
            ${s.name}
        </div>
    `).join('');

    // Experience
    document.getElementById('experienceLabel').textContent = t.experience.label;
    document.getElementById('experienceTitle').textContent = t.experience.title;
    document.getElementById('experienceDesc').textContent = t.experience.description;
    document.getElementById('experienceTimeline').innerHTML = t.experience.timeline.map(item => `
        <div class="timeline-item fade-up">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${item.title}</h3>
                    <span class="timeline-period">${item.period}</span>
                </div>
                <p class="timeline-company">${item.company}</p>
                <p class="timeline-desc">${item.description}</p>
                <div class="timeline-tags">
                    ${item.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Services
    document.getElementById('servicesLabel').textContent = t.services.label;
    document.getElementById('servicesTitle').textContent = t.services.title;
    document.getElementById('servicesDesc').textContent = t.services.description;
    document.getElementById('servicesGrid').innerHTML = t.services.cards.map(card => `
        <div class="service-card fade-up">
            ${card.icon}
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            ${card.categories.map(cat => `
                <div class="service-subtitle">${cat.name}</div>
                <ul class="service-list">
                    ${cat.items.map(item => `<li>${SVG.checkmark}${item}</li>`).join('')}
                </ul>
            `).join('')}
        </div>
    `).join('');

    // Portfolio
    document.getElementById('portfolioLabel').textContent = t.portfolio.label;
    document.getElementById('portfolioTitle').textContent = t.portfolio.title;
    document.getElementById('portfolioDesc').textContent = t.portfolio.description;
    document.getElementById('portfolioFilters').innerHTML = t.portfolio.filters.map((f, i) => `
        <button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.value}">${f.label}</button>
    `).join('');
    document.getElementById('portfolioGrid').innerHTML = t.portfolio.items.map(item => `
        <div class="portfolio-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.alt}">
            <div class="portfolio-overlay">
                <span class="portfolio-tag">${item.tag}</span>
                <h4 class="portfolio-title">${item.title}</h4>
                <p class="portfolio-desc">${item.description}</p>
            </div>
        </div>
    `).join('');

    // Testimonials
    document.getElementById('testimonialsLabel').textContent = t.testimonials.label;
    document.getElementById('testimonialsTitle').textContent = t.testimonials.title;
    document.getElementById('testimonialsDesc').textContent = t.testimonials.description;
    document.getElementById('testimonialsGrid').innerHTML = t.testimonials.items.map(item => `
        <div class="testimonial-card fade-up">
            <p class="testimonial-quote">${item.quote}</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${item.initials}</div>
                <div class="testimonial-info">
                    <h4>${item.name}</h4>
                    <p>${item.role}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Contact – only details and social, no form
    document.getElementById('contactLabel').textContent = t.contact.label;
    document.getElementById('contactTitle').textContent = t.contact.title;
    document.getElementById('contactDesc').textContent = t.contact.description;
    document.getElementById('contactInfoTitle').textContent = t.contact.infoTitle;
    document.getElementById('contactInfoDesc').textContent = t.contact.infoDescription;

    const detailsHtml = t.contact.details.map(d => {
        const icon = contactIcons[d.type] || SVG.email;
        let valueHtml = d.value;
        if (d.type === 'WhatsApp') {
            valueHtml = `<a href="https://wa.me/${d.link}" target="_blank">${d.value}</a>`;
        } else if (d.type === 'Email') {
            valueHtml = `<a href="mailto:${d.value}">${d.value}</a>`;
        } else if (d.type === 'Phone') {
            valueHtml = `<a href="tel:${d.value}">${d.value}</a>`;
        }
        return `
            <div class="contact-item">
                <div class="contact-icon">${icon}</div>
                <div>
                    <h4>${d.label}</h4>
                    <p>${valueHtml}</p>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('contactDetails').innerHTML = detailsHtml;

    document.getElementById('socialLinks').innerHTML = t.contact.socials.map(s => `
        <a href="${s.url}" class="social-link" aria-label="${s.label}" target="_blank">
            ${socialIcons[s.label] || ''}
        </a>
    `).join('');

    // Footer
    document.getElementById('footerText').textContent = t.footer.text;
    document.getElementById('footerNote').textContent = t.footer.note;

    bindPortfolioFilters();
    observeFadeElements();
}

// --- Language toggle ---
function setupLanguageToggle() {
    const btn = document.getElementById('langToggle');
    btn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'am' : 'en';
        initPage(newLang);
    });
}

// --- Nav rendering ---
function renderNavLinks(links) {
    document.getElementById('navLinks').innerHTML = links.map(l =>
        `<li><a href="#${l.href}" class="nav-link">${l.label}</a></li>`
    ).join('');
}

function renderMobileNavLinks(links) {
    document.getElementById('mobileNavLinks').innerHTML = links.map(l =>
        `<a href="#${l.href}" class="mobile-nav-link">${l.label}</a>`
    ).join('');
}

// --- Portfolio filtering ---
function bindPortfolioFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.portfolio-item').forEach(item => {
                const match = filter === 'all' || item.getAttribute('data-category') === filter;
                item.style.display = match ? 'block' : 'none';
                setTimeout(() => {
                    item.style.opacity = match ? '1' : '0';
                    item.style.transform = match ? 'scale(1)' : 'scale(0.9)';
                    if (!match) setTimeout(() => { item.style.display = 'none'; }, 300);
                }, 50);
            });
        });
    });
}

// --- Fade-up observer ---
function observeFadeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// --- Mobile menu ---
function setupMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('mobileMenuClose').addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('mobile-nav-link')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// --- Navbar scroll effect ---
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// --- Active nav link on scroll ---
function setupActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop;
            if (scrollY >= top - 200) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });
}

// --- Boot ---
// document.addEventListener('DOMContentLoaded', () => {
//     initPage('en');
//     setupLanguageToggle();
//     setupMobileMenu();
//     setupNavbarScroll();
//     setupActiveNavLink();
//     observeFadeElements();
// });
document.addEventListener('DOMContentLoaded', () => {
    initPage('en');
    setupLanguageToggle();
    setupMobileMenu();
    setupNavbarScroll();
    setupActiveNavLink();
    observeFadeElements();

    // Start the canvas hero animation
    initHeroCanvas();
});

// --- Canvas Hero Animation ---
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    const particles = [];
    const particleCount = 120;
    const mouse = { x: null, y: null, radius: 150 };

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.baseX = this.x;
            this.baseY = this.y;
            this.size = Math.random() * 2 + 1;
            this.speed = Math.random() * 0.5 + 0.2;
            this.opacity = Math.random() * 0.5 + 0.2;
            // Accent-ish color with some variation
            const hue = Math.random() * 30 + 15; // orange range
            this.color = `hsla(${hue}, 80%, 55%, ${this.opacity})`;
        }

        update() {
            // Move towards base position with slight drift
            const dx = this.x - this.baseX;
            const dy = this.y - this.baseY;
            this.x -= dx * 0.01;
            this.y -= dy * 0.01;

            // Mouse interaction
            if (mouse.x && mouse.y) {
                const dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
                if (dist < mouse.radius) {
                    const angle = Math.atan2(this.y - mouse.y, this.x - mouse.x);
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x += Math.cos(angle) * force * 8;
                    this.y += Math.sin(angle) * force * 8;
                }
            }

            // Subtle random movement
            this.x += (Math.random() - 0.5) * 0.5;
            this.y += (Math.random() - 0.5) * 0.5;

            // Keep within bounds loosely
            if (this.x < 0) this.x = 0;
            if (this.x > width) this.x = width;
            if (this.y < 0) this.y = 0;
            if (this.y > height) this.y = height;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function createParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        const maxDist = 120;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < maxDist) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(232,93,4, ${0.1 * (1 - dist / maxDist)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    resizeCanvas();
    createParticles();
    animate();
}