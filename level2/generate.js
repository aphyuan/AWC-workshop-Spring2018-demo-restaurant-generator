$(document).ready(function(){

    $("#selectbutton").click(function(){
        console.log("arrives here");
        $("#output").append("<b>"+getRest()+"</b>");
    });

});

function getRest(){
  var restlist = generateList();
  var randomRest = restlist[Math.floor(Math.random() * restlist.length)];
  console.log(randomRest);
  return randomRest;
}




 //https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/autocomplete.md
//yelp.autocomplete(text: 'Mc', latitude: 40.730610, longitude: -73.935242, }, function(error, data) {});

//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search-phone.md
//yelp.phoneSearch({phone: "+12223334444"}, function(error, data) {});


//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id-reviews.md
//yelp.businessesReviews('yelp-san-francisco', function(error, data) {});


//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id.md
//yelp.businesses('yelp-san-francisco', function(error, data) {});


//https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
//yelp.search({term: 'food', location: 'Montreal', function(error, data) {});


// A promise based API is also available:
// yelp.search({ term: 'food', location: '16803' })
// .then(function (data) {
//   console.log(data);
// })
// .catch(function (err) {
//   console.error(err);
// });
