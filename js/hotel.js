document.addEventListener('DOMContentLoaded', function() {
    // Инициализация календаря для выбора дат
    const bookingDates = document.getElementById('bookingDates');
    if (bookingDates) {
        flatpickr(bookingDates, {
            mode: "range",
            dateFormat: "d.m.Y",
            locale: "ru",
            minDate: "today"
        });
    }

    // Обработка отправки формы бронирования
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'booking.html';
        });
    }

    // Обработка отправки отзыва
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваш отзыв! После модерации он будет опубликован.');
            this.reset();
        });
    }

    // Просмотр увеличенных изображений в галерее
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const newSrc = this.src.replace('-thumb', '-large');
            mainImage.src = newSrc;
            
            // Добавляем анимацию
            mainImage.style.opacity = 0;
            setTimeout(() => {
                mainImage.style.opacity = 1;
            }, 100);
        });
    });
});