const SITE_LANGUAGES = [
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "tr", label: "Türkçe", dir: "ltr" }
];

const SITE_FLAGS = {
  ko: '<img src="./assets/flags/ko.png" alt="">',
  en: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" fill="#f2f2f2"/><g fill="#d90034"><rect y="0" width="64" height="5"/><rect y="10" width="64" height="5"/><rect y="20" width="64" height="5"/><rect y="30" width="64" height="5"/><rect y="40" width="64" height="5"/><rect y="50" width="64" height="5"/><rect y="60" width="64" height="5"/></g><rect width="33" height="35" fill="#2759a5"/><g fill="#f2f2f2"><circle cx="5" cy="5" r="1.15"/><circle cx="12" cy="5" r="1.15"/><circle cx="19" cy="5" r="1.15"/><circle cx="26" cy="5" r="1.15"/><circle cx="8.5" cy="10" r="1.15"/><circle cx="15.5" cy="10" r="1.15"/><circle cx="22.5" cy="10" r="1.15"/><circle cx="29.5" cy="10" r="1.15"/><circle cx="5" cy="15" r="1.15"/><circle cx="12" cy="15" r="1.15"/><circle cx="19" cy="15" r="1.15"/><circle cx="26" cy="15" r="1.15"/><circle cx="8.5" cy="20" r="1.15"/><circle cx="15.5" cy="20" r="1.15"/><circle cx="22.5" cy="20" r="1.15"/><circle cx="29.5" cy="20" r="1.15"/><circle cx="5" cy="25" r="1.15"/><circle cx="12" cy="25" r="1.15"/><circle cx="19" cy="25" r="1.15"/><circle cx="26" cy="25" r="1.15"/><circle cx="8.5" cy="30" r="1.15"/><circle cx="15.5" cy="30" r="1.15"/><circle cx="22.5" cy="30" r="1.15"/><circle cx="29.5" cy="30" r="1.15"/></g></svg>',
  ru: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="#f2f2f2"/><rect y="21.33" width="64" height="21.34" fill="#1554b7"/><rect y="42.66" width="64" height="21.34" fill="#d90034"/></svg>',
  fa: '<img src="./assets/flags/fa.png" alt="">',
  tr: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="#e00022"/><circle cx="27" cy="32" r="14" fill="#f2f2f2"/><circle cx="33" cy="32" r="11.5" fill="#e00022"/><path fill="#f2f2f2" d="M45.5 22.5l2.3 7.1h7.5l-6.1 4.4 2.3 7.1-6-4.4-6.1 4.4 2.3-7.1-6-4.4h7.5z"/></svg>'
};

