document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Валидация формы
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const card = this.querySelector('input[placeholder="Номер карты"]').value;

        if (!name || !email || !card) {
            alert('Заполните все обязательные поля!');
            return;
        }

        // Симуляция отправки данных
        setTimeout(() => {
            alert('Бронь успешно подтверждена! Спасибо за заказ.');
            // Здесь можно добавить редирект или очистку формы
            bookingForm.reset();
        }, 1000);
    });

    // Динамический расчет суммы (пример)
    const nights = 5;
    const pricePerNight = 5000;
    const taxes = 2000;
    const total = nights * pricePerNight + taxes;

    document.querySelector('.total span').textContent = `${total.toLocaleString()} ₽`;
});
document.addEventListener('DOMContentLoaded', function() {
    // Обработка отправки формы бронирования
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Валидация формы
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const phoneInput = this.querySelector('input[type="tel"]');
            
            if (!nameInput.value || !emailInput.value || !phoneInput.value) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }
            
            // Переход на страницу оплаты (в реальном проекте здесь была бы обработка данных)
            window.location.href = 'payment.html'; // Можно создать отдельную страницу для оплаты
        });
    }

    // Имитация выбора способа оплаты (можно добавить радиокнопки)
    const paymentMethods = document.querySelectorAll('.payment-method');
    if (paymentMethods) {
        paymentMethods.forEach(method => {
            method.addEventListener('click', function() {
                paymentMethods.forEach(m => m.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});