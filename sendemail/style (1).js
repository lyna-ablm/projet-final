// Initialisation de EmailJS
emailjs.init('9pChl6TfJwDmLdPCn');  // Remplacez 'VOTRE_USER_ID' par votre user ID EmailJS

// Gestionnaire d'événements pour le formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Paramètres pour EmailJS
    const params = {
        from_name: name,
        email_id: email,
        message: message
    };

    // Envoyer l'email
    emailjs.send('service_jferthu', 'template_61mkvxp', params)
        .then(function(response) {
            alert('Email envoyé avec succès !');
        }, function(error) {
            alert('Erreur lors de l\'envoi de l\'email: ' + JSON.stringify(error));
        });
});