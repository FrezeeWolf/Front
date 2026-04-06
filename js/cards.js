document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const overlay = document.getElementById('overlay');
    let activeCard = null;

    // Обработчик клика по карточке
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Если уже есть активная карточка, закрываем её
            if (activeCard) {
                activeCard.classList.remove('active');
            }
            
            // Если кликнули не по активной карточке, открываем новую
            if (activeCard !== card) {
                card.classList.add('active');
                overlay.style.display = 'block';
                activeCard = card;
            } else {
                activeCard = null;
                overlay.style.display = 'none';
            }
        });
    });

    // Обработчик клика по overlay
    overlay.addEventListener('click', function() {
        if (activeCard) {
            activeCard.classList.remove('active');
            activeCard = null;
            overlay.style.display = 'none';
        }
    });

    // Закрытие при нажатии ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && activeCard) {
            activeCard.classList.remove('active');
            activeCard = null;
            overlay.style.display = 'none';
        }
    });
});