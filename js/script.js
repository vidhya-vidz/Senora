let carts = document.querySelectorAll('.plus_button'); 

let products = [  
{name: 'Gemstone',price: 450,tag: 'Jewel1',inCart:0},
{name: 'Pearl',price: 55,tag: 'Jewel2',inCart:0},
{name: 'Rings',price: 100,tag: 'Jewel3',inCart:0},
{name: 'Rose_Gold',price: 75,tag: 'Jewel4',inCart:0},
{name: 'Kate',price: 55,tag: 'Jewel5',inCart:0},
{name: 'Feather',price: 16,tag: 'Jewel5',inCart:0},
{name: 'WhiteStone',price: 10,tag: 'Jewel6',inCart:0},
{name: 'Birth',price: 35,tag: 'Jewel7',inCart:0},
{name: 'Hearts',price: 70,tag: 'Jewel8',inCart:0},
{name: 'Yellow',price: 220,tag: 'Jewel9',inCart:0},
{name: 'Accent',price: 10,tag: 'Jewel10',inCart:0},
{name: 'Sapphire',price: 53,tag: 'Jewel11',inCart:0},
{name: 'Laurel',price: 77,tag: 'Jewel12',inCart:0},
{name: 'Opal',price: 10,tag: 'Jewel13',inCart:0},
{name: 'Aquamarine',price: 38,tag: 'Jewel14',inCart:0},
{name: 'Amethyst',price: 10,tag: 'Jewel15',inCart:0},
{name: 'Cuff_Brace',price: 14,tag: 'Jewel16',inCart:0},
{name: 'Multilayer',price: 36,tag: 'Jewel17',inCart:0},
{name: 'Butterfly',price: 40,tag: 'Jewel18',inCart:0},
{name: 'Cardinal',price: 34,tag: 'Jewel19',inCart:0},
{name: 'Five_Heart',price: 14,tag: 'Jewel20',inCart:0},
{name: 'Turquoise',price: 10,tag: 'Jewel21',inCart:0},
{name: 'Sterling',price: 48,tag: 'Jewel22',inCart:0},
{name: 'Expandable',price: 6,tag: 'Jewel23',inCart:0},
{name: 'Rose_Gold',price: 13,tag: 'Jewel24',inCart:0},
{name: 'Swarovski',price: 13,tag: 'Jewel25',inCart:0},
{name: 'Sapphire',price: 10,tag: 'Jewel26',inCart:0},
{name: 'Green_Jade',price: 99,tag: 'Jewel27',inCart:0},
{name: 'Marcasite',price: 176,tag: 'Jewel28',inCart:0},
{name: 'Lapis',price: 142,tag: 'Jewel29',inCart:0},
{name: 'TriTone',price: 58,tag: 'Jewel30',inCart:0},
{name: 'Swarovski_Swan',price: 134,tag: 'Jewel31',inCart:0},
{name: 'Beaded',price: 24,tag: 'Jewel32',inCart:0},
{name: 'Rhinestone',price: 48,tag: 'Jewel33',inCart:0},
{name: 'JulesSmith',price: 70,tag: 'Jewel34',inCart:0},
{name: 'LeVian',price: 162,tag: 'Jewel35',inCart:0},
{name: 'Chocolava',price: 3.50,tag: 'Choc1',inCart:0},
{name: 'Cake',price: 25.00,tag: 'Choc2',inCart:0},
{name: 'Dalgona',price: 2.00,tag: 'Choc3',inCart:0},
{name: 'Nayo ',price: 1649,tag: 'Dress2',inCart:0},
{name: 'Printed Straight Kurta',price: 659,tag: 'Dress3',inCart:0},
{name: 'Fabindia',price: 1990,tag: 'Dress4',inCart:0},
{name: 'Ives',price: 549,tag: 'Dress5',inCart:0},
{name: 'Style Quotient',price: 554,tag: 'Dress6',inCart:0},
{name: 'Here and Low',price: 549,tag: 'Dress7',inCart:0},
{name: 'Sassafras',price: 549,tag: 'Dress8',inCart:0}
]
for (let i=0;i<carts.length;i++){
	carts[i].addEventListener('click',() => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	});
} 

function cartNumbers(product){  

	let productNumbers = localStorage.getItem('cartNumbers'); 
	productNumbers = parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers+1);
	}
	else {
		localStorage.setItem('cartNumbers',1);
	}
	setItems(product);
}

function setItems(product){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	if(cartItems!=null) {
		if(cartItems[product.tag]==undefined){
			cartItems = {
				...cartItems, 
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	} 
	else {
	product.inCart = 1; 
	cartItems = {
		[product.tag] : product
	};
}
	localStorage.setItem('productsInCart',JSON.stringify(cartItems));
} 

function totalCost(product){   
	let cartCost = localStorage.getItem('totalCost');
	if(cartCost!=null){ 
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost',cartCost+product.price);
	}else{
	localStorage.setItem("totalCost",product.price);
} 
}

function displayCart(){ 
	let cartItems = localStorage.getItem('productsInCart'); 
	cartItems = JSON.parse(cartItems);
	let productContainer = 
	document.querySelector(".products"); 
	let cartCost = localStorage.getItem('totalCost');

	if(cartItems && productContainer){ 
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {  
			productContainer.innerHTML += `
			<div class="product">   
			<span class="glyphicon glyphicon-ok"></span>
			<span>${item.name}</span>
			<span class="price">${item.price}</span>
			</span> 
			<span class="totals">${item.inCart}*${item.price}=${item.inCart*item.price}
			</span>
			</div>
			`
		}); 
		productContainer.innerHTML += `  
		 <div class="basketTotalContainer">
		  <h4 class="basketTotalTitle"> 
		    Basket Total 
		  </h4> 
		  <h4 class="basketTotal">  
               ${cartCost}.00
		  </h4>
		`;
	}
}
displayCart();
