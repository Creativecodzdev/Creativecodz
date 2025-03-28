// Function to load external HTML components
function loadComponent(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(html => document.getElementById(id).innerHTML = html)
      .catch(error => console.error(`Error loading ${url}:`, error));
  }
  
  // Load components into the main page
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header', 'components/partials/navbar.html');
    loadComponent('content', 'components/pages/ContentPage.html');
    loadComponent('footer', 'components/partials/footer.html');
  });
  