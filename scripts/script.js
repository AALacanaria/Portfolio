// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Certificate Modal
function openModal(src) {
  document.getElementById('modalImg').src = src;
  document.getElementById('certModal').style.display = "block";
}

function closeModal() {
  document.getElementById('certModal').style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('certModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}