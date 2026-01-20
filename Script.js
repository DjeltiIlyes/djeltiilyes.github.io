// script.js
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Language switcher
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            
            // Hide all language versions
            document.querySelectorAll('.language-version').forEach(version => {
                version.classList.remove('active');
            });
            
            // Show selected language version
            const targetVersion = document.getElementById(`${selectedLang}-version`);
            if (targetVersion) {
                targetVersion.classList.add('active');
            }
            
            // Update page title based on language
            const pageTitles = {
                'en': 'DJELTI ILYES | AI Researcher',
                'ru': 'ДЖЕЛЬТИ ИЛЬЕС | ИИ Исследователь',
                'ar': 'دجلي إلياس | باحث في الذكاء الاصطناعي',
                'fr': 'DJELTI ILYES | Chercheur en IA'
            };
            
            if (pageTitles[selectedLang]) {
                document.title = pageTitles[selectedLang];
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Print/PDF button functionality
    document.querySelectorAll('.btn-print').forEach(button => {
        button.addEventListener('click', function() {
            window.print();
        });
    });
    
    // Add animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements you want to animate
    document.querySelectorAll('.resume-section, .project-item, .skill-category').forEach(el => {
        observer.observe(el);
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Print styles */
    @media print {
        .navbar, .hero, .footer, .btn-print, .language-switcher {
            display: none !important;
        }
        
        body {
            background: white !important;
        }
        
        .resume-card {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 20px !important;
        }
        
        .container {
            max-width: 100% !important;
            padding: 0 !important;
        }
    }
`;
document.head.appendChild(style);
