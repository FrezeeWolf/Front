// Проверка авторизации на всех страницах
document.addEventListener('DOMContentLoaded', function() {
    // Пропускаем проверку для страниц аутентификации
    if (window.location.pathname.includes('auth.html') || 
        window.location.pathname.includes('register.html') ||
        window.location.pathname.includes('forgot-password.html')) {
        return;
    }
    
    // Проверяем наличие текущего пользователя
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || 
                       JSON.parse(localStorage.getItem('currentUser'));
    
    // Если пользователь не авторизован, перенаправляем на страницу входа
    if (!currentUser) {
        window.location.href = 'auth.html';
    }
    
    // Обновляем кнопку входа/выхода в шапке
    const authButton = document.querySelector('nav a[href="auth.html"]');
    if (authButton && currentUser) {
        authButton.textContent = 'Выйти';
        authButton.href = '#';
        authButton.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('currentUser');
            localStorage.removeItem('currentUser');
            window.location.href = 'auth.html';
        });
    }
});