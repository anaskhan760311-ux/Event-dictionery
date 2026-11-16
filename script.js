// 1. Search and Category Filter
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const eventCards = document.querySelectorAll('.event-card');
const noResults = document.getElementById('noResultsMessage');

let currentCategory = 'all';

function updateCards() {
  const searchText = searchInput.value.toLowerCase();
  let count = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const category = card.getAttribute('data-category');

    const matchSearch = title.includes(searchText);
    const matchCategory = currentCategory === 'all' || category === currentCategory;

    if (matchSearch && matchCategory) {
      card.style.display = 'flex';
      count++;
    } else {
      card.style.display = 'none';
    }
  });

  // Show message if no cards match
  if (count === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
  }
}

// Run filter when typing in search box
searchInput.addEventListener('input', updateCards);

// Run filter when clicking category buttons
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    currentCategory = btn.getAttribute('data-category');
    updateCards();
  });
});

// 2. Login Modal Open & Close
const loginModal = document.getElementById('loginModal');
const openLoginBtn = document.getElementById('openLoginBtn');
const closeLoginBtn = document.getElementById('closeLoginBtn');
const loginForm = document.getElementById('loginForm');

openLoginBtn.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
});

closeLoginBtn.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});

// Close modal if user clicks outside the box
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add('hidden');
  }
});

// Handle login form submit
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  alert('Logged in as ' + email);
  loginModal.classList.add('hidden');
  loginForm.reset();
});