 /* this calls the wikipedia API with the content requested
 start with an icon which changes into a form fillout in a smooth motion
 user can fill in form
 remove any unnecessary spaces
 if form is not filled, don't send off the API call
 

 // getting a random article https://en.wikipedia.org/wiki/Special:Random
 // calling a wikipedia article

 */

 $(document).ready(function(){
   $(".readyToSearchButton").click(function(){
   // change to different layout outline
   $(".searchBar").append("<input type='text'/>");
   $(".searchButton").append("<button type=”submit”>submit</button> ");
   $(".readyToSearchButton").html("");
   $(".searchButton").click(function(){
    var wikiSearchUrl = "#";
    alert("searching!");
    $.ajax({
      type: "GET",
      url: wikiSearchUrl,
      success: function(data){
        console.log(data);
      }
    });
   });  
  });
  $(".feelLuckyButton").click(function(){
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&origin=*"; // zero to call random
    alert("yeah you are feeling special!");
    $.ajax({
      type: "GET", 
      url: url,
      success: function(data){
      console.log(data);
      }
    });
  });
 }
 );