const SITE_I18N = {
  ko: {
    title: "DictionEvery 설치",
    description: "DictionEvery는 데스크톱 웹브라우저에서 단어를 선택해 뜻을 찾고, 단어장과 테스트로 복습하는 브라우저 확장 프로그램입니다.",
    brandAria: "DictionEvery 홈",
    mainNavAria: "주요 메뉴",
    languageMenuAria: "사이트 언어",
    productStageAria: "DictionEvery 데스크톱 웹 작동 예시",
    navInstall: "설치",
    navHow: "작동 방식",
    navPlatforms: "호환성",
    heroEyebrow: "{version} · language learning browser extension",
    heroLead: "데스크톱 웹브라우저에서 모르는 단어를 선택하고, 원하는 도착언어로 뜻과 예문을 확인한 뒤 단어장과 통합 테스트로 복습하는 브라우저 플러그인입니다.",
    heroPrimary: "설치 파일 보기",
    heroSecondary: "작동 방식 보기",
    statusChrome: "Chrome 준비 완료",
    statusSafari: "Safari용 준비됨",
    statusSamsung: "데스크톱 웹 환경 중심",
    browserAddress: "https://example.com/articles/language",
    browserChip: "웹 확장 실행 중",
    selectionChip: "에서 찾기",
    panelTargetLabel: "도착언어",
    panelMeaningLabel: "뜻",
    panelMeaningOne: "유산 · 이전 세대가 물려준 것",
    panelMeaningTwo: "문화재 · 역사적 가치가 있는 것",
    installEyebrow: "설치",
    installTitle: "사용하는 브라우저에 맞게 설치하기",
    installLead: "데스크톱에서 쓰는 브라우저를 선택해 DictionEvery를 설치하세요. 설치 후 웹페이지에서 단어를 선택하면 뜻 확인, 저장, 복습까지 한 흐름으로 이어집니다.",
    chromeSubtitle: "Chrome에서 가장 먼저 체험하기 좋은 버전",
    chromeBody: "Chrome에서 단어 선택 버튼, 사전 패널, 단어장, 통합 테스트를 모두 사용할 수 있습니다. 데스크톱 웹에서 DictionEvery를 시작하기 좋은 선택입니다.",
    chromeDownload: "Chrome용 다운로드",
    edgeSubtitle: "Microsoft Edge에 맞춘 버전",
    edgeBody: "Edge에서도 웹페이지의 단어를 바로 찾고 저장할 수 있습니다. Windows 데스크톱 환경에서 익숙한 브라우저 흐름 그대로 사용할 수 있습니다.",
    edgeDownload: "Edge용 다운로드",
    samsungSubtitle: "Samsung Browser for Windows용 버전",
    samsungBody: "Windows용 Samsung Browser에서 웹문서와 학습 자료를 읽을 때 단어를 바로 찾고 저장할 수 있도록 준비한 버전입니다.",
    samsungDownload: "Samsung Browser용 다운로드",
    safariSubtitle: "macOS Safari용 버전",
    safariBody: "Mac에서 Safari를 주 브라우저로 쓰는 사용자를 위한 버전입니다. 웹페이지를 읽으며 모르는 단어를 DictionEvery 패널로 바로 정리할 수 있습니다.",
    safariDownload: "Safari용 다운로드",
    firefoxSubtitle: "Firefox 데스크톱용 버전",
    firefoxBody: "Firefox 사용자를 위해 따로 준비한 버전입니다. 브라우저를 바꿔도 단어 저장, 뜻 확인, 복습 흐름은 같은 방식으로 이어집니다.",
    firefoxDownload: "Firefox용 다운로드",
    yandexSubtitle: "Yandex Browser 데스크톱용 버전",
    yandexBody: "Yandex Browser에서 읽는 중 선택한 단어를 빠르게 사전과 단어장으로 연결합니다. 데스크톱 웹 독해 흐름에 맞춰 사용할 수 있습니다.",
    yandexDownload: "Yandex Browser용 다운로드",
    whaleSubtitle: "Naver Whale용 버전",
    whaleBody: "Whale에서 웹문서와 학습 자료를 읽을 때 DictionEvery를 함께 사용할 수 있도록 준비한 버전입니다. 뜻 확인과 복습 기능을 같은 흐름으로 제공합니다.",
    whaleDownload: "Whale용 다운로드",
    howEyebrow: "작동 방식",
    howTitle: "읽으면서 바로 저장하고 복습합니다",
    stepOneTitle: "단어 선택",
    stepOneBody: "데스크톱 웹페이지에서 단어를 선택하면 작은 검색 버튼이 뜹니다.",
    stepTwoTitle: "도착언어별 뜻 확인",
    stepTwoBody: "한국어, 영어, 러시아어, 페르시아어 등 선택한 언어별로 뜻과 예문을 확인합니다.",
    stepThreeTitle: "단어장과 테스트",
    stepThreeBody: "숙련도 1-5를 관리하고 카드, 뜻 고르기, 듣고 입력하기를 섞어 복습합니다.",
    compatEyebrow: "호환성",
    compatTitle: "지원 브라우저",
    compatAria: "브라우저 호환 상태",
    compatChrome: "Chrome 데스크톱에서 사용할 수 있는 기본 버전",
    compatEdge: "Microsoft Edge 데스크톱 환경 지원",
    compatSamsung: "Windows용 Samsung Browser 호환 버전 제공",
    compatSafari: "macOS Safari용 버전 제공",
    compatFirefox: "Firefox 데스크톱용 버전 제공",
    compatYandex: "Yandex Browser 호환 버전 제공",
    compatWhale: "Naver Whale 호환 버전 제공",
    footerNote: "Chrome, Edge, Safari, Samsung Browser, Firefox, Yandex, Whale 데스크톱용 DictionEvery 소개 페이지"
  },
  en: {
    title: "Install DictionEvery",
    description: "DictionEvery is a desktop web browser extension for selecting words on webpages, checking meanings, saving vocabulary, and reviewing with tests.",
    brandAria: "DictionEvery home",
    mainNavAria: "Main menu",
    languageMenuAria: "Site language",
    productStageAria: "DictionEvery desktop web demo",
    navInstall: "Install",
    navHow: "How it works",
    navPlatforms: "Compatibility",
    heroEyebrow: "{version} · language learning browser extension",
    heroLead: "Select an unfamiliar word in a desktop web browser, check meanings and examples in your chosen target languages, then review it through vocabulary lists and an integrated test.",
    heroPrimary: "View install files",
    heroSecondary: "See how it works",
    statusChrome: "Chrome ready",
    statusSafari: "Safari ready",
    statusSamsung: "Focused on desktop web environments",
    browserAddress: "https://example.com/articles/language",
    browserChip: "Web extension active",
    selectionChip: "Find in",
    panelTargetLabel: "Target language",
    panelMeaningLabel: "Meaning",
    panelMeaningOne: "Legacy · something passed down from earlier generations",
    panelMeaningTwo: "Heritage site · something with historical value",
    installEyebrow: "Install",
    installTitle: "Install DictionEvery for your browser",
    installLead: "Choose your desktop browser and download the matching DictionEvery build. After installing, select a word on any webpage to check meanings, save vocabulary, and review it later.",
    chromeSubtitle: "A great starting point for Chrome users",
    chromeBody: "Use DictionEvery on Chrome to look up selected words, save vocabulary, and run integrated review tests while reading on the desktop web.",
    chromeDownload: "Download for Chrome",
    edgeSubtitle: "Built for Microsoft Edge",
    edgeBody: "Edge users get the same reading, lookup, vocabulary, and review flow in a familiar Windows desktop browser.",
    edgeDownload: "Download for Edge",
    samsungSubtitle: "For Samsung Browser on Windows",
    samsungBody: "Use DictionEvery with Samsung Browser for Windows when reading articles, lessons, and web documents on the desktop.",
    samsungDownload: "Download for Samsung Browser",
    safariSubtitle: "For Safari on macOS",
    safariBody: "Made for people who read with Safari on Mac. Select unfamiliar words on webpages and collect them in the DictionEvery panel.",
    safariDownload: "Download for Safari",
    firefoxSubtitle: "For Firefox desktop",
    firefoxBody: "A dedicated Firefox version keeps the same word lookup, saving, and review experience even when you prefer Firefox.",
    firefoxDownload: "Download for Firefox",
    yandexSubtitle: "For Yandex Browser desktop",
    yandexBody: "Connect selected words to dictionaries and vocabulary review while reading with Yandex Browser on the desktop web.",
    yandexDownload: "Download for Yandex Browser",
    whaleSubtitle: "For Naver Whale",
    whaleBody: "Use DictionEvery in Whale while reading web documents and study materials, with lookup, saving, and review in one flow.",
    whaleDownload: "Download for Whale",
    howEyebrow: "How it works",
    howTitle: "Save and review words while you read",
    stepOneTitle: "Select a word",
    stepOneBody: "A compact search button appears when you select a word on a desktop webpage.",
    stepTwoTitle: "Check target-language meanings",
    stepTwoBody: "View meanings and examples in your selected languages, including Korean, English, Russian, and Persian.",
    stepThreeTitle: "Vocabulary and tests",
    stepThreeBody: "Manage proficiency levels 1-5 and review with mixed card, choice, and listen-and-type tasks.",
    compatEyebrow: "Compatibility",
    compatTitle: "Supported browsers",
    compatAria: "Browser compatibility status",
    compatChrome: "Core desktop version for Chrome",
    compatEdge: "Desktop support for Microsoft Edge",
    compatSamsung: "Compatible version for Samsung Browser on Windows",
    compatSafari: "Version for Safari on macOS",
    compatFirefox: "Dedicated version for Firefox desktop",
    compatYandex: "Compatible version for Yandex Browser",
    compatWhale: "Compatible version for Naver Whale",
    footerNote: "DictionEvery introduction page for Chrome, Edge, Safari, Samsung Browser, Firefox, Yandex, and Whale on desktop"
  },
  ru: {
    title: "Установка DictionEvery",
    description: "DictionEvery — расширение для настольного веб-браузера: выделяйте слова на веб-страницах, смотрите значения, сохраняйте словарь и повторяйте слова в тестах.",
    brandAria: "Главная DictionEvery",
    mainNavAria: "Главное меню",
    languageMenuAria: "Язык сайта",
    productStageAria: "Пример работы DictionEvery в настольном веб-браузере",
    navInstall: "Установка",
    navHow: "Как работает",
    navPlatforms: "Совместимость",
    heroEyebrow: "{version} · расширение для изучения языков",
    heroLead: "Выделяйте незнакомые слова в настольном веб-браузере, смотрите значения и примеры на выбранных языках перевода, а затем повторяйте их в словаре и общем тесте.",
    heroPrimary: "Скачать файлы",
    heroSecondary: "Посмотреть принцип работы",
    statusChrome: "Chrome готов",
    statusSafari: "Safari готов",
    statusSamsung: "Фокус на настольной веб-среде",
    browserAddress: "https://example.com/articles/language",
    browserChip: "Веб-расширение активно",
    selectionChip: "Найти в",
    panelTargetLabel: "Язык перевода",
    panelMeaningLabel: "Значение",
    panelMeaningOne: "Наследие · то, что передано предыдущими поколениями",
    panelMeaningTwo: "Культурное наследие · объект исторической ценности",
    installEyebrow: "Установка",
    installTitle: "Установите DictionEvery для своего браузера",
    installLead: "Выберите настольный браузер и скачайте подходящую версию DictionEvery. После установки выделяйте слово на любой веб-странице, смотрите значения, сохраняйте словарь и повторяйте его позже.",
    chromeSubtitle: "Удобный первый вариант для Chrome",
    chromeBody: "В Chrome доступны поиск выделенных слов, панель словаря, сохранение лексики и общий тест для повторения во время чтения.",
    chromeDownload: "Скачать для Chrome",
    edgeSubtitle: "Версия для Microsoft Edge",
    edgeBody: "В Edge DictionEvery помогает искать и сохранять слова прямо на веб-страницах, сохраняя привычный рабочий процесс в Windows.",
    edgeDownload: "Скачать для Edge",
    samsungSubtitle: "Для Samsung Browser на Windows",
    samsungBody: "Используйте DictionEvery в Samsung Browser for Windows, когда читаете статьи, уроки и веб-документы на компьютере.",
    samsungDownload: "Скачать для Samsung Browser",
    safariSubtitle: "Для Safari на macOS",
    safariBody: "Версия для тех, кто читает в Safari на Mac. Выделяйте незнакомые слова на веб-страницах и собирайте их в панели DictionEvery.",
    safariDownload: "Скачать для Safari",
    firefoxSubtitle: "Для Firefox на компьютере",
    firefoxBody: "Отдельная версия для Firefox сохраняет тот же опыт: поиск слов, сохранение в словарь и повторение без смены браузера.",
    firefoxDownload: "Скачать для Firefox",
    yandexSubtitle: "Для Yandex Browser на компьютере",
    yandexBody: "Подключайте выделенные слова к словарям и повторению во время чтения в Yandex Browser на настольном вебе.",
    yandexDownload: "Скачать для Yandex Browser",
    whaleSubtitle: "Для Naver Whale",
    whaleBody: "В Whale DictionEvery помогает читать веб-документы и учебные материалы, объединяя поиск, сохранение и повторение в одном потоке.",
    whaleDownload: "Скачать для Whale",
    howEyebrow: "Как работает",
    howTitle: "Сохраняйте и повторяйте слова во время чтения",
    stepOneTitle: "Выделите слово",
    stepOneBody: "После выделения слова на настольной веб-странице появляется компактная кнопка поиска.",
    stepTwoTitle: "Смотрите значения на нужных языках",
    stepTwoBody: "Проверяйте значения и примеры на выбранных языках, включая корейский, английский, русский и персидский.",
    stepThreeTitle: "Словарь и тесты",
    stepThreeBody: "Управляйте уровнем знания 1-5 и повторяйте слова в смешанных карточках, выборе значения и вводе на слух.",
    compatEyebrow: "Совместимость",
    compatTitle: "Поддерживаемые браузеры",
    compatAria: "Статус совместимости браузеров",
    compatChrome: "Основная настольная версия для Chrome",
    compatEdge: "Поддержка Microsoft Edge на компьютере",
    compatSamsung: "Версия для Samsung Browser на Windows",
    compatSafari: "Версия для Safari на macOS",
    compatFirefox: "Отдельная версия для Firefox на компьютере",
    compatYandex: "Совместимая версия для Yandex Browser",
    compatWhale: "Совместимая версия для Naver Whale",
    footerNote: "Страница DictionEvery для Chrome, Edge, Safari, Samsung Browser, Firefox, Yandex и Whale на компьютере"
  },
  fa: {
    title: "نصب DictionEvery",
    description: "DictionEvery یک افزونه برای مرورگرهای دسکتاپ است؛ واژه‌ها را در صفحه‌های وب انتخاب کنید، معنی را ببینید، واژگان را ذخیره کنید و با آزمون مرور کنید.",
    brandAria: "خانه DictionEvery",
    mainNavAria: "منوی اصلی",
    languageMenuAria: "زبان سایت",
    productStageAria: "نمایش کارکرد DictionEvery در محیط وب دسکتاپ",
    navInstall: "نصب",
    navHow: "روش کار",
    navPlatforms: "سازگاری",
    heroEyebrow: "{version} · افزونه مرورگر برای یادگیری زبان",
    heroLead: "واژه ناآشنا را در مرورگر وب دسکتاپ انتخاب کنید، معنی و مثال‌ها را در زبان‌های مقصد دلخواه ببینید و سپس آن را با واژه‌نامه و آزمون یکپارچه مرور کنید.",
    heroPrimary: "نمایش فایل‌های نصب",
    heroSecondary: "دیدن روش کار",
    statusChrome: "Chrome آماده است",
    statusSafari: "Safari آماده است",
    statusSamsung: "تمرکز بر محیط وب دسکتاپ",
    browserAddress: "https://example.com/articles/language",
    browserChip: "افزونه وب فعال است",
    selectionChip: "جست‌وجو در",
    panelTargetLabel: "زبان مقصد",
    panelMeaningLabel: "معنی",
    panelMeaningOne: "میراث · چیزی که از نسل‌های پیشین به جا مانده است",
    panelMeaningTwo: "میراث فرهنگی · چیزی با ارزش تاریخی",
    installEyebrow: "نصب",
    installTitle: "DictionEvery را برای مرورگر خود نصب کنید",
    installLead: "مرورگر دسکتاپ خود را انتخاب کنید و نسخه مناسب DictionEvery را دانلود کنید. پس از نصب، در هر صفحه وب واژه‌ای را انتخاب کنید تا معنی را ببینید، واژه را ذخیره کنید و بعدا مرور کنید.",
    chromeSubtitle: "گزینه‌ای مناسب برای شروع در Chrome",
    chromeBody: "در Chrome می‌توانید واژه‌های انتخاب‌شده را جست‌وجو کنید، معنی را ببینید، واژه‌ها را ذخیره کنید و هنگام مطالعه با آزمون یکپارچه مرور کنید.",
    chromeDownload: "دانلود برای Chrome",
    edgeSubtitle: "نسخه مناسب Microsoft Edge",
    edgeBody: "کاربران Edge همان جریان خواندن، جست‌وجوی واژه، ذخیره در واژه‌نامه و مرور را در محیط آشنای ویندوز تجربه می‌کنند.",
    edgeDownload: "دانلود برای Edge",
    samsungSubtitle: "برای Samsung Browser در Windows",
    samsungBody: "هنگام خواندن مقاله‌ها، درس‌ها و سندهای وب در Samsung Browser for Windows، DictionEvery معنی و ذخیره واژه را کنار متن قرار می‌دهد.",
    samsungDownload: "دانلود برای Samsung Browser",
    safariSubtitle: "برای Safari در macOS",
    safariBody: "برای کاربرانی که در Mac با Safari مطالعه می‌کنند. واژه‌های ناآشنا را در صفحه‌های وب انتخاب و در پنل DictionEvery مرتب کنید.",
    safariDownload: "دانلود برای Safari",
    firefoxSubtitle: "برای Firefox دسکتاپ",
    firefoxBody: "نسخه جداگانه Firefox همان تجربه جست‌وجو، ذخیره واژه و مرور را بدون نیاز به تغییر مرورگر فراهم می‌کند.",
    firefoxDownload: "دانلود برای Firefox",
    yandexSubtitle: "برای Yandex Browser دسکتاپ",
    yandexBody: "در Yandex Browser واژه‌های انتخاب‌شده را هنگام خواندن به فرهنگ‌ها و مرور واژه‌ها وصل کنید.",
    yandexDownload: "دانلود برای Yandex Browser",
    whaleSubtitle: "برای Naver Whale",
    whaleBody: "در Whale می‌توانید هنگام خواندن سندهای وب و منابع آموزشی، جست‌وجو، ذخیره و مرور را در یک جریان انجام دهید.",
    whaleDownload: "دانلود برای Whale",
    howEyebrow: "روش کار",
    howTitle: "همزمان با خواندن، ذخیره و مرور کنید",
    stepOneTitle: "انتخاب واژه",
    stepOneBody: "وقتی واژه‌ای را در صفحه وب دسکتاپ انتخاب می‌کنید، یک دکمه کوچک جست‌وجو ظاهر می‌شود.",
    stepTwoTitle: "دیدن معنی در زبان‌های مقصد",
    stepTwoBody: "معنی و مثال‌ها را در زبان‌های انتخاب‌شده مثل کره‌ای، انگلیسی، روسی و فارسی ببینید.",
    stepThreeTitle: "واژه‌نامه و آزمون",
    stepThreeBody: "سطح تسلط 1 تا 5 را مدیریت کنید و با کارت، انتخاب معنی و شنیدن و تایپ کردن مرور کنید.",
    compatEyebrow: "سازگاری",
    compatTitle: "مرورگرهای پشتیبانی‌شده",
    compatAria: "وضعیت سازگاری مرورگرها",
    compatChrome: "نسخه اصلی دسکتاپ برای Chrome",
    compatEdge: "پشتیبانی از Microsoft Edge در دسکتاپ",
    compatSamsung: "نسخه سازگار با Samsung Browser در Windows",
    compatSafari: "نسخه مخصوص Safari در macOS",
    compatFirefox: "نسخه جداگانه برای Firefox دسکتاپ",
    compatYandex: "نسخه سازگار با Yandex Browser",
    compatWhale: "نسخه سازگار با Naver Whale",
    footerNote: "صفحه معرفی DictionEvery برای Chrome، Edge، Safari، Samsung Browser، Firefox، Yandex و Whale در دسکتاپ"
  },
  tr: {
    title: "DictionEvery Kurulumu",
    description: "DictionEvery, masaüstü web tarayıcılarında kelime seçip anlamına bakmanızı, kelime defterine kaydetmenizi ve testlerle tekrar etmenizi sağlayan bir tarayıcı eklentisidir.",
    brandAria: "DictionEvery ana sayfa",
    mainNavAria: "Ana menü",
    languageMenuAria: "Site dili",
    productStageAria: "DictionEvery masaüstü web kullanım örneği",
    navInstall: "Kurulum",
    navHow: "Nasıl çalışır",
    navPlatforms: "Uyumluluk",
    heroEyebrow: "{version} · dil öğrenme tarayıcı eklentisi",
    heroLead: "Masaüstü web tarayıcısında bilmediğiniz bir kelimeyi seçin, seçtiğiniz hedef dillerde anlam ve örnekleri görün, ardından kelime listesi ve bütünleşik testle tekrar edin.",
    heroPrimary: "Kurulum dosyalarını gör",
    heroSecondary: "Nasıl çalıştığını gör",
    statusChrome: "Chrome hazır",
    statusSafari: "Safari hazır",
    statusSamsung: "Masaüstü web ortamına odaklı",
    browserAddress: "https://example.com/articles/language",
    browserChip: "Web eklentisi etkin",
    selectionChip: "İçinde ara",
    panelTargetLabel: "Hedef dil",
    panelMeaningLabel: "Anlam",
    panelMeaningOne: "Miras · önceki kuşaklardan aktarılan şey",
    panelMeaningTwo: "Kültürel miras · tarihsel değeri olan şey",
    installEyebrow: "Kurulum",
    installTitle: "DictionEvery'yi tarayıcınıza göre kurun",
    installLead: "Masaüstünde kullandığınız tarayıcıyı seçin ve uygun DictionEvery sürümünü indirin. Kurduktan sonra herhangi bir web sayfasında kelime seçerek anlamına bakabilir, kaydedebilir ve daha sonra tekrar edebilirsiniz.",
    chromeSubtitle: "Chrome kullanıcıları için iyi bir başlangıç",
    chromeBody: "Chrome'da seçili kelimeleri arayabilir, sözlük panelini açabilir, kelime kaydedebilir ve okurken bütünleşik tekrar testlerini kullanabilirsiniz.",
    chromeDownload: "Chrome için indir",
    edgeSubtitle: "Microsoft Edge için hazırlandı",
    edgeBody: "Edge kullanıcıları okuma, kelime arama, kaydetme ve tekrar akışını tanıdık Windows masaüstü tarayıcısında kullanabilir.",
    edgeDownload: "Edge için indir",
    samsungSubtitle: "Windows'ta Samsung Browser için",
    samsungBody: "Samsung Browser for Windows ile makale, ders ve web belgeleri okurken DictionEvery'yi kelime arama ve kaydetme için kullanabilirsiniz.",
    samsungDownload: "Samsung Browser için indir",
    safariSubtitle: "macOS Safari için",
    safariBody: "Mac'te Safari ile okuyan kullanıcılar için hazırlandı. Web sayfalarındaki bilinmeyen kelimeleri seçip DictionEvery panelinde düzenleyebilirsiniz.",
    safariDownload: "Safari için indir",
    firefoxSubtitle: "Firefox masaüstü için",
    firefoxBody: "Ayrı Firefox sürümü, tarayıcı değiştirmeden aynı kelime arama, kaydetme ve tekrar deneyimini sunar.",
    firefoxDownload: "Firefox için indir",
    yandexSubtitle: "Yandex Browser masaüstü için",
    yandexBody: "Yandex Browser'da okurken seçtiğiniz kelimeleri sözlüklere ve kelime tekrarına hızlıca bağlayabilirsiniz.",
    yandexDownload: "Yandex Browser için indir",
    whaleSubtitle: "Naver Whale için",
    whaleBody: "Whale'de web belgeleri ve çalışma materyalleri okurken arama, kaydetme ve tekrar işlevlerini tek akışta kullanabilirsiniz.",
    whaleDownload: "Whale için indir",
    howEyebrow: "Nasıl çalışır",
    howTitle: "Okurken kaydedin ve tekrar edin",
    stepOneTitle: "Kelime seçin",
    stepOneBody: "Masaüstü web sayfasında bir kelime seçtiğinizde küçük bir arama düğmesi görünür.",
    stepTwoTitle: "Hedef dil anlamlarını görün",
    stepTwoBody: "Korece, İngilizce, Rusça ve Farsça dahil seçtiğiniz dillerde anlam ve örnekleri görün.",
    stepThreeTitle: "Kelime defteri ve test",
    stepThreeBody: "1-5 arası yeterlilik düzeylerini yönetin; kart, anlam seçme ve dinleyip yazma görevleriyle tekrar edin.",
    compatEyebrow: "Uyumluluk",
    compatTitle: "Desteklenen tarayıcılar",
    compatAria: "Tarayıcı uyumluluk durumu",
    compatChrome: "Chrome için temel masaüstü sürümü",
    compatEdge: "Microsoft Edge masaüstü desteği",
    compatSamsung: "Windows'ta Samsung Browser için uyumlu sürüm",
    compatSafari: "macOS Safari için sürüm",
    compatFirefox: "Firefox masaüstü için ayrı sürüm",
    compatYandex: "Yandex Browser için uyumlu sürüm",
    compatWhale: "Naver Whale için uyumlu sürüm",
    footerNote: "Chrome, Edge, Safari, Samsung Browser, Firefox, Yandex ve Whale masaüstü için DictionEvery tanıtım sayfası"
  }
};

