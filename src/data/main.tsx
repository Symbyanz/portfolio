import { SectionType } from '@/types/section';

export const navItemsData = [
    { id: 'about', label: 'ОБО МНЕ' },
    { id: 'experience', label: 'ОПЫТ РАБОТЫ' },
    { id: 'projects', label: 'ПРОЕКТЫ' },
    { id: 'education', label: 'ОБРАЗОВАНИЕ' },
    // { id: 'courses', label: 'КУРСЫ' },
];

export const sectionsData: SectionType[] = [
    {
        id: 'about',
        title: '',
        label: '',
        template: 'text',
        content: [
            'Я начал свой путь в веб-разработке в 2016 году, и с тех пор моя карьера претерпела значительные изменения. В последние 2 года я работал как фрилансер, создавая доступные интерфейсы для многостраничных сайтов, таких как cei.expert, letself.ru и centereco.ru. Моя работа заключается в разработке полноценных веб-решений, начиная с дизайна в <strong>Figma</strong>, <strong>Photoshop</strong> и <strong>Adobe Illustrator</strong> и заканчивая серверной разработкой индивидуальных решений на <strong>PHP</strong> и <strong>JavaScript</strong>.',
            'Ранее я работал в Citibank, где управлял и поддерживал веб-сайт, разрабатывал маркетинговые страницы и занимался аналитикой. Использовал <strong>Sendsay</strong> для email-рассылок, <strong>Jira</strong> для управления задачами, <strong>Confluence</strong> для документирования и <strong>Git</strong> для контроля версий, что развило мои навыки командной работы.',
            'До Ситибанка имел опыт работы в арбитражной компании, где за весь период мной было создано более 1000 лендингов с адаптивным дизайном на базе <strong>HTML</strong>, <strong>CSS</strong> и <strong>JavaScript</strong>.'
        ]
    },
    {
        id: 'experience',
        title: 'Опыт работы',
        label: 'Мой опыт работы',
        template: 'card-list',
        link: {
            url: '#',
            label: 'Смотреть резюме',
        },
        content: [
            {
                header: '2023 — настоящее время',
                // link: '#',
                title: 'Самозанятость · фриланс',
                subtitle: 'Fullstack-разработчик',
                text: 'Работаю фрилансером, создавая многостраничные сайты, такие как cei.expert и letself.ru. В процессе освоил дизайн в Figma, работу с WooCommerce, а также интеграцию API Робокассы и СДЭК. Сейчас изучаю Next.js и Vue.js, одновременно разрабатывая интернет-магазин продуктов.',
                links: [
                    {
                        url: 'https://centereco.ru/',
                        label: 'Centereco.ru',
                    },
                    {
                        url: 'https://cei.expert/',
                        label: 'Cei.expert'
                    },
                    {
                        url: '#',
                        label: 'Simagino.ru',
                    },
                    {
                        url: 'https://safety174.ru/',
                        label: 'Safety174.ru',
                    }
                ],
                tags: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'Vue.js', 'jQuery', 'Webpack', 'Wordpress', 'Figma', 'Node.js', 'PHP']
            },
            {
                header: '2021 — 2023',
                link: 'https://www.citibank.ru/russia/main/rus/home.htm',
                title: 'Citibank · Финансовый сектор, банк',
                subtitle: 'Веб-мастер',
                text: 'Отвечал за управление и обновление веб-сайта, обеспечивая его техническую поддержку и создание контента. Кроме того, организовывал массовые email-рассылки и проводил аналитические отчеты, следя за соблюдением требований безопасности.',
                tags: ['HTML & CSS', 'JavaScript', 'PHP', 'Git', 'Atlassion', 'BEM', 'Sendsay'],
            },
            {
                header: '2018 — 2020',
                // link: '#',
                title: 'Telesale · Интернет-маркетинг, арбитраж',
                subtitle: 'HTML-верстальщик',
                text: 'Создал множество адаптивных лендингов для арбитража трафика, акцентируя внимание на интерактивных элементах и привлекательном дизайне. Разработал более 1000 посадочных страниц с уникальным оформлением, но общей шаблонной структурой, включая баннеры с формами обратной связи, товарные карусели и разделы с преимуществами и отзывами клиентов.',
                tags: ['HTML & CSS', 'Gulp', 'JavaScript', 'PHP', 'Photoshop', 'Illustrator'],
            },
        ],
    },
    {
        id: 'projects',
        title: 'Проекты',
        label: 'Мои проекты',
        template: 'card-list',
        link: {
            url: '/projects',
            label: 'Больше проектов',
        },
        content: [
            {
                header: {
                    src: '/img/project-centereco.jpg',
                    alt: 'Проект — Корпоративный сайт Centereco',
                    width: 200,
                    height: 50,
                },
                link: 'https://centereco.ru/',
                title: 'Корпоративный сайт Centereco',
                text: 'Разработан дизайн в Figma и стартовый шаблон для создания кастомных тем WordPress (WP-starter). Реализованы калькулятор услуг, живой поиск по городам, модальные окна и валидация форм. Проведена SEO-оптимизация с настройкой заголовков, хлебных крошек и др.',
                tags: ['Wordpress', 'PHP', 'JavaScript', 'HTML & SCSS', 'TypeScript', 'Webpack', 'Figma', 'SEO']
            },
            {
                header: {
                    src: '/img/project-cei.jpg',
                    alt: 'Проект — Корпоративный сайт Cei expert',
                    width: 200,
                    height: 50,
                },
                link: 'https://cei.expert/',
                title: 'Корпоративный сайт Cei expert',
                text: 'Разработан дизайн новых страниц и выполнен редизайн существующих. Верстка на базовом шаблоне с Gulp и Webpack по методологии BEM, интегрирована в WordPress через ACF. Настроены динамические ссылки, редиректы, robots.txt и прочее для оптимизации работы сайта.',
                tags: ['Wordpress', 'PHP', 'JavaScript', 'HTML & SCSS', 'Gulp', 'Webpack', 'Figma']
            },
            {
                header: {
                    src: '/img/project-signreg.jpg',
                    alt: 'Проект — Корпоративный сайт Signreg',
                    width: 200,
                    height: 50,
                },
                // link: '#',
                title: 'Корпоративный сайт Signreg',
                text: 'Дизайн клиентской части в Figma, а фронтенд на Next.js. Реализованы аккордеон, пагинация, табы, живой поиск и фильтры. Проект состоит из двух этапов: первый — разработка сайта и базового бэкенда с авто-деплоем через GitHub Actions; второй — создание админ-панели и форума, на данный момент заморожен.',
                tags: ['Next.js', 'React', 'TypeScript', 'HTML & SCSS', 'GitHub Actions', 'UI Components', 'Figma']
            },
            {
                header: {
                    src: '/img/project-letself.jpg',
                    alt: 'Проект — Интернет-Магазин Одежды Letself',
                    width: 200,
                    height: 50,
                },
                link: 'https://letself.ru/',
                title: 'Интернет-Магазин Одежды Letself',
                text: 'Разработан дизайн, верстка и бэкенд. Интегрированы курьерская служба СДЭК и платежная система Робокасса. Добавлены функции "Избранное" и выбор региона при оформлении заказа. Проведена SEO-оптимизация, внедрены модальные окна и др.',
                tags: ['Wordpress', 'WooCommerce', 'PHP', 'JavaScript', 'HTML & SCSS', 'SDEK API', 'Robokassa API']
            },
        ],
    },
    {
        id: 'education',
        title: 'Образование',
        label: 'Образование',
        template: 'card-list',
        content: [
            {
                header: '2020 — 2024',
                link: 'https://www.spbstu.ru/',
                title: 'Санкт-Петербургский политехнический университет Петра Великого',
                text: 'Управление персоналом организации, Менеджмент организации'
            },
            {
                header: '2018 — 2020',
                link: 'https://college.spbstu.ru/',
                title: 'Институт среднего профессионального образования  СПбПУ Петра Великого',
                text: 'Экономика и бухгалтерский учет, Бухгалтерский учет, анализ и аудит'
            },
        ],
    },
    {
        // id: 'courses',
        title: 'Курсы',
        label: 'Курсы',
        template: 'card-list',
        content: [
            {
                header: '2023',
                title: 'Веб дизайн в Figma 2024 - с нуля до результата, основы UX/UI',
                text: 'Udemy'
            },
            {
                header: '2023',
                title: 'React + Next.js - с нуля',
                text: 'Udemy'
            },
            {
                header: '2022',
                title: 'Wordpress создание интернет-магазина на WooCommerce',
                text: 'WebforMyself'
            },
            {
                header: '2017',
                title: 'Курс Node, Angular и MongoDB: разработка полноценных вебприложений',
                text: 'Нетология'
            },
        ],
    },
];