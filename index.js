

/*creates the canvas to draw on*/
var newCanvas = function(){
	$(document).ready(function(){
		var manyBoxes = prompt("How many boxes wide would you like the canvas to be. (pick no more than 100 for best performance)");
		
		$('.boxes').remove();
		
		var boxSize = (600/manyBoxes);
	
		/*creates the boxes to draw with*/
		for (var i=0; i<(manyBoxes*manyBoxes); i++){
			$("#container").append('<div class="boxes"></div>');
		}
	
		$('.boxes').css("width", boxSize);
		$('.boxes').css("height", boxSize);
	});
};


/*turns the canvas a specific color*/
var randomColor = function(x){
	$(document).ready(function(){
		$('.boxes').mouseover(function(){
			$(this).css("background-color", function(){
				if(x===0){
					var letters = '0123456789ABCDEF';
					var color = '#';
					for (var i = 0; i < 6; i++ ) {
						color += letters[Math.floor(Math.random() * 16)];
					}
					return color;
				
			}else{
				return x;
			}
				
			});
		});	
	});
};
/*starts the page off with a canvas*/
newCanvas();


/*random color button*/
$(document).ready(function(){
	$('#buttonRandom').click(function(){
		randomColor(0);
	});
});


/*red color button*/
$(document).ready(function(){
	$('#buttonRed').click(function(){
		randomColor("red");
	});
});


/*green color button*/
$(document).ready(function(){
	$('#buttonGreen').click(function(){
		randomColor("green");
	});
});


/*erase button*/
$(document).ready(function(){
	$('#buttonErase').click(function(){
		randomColor("white");
	});
});


/*new canvas button*/
$(document).ready(function(){
	$('#newBoard').click(function(){
		newCanvas();
	});
});