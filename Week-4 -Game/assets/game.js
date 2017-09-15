var wins = 0;
var losses = 0;
//players currunt score
var addition = 0;
//selects a random number from 12 t0 113
var total = Math.floor((Math.random()* 100) + 12);
//assigns random value to crystals from 1-15
var red = Math.floor((Math.random()* 15) + 1);
var blue = Math.floor((Math.random()* 15) + 1);
var yellow = Math.floor((Math.random()* 15) + 1);
var white = Math.floor((Math.random()* 15) + 1);


//updates addition in html
var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
//restart function
var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 12);

	$('.total').empty();
	$('.total').append(total);

	red = Math.floor((Math.random()* 15) + 1);
    blue = Math.floor((Math.random()* 15) + 1);
    yellow = Math.floor((Math.random()* 15) + 1);
    white = Math.floor((Math.random()* 15) + 1);
    //alert('restart');
    updateAddition();
}
var logic = function (){
	if (addition == total) {
		wins = wins + 1;
		
		restart()
	}else if(addition > total){
		losses = losses + 1;
		
		restart();
	}else{
		updateAddition();
	}
}
$('.total').append(total);

$('.addition').append(addition);
//function

$(document).ready(function(){
	$('#red').click(function(){
		addition = addition + red;
		logic();
	})
	$('#blue').click(function(){
		addition = addition + blue;
		logic();
	})
	$('#yellow').click(function(){
		addition = addition + yellow;
		logic();
	})
	$('#white').click(function(){
		addition = addition + white;
		logic();
	})
})