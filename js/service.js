document.addEventListener('DOMContentLoaded', () => {
    // Получаем ID услуги из URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = parseInt(urlParams.get('id'));
    
    // Получаем текущего пользователя (в реальном приложении из системы авторизации)
    const currentUser = { id: 1 };
    
    // Находим услугу
    const service = services.find(s => s.id === serviceId);
    
    if (!service) {
        window.location.href = 'index.html';
        return;
    }
    
    // Рассчитываем средний рейтинг
    const avgRating = service.reviews && service.reviews.length > 0 
        ? (service.reviews.reduce((sum, review) => sum + review.rating, 0) / service.reviews.length).toFixed(1)
        : 0;
    
    // Отображаем информацию об услуге
    const serviceContent = document.getElementById('service-content');
    serviceContent.innerHTML = `
        <div class="service-image">
            <img src="${service.image || 'https://via.placeholder.com/500x300?text=No+Image'}" alt="${service.name}">
        </div>
        <div class="service-info">
            <h1>${service.name}</h1>
            <div class="service-category">${service.category}</div>
            <div class="service-price">${typeof service.price === 'number' ? service.price.toLocaleString() + ' ₽' : service.price}</div>
            <div class="service-rating">
                <span class="stars">${'★'.repeat(Math.round(avgRating))}${'☆'.repeat(5 - Math.round(avgRating))}</span>
                <span>${avgRating} (${service.reviews ? service.reviews.length : 0} отзывов)</span>
            </div>
            <div class="service-description">
                <h3>Описание</h3>
                <p>${service.description}</p>
            </div>
        </div>
    `;
    
    // Отображаем отзывы
    const reviewsList = document.getElementById('reviews-list');
    if (service.reviews && service.reviews.length > 0) {
        reviewsList.innerHTML = service.reviews.map(review => `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-user">Пользователь #${review.userId}</div>
                    <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                </div>
                <div class="review-comment">${review.comment}</div>
            </div>
        `).join('');
    } else {
        reviewsList.innerHTML = '<p>Пока нет отзывов. Будьте первым!</p>';
    }
    
    // Проверяем, оставлял ли пользователь уже отзыв
    const hasUserReviewed = service.reviews && service.reviews.some(r => r.userId === currentUser.id);
    const reviewForm = document.getElementById('review-form');
    
    if (hasUserReviewed) {
        reviewForm.innerHTML = '<p>Вы уже оставили отзыв для этой услуги.</p>';
    } else {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const rating = parseInt(document.getElementById('review-rating').value);
            const comment = document.getElementById('review-comment').value.trim();
            
            if (!service.reviews) {
                service.reviews = [];
            }
            
            service.reviews.push({
                userId: currentUser.id,
                rating: rating,
                comment: comment
            });
            
            // Показываем уведомление
            showNotification('Спасибо за ваш отзыв!', 'success');
            
            // Перезагружаем страницу для обновления данных
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        });
    }
});

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
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}