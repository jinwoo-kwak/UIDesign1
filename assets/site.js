const translations = {
  ru: {
    pageTitleHome: 'Квак Джину',
    pageTitleFavorites: 'Избранное',
    pageTitleProjects: 'Проекты',
    pageTitleWebsite: 'Веб-сайт',
    folio: 'ПАПКА 01 · УЧЕБНЫЙ САЙТ',
    heroTitleA: 'КВАК',
    heroTitleB: 'ДЖИНУ',
    designerTag: 'ДИЗАЙНЕР',
    enterFavorites: 'ИЗБРАННОЕ',
    enterProjects: 'ПРОЕКТЫ',
    enterWebsite: 'ВЕБ-САЙТ',
    favoritesTitle: 'ИЗБРАННОЕ',
    favFoodTitle: 'ИНДИЙСКОЕ КАРРИ',
    favFoodLabel: 'Любимая еда',
    favSongTitle: '«КАМЧАТКА» - КИНО',
    favSongLabel: 'Любимая песня',
    favSiteTitle: 'NAMUWIKI',
    favSiteLabel: 'Любимый сайт',
    projectsTitle: 'ПРОЕКТЫ',
    projectAscii: 'ASCII ГОРОД',
    projectShelf: 'МОЯ ПОЛКА',
    projectStillLife: 'РИСОВАНИЕ С НАТУРЫ: CSS-НАТЮРМОРТ',
    websiteTitle: 'DICTIONEVERY',
    websiteSub: 'ВЕБ-САЙТ',
    websiteText: 'Расширение для браузера: выберите слово, найдите значение и повторяйте его в личном словаре.',
    openSite: 'ОТКРЫТЬ DICTIONEVERY',
    backHome: 'НА ГЛАВНУЮ'
  },
  en: {
    pageTitleHome: 'Jinwoo Kwak',
    pageTitleFavorites: 'Favorites',
    pageTitleProjects: 'Projects',
    pageTitleWebsite: 'Website',
    folio: 'FOLDER 01 · UI DESIGN PROGRAMMING',
    heroTitleA: 'JINWOO',
    heroTitleB: 'KWAK',
    designerTag: 'DESIGNER',
    enterFavorites: 'FAVORITES',
    enterProjects: 'PROJECTS',
    enterWebsite: 'WEBSITE',
    favoritesTitle: 'FAVORITES',
    favFoodTitle: 'INDIAN CURRY',
    favFoodLabel: 'Favorite food',
    favSongTitle: 'KAMCHATKA - KINO',
    favSongLabel: 'Favorite song',
    favSiteTitle: 'NAMUWIKI',
    favSiteLabel: 'Favorite website',
    projectsTitle: 'PROJECTS',
    projectAscii: 'ASCII TOWN',
    projectShelf: 'MY BOOKSHELF',
    projectStillLife: 'CODING FROM LIFE: CSS STILL LIFE',
    websiteTitle: 'DICTIONEVERY',
    websiteSub: 'WEBSITE',
    websiteText: 'A browser extension for selecting a word, finding its meaning, and reviewing it in a vocabulary list.',
    openSite: 'OPEN DICTIONEVERY',
    backHome: 'BACK HOME'
  }
};

const buttons = document.querySelectorAll('[data-lang-toggle]');
const pageKey = document.body.dataset.pageTitle || 'pageTitleHome';

function setLanguage(lang) {
  const dict = translations[lang] || translations.ru;
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;
  document.title = dict[pageKey] || dict.pageTitleHome;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  buttons.forEach((button) => {
    const active = button.dataset.langToggle === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('portfolio-language', lang);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.langToggle));
});

setLanguage(localStorage.getItem('portfolio-language') || 'ru');
