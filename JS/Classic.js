// Переключатель темы
const body = document.body;
        const themeToggle = document.getElementById('themeToggle');

        // Загрузка сохраненной темы при загрузке страницы
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);

            // Установка состояния чекбокса в зависимости от сохраненной темы
            themeToggle.checked = savedTheme === 'dark-theme';
        }
        themeToggle.addEventListener('change', function() {
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme');         
            // Сохранение текущей темы в локальное хранилище
            const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
            localStorage.setItem('theme', currentTheme);
        });
        
// Открытие модального окна
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}