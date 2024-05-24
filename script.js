// JavaScript para controlar la visibilidad de las opciones de marca
document.addEventListener('DOMContentLoaded', function() {
    const marcaTrigger = document.getElementById('marca-trigger');
    const marcaOptions = document.getElementById('marca-options');
  
    marcaTrigger.addEventListener('click', function() {
      // Toggle the collapse state
      const isCollapsed = marcaOptions.classList.contains('show');
      if (isCollapsed) {
        marcaTrigger.setAttribute('aria-expanded', 'false');
      } else {
        marcaTrigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
  