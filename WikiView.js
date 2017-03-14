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
   $('#searchButton').click(function(event) {
      event.preventDefault();
  //  $("#searchForm").submit(function(){
      $(".titleClass").css("padding-top","0px");
      //  window.open("https://en.wikipedia.org/wiki/"+document.getElementById("searchText").value);
      // alert(document.getElementById("searchText").value);
    //   console.log("boo!");
    var search = document.getElementById("searchText").value;
    var wikiSearchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+search+"&format=json"
    // var wikiSearchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=dog&rnnamespace=0&origin=*&format=json";
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url: wikiSearchUrl,
      crossDomain:true,
      success: function(data){
        console.log(data);
        $(".searchMenu").append("<div class='searchResults0'>"+data["query"]["search"][0]["title"] + "</div>");
        for (var ii =1; ii < data["query"]["search"].length -1; ii++){
          $(".searchMenu").append("<div class=\'searchResults"+ii+"\'>"+data["query"]["search"][ii]["title"] + "</div>");
          console.log(data["query"]["search"][ii]["title"]);
        }
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