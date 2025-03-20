function toggleMenu() {
  var menu = document.getElementById("mobileMenu");
  var icon = document.getElementById("menuIcon");

  // Toggle menu only if the screen width is <= 800px
  if (window.innerWidth <= 800) {
      if (menu.style.display === "block") {
          menu.style.display = "none";
          icon.textContent = "menu"; // Change back to hamburger
      } else {
          menu.style.display = "block";
          icon.textContent = "close"; // Change to cross
      }
  }
}

// Add event listener to handle screen resizing
window.addEventListener('resize', function() {
  var menu = document.getElementById("mobileMenu");
  var icon = document.getElementById("menuIcon");

  // Hide mobile menu if the screen width goes above 800px
  if (window.innerWidth > 800) {
      menu.style.display = "none";
      icon.textContent = "menu"; // Reset to hamburger
  }
});