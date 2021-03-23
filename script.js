// Gif control by button
document.querySelector(".btn").addEventListener('click',function(){
  var input = document.querySelector('input').value;
  // console.log(input);
  search(input);
});

// get the input value by clicking enter
document.querySelector('.userInput').addEventListener('keyup',function(e){
  console.log(e);
  var input = document.querySelector('input').value;
  if(e.which===13){
    search(input)
  }
})

// API reqest and query

function search( query ) {
	var Url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + query;

	// constructor method
	var call = new XMLHttpRequest();
	call.open( 'GET', Url );
	call.addEventListener('load', function( data ) {

		var actualData = data.target.response;
		pushToDOM( actualData );

	});
	call.send();
}



// show Gif

function pushToDOM( response ) {

	response = JSON.parse( response );
	var images = response.data;

	var container = document.querySelector('.showGif');

	container.innerHTML = "";


	for(i = 0; i<20; i++) {

			// concatenate a new IMG tag
			setTimeout(function(){
					var src = images[i].images.fixed_height.url;
					// container.innerHTML = "";
					container.innerHTML = "<div class=\"gif\"><img src='"+ src +"' class='container__image' /></div>";
					i++;
			}, 3000*i);
		}

}
