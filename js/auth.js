document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    const switchLinks = document.querySelectorAll('.switch-form a');
    
    // Пользовательские данные (временное хранилище)
    const users = JSON.parse(localStorage.getItem('bookingSiteUsers')) || [];
    
    // Костыль базового пользователя
    const defaultUser = {
        name: "Admin",
        email: "admin@gmail.com",
        phone: "+79999999999",
        password: "12345678"
    };

    const userExists = users.some(u => u.email === defaultUser.email);

    if (!userExists) {
        users.push(defaultUser);
        localStorage.setItem('bookingSiteUsers', JSON.stringify(users));
    }

    // Переключение между вкладками
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            // Активируем выбранную вкладку
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Показываем соответствующую форму
            forms.forEach(form => form.classList.remove('active'));
            document.getElementById(`${tabName}Form`).classList.add('active');
        });
    });
    
    // Переключение между формами по ссылкам
    switchLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const formToShow = this.dataset.show;
            
            // Активируем соответствующую вкладку
            tabs.forEach(tab => {
                tab.classList.toggle('active', tab.dataset.tab === formToShow);
            });
            
            // Показываем соответствующую форму
            forms.forEach(form => {
                form.classList.toggle('active', form.id === `${formToShow}Form`);
            });
        });
    });
    
    // Обработка формы входа
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('remember-me').checked;
            
            // Валидация
            if (!email || !password) {
                showNotification('Заполните все поля', 'error');
                return;
            }
            
            // Поиск пользователя
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Сохранение сессии
                if (rememberMe) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                } else {
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                }
                
                showNotification('Вход выполнен успешно!', 'success');
                
                // Перенаправление через 1 секунду
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                showNotification('Неверный email или пароль', 'error');
            }
        });
    }
    
    // Обработка формы регистрации
    if (registerForm) {
        // Проверка сложности пароля
        const passwordInput = document.getElementById('reg-password');
        const passwordStrength = document.querySelector('.password-strength');
        
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            updatePasswordStrength(password);
        });
        
        // Проверка совпадения паролей
        const confirmInput = document.getElementById('reg-confirm');
        const passwordError = document.getElementById('password-error');
        
        confirmInput.addEventListener('input', function() {
            if (passwordInput.value !== this.value && this.value.length > 0) {
                passwordError.textContent = 'Пароли не совпадают';
                passwordError.style.display = 'block';
            } else {
                passwordError.style.display = 'none';
            }
        });
        
        // Отправка формы регистрации
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получение данных формы
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const phone = document.getElementById('reg-phone').value;
            const password = passwordInput.value;
            const confirmPassword = confirmInput.value;
            
            // Валидация
            if (!name || !email || !phone || !password || !confirmPassword) {
                showNotification('Заполните все поля', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Пароли не совпадают', 'error');
                return;
            }
            
            if (!document.getElementById('reg-agreement').checked) {
                showNotification('Примите условия использования', 'error');
                return;
            }
            
            // Проверка на существующего пользователя
            if (users.some(u => u.email === email)) {
                showNotification('Пользователь с таким email уже существует', 'error');
                return;
            }
            
            // Создание нового пользователя
            const newUser = {
                id: Date.now(),
                name,
                email,
                phone,
                password,
                bookings: []
            };
            
            // Сохранение пользователя
            users.push(newUser);
            localStorage.setItem('bookingSiteUsers', JSON.stringify(users));
            
            // Автовход после регистрации
            sessionStorage.setItem('currentUser', JSON.stringify(newUser));
            showNotification('Регистрация прошла успешно!', 'success');
            
            // Перенаправление
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
    
    // Обработка социальных кнопок
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
            showNotification(`Вход через ${provider} пока недоступен`, 'error');
        });
    });
    
    // Автозаполнение email при "Запомнить меня"
    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser && loginForm) {
        document.getElementById('login-email').value = savedUser.email;
        document.getElementById('remember-me').checked = true;
    }
    
    // Функция обновления индикатора сложности пароля
    function updatePasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (/\d/.test(password)) strength++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        
        passwordStrength.className = 'password-strength';
        const strengthText = passwordStrength.querySelector('.strength-text');
        
        if (password.length === 0) {
            strengthText.textContent = '';
        } else if (strength <= 1) {
            passwordStrength.classList.add('password-weak');
            strengthText.textContent = 'Слабый';
        } else if (strength <= 3) {
            passwordStrength.classList.add('password-medium');
            strengthText.textContent = 'Средний';
        } else {
            passwordStrength.classList.add('password-strong');
            strengthText.textContent = 'Сильный';
        }
    }
    
    // Функция показа уведомлений
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Маска для телефона
    const phoneInput = document.getElementById('reg-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            let formattedValue = '';
            
            if (value.length > 0) {
                formattedValue = '+7 (';
                
                if (value.length > 1) {
                    formattedValue += value.substring(1, Math.min(4, value.length));
                }
                
                if (value.length >= 4) {
                    formattedValue += ') ' + value.substring(4, Math.min(7, value.length));
                }
                
                if (value.length >= 7) {
                    formattedValue += '-' + value.substring(7, Math.min(9, value.length));
                }
                
                if (value.length >= 9) {
                    formattedValue += '-' + value.substring(9, Math.min(11, value.length));
                }
            }
            
            this.value = formattedValue;
        });
    }
});