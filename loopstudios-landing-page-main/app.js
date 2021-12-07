const harmburgerBtn = document.querySelector(
  '.harmburger-btn',
);
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector(
  '.sidebar-wrapper',
);

// add classlist to open side bar
harmburgerBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});

// Remove class list to close sidebar
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});
