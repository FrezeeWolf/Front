// Пример данных услуг
const services = [
    { 
        id: 1, 
        name: "Гостиница Центральная", 
        price: 3500, 
        category: "Отели", 
        rating: 4.5, // Это поле теперь будет игнорироваться, оставлено для обратной совместимости
        reviews: [
            { userId: 1, rating: 5, comment: "Отличный отель!" },
            { userId: 2, rating: 4, comment: "Хорошее место для отдыха" }
        ],
        description: "Комфортабельный отель в центре города с бесплатным Wi-Fi",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 2,
        name: "Ресторан Старый Город", 
        price: 2500, 
        category: "Кафе и рестораны", 
        rating: 4.8,
        reviews: [
            { userId: 1, rating: 5, comment: "Вкусная еда и отличное обслуживание" }
        ],
        description: "Ресторан русской кухни с уютной атмосферой",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 3, 
        name: "Такси Городское", 
        price: 500, 
        category: "Такси", 
        rating: 4.2,
        reviews: [],
        description: "Круглосуточная служба такси с фиксированными тарифами",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 4, 
        name: "Экскурсия по историческому центру", 
        price: 1200, 
        category: "Экскурсии", 
        rating: 4.9,
        reviews: [
            { userId: 3, rating: 5, comment: "Интересный маршрут, отличный гид" },
            { userId: 4, rating: 5, comment: "Познавательно и увлекательно" }
        ],
        description: "2-часовая пешая экскурсия по главным достопримечательностям",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 5, 
        name: "Мини-отель Уют", 
        price: 2800, 
        category: "Отели", 
        rating: 4.1,
        reviews: [],
        description: "Небольшой семейный отель с домашней атмосферой",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 6, 
        name: "Кафе Кофейня", 
        price: 800, 
        category: "Кафе и рестораны", 
        rating: 4.3,
        reviews: [],
        description: "Уютное кафе с широким выбором кофе и десертов", 
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 7, 
        name: "Такси Премиум", 
        price: 800, 
        category: "Такси", 
        rating: 4.7,
        reviews: [],
        description: "Премиум класс такси с новыми автомобилями",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    },
    { 
        id: 8, 
        name: "Автобусная экскурсия", 
        price: 1800, 
        category: "Экскурсии", 
        rating: 4.4,
        reviews: [],
        description: "3-часовая автобусная экскурсия по городу и окрестностям", 
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 9, 
        name: "Хостел Путешественник", 
        price: 1200, 
        category: "Отели", 
        rating: 3.9,
        reviews: [],
        description: "Бюджетный хостел для путешественников", 
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 10, 
        name: "Ресторан Итальянская кухня", 
        price: 3200, 
        category: "Кафе и рестораны", 
        rating: 4.6,
        reviews: [],
        description: "Аутентичная итальянская кухня от шеф-повара из Рима",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    },
    { 
        id: 11, 
        name: "Такси Эконом", 
        price: 300, 
        category: "Такси", 
        rating: 3.8,
        reviews: [],
        description: "Самая экономичная служба такси в городе", 
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 12, 
        name: "Ночная экскурсия", 
        price: 1500, 
        category: "Экскурсии", 
        rating: 4.7,
        reviews: [],
        description: "Эксклюзивная вечерняя экскурсия по освещенным достопримечательностям",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
        id: 13, 
        name: "такси максим", 
        price: "Бесценно", 
        category: "Такси", 
        rating: 4.7,
        reviews: [],
        description: "Эксклюзивная таксишка от максима",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    }
];

class SearchSystem {
    constructor() {
        this.filters = {
            category: [],
            price_min: null,
            price_max: null,
            rating: null
        };
        this.currentPage = 1;
        this.resultsPerPage = 6;
        this.searchQuery = '';
        this.sortOption = 'default';
        this.currentUser = { id: 1 }; // Текущий пользователь (в реальном приложении брать из системы авторизации)
        this.initElements();
        this.bindEvents();
        this.loadInitialData();
    }

    initElements() {
        this.searchInput = document.getElementById('search-input');
        this.resultsContainer = document.getElementById('results-container');
        this.paginationContainer = document.getElementById('pagination');
        this.sortSelect = document.getElementById('sort-select');
        this.loadingIndicator = document.querySelector('.loading');
        this.noResultsIndicator = document.querySelector('.no-results');
        this.totalCountElement = document.getElementById('total-count');
        this.resetFiltersBtn = document.getElementById('reset-filters');
        
        // Фильтры
        this.categoryCheckboxes = document.querySelectorAll('input[name="category"]');
        this.priceMinInput = document.getElementById('price-min');
        this.priceMaxInput = document.getElementById('price-max');
        this.ratingRadios = document.querySelectorAll('input[name="rating"]');
        
        // Модальное окно
        this.modal = document.getElementById('add-service-modal');
        this.serviceForm = document.getElementById('service-form');
        this.addServiceBtn = document.getElementById('add-service-btn');
        this.closeModalBtn = document.querySelector('.close-modal');
    }

