	
	// Добавляем прослушку на всём окне
	window.addEventListener('click', function(event){

	// Объявляем переменную для счётчика
	let counter;
	
	// Проверяем клик строго по кнопке плюс либо минус
	if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

		// Находим обёртку счётчика
		const mainCounter = event.target.closest('.main-counter');
		
		// Находим див с числом счётчика
		counter = mainCounter.querySelector('[data-counter]');
		
	}
	
	// Проверяем является ли эелемент по которому был совершён клик кнопкой плюс
	if (event.target.dataset.action === 'plus'){
		
		// Изменяем чинло на его +1
		counter.innerText = ++counter.innerText;
		
	}
	
	// Проверяем является ли эелемент по которому был совершён клик кнопкой минус
	if (event.target.dataset.action === 'minus'){
		
		
		// Проверяем чтобы число было больше 1
		if (parseInt(counter.innerText) > 1){

			// Изменяем чинло на его -1	
			counter.innerText = --counter.innerText;
			
		// Проверка на товар который находится в корзине	
		} else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
			
			// Удаляем товар из корзины
			event.target.closest('.cartBasket').remove();

			// Отображение статуса корзины Пустая/Полная
			toggleCartStatus();
			
			// Пересчёт общей стоимости товаров к корзине
			CalcCartPriceAndDelivery()
		}
}
	// Проверяем клик на + или = внутри корзины
	if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
		
		// Пересчёт общей стоимости товаров к корзине
		CalcCartPriceAndDelivery();
	}
	
	
	
	});
