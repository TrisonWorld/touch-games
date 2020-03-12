var counter = 180;

function CountDown(){

	var interval = setInterval(function() {
	    counter--;
	    if (counter <= 0) {
	     		clearInterval(interval);
	      	$(location).attr('href', 'index.html');
	        return;
	    }else{
	    	$('#time').text(counter);
	    }
	}, 1000);

};

$("#reset").click(function() {
    counter = 180;
	$('#time').text(counter);
});

$("#home").click(function() {
    $(location).attr('href', 'index.html');
});