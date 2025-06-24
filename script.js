document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question-item');
    questions.forEach(item => {
        const btn = item.querySelector('.question-toggle');
        btn.addEventListener('click', function() {
            // Закриваємо всі інші
            questions.forEach(q => {
                if(q !== item) q.classList.remove('active');
            });
            // Перемикаємо поточний
            item.classList.toggle('active');
        });
    });
});
