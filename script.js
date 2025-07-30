const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => nav.classList.toggle('active'));

const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.setAttribute('data-theme', currentTheme);
toggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

toggle.addEventListener('click', () => {
  const theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
});
