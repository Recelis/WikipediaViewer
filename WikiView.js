 /* this calls the wikipedia API with the content requested
 start with an icon which changes into a form fillout in a smooth motion
 user can fill in form
 remove any unnecessary spaces
 if form is not filled, don't send off the API call
 

 // getting a random article https://en.wikipedia.org/wiki/Special:Random
 // calling a wikipedia article

 */

 $(document).ready(function(){
   // change to different layout outline
   $(".searchButton").click(function(){
    var wikiSearchUrl = "#";
    $.ajax({
      type: "GET",
      url: wikiSearchUrl,
      success: function(data){
        console.log(data);
      }
    });
   });  

  $("#feelLuckyButton").click(function(){
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&origin=*&format=json"; // zero to call random
    $.ajax({
      type: "GET", 
      url: url,
      async : false, // not sure what this is actually doing
      success: function(data){
      console.log(data["query"]["random"][0]["title"]);
      window.open("https://en.wikipedia.org/wiki/"+data["query"]["random"][0]["title"]);
      }
    });
  });
 }
 );