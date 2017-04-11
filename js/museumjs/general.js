/* Go to the Marvel Comics API and return an object of all the Marvel characters 
function analyzeData(data) {

	console.log(data.data.results[4]);


}

//console.log("HELLO!");
$.ajax({
  url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=a4c289ed70eae0d9da7016c8f59e77ac'
,
  success: function successHandler(data){
  	analyzeData(data);
  }
});*/

$( document ).ready(function() {
  //console.log("Hi");  

var replace;

$( "input:text" ).focus(function() {
	replace = $(this).val();
  	$(this).val("");
  	console.log(replace);

});

$( "input:text" ).blur(function() {
	console.log($(this).val());
	//$(this).val(replace);


	if ($(this).val() == "") {
		$(this).val(replace);
	}
});




});