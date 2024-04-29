document.addEventListener('DOMContentLoaded', function() {
    const language = navigator.language.split('-')[0]; // Obter apenas a parte do idioma (ex: "en" de "en-US")
    const translation = translations[language] || translations['en']; // Usar inglês como padrão se não houver tradução disponível
    document.getElementById('search').setAttribute('placeholder', translation.searchPlaceholder);
    document.getElementById('searchBtn').innerText = translation.searchButton;
});
