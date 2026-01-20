// script.js - Translation System
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Language translations
    const translations = {
        en: {
            // Page Titles
            'title': 'DJELTI ILYES | AI Researcher',
            'title_line': 'Doctoral Candidate in AI & Machine Learning',
            'projects_title': 'Projects | DJELTI ILYES',
            'research_title': 'Research | DJELTI ILYES',
            'contact_title': 'Contact | DJELTI ILYES',
            
            // Navigation
            'nav_home': 'Home',
            'nav_projects': 'Projects',
            'nav_research': 'Research',
            'nav_contact': 'Contact',
            
            // Hero Section
            'name': 'DJELTI ILYES',
            'age': 'Age: 24 years',
            'tagline': 'Specializing in AI for IoT with focus on assistive technologies',
            'btn_view_resume': 'View Resume',
            'btn_see_projects': 'See Projects',
            'btn_save_pdf': 'Save as PDF',
            'btn_contact_me': 'Contact Me',
            
            // Resume Sections
            'section_profile': 'Personal Profile',
            'profile_text': 'A highly motivated 24-year-old Computer Science graduate with a Master\'s degree specializing in Artificial Intelligence for the Internet of Things. Demonstrated excellence through a near-perfect thesis score (19.5/20) and award-winning project work. Possesses strong practical skills in AI/ML, IoT systems, VR/AR, and software development, with a proven ability to conduct innovative research aimed at solving real-world challenges. Seeking to contribute to advanced doctoral research in Artificial Intelligence and Machine Learning.',
            
            'section_education': 'Education',
            'edu_masters': 'Master of Computer Science – AI for Internet of Things',
            'edu_bachelor': 'Bachelor of Computer Systems',
            'grade': 'Grade',
            'excellent': 'Excellent',
            'very_good': 'Very Good',
            'thesis': 'Thesis',
            'thesis_title': 'Intelligent Navigation System for the Blind and Visually Impaired',
            
            'section_research': 'Research Experience',
            'project_lunav_title': 'Master\'s Thesis: LUNAV Navigation System (2023–2024)',
            'project_lunav_1': 'Developed AI-powered wearable device for visually impaired individuals',
            'project_lunav_2': 'Integrated computer vision (OpenCV/TensorFlow), AR, and IoT sensors',
            'project_lunav_3': 'Implemented real-time obstacle detection and spatial audio navigation',
            'project_desertcool_title': 'Competition Project: DesertCool (2023)',
            'project_desertcool_1': '2nd Place in "The Call of Tech" National Competition',
            'project_desertcool_2': 'Designed IoT-based sustainable cooling system for arid environments',
            'project_desertcool_3': 'Implemented sensor networks for climate monitoring and control',
            
            'section_skills': 'Technical Skills',
            'skill_ai': 'AI & Machine Learning',
            'skill_ai_list': 'Python, TensorFlow, Computer Vision, Neural Networks',
            'skill_iot': 'IoT & Embedded Systems',
            'skill_iot_list': 'Arduino, Raspberry Pi, Sensor Integration, MQTT',
            'skill_programming': 'Programming',
            'skill_programming_list': 'Python (Advanced), C/C++ (Intermediate), Java (Basic)',
            'skill_tools': 'Tools & Platforms',
            'skill_tools_list': 'Git, Linux, Docker, MATLAB, Unity',
            
            'section_achievements': 'Achievements',
            'achievement_1': 'Master\'s Thesis Score: 19.5/20 (Top 5% of cohort)',
            'achievement_2': '2nd Place, "The Call of Tech" National Competition (2023)',
            'achievement_3': 'Active Member, COD\'IN Scientific Research Club (2021–2024)',
            'achievement_4': 'Participant, Algeria 2.0 National Tech Forum (2024)',
            'achievement_5': 'Attendee, Algeria Job Summit 2025',
            
            'section_languages': 'Languages',
            'lang_arabic': 'Arabic',
            'lang_english': 'English',
            'lang_french': 'French',
            'lang_native': 'Native',
            'lang_fluent': 'Fluent',
            
            'section_interests': 'Research Interests',
            'interest_1': 'ML for Computer Vision & Sensor Data',
            'interest_2': 'Edge AI & Distributed IoT Systems',
            'interest_3': 'AI for Assistive Technologies',
            'interest_4': 'Sustainable Computing & Environmental AI',
            
            // Projects Page
            'projects_header': 'My Projects',
            'projects_description': 'Innovative solutions combining AI, IoT, and practical engineering',
            'project1_title': 'LUNAV - Intelligent Navigation System',
            'project1_subtitle': 'AI-Powered Navigation for the Visually Impaired',
            'project1_problem': 'Problem Statement',
            'project1_problem_text': 'Over 285 million people worldwide are visually impaired, facing daily challenges with independent navigation.',
            'project1_solution': 'Solution',
            'project1_solution_text': 'Developed a wearable AI-powered device combining real-time computer vision, spatial audio feedback, and haptic vibrations.',
            'project1_tech': 'Technical Implementation',
            'project1_tech_list': 'Computer Vision (YOLO), 3D Spatial Audio, Raspberry Pi 4, Ultrasonic sensors',
            'project1_results': 'Results',
            'project1_results_list': '95% obstacle detection accuracy, Real-time 30 FPS processing, 8+ hour battery life',
            
            'project2_title': 'DesertCool',
            'project2_subtitle': 'Sustainable Cooling Solution for Arid Regions',
            'project2_description': 'IoT-based passive cooling system using evaporative techniques with smart monitoring.',
            
            // Research Page
            'research_header': 'Research Profile',
            'research_description': 'Doctoral Research Interests and Academic Contributions',
            'research_focus_title': 'Research Focus',
            'research_focus_text': 'My research lies at the intersection of Artificial Intelligence, Internet of Things, and Human-Centered Computing. I am particularly interested in developing intelligent systems that address real-world challenges in accessibility, sustainability, and healthcare.',
            
            // Contact Page
            'contact_header': 'Contact Information',
            'contact_description': 'For academic collaborations, research discussions, or professional inquiries',
            'contact_academic': 'Academic Inquiries',
            'contact_academic_text': 'For research collaborations, doctoral program information, or academic discussions',
            'contact_professional': 'Professional Opportunities',
            'contact_professional_text': 'Research positions, internships, or collaborative projects in AI/ML fields',
            'contact_form_name': 'Your Name *',
            'contact_form_email': 'Your Email *',
            'contact_form_type': 'Inquiry Type *',
            'contact_form_message': 'Message *',
            'contact_form_send': 'Send Message',
            
            // Footer
            'footer_copyright': '© 2026 DJELTI ILYES. All rights reserved.',
            'footer_tagline': 'AI Researcher | Doctoral Candidate in AI & Machine Learning'
        },
        
        ar: {
            'title': 'جلطي إلياس | باحث في الذكاء الاصطناعي',
            'title_line': 'مرشح دكتوراه في الذكاء الاصطناعي وتعلم الآلة',
            'projects_title': 'المشاريع | جلطي إلياس',
            'research_title': 'البحث | جلطي إلياس',
            'contact_title': 'اتصل | جلطي إلياس',
            'nav_home': 'الرئيسية',
            'nav_projects': 'المشاريع',
            'nav_research': 'البحث',
            'nav_contact': 'اتصل',
            'name': 'جلطي إلياس',
            'age': 'العمر: 24 سنة',
            'tagline': 'متخصص في الذكاء الاصطناعي لإنترنت الأشياء مع التركيز على التقنيات المساعدة',
            'btn_view_resume': 'عرض السيرة الذاتية',
            'btn_see_projects': 'رؤية المشاريع',
            'btn_save_pdf': 'حفظ كـ PDF',
            'btn_contact_me': 'اتصل بي',
            'section_profile': 'الملف الشخصي',
            'profile_text': 'خريج علوم حاسوب يبلغ من العمر 24 عامًا شديد التحفيز، حاصل على درجة الماجستير في تخصص الذكاء الاصطناعي لإنترنت الأشياء. أظهر تميزًا من خلال درجة أطروحة شبه مثالية (19.5/20) وأعمال مشاريع حائزة على جوائز. يمتلك مهارات عملية قوية في الذكاء الاصطناعي/تعلم الآلة، أنظمة إنترنت الأشياء، الواقع الافتراضي/المعزز، وتطوير البرمجيات، مع قدرة مثبتة على إجراء أبحاث مبتكرة تهدف إلى حل التحديات الواقعية. يساهم في أبحاث الدكتوراه المتقدمة في الذكاء الاصطناعي وتعلم الآلة.',
            'section_education': 'التعليم',
            'edu_masters': 'ماجستير في علوم الحاسوب – الذكاء الاصطناعي لإنترنت الأشياء',
            'edu_bachelor': 'بكالوريوس في أنظمة الحاسوب',
            'grade': 'الدرجة',
            'excellent': 'ممتاز',
            'very_good': 'جيد جدًا',
            'thesis': 'الأطروحة',
            'thesis_title': 'نظام الملاحة الذكي للمكفوفين وضعاف البصر',
            'section_research': 'خبرة البحث',
            'project_lunav_title': 'أطروحة الماجستير: نظام الملاحة LUNAV (2023–2024)',
            'project_lunav_1': 'طورت جهازًا قابلاً للارتداء مدعومًا بالذكاء الاصطناعي للأشخاص ذوي الإعاقة البصرية',
            'project_lunav_2': 'دمجت الرؤية الحاسوبية (OpenCV/TensorFlow)، الواقع المعزز، وأجهزة استشعار إنترنت الأشياء',
            'project_lunav_3': 'نفذت كشف العوائق في الوقت الفعلي والملاحة الصوتية المكانية',
            'project_desertcool_title': 'مشروع المسابقة: DesertCool (2023)',
            'project_desertcool_1': 'المركز الثاني في مسابقة "The Call of Tech" الوطنية',
            'project_desertcool_2': 'صممت نظام تبريد مستدام قائم على إنترنت الأشياء للبيئات القاحلة',
            'project_desertcool_3': 'نفذت شبكات أجهزة استشعر لمراقبة المناخ والتحكم',
            'section_skills': 'المهارات التقنية',
            'skill_ai': 'الذكاء الاصطناعي والتعلم الآلي',
            'skill_ai_list': 'Python، TensorFlow، الرؤية الحاسوبية، الشبكات العصبية',
            'skill_iot': 'إنترنت الأشياء والأنظمة المدمجة',
            'skill_iot_list': 'Arduino، Raspberry Pi، دمج المستشعرات، MQTT',
            'skill_programming': 'البرمجة',
            'skill_programming_list': 'Python (متقدم)، C/C++ (متوسط)، Java (أساسي)',
            'skill_tools': 'الأدوات والمنصات',
            'skill_tools_list': 'Git، Linux، Docker، MATLAB، Unity',
            'section_achievements': 'الإنجازات',
            'achievement_1': 'درجة أطروحة الماجستير: 19.5/20 (أعلى 5% من الدفعة)',
            'achievement_2': 'المركز الثاني، مسابقة "The Call of Tech" الوطنية (2023)',
            'achievement_3': 'عضو نشط، نادي البحث العلمي COD\'IN (2021–2024)',
            'achievement_4': 'مشارك، منتدى التكنولوجيا الوطني الجزائر 2.0 (2024)',
            'achievement_5': 'حضور، قمة الوظائف الجزائرية 2025',
            'section_languages': 'اللغات',
            'lang_arabic': 'العربية',
            'lang_english': 'الإنجليزية',
            'lang_french': 'الفرنسية',
            'lang_native': 'اللغة الأم',
            'lang_fluent': 'يتحدث بطلاقة',
            'section_interests': 'اهتمامات البحث',
            'interest_1': 'تعلم الآلة للرؤية الحاسوبية وبيانات المستشعرات',
            'interest_2': 'الذكاء الاصطناعي الحافي وأنظمة إنترنت الأشياء الموزعة',
            'interest_3': 'الذكاء الاصطناعي للتكنولوجيا المساعدة',
            'interest_4': 'الحوسبة المستدامة والذكاء الاصطناعي البيئي',
            'projects_header': 'مشاريعي',
            'projects_description': 'حلول مبتكرة تجمع بين الذكاء الاصطناعي وإنترنت الأشياء والهندسة العملية',
            'project1_title': 'LUNAV - نظام الملاحة الذكي',
            'project1_subtitle': 'ملاحة مدعومة بالذكاء الاصطناعي للمكفوفين',
            'project1_problem': 'بيان المشكلة',
            'project1_problem_text': 'أكثر من 285 مليون شخص في جميع أنحاء العالم يعانون من ضعف البصر، يواجهون تحديات يومية في التنقل المستقل.',
            'project1_solution': 'الحل',
            'project1_solution_text': 'طورت جهازًا قابلاً للارتداء يعمل بالذكاء الاصطناعي يجمع بين الرؤية الحاسوبية في الوقت الفعلي، والتعليقات الصوتية المكانية، والاهتزازات اللمسية.',
            'project1_tech': 'التنفيذ التقني',
            'project1_tech_list': 'الرؤية الحاسوبية (YOLO)، الصوت المكاني ثلاثي الأبعاد، Raspberry Pi 4، أجهزة استشعار فوق صوتية',
            'project1_results': 'النتائج',
            'project1_results_list': 'دقة اكتشاف العوائق 95%، معالجة في الوقت الفعلي 30 إطار في الثانية، عمر بطارية 8+ ساعات',
            'project2_title': 'DesertCool',
            'project2_subtitle': 'حل تبريد مستدام للمناطق القاحلة',
            'project2_description': 'نظام تبريد سلبي قائم على إنترنت الأشياء يستخدم تقنيات التبخير مع المراقبة الذكية.',
            'research_header': 'ملف البحث',
            'research_description': 'اهتمامات البحث العلمي والمساهمات الأكاديمية',
            'research_focus_title': 'محور البحث',
            'research_focus_text': 'يكمن بحثي في تقاطع الذكاء الاصطناعي وإنترنت الأشياء والحوسبة المتمحورة حول الإنسان. أنا مهتم بشكل خاص بتطوير أنظمة ذكية تعالج التحديات الواقعية في إمكانية الوصول والاستدامة والرعاية الصحية.',
            'contact_header': 'معلومات الاتصال',
            'contact_description': 'للتنسيق الأكاديمي أو مناقشات البحث أو الاستفسارات المهنية',
            'contact_academic': 'استفسارات أكاديمية',
            'contact_academic_text': 'للتنسيق البحثي أو معلومات برنامج الدكتوراه أو المناقشات الأكاديمية',
            'contact_professional': 'فرص مهنية',
            'contact_professional_text': 'مناصب بحثية أو تدريبات أو مشاريع تعاونية في مجالات الذكاء الاصطناعي/تعلم الآلة',
            'contact_form_name': 'اسمك *',
            'contact_form_email': 'بريدك الإلكتروني *',
            'contact_form_type': 'نوع الاستفسار *',
            'contact_form_message': 'الرسالة *',
            'contact_form_send': 'إرسال الرسالة',
            'footer_copyright': '© 2026 جلطي إلياس. جميع الحقوق محفوظة.',
            'footer_tagline': 'باحث في الذكاء الاصطناعي | مرشح دكتوراه في الذكاء الاصطناعي وتعلم الآلة'
        },
        
        ru: {
            'title': 'Джельти Ильес | Исследователь ИИ',
            'title_line': 'Кандидат в докторантуру по ИИ и Машинному Обучению',
            'projects_title': 'Проекты | Джельти Ильес',
            'research_title': 'Исследования | Джельти Ильес',
            'contact_title': 'Контакты | Джельти Ильес',
            'nav_home': 'Главная',
            'nav_projects': 'Проекты',
            'nav_research': 'Исследования',
            'nav_contact': 'Контакты',
            'name': 'Джельти Ильес',
            'age': 'Возраст: 24 года',
            'tagline': 'Специализируюсь на ИИ для IoT с акцентом на вспомогательные технологии',
            'btn_view_resume': 'Посмотреть резюме',
            'btn_see_projects': 'Посмотреть проекты',
            'btn_save_pdf': 'Сохранить как PDF',
            'btn_contact_me': 'Связаться',
            'section_profile': 'Личный профиль',
            'profile_text': 'Высокомотивированный 24-летний выпускник факультета компьютерных наук со степенью магистра, специализирующийся на искусственном интеллекте для Интернета вещей. Продемонстрировал отличные результаты, получив почти идеальную оценку за магистерскую диссертацию (19.5/20) и за проекты, отмеченные наградами. Обладает практическими навыками в области ИИ/ML, IoT-систем, VR/AR и разработки программного обеспечения, подтвержденными способностью проводить инновационные исследования для решения реальных задач. Стремлюсь внести вклад в перспективные докторские исследования в области искусственного интеллекта и машинного обучения.',
            'section_education': 'Образование',
            'edu_masters': 'Магистр компьютерных наук – ИИ для Интернета вещей',
            'edu_bachelor': 'Бакалавр компьютерных систем',
            'grade': 'Оценка',
            'excellent': 'Отлично',
            'very_good': 'Очень хорошо',
            'thesis': 'Диссертация',
            'thesis_title': 'Интеллектуальная система навигации для слепых и слабовидящих',
            'section_research': 'Опыт исследований',
            'project_lunav_title': 'Магистерская диссертация: Система навигации LUNAV (2023–2024)',
            'project_lunav_1': 'Разработал носимое устройство на базе ИИ для людей с нарушениями зрения',
            'project_lunav_2': 'Интегрировал компьютерное зрение (OpenCV/TensorFlow), дополненную реальность и датчики IoT',
            'project_lunav_3': 'Реализовал обнаружение препятствий в реальном времени и пространственную аудионавигацию',
            'project_desertcool_title': 'Конкурсный проект: DesertCool (2023)',
            'project_desertcool_1': '2-е место в национальном конкурсе "The Call of Tech"',
            'project_desertcool_2': 'Спроектировал устойчивую систему охлаждения на базе IoT для засушливых сред',
            'project_desertcool_3': 'Реализовал сети датчиков для мониторинга и контроля климата',
            'section_skills': 'Технические навыки',
            'skill_ai': 'ИИ и Машинное обучение',
            'skill_ai_list': 'Python, TensorFlow, Компьютерное зрение, Нейронные сети',
            'skill_iot': 'IoT и Встроенные системы',
            'skill_iot_list': 'Arduino, Raspberry Pi, Интеграция датчиков, MQTT',
            'skill_programming': 'Программирование',
            'skill_programming_list': 'Python (Продвинутый), C/C++ (Средний), Java (Базовый)',
            'skill_tools': 'Инструменты и платформы',
            'skill_tools_list': 'Git, Linux, Docker, MATLAB, Unity',
            'section_achievements': 'Достижения',
            'achievement_1': 'Оценка магистерской диссертации: 19.5/20 (Топ 5% когорты)',
            'achievement_2': '2-е место, национальный конкурс "The Call of Tech" (2023)',
            'achievement_3': 'Активный член, Научно-исследовательский клуб COD\'IN (2021–2024)',
            'achievement_4': 'Участник, Национальный технологический форум Алжир 2.0 (2024)',
            'achievement_5': 'Посетитель, Саммит по трудоустройству Алжира 2025',
            'section_languages': 'Языки',
            'lang_arabic': 'Арабский',
            'lang_english': 'Английский',
            'lang_french': 'Французский',
            'lang_native': 'Родной',
            'lang_fluent': 'Свободно',
            'section_interests': 'Научные интересы',
            'interest_1': 'ML для компьютерного зрения и данных датчиков',
            'interest_2': 'Edge AI и распределенные IoT системы',
            'interest_3': 'ИИ для вспомогательных технологий',
            'interest_4': 'Устойчивые вычисления и экологический ИИ',
            'projects_header': 'Мои проекты',
            'projects_description': 'Инновационные решения, сочетающие ИИ, IoT и практическую инженерию',
            'project1_title': 'LUNAV - Интеллектуальная система навигации',
            'project1_subtitle': 'Навигация на базе ИИ для слабовидящих',
            'project1_problem': 'Постановка проблемы',
            'project1_problem_text': 'Более 285 миллионов человек во всем мире имеют нарушения зрения и ежедневно сталкиваются с проблемами самостоятельной навигации.',
            'project1_solution': 'Решение',
            'project1_solution_text': 'Разработано носимое устройство на базе ИИ, сочетающее компьютерное зрение в реальном времени, пространственное аудио и тактильную обратную связь.',
            'project1_tech': 'Техническая реализация',
            'project1_tech_list': 'Компьютерное зрение (YOLO), 3D пространственное аудио, Raspberry Pi 4, Ультразвуковые датчики',
            'project1_results': 'Результаты',
            'project1_results_list': 'Точность обнаружения препятствий 95%, Обработка в реальном времени 30 кадров/с, Время работы от батареи 8+ часов',
            'project2_title': 'DesertCool',
            'project2_subtitle': 'Устойчивое решение для охлаждения в засушливых регионах',
            'project2_description': 'Пассивная система охлаждения на базе IoT, использующая испарительные технологии с интеллектуальным мониторингом.',
            'research_header': 'Научный профиль',
            'research_description': 'Исследовательские интересы и академические достижения',
            'research_focus_title': 'Направление исследований',
            'research_focus_text': 'Мои исследования лежат на пересечении искусственного интеллекта, интернета вещей и человеко-ориентированных вычислений. Я особенно заинтересован в разработке интеллектуальных систем, решающих реальные проблемы в области доступности, устойчивого развития и здравоохранения.',
            'contact_header': 'Контактная информация',
            'contact_description': 'Для академического сотрудничества, исследовательских обсуждений или профессиональных запросов',
            'contact_academic': 'Академические запросы',
            'contact_academic_text': 'Для исследовательского сотрудничества, информации о программах докторантуры или академических обсуждений',
            'contact_professional': 'Профессиональные возможности',
            'contact_professional_text': 'Исследовательские должности, стажировки или совместные проекты в области ИИ/ML',
            'contact_form_name': 'Ваше имя *',
            'contact_form_email': 'Ваш email *',
            'contact_form_type': 'Тип запроса *',
            'contact_form_message': 'Сообщение *',
            'contact_form_send': 'Отправить сообщение',
            'footer_copyright': '© 2026 Джельти Ильес. Все права защищены.',
            'footer_tagline': 'Исследователь ИИ | Кандидат в докторантуру по ИИ и Машинному обучению'
        },
        
        fr: {
            'title': 'DJELTI ILYES | Chercheur en IA',
            'title_line': 'Candidat au Doctorat en IA et Apprentissage Automatique',
            'projects_title': 'Projets | DJELTI ILYES',
            'research_title': 'Recherche | DJELTI ILYES',
            'contact_title': 'Contact | DJELTI ILYES',
            'nav_home': 'Accueil',
            'nav_projects': 'Projets',
            'nav_research': 'Recherche',
            'nav_contact': 'Contact',
            'name': 'DJELTI ILYES',
            'age': 'Âge : 24 ans',
            'tagline': 'Spécialisé en IA pour l\'IoT avec un accent sur les technologies d\'assistance',
            'btn_view_resume': 'Voir le CV',
            'btn_see_projects': 'Voir les Projets',
            'btn_save_pdf': 'Enregistrer en PDF',
            'btn_contact_me': 'Me Contacter',
            'section_profile': 'Profil Personnel',
            'profile_text': 'Diplômé en informatique hautement motivé de 24 ans, titulaire d\'un master spécialisé en Intelligence Artificielle pour l\'Internet des Objets. A démontré son excellence grâce à une note de mémoire quasi parfaite (19.5/20) et à des travaux de projet primés. Possède de solides compétences pratiques en IA/ML, systèmes IoT, réalité virtuelle/augmentée et développement logiciel, avec une capacité avérée à mener des recherches innovantes visant à résoudre des défis réels. Cherche à contribuer à des recherches doctorales avancées en Intelligence Artificielle et Apprentissage Automatique.',
            'section_education': 'Éducation',
            'edu_masters': 'Master en Informatique – IA pour l\'Internet des Objets',
            'edu_bachelor': 'Licence en Systèmes Informatiques',
            'grade': 'Note',
            'excellent': 'Excellent',
            'very_good': 'Très Bien',
            'thesis': 'Mémoire',
            'thesis_title': 'Système de Navigation Intelligent pour les Aveugles et Malvoyants',
            'section_research': 'Expérience de Recherche',
            'project_lunav_title': 'Mémoire de Master : Système de Navigation LUNAV (2023–2024)',
            'project_lunav_1': 'Développé un dispositif portable alimenté par l\'IA pour les personnes malvoyantes',
            'project_lunav_2': 'Intégré la vision par ordinateur (OpenCV/TensorFlow), la RA et les capteurs IoT',
            'project_lunav_3': 'Mis en œuvre la détection d\'obstacles en temps réel et la navigation audio spatiale',
            'project_desertcool_title': 'Projet de Concours : DesertCool (2023)',
            'project_desertcool_1': '2ème Place au Concours National "The Call of Tech"',
            'project_desertcool_2': 'Conçu un système de refroidissement durable basé sur l\'IoT pour les environnements arides',
            'project_desertcool_3': 'Mis en œuvre des réseaux de capteurs pour la surveillance et le contrôle du climat',
            'section_skills': 'Compétences Techniques',
            'skill_ai': 'IA et Apprentissage Automatique',
            'skill_ai_list': 'Python, TensorFlow, Vision par Ordinateur, Réseaux de Neurones',
            'skill_iot': 'IoT et Systèmes Embarqués',
            'skill_iot_list': 'Arduino, Raspberry Pi, Intégration de Capteurs, MQTT',
            'skill_programming': 'Programmation',
            'skill_programming_list': 'Python (Avancé), C/C++ (Intermédiaire), Java (Basique)',
            'skill_tools': 'Outils et Plateformes',
            'skill_tools_list': 'Git, Linux, Docker, MATLAB, Unity',
            'section_achievements': 'Réalisations',
            'achievement_1': 'Note du Mémoire de Master : 19.5/20 (Top 5% de la promotion)',
            'achievement_2': '2ème Place, Concours National "The Call of Tech" (2023)',
            'achievement_3': 'Membre Actif, Club de Recherche Scientifique COD\'IN (2021–2024)',
            'achievement_4': 'Participant, Forum Technologique National Algérie 2.0 (2024)',
            'achievement_5': 'Participant, Sommet de l\'Emploi Algérie 2025',
            'section_languages': 'Langues',
            'lang_arabic': 'Arabe',
            'lang_english': 'Anglais',
            'lang_french': 'Français',
            'lang_native': 'Maternelle',
            'lang_fluent': 'Courant',
            'section_interests': 'Intérêts de Recherche',
            'interest_1': 'ML pour la Vision par Ordinateur et les Données de Capteurs',
            'interest_2': 'Edge AI et Systèmes IoT Distribués',
            'interest_3': 'IA pour les Technologies d\'Assistance',
            'interest_4': 'Informatique Durable et IA Environnementale',
            'projects_header': 'Mes Projets',
            'projects_description': 'Solutions innovantes combinant IA, IoT et ingénierie pratique',
            'project1_title': 'LUNAV - Système de Navigation Intelligent',
            'project1_subtitle': 'Navigation Alimentée par l\'IA pour les Malvoyants',
            'project1_problem': 'Énoncé du Problème',
            'project1_problem_text': 'Plus de 285 millions de personnes dans le monde sont malvoyantes et font face quotidiennement à des défis de navigation indépendante.',
            'project1_solution': 'Solution',
            'project1_solution_text': 'Développé un dispositif portable alimenté par l\'IA combinant la vision par ordinateur en temps réel, le retour audio spatial et les vibrations haptiques.',
            'project1_tech': 'Mise en Œuvre Technique',
            'project1_tech_list': 'Vision par ordinateur (YOLO), Audio Spatial 3D, Raspberry Pi 4, Capteurs ultrasoniques',
            'project1_results': 'Résultats',
            'project1_results_list': 'Précision de détection d\'obstacles 95%, Traitement en temps réel 30 FPS, Autonomie de batterie 8+ heures',
            'project2_title': 'DesertCool',
            'project2_subtitle': 'Solution de Refroidissement Durable pour les Régions Arides',
            'project2_description': 'Système de refroidissement passif basé sur l\'IoT utilisant des techniques évaporatives avec surveillance intelligente.',
            'research_header': 'Profil de Recherche',
            'research_description': 'Intérêts de Recherche Doctorale et Contributions Académiques',
            'research_focus_title': 'Focus de Recherche',
            'research_focus_text': 'Mes recherches se situent à l\'intersection de l\'Intelligence Artificielle, de l\'Internet des Objets et du Calcul Centré sur l\'Humain. Je suis particulièrement intéressé par le développement de systèmes intelligents qui répondent aux défis réels en matière d\'accessibilité, de durabilité et de soins de santé.',
            'contact_header': 'Informations de Contact',
            'contact_description': 'Pour collaborations académiques, discussions de recherche ou demandes professionnelles',
            'contact_academic': 'Demandes Académiques',
            'contact_academic_text': 'Pour collaborations de recherche, informations sur les programmes de doctorat ou discussions académiques',
            'contact_professional': 'Opportunités Professionnelles',
            'contact_professional_text': 'Postes de recherche, stages ou projets collaboratifs dans les domaines IA/ML',
            'contact_form_name': 'Votre Nom *',
            'contact_form_email': 'Votre Email *',
            'contact_form_type': 'Type de Demande *',
            'contact_form_message': 'Message *',
            'contact_form_send': 'Envoyer le Message',
            'footer_copyright': '© 2026 DJELTI ILYES. Tous droits réservés.',
            'footer_tagline': 'Chercheur en IA | Candidat au Doctorat en IA et Apprentissage Automatique'
        }
    };
    
    // Get saved language or default to English
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Initialize language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLang;
        languageSelect.addEventListener('change', function(e) {
            currentLang = e.target.value;
            localStorage.setItem('preferredLanguage', currentLang);
            applyTranslations(currentLang);
        });
    }
    
    // Apply translations
    function applyTranslations(lang) {
        const langData = translations[lang] || translations['en'];
        
        // Update page title based on current page
        const page = window.location.pathname.split('/').pop();
        if (page.includes('projects')) {
            document.title = langData['projects_title'];
        } else if (page.includes('research')) {
            document.title = langData['research_title'];
        } else if (page.includes('contact')) {
            document.title = langData['contact_title'];
        } else {
            document.title = langData['title'];
        }
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });
        
        // Update all elements with data-translate-placeholder attribute
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (langData[key]) {
                element.placeholder = langData[key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update language selector
        if (languageSelect) {
            languageSelect.value = lang;
        }
    }
    
    // Apply initial translations
    applyTranslations(currentLang);
    
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
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && !e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});