const STORAGE_KEY = "dictionevery-site-lang";
const RELEASE = window.DICTIONEVERY_RELEASE || {
  version: "0.9.2.0",
  versionName: "0.9.2-beta.1",
  downloads: {}
};

const languageSwitcher = document.querySelector("[data-language-switcher]");
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");
const currentFlag = document.getElementById("language-current-flag");
const currentLabel = document.getElementById("language-current-label");
const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function supportedLanguage(code) {
  return SITE_LANGUAGES.some((language) => language.code === code) ? code : "ko";
}

function selectedLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const browserLang = navigator.language ? navigator.language.split("-")[0] : "";
  return supportedLanguage(stored || browserLang);
}

function flagMarkup(code) {
  return SITE_FLAGS[code] || "";
}

function localizeDigits(value, lang) {
  const text = String(value ?? "");
  if (lang !== "fa") {
    return text;
  }
  return text.replace(/[0-9]/g, (digit) => persianDigits[Number(digit)]);
}

function displayReleaseLabel(lang) {
  return localizeDigits(releaseLabel(), lang);
}

function appIconMarkup(className = "chip-logo") {
  return `<span class="logo-orb ${className}"><img src="./assets/icon-white.svg" alt="" /></span>`;
}

function renderStaticFlags() {
  document.querySelectorAll("[data-flag]").forEach((element) => {
    element.innerHTML = flagMarkup(element.dataset.flag);
  });
}

