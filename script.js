// script.js - Multi-page Translation System
class Translator {
    constructor() {
        this.currentLang = this.getSavedLanguage() || 'en';
        this.translations = {
            en: this.getEnglishTranslations(),
            ar: this.getArabicTranslations(),
            ru: this.getRussianTranslations(),
            fr: this.getFrenchTranslations()
        };
        this.initialize();
    }

    initialize() {
        // Wait for DOM to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.applyLanguage());
        } else {
            this.applyLanguage();
        }
        
        // Add language selector if it doesn't exist
        this.addLanguageSelector();
    }

    getSavedLanguage() {
        return localStorage.getItem('preferredLanguage');
    }

    saveLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
        this.currentLang = lang;
        this.applyLanguage();
    }

    addLanguageSelector() {
        // Check if selector already exists
        if (document.getElementById('language-selector')) return;

        // Create selector HTML
        const selectorHtml = `
        <div id="language-selector" style="position: fixed; top: 20px; right: 20px; z-index: 1000; background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <select id="lang-select" style="padding: 5px 10px; border: 1px solid #ddd; border-radius: 3px;">
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="fr">🇫🇷 Français</option>
            </select>
        </div>
        `;

        // Add to page
        document.body.insertAdjacentHTML('beforeend', selectorHtml);
        
        // Set current language
        document.getElementById('lang-select').value = this.currentLang;
        
        // Add event listener
        document.getElementById('lang-select').addEventListener('change', (e) => {
            this.saveLanguage(e.target.value);
        });
    }

    applyLanguage() {
        const translation = this.translations[this.currentLang];
        
        // Update all translatable elements
        this.translateElement('title', translation.pageTitle);
        this.translateElement('h1', translation.pageTitle);
        
        // Update navigation
        this.updateNavigation(translation.navigation);
        
        // Update all data-translate elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                element.textContent = translation[key];
            }
        });
        
        // Update all data-translate-placeholder elements
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translation[key]) {
                element.placeholder = translation[key];
            }
        });
        
        // Update language selector if it exists
        const langSelect = document.getElementById('lang-select');
        if (langSelect) {
            langSelect.value = this.currentLang;
        }
    }

    translateElement(selector, text) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }

    updateNavigation(navTranslations) {
        // Update navigation links text
        Object.keys(navTranslations).forEach(key => {
            const link = document.querySelector(`a[href*="${key}"]`);
            if (link) {
                link.textContent = navTranslations[key];
            }
        });
    }

    // English Translations
    getEnglishTranslations() {
        return {
            // Page Titles
            pageTitle: this.getPageTitle('en'),
            
            // Navigation
            navigation: {
                'index.html': 'Home',
                'projects.html': 'Projects',
                'research.html': 'Research',
                'contact.html': 'Contact'
            },
            
            // Common Elements
            'name': 'DJELTI ILYES',
            'title': 'Doctoral Candidate in Artificial Intelligence & Machine Learning',
            'age': 'Age: 24 years',
            'profile': 'Personal Profile',
            'profile_text': 'A highly motivated 24-year-old Computer Science graduate with a Master\'s degree specializing in Artificial Intelligence for the Internet of Things. Demonstrated excellence through a near-perfect thesis score (19.5/20) and award-winning project work. Possesses strong practical skills in AI/ML, IoT systems, VR/AR, and software development, with a proven ability to conduct innovative research aimed at solving real-world challenges. Seeking to contribute to advanced doctoral research in Artificial Intelligence and Machine Learning.',
            'education': 'Education',
            'research': 'Research Experience',
            'skills': 'Technical Skills',
            'certifications': 'Certifications',
            'achievements': 'Achievements',
            'languages': 'Languages',
            'interests': 'Research Interests',
            'copyright': '© 2024 DJELTI ILYES. All rights reserved.',
            'view_resume': 'View Resume',
            'see_projects': 'See Projects',
            'download_pdf': 'Download PDF',
            'contact_me': 'Contact Me'
        };
    }

    // Arabic Translations
    getArabicTranslations() {
        return {
            pageTitle: this.getPageTitle('ar'),
            navigation: {
                'index.html': 'الرئيسية',
                'projects.html': 'المشاريع',
                'research.html': 'البحث',
                'contact.html': 'اتصل'
            },
            'name': 'جليتي إلياس',
            'title': 'مرشح دكتوراه في الذكاء الاصطناعي وتعلم الآلة',
            'age': 'العمر: 24 سنة',
            'profile': 'الملف الشخصي',
            'profile_text': 'خريج علوم حاسوب يبلغ من العمر 24 عامًا شديد التحفيز، حاصل على درجة الماجستير في تخصص الذكاء الاصطناعي لإنترنت الأشياء. أظهر تميزًا من خلال درجة أطروحة شبه مثالية (19.5/20) وأعمال مشاريع حائزة على جوائز. يمتلك مهارات عملية قوية في الذكاء الاصطناعي/تعلم الآلة، أنظمة إنترنت الأشياء، الواقع الافتراضي/المعزز، وتطوير البرمجيات، مع قدرة مثبتة على إجراء أبحاث مبتكرة تهدف إلى حل التحديات الواقعية. يساهم في أبحاث الدكتوراه المتقدمة في الذكاء الاصطناعي وتعلم الآلة.',
            'education': 'التعليم',
            'research': 'خبرة البحث',
            'skills': 'المهارات التقنية',
            'certifications': 'الشهادات',
            'achievements': 'الإنجازات',
            'languages': 'اللغات',
            'interests': 'اهتمامات البحث',
            'copyright': '© 2024 جليتي إلياس. جميع الحقوق محفوظة.',
            'view_resume': 'عرض السيرة',
            'see_projects': 'رؤية المشاريع',
            'download_pdf': 'تحميل PDF',
            'contact_me': 'اتصل بي'
        };
    }

    // Russian Translations
    getRussianTranslations() {
        return {
            pageTitle: this.getPageTitle('ru'),
            navigation: {
                'index.html': 'Главная',
                'projects.html': 'Проекты',
                'research.html': 'Исследования',
                'contact.html': 'Контакты'
            },
            'name': 'Джельти Ильес',
            'title': 'Кандидат в докторантуру по Искусственному Интеллекту и Машинному Обучению',
            'age': 'Возраст: 24 года',
            'profile': 'Личный профиль',
            'profile_text': 'Высокомотивированный 24-летний выпускник факультета компьютерных наук со степенью магистра, специализирующийся на искусственном интеллекте для Интернета вещей. Продемонстрировал отличные результаты, получив почти идеальную оценку за магистерскую диссертацию (19.5/20) и за проекты, отмеченные наградами. Обладает практическими навыками в области ИИ/ML, IoT-систем, VR/AR и разработки программного обеспечения, подтвержденными способностью проводить инновационные исследования для решения реальных задач. Стремлюсь внести вклад в перспективные докторские исследования в области искусственного интеллекта и машинного обучения.',
            'education': 'Образование',
            'research': 'Опыт исследований',
            'skills': 'Технические навыки',
            'certifications': 'Сертификаты',
            'achievements': 'Достижения',
            'languages': 'Языки',
            'interests': 'Научные интересы',
            'copyright': '© 2024 Джельти Ильес. Все права защищены.',
            'view_resume': 'Посмотреть резюме',
            'see_projects': 'Посмотреть проекты',
            'download_pdf': 'Скачать PDF',
            'contact_me': 'Связаться'
        };
    }

    // French Translations
    getFrenchTranslations() {
        return {
            pageTitle: this.getPageTitle('fr'),
            navigation: {
                'index.html': 'Accueil',
                'projects.html': 'Projets',
                'research.html': 'Recherche',
                'contact.html': 'Contact'
            },
            'name': 'DJELTI ILYES',
            'title': 'Candidat au Doctorat en Intelligence Artificielle et Apprentissage Automatique',
            'age': 'Âge : 24 ans',
            'profile': 'Profil Personnel',
            'profile_text': 'Diplômé en informatique hautement motivé de 24 ans, titulaire d\'un master spécialisé en Intelligence Artificielle pour l\'Internet des Objets. A démontré son excellence grâce à une note de mémoire quasi parfaite (19.5/20) et à des travaux de projet primés. Possède de solides compétences pratiques en IA/ML, systèmes IoT, réalité virtuelle/augmentée et développement logiciel, avec une capacité avérée à mener des recherches innovantes visant à résoudre des défis réels. Cherche à contribuer à des recherches doctorales avancées en Intelligence Artificielle et Apprentissage Automatique.',
            'education': 'Éducation',
            'research': 'Expérience de Recherche',
            'skills': 'Compétences Techniques',
            'certifications': 'Certifications',
            'achievements': 'Réalisations',
            'languages': 'Langues',
            'interests': 'Intérêts de Recherche',
            'copyright': '© 2026 DJELTI ILYES. Tous droits réservés.',
            'view_resume': 'Voir le CV',
            'see_projects': 'Voir les Projets',
            'download_pdf': 'Télécharger PDF',
            'contact_me': 'Me Contacter'
        };
    }

    getPageTitle(lang) {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        const titles = {
            'index.html': {
                'en': 'DJELTI ILYES | AI Researcher',
                'ar': 'جليتي إلياس | باحث في الذكاء الاصطناعي',
                'ru': 'Джельти Ильес | Исследователь ИИ',
                'fr': 'DJELTI ILYES | Chercheur en IA'
            },
            'projects.html': {
                'en': 'Projects | DJELTI ILYES',
                'ar': 'المشاريع | جلطي إلياس',
                'ru': 'Проекты | Джельти Ильес',
                'fr': 'Projets | DJELTI ILYES'
            },
            'research.html': {
                'en': 'Research | DJELTI ILYES',
                'ar': 'البحث | جلطي إلياس',
                'ru': 'Исследования | Джельти Ильес',
                'fr': 'Recherche | DJELTI ILYES'
            },
            'contact.html': {
                'en': 'Contact | DJELTI ILYES',
                'ar': 'اتصل | جلطي إلياس',
                'ru': 'Контакты | Джельти Ильес',
                'fr': 'Contact | DJELTI ILYES'
            }
        };
        
        return titles[page]?.[lang] || titles['index.html'][lang];
    }
}

// Initialize the translator when the script loads
const translator = new Translator();

// Make translator available globally for debugging
window.translator = translator;

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Translator };
}