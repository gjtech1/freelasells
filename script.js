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
    },
    "pt-BR": {
        "searchPlaceholder": "Buscar downloads...",
        "searchButton": "Buscar"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const language = navigator.language.split('-')[0]; // Obter apenas a parte do idioma (ex: "en" de "en-US")
    const translation = translations[language] || translations['en']; // Usar inglês como padrão se não houver tradução disponível
    document.getElementById('search').setAttribute('placeholder', translation.searchPlaceholder);
    document.getElementById('searchBtn').innerText = translation.searchButton;
});
