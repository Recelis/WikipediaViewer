 /* this calls the wikipedia API with the content requested
 start with an icon which changes into a form fillout in a smooth motion
 user can fill in form
 remove any unnecessary spaces
 if form is not filled, don't send off the API call
 

 // getting a random article https://en.wikipedia.org/wiki/Special:Random
 // calling a wikipedia article

 */

 $(document).ready(function(){
   // when searchButton has been pressed
   $('#searchButton').click(function(event) {
    event.preventDefault();
    var search = document.getElementById("searchText").value;
    // if no search input
        if (search==="") {
          return;
        }
    var wikiSearchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+search+"&format=json";
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url: wikiSearchUrl,
      crossDomain:true,
      success: function(data){
        displayResults(data);
      }
    });
   });  
  // feel lucky button 
  $("#feelLuckyButton").click(function(){
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&origin=*&format=json"; // zero to call random
    $.ajax({
      type: "GET", 
      url: url,
      async : false, // not sure what this is actually doing
      success: function(data){
        window.open("https://en.wikipedia.org/wiki/"+data["query"]["random"][0]["title"]);
      }
    });
  });
 }
 );

/*
 Search Result Structure 
    searchResults results Div 
      searchTitle
      key1
        resultTitle
        resultText
      key2
      ... etc
  */

 function displayResults(data){
  // remove all past results
  $(".results").remove();
  // lift WikiSearch title to top of page
  $(".titleClass").css("padding-top","0px");
  // show results
  
  const result = data["query"]["search"][0]["title"];
  // create div for all search results
  $(".searchMenu").append("<div class = 'searchResults results'></div>");
  // main search result title
  $(".searchResults").append("<div class='searchTitle'></div>");
  $(".searchTitle").html("Search Results for <a target=\"_blank\" href = \'https://en.wikipedia.org/wiki/"+result+"\'>"+result+"</a>"); // push titleClass to top of page
  
  // results
  for (var ii =1; ii < data["query"]["search"].length -1; ii++){
  // create div for each result
  $(".searchResults").append("<div class='key" + ii + " result'></div>");
  // append to div
  var searchResult = data["query"]["search"][ii]["title"];
  $(".key" + ii).append("<p class = 'resultTitle'><a target=\"_blank\" href = \'https://en.wikipedia.org/wiki/"+searchResult+"\'>"+searchResult+"</a></p>");
  $(".key"+ii).append("<p class = 'resultText'>" + data["query"]["search"][ii]["snippet"]+"..." + "</p>");
  }
}

function openWindow(){
  window.open("https://github.com/Recelis/WikipediaViewer",'_blank');
}
