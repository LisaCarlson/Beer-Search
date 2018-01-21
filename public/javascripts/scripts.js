$('document').ready(function() {
  $('.submit').click(function(){
    var beerName = $('.beer_input').val();
    var beerResult = "";
    if (!beerName) {
      $('.results-container').append("<div class='text-danger no-result'>Please enter a beer name.</div>");
    }
    else {
      $.get( "/beers/"+beerName, function( data ) {
        $('.beer_input').val('');
        $('.results-container').empty();
        var beers = JSON.parse(data);
        console.log(beers);
        if (!beers.length) {
          beerResult += "<div class='text-danger no-result'>Sorry, no results were found for this beer.</div>";
        }
        else {
          beers.forEach(function(beer) {
            beerResult += "<div class='single-beer'><a target='_blank' href='https://www.beeradvocate.com"+beer.beer_url+"' class='beer-name'>"+beer.beer_name+"</a><div class='brewery-name'>"+beer.brewery_name+"  |  "+beer.brewery_location+"</div></div>";
          });
        }
        $('.results-container').append(beerResult);
      });
    }
  });
});

