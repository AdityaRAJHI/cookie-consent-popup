document.addEventListener('DOMContentLoaded', function() {
      const cookiePopup = document.getElementById('cookie-popup');
      const acceptButton = document.getElementById('accept-cookies');

      if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookiePopup.classList.add('hidden');
      }

      acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookiePopup.classList.add('hidden');
      });
    });
