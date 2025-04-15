
function CalcCartPriceAndDelivery(){
	
	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartItems = document.querySelectorAll('.cartBasket');
	const totalPriceEl = document.querySelector('.result');
	const deliveryPrice = document.querySelector('[data-delivery-price]');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
	
	// Общая стоимость товаров
	let totalPrice = 0;
 	
	// Обходим все блоки с ценами в корзине
	cartItems.forEach(function (item){
		
		// Находим количество товара
		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.priceBas');
		
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
		totalPrice += currentPrice;
		
	});
	
	// Отображаем цену на странице
	totalPriceEl.innerText = totalPrice;

	// Скрываем/Отображаем блок со стоимостью доставки
	if (totalPrice > 0){
		cartDelivery.classList.remove('invisible'); 
	}else{
		cartDelivery.classList.add('invisible');
		
	}
	
	// Указываем стоимость доставки
	if (totalPrice < 750 ) {
		deliveryPrice.classList.remove('delPri');
		deliveryPrice.innerText = '200 ₽';
	} else {
		deliveryPrice.classList.add('delPri');
		deliveryPrice.innerText = 'бесплатно';
	}
	
}