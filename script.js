var greeting = 'Wll come to።';
var customerName = 'Andarg';
var messageBoard = 'to check the buying object correctly!';

// concatenate
var welcomeMessage = greeting.concat(" ", customerName).concat(" ", messageBoard);

// update the greeting
var elGreeting = document.getElementById('greeting');
elGreeting.textContent = welcomeMessage;

// shopping list
var items = 'injera';
var count = 5;
var pricePerItem = 6;
var totalPrice = count * pricePerItem;

// update shopping list
var elItems = document.getElementById('items');
elItems.textContent = items;
var elCount = document.getElementById('count');
elCount.textContent = count;
var elPrice = document.getElementById('price');
elPrice.textContent = "$" + pricePerItem;
var elTotal = document.getElementById('total');
elTotal.textContent = "$" + totalPrice;


// You can stop here!!!!!
function makePayment(){
	var txt, finalMessage;
	var btn = '<button onclick=\"window.print();\">give me recent</button>';

	// on click open confirm box
	var confirmBox = confirm('must pay?');

	if(confirmBox == true){
		txt = '<br>Successfully buying። thank you!';
		finalMessage = txt.concat(" ", btn);
	} else {
		txt = '<br>delete buying object!';
		finalMessage = txt;
	}

	document.getElementById('output').innerHTML = finalMessage;

	// innerHTML adds html elements dynamically
	// textContent adds TEXT only to html page
}
