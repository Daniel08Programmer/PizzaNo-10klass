// Див внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')

// Отслеживаем клик на странице
window.addEventListener('click', function(event){

	// Проверяем что клик был совершён по кнопке "добавить в корзину"
	if (event.target.hasAttribute('data-basket')){

		// Находим карточку с товаром, внутри кторого был совершён клик
		const cart = event.target.closest('.cart');
		
		// Собираем данные с этого товара и записываем их в единый объект productinfo
		const productInfo = {
			id: cart.dataset.id,
			imgSrc: cart.querySelector('.Pizzas').getAttribute('src'),
			title: cart.querySelector('.NamePiz').innerText,
			weight: cart.querySelector('.weight').innerText,
			dia: cart.querySelector('.dia').innerText,
			price: cart.querySelector('.price').innerText,
			counter: cart.querySelector('[data-counter]').innerText,
			/*first: cart.querySelector('.first').innerText,
			second: cart.querySelector('.second').innerText,
			third: cart.querySelector('.third').innerText,*/
		};
	
		
	// Проверяем есть ли уже такой товар в корзине  
	const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"] `);
	/*
	const diameterCart = document.querySelector('.text');
	const diameterBasket = cartWrapper.querySelector('.diaBas');
	console.log(diameterCart);
	console.log(diameterBasket);
	console.log(itemInCart);*/
	//diameterBasket === diameterBasket
	
	//
	//const diameterBasket = cartWrapper.querySelector(`[data-diameter="${productInfo.dia}"]`);
	
	console.log(itemInCart); 
	//console.log(diameterBasket); && diameterBasket 
	

	// Если товар есть в корзине
	if (itemInCart) {
		const counterElement = itemInCart.querySelector('[data-counter]');
		counterElement.innerText = parseInt(counterElement.innerText)  +  parseInt(productInfo.counter);
	}else{
	// Собранные данные поставим в шаблон для товара в корзине 			<div class="CounterInBas">
	 const cartItemHTML = `
					
	 
					<div data-id="${productInfo.id}" class="cartBasket" >
					<div class="NamePizBas">${productInfo.title}</div> 
						<img class="PizzasBasket" src="${productInfo.imgSrc}">
							
						<div class="ItemInfo">
							<span class="diaBas" data-diameter="${productInfo.dia}">${productInfo.dia}</span> <span id="sl">/</span> <span class="weightBas">${productInfo.weight}</span>
							<div class="priceBas">${productInfo.price} - 1 шт</div>
						</div>
						<div class="main-counter">
							<button height="20px" id="NoumberOne" class="button" data-action="minus">-</button> 
							<div class="counter" data-counter>${productInfo.counter}</div>
							<button id="NoumberTwo" class="button" data-action="plus">+</button>
						</div>
					</div> 
				
				`;
			
	// Отобразим товар в корзине
	cartWrapper.insertAdjacentHTML ('beforeend', cartItemHTML );
	
	}

	// Сбрасываем счётчик добвленного товара до 1
	cart.querySelector('[data-counter]').innerText = '1';

	// Отображение статуса корзины Пустая/Полная
	toggleCartStatus();
	
	// Пересчёт общей стоимости товаров к корзине
	CalcCartPriceAndDelivery();

}

});




