// const stars = document.querySelectorAll('.star');
// 			const result = document.querySelector('.result');
// 			let selectedRating = 0;
	
// 			stars.forEach(star => {
// 				star.addEventListener('click', function() {
// 					selectedRating = this.getAttribute('data-value');
// 					updateRating(selectedRating);
					
// 					// Здесь можно отправить оценку на сервер
// 					console.log(`Выбрана оценка: ${selectedRating}`);
// 				});
	
// 				star.addEventListener('mouseover', function() {
// 					const hoverValue = this.getAttribute('data-value');
// 					highlightStars(hoverValue);
// 				});
	
// 				star.addEventListener('mouseout', function() {
// 					highlightStars(selectedRating);
// 				});
// 			});
	
// 			function highlightStars(value) {
// 				stars.forEach(star => {
// 					if (star.getAttribute('data-value') <= value) {
// 						star.classList.add('active');
// 					} else {
// 						star.classList.remove('active');
// 					}
// 				});
// 			}
	
// 			function updateRating(rating) {
// 				result.textContent = `Спасибо за оценку: ${rating} ★`;
// 				// Дополнительные действия после выбора оценки
// 			}


// Рейтинг звёзд
const stars = document.querySelectorAll('.star');
const result = document.querySelector('.result');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        updateRating(selectedRating);
        
        // Можно отправить оценку на сервер
        console.log(`Выбрана оценка: ${selectedRating}`);
    });

    star.addEventListener('mouseover', function() {
        const hoverValue = this.getAttribute('data-value');
        highlightStars(hoverValue);
    });

    star.addEventListener('mouseout', function() {
        highlightStars(selectedRating);
    });
});

function highlightStars(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function updateRating(rating) {
    const messages = [
        "Спасибо за оценку! Мы будем стараться лучше!",
        "Спасибо! Мы учтём ваше мнение.",
        "Спасибо! Рады, что вам понравилось!",
        "Спасибо за высокую оценку!",
        "Огромное спасибо! Вы нас вдохновляете!"
    ];
    result.textContent = messages[rating - 1];
}

// Кнопка "Наверх"
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.rating-section').classList.add('floating');
    }, 500);
});