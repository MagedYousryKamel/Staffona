// Routing Logic
const routes = {
    '/': 'page-home',
    '/about': 'page-about',
    '/services': 'page-services',
    '/why-us': 'page-why-us',
    '/contact': 'page-contact'
};

function router() {
    const hash = window.location.hash.replace('#', '') || '/';
    const pageId = routes[hash] || 'page-home';

    // Hide all pages
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show active page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.remove('hidden');
    }

    // Update nav links
    updateActiveNavLinks(hash);

    // Scroll to top
    window.scrollTo(0, 0);
}

function updateActiveNavLinks(path) {
    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
        const linkPath = link.getAttribute('data-path');
        if (linkPath === path) {
            link.classList.add('text-primary', 'dark:text-secondary-bright');
            link.classList.remove('text-slate-600', 'dark:text-slate-400');
        } else {
            link.classList.remove('text-primary', 'dark:text-secondary-bright');
            link.classList.add('text-slate-600', 'dark:text-slate-400');
        }
    });
}

// Theme Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
    document.querySelectorAll('.sun-icon').forEach(icon => {
        isDark ? icon.classList.remove('hidden') : icon.classList.add('hidden');
    });
    document.querySelectorAll('.moon-icon').forEach(icon => {
        isDark ? icon.classList.add('hidden') : icon.classList.remove('hidden');
    });
}

// Mobile Menu Logic
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const isClosed = menu.classList.contains('translate-x-full');

    if (isClosed) {
        menu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
        document.querySelector('.menu-icon').classList.add('hidden');
        document.querySelector('.close-icon').classList.remove('hidden');
    } else {
        closeMenu();
    }
}

function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.add('translate-x-full');
    document.body.style.overflow = '';
    document.querySelector('.menu-icon').classList.remove('hidden');
    document.querySelector('.close-icon').classList.add('hidden');
}

// Contact Form Logic
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = 'Sending...';

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    document.getElementById('contact-form-container').classList.add('hidden');
                    document.getElementById('contact-success').classList.remove('hidden');
                    form.reset();
                } else {
                    alert("Something went wrong. Please try again.");
                }

            } catch (error) {
                alert("Network error. Please try again.");
            }

            btn.disabled = false;
            btn.innerHTML = originalText;
        });
    }
}


function resetContactForm() {
    document.getElementById('contact-form-container').classList.remove('hidden');
    document.getElementById('contact-success').classList.add('hidden');
}

// Initialize
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    router();
    initContactForm();

    // Event Listeners
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
    document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
});
