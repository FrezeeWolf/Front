document.addEventListener('DOMContentLoaded', function() {
    // Фильтр по цене
    const priceRange = document.getElementById('priceRange');
    const currentPrice = document.getElementById('currentPrice');
    
    priceRange.addEventListener('input', function() {
        currentPrice.textContent = this.value + ' ₽';
        // Здесь можно добавить фильтрацию отелей по цене
    });

    // Фильтр по рейтингу
    const ratingFilter = document.getElementById('ratingFilter');
    ratingFilter.addEventListener('change', function() {
        console.log('Выбран рейтинг:', this.value);
        // Фильтрация отелей по рейтингу
    });

    // Инициализация выбора дат (используем flatpickr)
    const dateInput = document.getElementById('dates');
    if (dateInput) {
        flatpickr(dateInput, {
            mode: "range",
            dateFormat: "d.m.Y",
            locale: "ru"
        });
    }

    // Инициализация выбора гостей
    const guestsInput = document.getElementById('guests');
    if (guestsInput) {
        guestsInput.addEventListener('click', function() {
            // Здесь можно добавить модальное окно для выбора количества гостей
            console.log('Открыть выбор гостей');
        });
    }
});