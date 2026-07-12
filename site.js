const announcement = document.querySelector('.announcement-bar');
const dismissAnnouncement = announcement?.querySelector('button');

dismissAnnouncement?.addEventListener('click', () => {
  announcement.remove();
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
