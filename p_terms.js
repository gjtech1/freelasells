document.addEventListener('DOMContentLoaded', function() {
    // Create the popup elements
    let popupBox = document.createElement('div');
    let popupContent = document.createElement('div');
    let popupMessage = document.createElement('p');
    let acceptButton = document.createElement('button');
    let viewPolicyButton = document.createElement('button');

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
    acceptButton.style.marginRight = '10px';

    viewPolicyButton.style.backgroundColor = '#fff';
    viewPolicyButton.style.color = '#6c5ce7';
    viewPolicyButton.style.padding = '10px 20px';
    viewPolicyButton.style.border = 'none';
    viewPolicyButton.style.borderRadius = '5px';
    viewPolicyButton.style.cursor = 'pointer';
    viewPolicyButton.style.textDecoration = 'none';

    // Add content to the elements
    popupMessage.textContent = 'Ao usar este site, você confirma aceitar nossa politica de privacidade';
    acceptButton.textContent = 'Aceitar';
    viewPolicyButton.textContent = 'Ver política de privacidade';

    // Append the elements
    popupContent.appendChild(popupMessage);
    popupContent.appendChild(acceptButton);
    popupContent.appendChild(viewPolicyButton);
    popupBox.appendChild(popupContent);
    document.body.appendChild(popupBox);

    // Add event listener to the accept button
    acceptButton.addEventListener('click', function() {
        document.body.removeChild(popupBox);
    });

    // Add event listener to the view policy button
    viewPolicyButton.addEventListener('click', function() {
        window.location.href = 'privacidade.html';
    });
});
