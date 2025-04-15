   /*var diameter = document.getElementById("select");

	if (event.target.hasAttribute('data-select')){
	
		//var value = diameter.value;
		var selected = document.getElementById("2R");
		var section = diameter.options[diameter.selectedIndex].innerText;

		var first = document.getElementById('first');
		var second = document.getElementById('second');
		var third = document.getElementById('third');

		if (event.target.closest('first')){
			selected.innerText = '25см';
			console.log();
		}else if (event.target.closest('second')){
			selected.innerText = '35см';
		}else if (event.target.closest('third')){
			selected.innerText = '45см';
		};
	}
	
	var diameter = document.getElementById("select");
		// Когда выбран новый элемент <option>

        /*var diameter = document.getElementById("select");
		function changedDia(){
			var value = diameter.value;
			var section = diameter.options[diameter.selectedIndex].innerText;
			console.log(section);
		};

		diameter.changedDia = changedDia;
		*/
        
		/*let selectDiameter = document.querySelector("select");
        let Changed = selectDiameter.addEventListener('change',function (item) {
            let selected = item.target.value;
        });
*/
		/*function dataSelect(f) {
			n = f.dia.selectedIndex;
			selected = f.dia.options[n].value;
			console.log(selected);
		  };  onClick="dataSelect(this.form)"
		  
		 
		 
		 
		 
		 
		 <div data-id="02" class="cart" >
				<span data-structure="Сосиски, пицца-соус, , пепперони, помидор, сыр моцарелла"><img  class="Pizzas" src="SSS/ohota.png"></span>
				<div class="NamePiz">Охотничья </div>

				<form class="form">
					<div class="text"></div>
					<select name="dia" class="section " >
						<option id="first" value="25">25</option>
						<option id="second" value="35">35</option>
						<option id="third" value="45">45</option>
					</select>
				</form>

				<span id="slash">/</span> <span class="weight">270г</span> <br> 
				<div  class="main-counter">
					<button id="NoumberOne" class="button" data-action="minus">-</button> 
					<div class="counter" data-counter>1</div>
					<button id="NoumberTwo" class="button" data-action="plus">+</button>
				</div>	
				<div class="price">250 ₽</div>

				<form>
					<input type="button"  value="+ в корзину" class="InBasket" data-basket>
				</form>

			</div>*/
		 
		 /*
		 // Добавляем прослушку на всём окне
	window.addEventListener('click', function(event){

	// Объявляем переменную для счётчика
	let section;
	
	// Проверяем клик строго по кнопке плюс либо минус
	if(event.target.dataset.basket === "bas"){

		// Находим обёртку счётчика
		const choice = event.target.closest('.choice');
		
		// Находим див с числом счётчика
		section = choice.querySelector('.section');
		
	}
	
	// Проверяем является ли эелемент по которому был совершён клик кнопкой плюс
	if (event.target.dataset.dia === '25'){
		section.innerText = '100';
		console.log(section);
	}
	
	// Проверяем является ли эелемент по которому был совершён клик кнопкой минус
	if (event.target.dataset.dia === '35'){
		section.innerText = '200';
		console.log(section);
	}

	if (event.target.dataset.dia === '45'){
		section.innerText = '300';
		console.log(section);
	}


	});*/
		  
			
		document.querySelector('.InBasket').addEventListener('click', () => {
			let data = document.querySelector('.section').value;
			document.querySelector('.text').innerHTML = data;
		});

		
		