    bindEvents() {
        this.searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
        this.sortSelect.addEventListener('change', this.handleSortChange.bind(this));
        this.resetFiltersBtn.addEventListener('click', this.resetFilters.bind(this));
        
        // Обработчики для фильтров
        this.categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', this.handleCategoryFilter.bind(this));
        });
        
        this.priceMinInput.addEventListener('input', this.debounce(this.handlePriceFilter.bind(this), 500));
        this.priceMaxInput.addEventListener('input', this.debounce(this.handlePriceFilter.bind(this), 500));
        
        this.ratingRadios.forEach(radio => {
            radio.addEventListener('change', this.handleRatingFilter.bind(this));
        });
        
        // Обработчики для модального окна
        this.addServiceBtn.addEventListener('click', this.openModal.bind(this));
        this.closeModalBtn.addEventListener('click', this.closeModal.bind(this));
        this.serviceForm.addEventListener('submit', this.handleServiceSubmit.bind(this));
        
        // Закрытие модального окна при клике вне его
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }

    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    loadInitialData() {
        this.showLoading();
        setTimeout(() => {
            this.filterAndDisplayResults();
            this.hideLoading();
        }, 300);
    }

    filterAndDisplayResults() {
        // Фильтрация
        let filtered = services.filter(service => {
            // Поиск по тексту
            if (this.searchQuery && 
                !service.name.toLowerCase().includes(this.searchQuery.toLowerCase()) && 
                !service.description.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                return false;
            }
            
            // Фильтр по категории
            if (this.filters.category.length > 0 && !this.filters.category.includes(service.category)) {
                return false;
            }
            
            // Фильтр по цене
            if (typeof service.price === 'number') {
                if (this.filters.price_min !== null && service.price < this.filters.price_min) {
                    return false;
                }
                
                if (this.filters.price_max !== null && service.price > this.filters.price_max) {
                    return false;
                }
            }
            
            // Фильтр по рейтингу (теперь на основе отзывов)
            const avgRating = service.reviews && service.reviews.length > 0 
                ? service.reviews.reduce((sum, review) => sum + review.rating, 0) / service.reviews.length 
                : 0;
            
            if (this.filters.rating !== null && avgRating < parseFloat(this.filters.rating)) {
                return false;
            }
            
            return true;
        });
        
        // Сортировка
        filtered = this.sortResults(filtered);
        
        // Пагинация
        const total = filtered.length;
        const totalPages = Math.ceil(total / this.resultsPerPage);
        const paginatedResults = filtered.slice(
            (this.currentPage - 1) * this.resultsPerPage,
            this.currentPage * this.resultsPerPage
        );
        
        // Отображение
        this.displayResults(paginatedResults, total);
        this.updatePagination(totalPages);
    }

    sortResults(results) {
        switch(this.sortOption) {
            case 'price_asc':
                return [...results].sort((a, b) => {
                    if (typeof a.price !== 'number' || typeof b.price !== 'number') return 0;
                    return a.price - b.price;
                });
            case 'price_desc':
                return [...results].sort((a, b) => {
                    if (typeof a.price !== 'number' || typeof b.price !== 'number') return 0;
                    return b.price - a.price;
                });
            case 'rating_desc':
                return [...results].sort((a, b) => {
                    const aRating = a.reviews && a.reviews.length > 0 
                        ? a.reviews.reduce((sum, review) => sum + review.rating, 0) / a.reviews.length 
                        : 0;
                    const bRating = b.reviews && b.reviews.length > 0 
                        ? b.reviews.reduce((sum, review) => sum + review.rating, 0) / b.reviews.length 
                        : 0;
                    return bRating - aRating;
                });
            default:
                return results;
        }
    }

    displayResults(results, total) {
        this.resultsContainer.innerHTML = '';
        this.totalCountElement.textContent = total;
        
        if (results.length === 0) {
            this.noResultsIndicator.style.display = 'block';
            return;
        } else {
            this.noResultsIndicator.style.display = 'none';
        }
        
        results.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'result-item';
            
            // Рассчитываем средний рейтинг на основе отзывов
            const avgRating = item.reviews && item.reviews.length > 0 
                ? (item.reviews.reduce((sum, review) => sum + review.rating, 0)) / item.reviews.length 
                : 0;
            
            itemElement.innerHTML = `
                <img src="${item.image || 'https://via.placeholder.com/300x180?text=No+Image'}" 
                     alt="${item.name}" 
                     class="result-item-image">
                <div class="result-item-content">
                    <div class="item-header">
                        <span class="category">${item.category}</span>
                        <span class="rating">★ ${avgRating.toFixed(1)}</span>
                    </div>
                    <h3>${item.name}</h3>
                    <p class="description">${item.description}</p>
                    <div class="price">${typeof item.price === 'number' ? item.price.toLocaleString() + ' ₽' : item.price}</div>
                </div>
            `;
            
            // Добавляем обработчик клика для перехода на страницу услуги
            itemElement.addEventListener('click', (e) => {
                if (!e.target.classList.contains('btn-delete')) {
                    window.location.href = `service.html?id=${item.id}`;
                }
            });
            
            this.resultsContainer.appendChild(itemElement);
        });
        
        // Добавляем обработчики для кнопок удаления
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('Вы уверены, что хотите удалить эту услугу?')) {
                    this.deleteService(parseInt(btn.dataset.id));
                }
            });
        });
    }

    deleteService(id) {
        const index = services.findIndex(service => service.id === id);
        if (index !== -1) {
            services.splice(index, 1);
            this.filterAndDisplayResults();
            this.showNotification('Услуга удалена', 'success');
        }
    }

    updatePagination(totalPages) {
        this.paginationContainer.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        // Кнопка "Назад"
        if (this.currentPage > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.textContent = '← Назад';
            prevBtn.addEventListener('click', () => {
                this.currentPage--;
                this.filterAndDisplayResults();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            this.paginationContainer.appendChild(prevBtn);
        }
        
        // Нумерация страниц
        const maxVisiblePages = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            if (i === this.currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                this.currentPage = i;
                this.filterAndDisplayResults();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            this.paginationContainer.appendChild(pageBtn);
        }
        
        // Кнопка "Вперед"
        if (this.currentPage < totalPages) {
            const nextBtn = document.createElement('button');
            nextBtn.textContent = 'Вперед →';
            nextBtn.addEventListener('click', () => {
                this.currentPage++;
                this.filterAndDisplayResults();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            this.paginationContainer.appendChild(nextBtn);
        }
    }

    handleSearch() {
        this.searchQuery = this.searchInput.value.trim();
        this.currentPage = 1;
        this.filterAndDisplayResults();
    }

    handleCategoryFilter(e) {
        const value = e.target.value;
        
        if (e.target.checked) {
            this.filters.category.push(value);
        } else {
            this.filters.category = this.filters.category.filter(cat => cat !== value);
        }
        
        this.currentPage = 1;
        this.filterAndDisplayResults();
    }

    handlePriceFilter() {
        this.filters.price_min = this.priceMinInput.value ? parseInt(this.priceMinInput.value) : null;
        this.filters.price_max = this.priceMaxInput.value ? parseInt(this.priceMaxInput.value) : null;
        this.currentPage = 1;
        this.filterAndDisplayResults();
    }

    handleRatingFilter(e) {
        this.filters.rating = e.target.value || null;
        this.currentPage = 1;
        this.filterAndDisplayResults();
    }

    handleSortChange() {
        this.sortOption = this.sortSelect.value;
        this.currentPage = 1;
        this.filterAndDisplayResults();
    }

    resetFilters() {
        // Сброс значений фильтров
        this.filters = {
            category: [],
            price_min: null,
            price_max: null,
            rating: null
        };
        
        // Сброс UI элементов
        this.categoryCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        this.priceMinInput.value = '';
        this.priceMaxInput.value = '';
        
        this.ratingRadios.forEach(radio => {
            if (radio.value === '') {
                radio.checked = true;
            } else {
                radio.checked = false;
            }
        });
        
        this.sortSelect.value = 'default';
        this.sortOption = 'default';
        this.searchInput.value = '';
        this.searchQuery = '';
        
        this.currentPage = 1;
        this.filterAndDisplayResults();
    }

    showLoading() {
        this.loadingIndicator.style.display = 'block';
        this.resultsContainer.style.opacity = '0.5';
    }

    hideLoading() {
        this.loadingIndicator.style.display = 'none';
        this.resultsContainer.style.opacity = '1';
    }
    
    openModal() {
        this.modal.style.display = 'block';
    }
    
    closeModal() {
        this.modal.style.display = 'none';
    }
    
    handleServiceSubmit(e) {
        e.preventDefault();
        
        const newService = {
            id: services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1,
            name: document.getElementById('service-name').value,
            category: document.getElementById('service-category').value,
            price: parseFloat(document.getElementById('service-price').value),
            reviews: [], // Начальный пустой массив отзывов
            description: document.getElementById('service-description').value,
            image: document.getElementById('service-image').value || 
                   'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        };
        
        services.push(newService);
        this.closeModal();
        this.serviceForm.reset();
        this.filterAndDisplayResults();
        
        // Показываем уведомление об успешном добавлении
        this.showNotification('Услуга успешно добавлена!', 'success');
    }
    
    showNotification(message, type) {
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
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new SearchSystem();
});