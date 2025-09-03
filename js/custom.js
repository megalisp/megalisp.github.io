// Spoiler reveal logic
// Adds click event to all elements with class 'spoiler' to toggle 'revealed' class

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.spoiler').forEach(function(el) {
    el.addEventListener('click', function() {
      el.classList.toggle('revealed');
    });
  });
});
