// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

var firstTwo = cardNumber.slice(0,2);
var firstThree = cardNumber.slice(0,3);
var firstFour = cardNumber.slice(0,4);

  // Note: `cardNumber` will always a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  	if(cardNumber[0] === '3'){ 
  		if(cardNumber.length === 14){
  			if(cardNumber[1] === '8' || cardNumber[1] === '9'){
  				return 'Diner\'s Club';
  			}
  		} else if(cardNumber.length === 15){
  			 if(cardNumber[1] === '4' || cardNumber[1] === '7'){
  			 	return 'American Express';
  			 }
  		}
  	}

//Visa always has a prefix of 4 and a length of 13, 16, or 19.
//MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

	if(cardNumber[0] === '4'){
		if(cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
			return 'Visa';
		}
	}

	if(cardNumber[0] === '5' && cardNumber.length === 16){
		if(Number(cardNumber[1]) < 6 && Number(cardNumber[1] > 0)) {
			return 'MasterCard';
		}
	}

//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

  if(cardNumber.length === 16 || cardNumber.length === 19){
    if(firstFour === '6011' || firstTwo === '65'){
      return 'Discover';
    }
    for(var i = 644; i <= 649; i++){
      if(firstThree === i.toString())
        return 'Discover';
    }
  }
  
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if(firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === 6304){
    for(var j = 12; j <= 19; j++){
      if(cardNumber.length === j){
        return 'Maestro';
      }
    }
  }
};







