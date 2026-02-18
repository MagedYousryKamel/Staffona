// Routing Logic
const routes = {
    '/': 'page-home',
    '/about': 'page-about',
    '/services': 'page-services',
    '/why-us': 'page-why-us',
    '/contact': 'page-contact',
    '/eor-egypt': 'page-eor-egypt',
    '/payroll-egypt': 'page-payroll-egypt',
    '/recruitment-egypt': 'page-recruitment-egypt',
    '/resources': 'page-resource-center',
    '/resources/hiring-guide': 'page-article-hiring-guide',
    '/resources/hiring-cost': 'page-article-hiring-cost',
    '/resources/labor-law': 'page-article-labor-law',
    '/resources/eor-vs-peo': 'page-article-eor-vs-peo',
    '/resources/payroll-taxes': 'page-article-payroll-taxes',
    '/resources/gcc-hiring': 'page-article-gcc-hiring',
    '/resources/social-insurance': 'page-article-social-insurance',
    '/resources/termination-rules': 'page-article-termination-rules',
    '/resources/employee-benefits': 'page-article-employee-benefits',
    '/resources/misclassification-risks': 'page-article-misclassification-risks',
    '/privacy': 'page-privacy',
    '/terms': 'page-terms'
};

const pageMetadata = {
    '/': {
        title: 'Employer of Record (EOR) & Payroll Outsourcing in Egypt | Staffona',
        description: 'Employer of Record (EOR) Services in Egypt for Foreign Companies. Hire employees in Egypt without opening a company. Compliance, Payroll, and Recruitment.'
    },
    '/about': {
        title: 'About Staffona | Your Strategic HR & Compliance Partner',
        description: 'Learn about Staffona, a premier business support firm specializing in comprehensive HR management and compliance in Egypt.'
    },
    '/services': {
        title: 'Our Services | HR Outsourcing, Payroll & Compliance in Egypt',
        description: 'Explore our range of services including HR outsourcing, payroll management, recruitment, and back-office support in Egypt.'
    },
    '/why-us': {
        title: 'Why Choose Staffona | Cross-Border HR Expertise in Egypt',
        description: 'Discover why industry leaders choose Staffona for their HR and compliance needs in Egypt and across borders.'
    },
    '/contact': {
        title: 'Contact Staffona | Get an HR & Compliance Consultation',
        description: 'Reach out to our specialists for a consultation on EOR, payroll, and recruitment services in Egypt.'
    },
    '/eor-egypt': {
        title: 'Employer of Record (EOR) in Egypt – Hire Employees Without Opening a Company',
        description: 'Learn how to hire employees in Egypt without a legal entity. Our EOR services handle payroll, tax, and labor law compliance.'
    },
    '/payroll-egypt': {
        title: 'Payroll Outsourcing Services in Egypt for International Employers',
        description: 'Expert payroll outsourcing in Egypt. We handle income tax, social insurance, and compliance filings for your Egyptian workforce.'
    },
    '/recruitment-egypt': {
        title: 'Recruitment Services in Egypt for Foreign Companies',
        description: 'Find top talent in Egypt with Staffona. Specialized recruitment and executive search for international businesses.'
    },
    '/resources': {
        title: 'Hiring in Egypt Resource Center | Staffona Insights',
        description: 'Comprehensive guides and articles on labor law, payroll taxes, and hiring practices in Egypt for foreign employers.'
    },
    '/resources/hiring-guide': {
        title: 'Complete Guide to Hiring Employees in Egypt (2026 Edition)',
        description: 'Everything you need to know about hiring in Egypt: from recruitment to onboarding and compliance.'
    },
    '/resources/hiring-cost': {
        title: 'Cost of Hiring an Employee in Egypt – Full Breakdown',
        description: 'Detailed breakdown of employee costs in Egypt, including salaries, taxes, and social insurance.'
    },
    '/resources/labor-law': {
        title: 'Egypt Labor Law Explained for Foreign Employers',
        description: 'A comprehensive guide to Egyptian Labor Law, ensuring your business stays compliant with local regulations.'
    },
    '/resources/eor-vs-peo': {
        title: 'EOR vs PEO vs Opening a Company in Egypt',
        description: 'Compare different ways to hire in Egypt and find the best solution for your business expansion.'
    },
    '/resources/payroll-taxes': {
        title: 'Payroll Taxes in Egypt – Employer Guide',
        description: 'Understand employer tax obligations in Egypt, including income tax brackets and reporting requirements.'
    },
    '/resources/gcc-hiring': {
        title: 'How GCC Companies Can Hire in Egypt Legally',
        description: 'A guide for companies in UAE, KSA, and GCC on how to legally hire and manage teams in Egypt.'
    },
    '/resources/social-insurance': {
        title: 'Social Insurance in Egypt Explained',
        description: 'Detailed explanation of Egypt\'s social insurance system and employer contribution requirements.'
    },
    '/resources/termination-rules': {
        title: 'Termination Rules in Egypt – Legal Guide',
        description: 'Understanding the legal requirements and risks associated with employee termination in Egypt.'
    },
    '/resources/employee-benefits': {
        title: 'Employee Benefits & Leave Entitlements in Egypt',
        description: 'Guide to statutory and common employee benefits, leave entitlements, and holidays in Egypt.'
    },
    '/resources/misclassification-risks': {
        title: 'Risks of Misclassifying Contractors in Egypt',
        description: 'Learn about the legal and financial risks of misclassifying employees as independent contractors in Egypt.'
    },
    '/privacy': {
        title: 'Privacy Policy | Staffona',
        description: 'Staffona Privacy Policy. Learn how we handle your data.'
    },
    '/terms': {
        title: 'Terms of Service | Staffona',
        description: 'Staffona Terms of Service. Learn about our service agreement.'
    }
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

    // Update metadata
    const metadata = pageMetadata[hash] || pageMetadata['/'];
    document.title = metadata.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', metadata.description);
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
