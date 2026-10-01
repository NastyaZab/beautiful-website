// Добавьте адреса — ссылки автоматически станут активными.
const portfolio = {
  projects: ['', '', ''],
  email: '',
  telegram: '', // Полная ссылка https://t.me/username
};

function activateLink(element, url) {
  element.href = url;
  element.removeAttribute('aria-disabled');
  element.removeAttribute('role');
}

document.querySelectorAll('[data-project]').forEach((link) => {
  const url = portfolio.projects[Number(link.dataset.project)];
  if (!url || !/^https?:\/\//i.test(url)) return;
  activateLink(link, url);
  link.setAttribute('aria-label', `Открыть проект ${Number(link.dataset.project) + 1}`);
  link.closest('article').querySelector('.coming').hidden = true;
});

if (portfolio.email) activateLink(document.querySelector('[data-contact="email"]'), `mailto:${portfolio.email}`);
if (/^https:\/\//i.test(portfolio.telegram)) activateLink(document.querySelector('[data-contact="telegram"]'), portfolio.telegram);
if (portfolio.email && /^https:\/\//i.test(portfolio.telegram)) document.getElementById('contact-note').hidden = true;
document.getElementById('year').textContent = new Date().getFullYear();
