document.addEventListener('DOMContentLoaded', function() {
    // Create the popup elements
    let popupBox = document.createElement('div');
    let popupContent = document.createElement('div');
    let popupMessage = document.createElement('p');
    let acceptButton = document.createElement('button');

    // Add styles to the elements
    popupBox.style.position = 'fixed';
    popupBox.style.zIndex = '9999';
    popupBox.style.left = '0';
    popupBox.style.top = '0';
    popupBox.style.width = '100%';
    popupBox.style.height = '100%';
    popupBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    popupBox.style.display = 'flex';
    popupBox.style.justifyContent = 'center';
    popupBox.style.alignItems = 'center';

    popupContent.style.backgroundColor = '#fff';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '5px';
    popupContent.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

    popupMessage.style.fontSize = '18px';
    popupMessage.style.marginBottom = '20px';

    acceptButton.style.backgroundColor = '#6c5ce7';
    acceptButton.style.color = '#fff';
    acceptButton.style.padding = '10px 20px';
    acceptButton.style.border = 'none';
    acceptButton.style.borderRadius = '5px';
    acceptButton.style.cursor = 'pointer';

    // Add content to the elements
    popupMessage.textContent = 'Usando esse site, você aceita nossa politica de privacidade.';
    acceptButton.textContent = 'Aceitar';

    // Append the elements
    popupContent.appendChild(popupMessage);
    popupContent.appendChild(acceptButton);
    popupBox.appendChild(popupContent);
    document.body.appendChild(popupBox);

    // Add event listener to the accept button
    acceptButton.addEventListener('click', function() {
        document.body.removeChild(popupBox);
    });
});
