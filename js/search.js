document.querySelector('input[type="range"]').addEventListener('input', function() {
    console.log('Цена изменена:', this.value);
});// Фильтрация отелей