function renderDemoLanguage(lang) {
  const language = SITE_LANGUAGES.find((item) => item.code === lang) || SITE_LANGUAGES[0];
  document.querySelectorAll("[data-demo-flag]").forEach((element) => {
    element.innerHTML = flagMarkup(language.code);
  });
  document.querySelectorAll("[data-demo-language-label]").forEach((element) => {
    element.textContent = language.label;
  });
}

function renderSelectionChip(lang) {
  document.querySelectorAll(".selection-chip").forEach((element) => {
    const label = textFor(lang, "selectionChip");
    element.innerHTML = lang === "ko"
      ? `${appIconMarkup()}<span data-i18n="selectionChip">${label}</span>`
      : `<span data-i18n="selectionChip">${label}</span>${appIconMarkup()}`;
  });
}

function renderLanguageMenu(activeCode) {
  languageMenu.innerHTML = SITE_LANGUAGES.map((language) => `
    <button
      class="language-option ${language.code === activeCode ? "is-active" : ""}"
      type="button"
      role="option"
      aria-selected="${language.code === activeCode ? "true" : "false"}"
      data-lang="${language.code}"
    >
      <span class="site-flag-wrap" aria-hidden="true">${flagMarkup(language.code)}</span>
      <span>${language.label}</span>
    </button>
  `).join("");
}

