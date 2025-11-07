const btn = document.getElementById('toggleBtn');
const body = document.body;
const mode = localStorage.getItem('mode');

if (mode === 'dark') {
    body.classList.add('dark-mode');
    btn.textContent = 'Light Mode';
}

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'Light Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        btn.textContent = 'Dark Mode';
        localStorage.setItem('mode', 'light');
    }
});
