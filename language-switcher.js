document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'tr';

    function updateContent(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            element.textContent = translations[lang][key];
        });
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.textContent.toLowerCase();
            if (lang !== currentLang) {
                currentLang = lang;
                langButtons.forEach(b => b.classList.toggle('active'));
                updateContent(lang);
            }
        });
    });
});