function textFor(lang, key) {
  const value = SITE_I18N[lang]?.[key] || SITE_I18N.en[key] || SITE_I18N.ko[key] || key;
  return formatReleaseText(value, lang);
}

function releaseLabel() {
  return RELEASE.versionName || RELEASE.version || "0.9.2-beta.1";
}

function formatReleaseText(value, lang) {
  return localizeDigits(String(value).replace(/\{version\}/g, displayReleaseLabel(lang)), lang);
}

function applyReleaseInfo(lang = supportedLanguage(localStorage.getItem(STORAGE_KEY) || "ko")) {
  document.querySelectorAll("[data-release-title]").forEach((element) => {
    element.textContent = `DictionEvery · ${displayReleaseLabel(lang)}`;
  });

  document.querySelectorAll("[data-download]").forEach((element) => {
    const key = element.dataset.download;
    const url = RELEASE.downloads?.[key];
    if (url) {
      element.setAttribute("href", url);
    }
  });
}

function applyLanguage(code) {
  const lang = supportedLanguage(code);
  const metaDescription = document.querySelector('meta[name="description"]');
  const language = SITE_LANGUAGES.find((item) => item.code === lang) || SITE_LANGUAGES[0];

  document.documentElement.lang = lang;
  document.documentElement.dir = language.dir;
  document.title = textFor(lang, "title");
  if (metaDescription) {
    metaDescription.setAttribute("content", textFor(lang, "description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = textFor(lang, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", textFor(lang, element.dataset.i18nAria));
  });

  applyReleaseInfo(lang);
  currentFlag.innerHTML = flagMarkup(lang);
  currentLabel.textContent = language.label;
  renderLanguageMenu(lang);
  renderStaticFlags();
  renderDemoLanguage(lang);
  renderSelectionChip(lang);
  localStorage.setItem(STORAGE_KEY, lang);
}

function setMenuOpen(open) {
  languageSwitcher.classList.toggle("is-open", open);
  languageToggle.setAttribute("aria-expanded", open ? "true" : "false");
}

languageToggle.addEventListener("click", () => {
  setMenuOpen(!languageSwitcher.classList.contains("is-open"));
});

languageMenu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-lang]");
  if (!option) {
    return;
  }
  applyLanguage(option.dataset.lang);
  setMenuOpen(false);
});

document.addEventListener("click", (event) => {
  if (!languageSwitcher.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

applyLanguage(selectedLanguage());
applyReleaseInfo();
