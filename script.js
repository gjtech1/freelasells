const translations = {
    "en": {
        "searchPlaceholder": "Search downloads...",
        "searchButton": "Search"
    },
    "es": {
        "searchPlaceholder": "Buscar descargas...",
        "searchButton": "Buscar"
    },
    "tr": {
        "searchPlaceholder": "İndirmeleri ara...",
        "searchButton": "Ara"
    },
    "hi": {
        "searchPlaceholder": "डाउनलोड खोजें...",
        "searchButton": "खोजें"
    },
    "fr": {
        "searchPlaceholder": "Rechercher des téléchargements...",
        "searchButton": "Rechercher"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    const searchBtn = document.getElementById('searchBtn');

    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        translate(selectedLanguage);
    });

    function translate(language) {
        const translation = translations[language];
        document.getElementById('search').setAttribute('placeholder', translation.searchPlaceholder);
        document.getElementById('searchBtn').innerText = translation.searchButton;
    }
});
