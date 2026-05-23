(function () {
    'use strict';

    const App = {
        lang: 'pt',

        t(key) {
            return CV.i18n[this.lang][key] || key;
        },

        async init() {
            this.lang = localStorage.getItem('cv-lang') || 'pt';
            this.renderAll();
            this.initTheme();
            this.initReadingProgress();
            this.initTypingEffect();
            this.initParticles();
            this.initTiltEffect();
            this.initLanguageSwitch();
            this.initShare();
            this.initContactForm();
            this.initToast();
            this.initVisitorCounter();
            this.initScrollAnimations();
            this.registerSW();
        },

        renderAll() {
            this.renderProfile();
            this.renderContact();
            this.renderEducation();
            this.renderLanguages();
            this.renderSkills();
            this.renderAbout();
            this.renderExperience();
            this.renderProjects();
            this.renderInterests();
            this.renderCertifications();
            this.renderContactForm();
            this.renderFooter();
            document.getElementById('json-ld').textContent = JSON.stringify(this.getJSONLD());
        },

        getJSONLD() {
            return {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: CV.profile.name,
                jobTitle: CV.profile.title,
                url: CV.meta.url,
                email: CV.contact[1].value,
                telephone: CV.contact[0].value,
                address: { '@type': 'PostalAddress', addressLocality: 'João Pessoa', addressRegion: 'PB' }
            };
        },

        renderProfile() {
            const p = CV.profile;
            const html = `
                <div class="profile-image-container">
                    <img src="${p.image}" alt="${p.name}" class="profile-img" loading="lazy">
                    <div class="profile-status"><span class="status-dot"></span><span class="status-text">${this.t('available')}</span></div>
                </div>
                <h1 class="profile-name">${p.name}</h1>
                <p class="profile-title"><span id="typingText">${p.title}</span><span class="typing-cursor"></span></p>
                <div class="social-links">${p.social.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" class="social-link"><i class="${s.icon}"></i></a>`).join('')}</div>`;
            document.getElementById('profileHeader').innerHTML = html;
        },

        renderContact() {
            const html = `<h2 class="section-title"><i class="fas fa-id-card"></i> ${this.t('contact')}</h2>
                <ul class="contact-list">${CV.contact.map(c => `
                    <li class="contact-item">
                        <span class="contact-icon"><i class="${c.icon}"></i></span>
                        <div class="contact-details">
                            <span class="contact-label">${this.t(c.labelKey || c.label)}</span>
                            ${c.href ? `<a href="${c.href}" class="contact-value">${c.value}</a>` : `<span class="contact-value">${c.value}</span>`}
                        </div>
                    </li>`).join('')}</ul>`;
            document.getElementById('contactSection').innerHTML = html;
        },

        renderEducation() {
            const html = `<h2 class="section-title"><i class="fas fa-graduation-cap"></i> ${this.t('education')}</h2>
                <ul class="education-list">${CV.education.map(e => `
                    <li class="education-item" data-aos="fade-up">
                        <span class="education-date">${e.date}</span>
                        <h3 class="education-degree">${this.t(e.degreeKey)}</h3>
                        <p class="education-school">${e.school}</p>
                    </li>`).join('')}</ul>`;
            document.getElementById('educationSection').innerHTML = html;
        },

        renderLanguages() {
            const html = `<h2 class="section-title"><i class="fas fa-language"></i> ${this.t('languages')}</h2>
                <div class="language-skills">${CV.languages.map(l => `
                    <div class="language-item">
                        <div class="language-header">
                            <span class="language-name">${l.name}</span>
                            <span class="language-level">${this.t(l.levelKey)}</span>
                        </div>
                        <div class="language-bar"><div class="language-progress" style="width:${l.percent}%"></div></div>
                    </div>`).join('')}</div>`;
            document.getElementById('languagesSection').innerHTML = html;
        },

        renderSkills() {
            const html = `<h2 class="section-title"><i class="fas fa-code"></i> ${this.t('skills')}</h2>
                <div class="skills-grid">${CV.skills.map(s => `
                    <div class="skill-tag" data-skill="${s.name.toLowerCase()}">
                        <i class="${s.icon}"></i><span>${s.name}</span>
                        <div class="skill-level"><div class="skill-progress" style="width:${s.percent}%"></div></div>
                    </div>`).join('')}</div>`;
            document.getElementById('skillsSection').innerHTML = html;
        },

        renderAbout() {
            const html = `<div class="section-header"><h2 class="main-section-title"><span class="title-icon"><i class="fas fa-user"></i></span> ${this.t('about')}</h2></div>
                <div class="about-content"><p class="about-text">${this.t('aboutText').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p></div>`;
            document.getElementById('aboutSection').innerHTML = html;
        },

        renderExperience() {
            const html = `<div class="section-header"><h2 class="main-section-title"><span class="title-icon"><i class="fas fa-briefcase"></i></span> ${this.t('experience')}</h2></div>
                <div class="timeline">${CV.experience.map((e, i) => `
                    <article class="timeline-item" data-aos="fade-left" data-delay="${i * 100}">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">${e.date}</span>
                            <h3 class="timeline-title">${e.title}</h3>
                            <p class="timeline-company">${e.company}</p>
                            <p class="timeline-description">${e.description}</p>
                        </div>
                    </article>`).join('')}</div>`;
            document.getElementById('experienceSection').innerHTML = html;
        },

        renderProjects() {
            const html = `<div class="section-header"><h2 class="main-section-title"><span class="title-icon"><i class="fas fa-rocket"></i></span> ${this.t('projects')}</h2></div>
                <div class="projects-grid">${CV.projects.map(p => `
                    <div class="project-card" data-aos="zoom-in">
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                        <div class="project-links">
                            <a href="${p.url}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> ${this.t('viewProject')}</a>
                            <a href="${p.source}" target="_blank" rel="noopener"><i class="fab fa-github"></i> ${this.t('sourceCode')}</a>
                        </div>
                    </div>`).join('')}</div>
                <div class="github-repos" id="githubRepos"></div>`;
            document.getElementById('projectsSection').innerHTML = html;
        },

        renderInterests() {
            const html = `<div class="section-header"><h2 class="main-section-title"><span class="title-icon"><i class="fas fa-heart"></i></span> ${this.t('interests')}</h2></div>
                <div class="interests-grid">${CV.interests.map(i => `
                    <div class="interest-card" data-aos="zoom-in"><i class="${i.icon}"></i><span>${this.t(i.key)}</span></div>`).join('')}</div>`;
            document.getElementById('interestsSection').innerHTML = html;
        },

        renderCertifications() {
            const html = `<div class="section-header"><h2 class="main-section-title"><span class="title-icon"><i class="fas fa-certificate"></i></span> ${this.t('certifications')}</h2></div>
                <div class="certifications-grid">${CV.certifications.map(c => `
                    <div class="certification-card" data-aos="flip-up">
                        <div class="cert-icon"><i class="${c.icon}"></i></div>
                        <h3>${c.title}</h3><p>${c.desc}</p>
                        <span class="cert-badge">${this.t(c.statusKey)}</span>
                    </div>`).join('')}</div>`;
            document.getElementById('certificationsSection').innerHTML = html;
        },

        renderContactForm() {
            const html = `<div class="section-header"><h2 class="main-section-title"><span class="title-icon"><i class="fas fa-paper-plane"></i></span> ${this.t('contactForm')}</h2></div>
                <div class="contact-form-wrapper">
                    <form class="contact-form" id="contactForm" action="https://formspree.io/f/yourFormID" method="POST">
                        <div class="form-row">
                            <div class="form-group"><label for="formName">${this.t('name')}</label><input type="text" id="formName" name="name" required></div>
                            <div class="form-group"><label for="formEmail">${this.t('email')}</label><input type="email" id="formEmail" name="_replyto" required></div>
                        </div>
                        <div class="form-group"><label for="formMessage">${this.t('message')}</label><textarea id="formMessage" name="message" rows="5" required></textarea></div>
                        <button type="submit" class="form-submit"><i class="fas fa-paper-plane"></i> ${this.t('send')}</button>
                    </form>
                </div>`;
            document.getElementById('contactFormSection').innerHTML = html;
        },

        renderFooter() {
            document.getElementById('footerText').textContent = this.t('footer');
        },

        initTheme() {
            const toggle = document.querySelector('.theme-toggle');
            const icon = toggle.querySelector('i');
            const saved = localStorage.getItem('cv-theme-preference');
            const theme = saved || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
            this.setTheme(theme, icon);
            toggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                this.setTheme(next, icon);
            });
        },

        setTheme(theme, icon) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('cv-theme-preference', theme);
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
                icon.style.color = theme === 'dark' ? '#f39c12' : '#6c5ce7';
            }
        },

        initReadingProgress() {
            const bar = document.getElementById('readingProgress');
            window.addEventListener('scroll', () => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                bar.style.width = progress + '%';
            });
        },

        initTypingEffect() {
            const el = document.getElementById('typingText');
            if (!el) return;
            const text = el.textContent;
            el.textContent = '';
            let i = 0;
            const type = () => {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 50 + Math.random() * 50);
                }
            };
            setTimeout(type, 500);
        },

        initParticles() {
            const canvas = document.getElementById('particles-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let w, h, particles = [];

            function resize() {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            }

            function createParticles(count) {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const color = isDark ? 'rgba(0, 212, 170, ' : 'rgba(3, 169, 244, ';
                particles = [];
                for (let i = 0; i < count; i++) {
                    particles.push({
                        x: Math.random() * w, y: Math.random() * h,
                        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
                        r: Math.random() * 3 + 1,
                        o: Math.random() * 0.5 + 0.1,
                        color: color + (Math.random() * 0.3 + 0.1) + ')'
                    });
                }
            }

            function draw() {
                ctx.clearRect(0, 0, w, h);
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0 || p.x > w) p.vx *= -1;
                    if (p.y < 0 || p.y > h) p.vy *= -1;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();

                    particles.forEach(p2 => {
                        const dx = p.x - p2.x, dy = p.y - p2.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 120) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = `rgba(3, 169, 244, ${0.1 * (1 - dist / 120)})`;
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    });
                });
                requestAnimationFrame(draw);
            }

            resize();
            createParticles(80);
            draw();
            window.addEventListener('resize', () => { resize();
                createParticles(80); });

            const observer = new MutationObserver(() => setTimeout(() => createParticles(80), 100));
            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        },

        initTiltEffect() {
            document.addEventListener('mousemove', (e) => {
                document.querySelectorAll('.timeline-item, .project-card, .certification-card').forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left, y = e.clientY - rect.top;
                    const cx = rect.width / 2, cy = rect.height / 2;
                    const dx = (x - cx) / cx, dy = (y - cy) / cy;
                    el.style.transform = `perspective(500px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`;
                });
            });
            document.addEventListener('mouseleave', () => {
                document.querySelectorAll('.timeline-item, .project-card, .certification-card').forEach(el => {
                    el.style.transform = '';
                });
            });
        },

        initLanguageSwitch() {
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.lang = btn.dataset.lang;
                    localStorage.setItem('cv-lang', this.lang);
                    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    document.documentElement.lang = this.lang === 'en' ? 'en' : 'pt-br';
                    this.renderAll();
                });
            });
            document.querySelector(`.lang-btn[data-lang="${this.lang}"]`).classList.add('active');
            document.documentElement.lang = this.lang === 'en' ? 'en' : 'pt-br';
        },

        initShare() {
            const shareBtn = document.querySelector('.share-btn');
            if (!shareBtn) return;
            let menu = document.createElement('div');
            menu.className = 'share-options';
            menu.innerHTML = `
                <button class="share-option" data-share="linkedin"><i class="fab fa-linkedin"></i> ${this.t('shareLinkedIn')}</button>
                <button class="share-option" data-share="email"><i class="fas fa-envelope"></i> ${this.t('shareEmail')}</button>
                <button class="share-option" data-share="native"><i class="fas fa-share-alt"></i> ${this.t('share')}</button>`;
            shareBtn.parentElement.appendChild(menu);

            shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                menu.classList.toggle('open');
            });

            document.addEventListener('click', () => menu.classList.remove('open'));

            menu.querySelectorAll('.share-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(CV.profile.name + ' - ' + CV.profile.title);
                    const actions = {
                        whatsapp: () => window.open(`https://wa.me/?text=${text}%20${url}`, '_blank'),
                        linkedin: () => window.open(`https://linkedin.com/sharing/share-offsite/?url=${url}`, '_blank'),
                        email: () => window.location.href = `mailto:?subject=${text}&body=${url}`,
                        native: () => {
                            if (navigator.share) navigator.share({ title: CV.profile.name, text: CV.profile.title, url: window.location.href });
                            else this.showToast('Compartilhamento nativo não disponível', 'error');
                        }
                    };
                    (actions[opt.dataset.share] || (() => {}))();
                    menu.classList.remove('open');
                });
            });
        },

        initVoice() {
            const btn = document.querySelector('.voice-toggle');
            if (!btn || !('speechSynthesis' in window)) {
                if (btn) btn.style.display = 'none';
                return;
            }
            let speaking = false;
            btn.addEventListener('click', () => {
                if (speaking) {
                    window.speechSynthesis.cancel();
                    speaking = false;
                    btn.classList.remove('speaking');
                    btn.querySelector('i').className = 'fas fa-volume-up';
                } else {
                    const text = this.getAllText();
                    if (!text) return;
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.lang = this.lang === 'en' ? 'en-US' : 'pt-BR';
                    utterance.rate = 0.9;
                    utterance.onend = () => {
                        speaking = false;
                        btn.classList.remove('speaking');
                        btn.querySelector('i').className = 'fas fa-volume-up';
                    };
                    window.speechSynthesis.speak(utterance);
                    speaking = true;
                    btn.classList.add('speaking');
                    btn.querySelector('i').className = 'fas fa-stop';
                }
            });
        },

        getAllText() {
            const main = document.querySelector('.cv-main');
            if (!main) return '';
            return main.textContent.replace(/\s+/g, ' ').trim();
        },

        initContactForm() {
            const form = document.getElementById('contactForm');
            if (!form) return;
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = form.querySelector('.form-submit');
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                try {
                    const data = new FormData(form);
                    const resp = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
                    if (resp.ok) {
                        this.showToast('Mensagem enviada com sucesso!', 'success');
                        form.reset();
                    } else {
                        this.showToast('Erro ao enviar. Tente novamente.', 'error');
                    }
                } catch {
                    this.showToast('Erro de conexão. Verifique sua internet.', 'error');
                }
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + this.t('send');
            });
        },

        initToast() {
            this.toastContainer = document.getElementById('toastContainer');
        },

        showToast(message, type = 'info') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            const icons = { success: 'fas fa-check-circle', error: 'fas fa-times-circle', info: 'fas fa-info-circle' };
            toast.innerHTML = `<i class="${icons[type] || icons.info}"></i> ${message}`;
            this.toastContainer.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-20px)';
                toast.style.transition = '0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        },

        initVisitorCounter() {
            let count = parseInt(localStorage.getItem('cv-visitor-count') || '0');
            count++;
            localStorage.setItem('cv-visitor-count', count);
            document.getElementById('visitorCount').textContent = count;
        },

        initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('[data-aos]').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                const delay = parseInt(el.dataset.delay) || 0;
                setTimeout(() => observer.observe(el), delay);
            });

            this.animateProgressBars();
        },

        animateProgressBars() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.language-progress, .skill-progress').forEach(bar => {
                            const w = bar.style.width;
                            bar.style.width = '0';
                            setTimeout(() => { bar.style.width = w; }, 200);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            document.querySelectorAll('.language-skills, .skills-grid').forEach(s => observer.observe(s));
        },

        async loadGitHubRepos() {
            const container = document.getElementById('githubRepos');
            if (!container || !CV.github.showRepos) return;
            try {
                const resp = await fetch(`https://api.github.com/users/${CV.github.username}/repos?sort=updated&per_page=${CV.github.repoCount}`);
                if (!resp.ok) return;
                const repos = await resp.json();
                if (!repos.length) return;
                const html = `<div class="section-header" style="margin-top:20px"><h3 style="font-size:1rem;color:var(--text-secondary)"><i class="fab fa-github"></i> Últimos Repositórios</h3></div>
                    <div class="projects-grid">${repos.map(r => `
                        <div class="project-card" style="padding:20px">
                            <h3>${r.name}</h3>
                            <p>${r.description || 'Sem descrição'}</p>
                            <div class="project-tech">${r.language ? `<span>${r.language}</span>` : ''}<span>⭐ ${r.stargazers_count}</span></div>
                            <div class="project-links"><a href="${r.html_url}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Ver</a></div>
                        </div>`).join('')}</div>`;
                container.innerHTML = html;
            } catch { /* GitHub API indisponível ou usuário inexistente */ }
        },

        registerSW() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('sw.js').catch(() => {});
            }
        }
    };

    document.addEventListener('DOMContentLoaded', () => App.init());
})();
