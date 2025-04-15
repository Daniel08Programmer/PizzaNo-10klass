
function toggleCartStatus(){
	
	
	const cartWrapper = document.querySelector('.cart-wrapper');
	const basketEmpty = document.querySelector('[data-basket-empty]');
	const orderForm = document.querySelector('.order-form');
	const yourOrder = document.querySelector('[data-cart-order]');
	const CartWrapper = document.querySelector('.cart-wrapper')
	const VisitCart = document.querySelector('.VisitCart')
	

	if(cartWrapper.children.length > 0){
		basketEmpty.innerText = '';
		basketEmpty.classList.remove('basket');
		orderForm.style.display = 'block';	
		yourOrder.classList.add('yourOrder');
	}else{
		basketEmpty.innerText = 'Корзина пуста';
		basketEmpty.classList.add('basket');
		orderForm.style.display = 'none';
		yourOrder.classList.remove('yourOrder');
	}

	if(cartWrapper.children.length < 2){

		CartWrapper.classList.add('WrapperSize');

		VisitCart.classList.add('WrapperSize');
	}else{
		CartWrapper.classList.remove('WrapperSize');

		VisitCart.classList.remove('WrapperSize');
	}

	
}