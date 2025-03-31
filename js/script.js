
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


//   document.addEventListener("DOMContentLoaded", function () {
//     const toggler = document.getElementById("navbarToggler");
//     const menu = document.getElementById("navbarCollapse");

//     toggler.addEventListener("click", function () {
//         menu.classList.toggle("show"); // Toggle the 'show' class
//     });
// });





  