 /* this calls the wikipedia API with the content requested
 start with an icon which changes into a form fillout in a smooth motion
 user can fill in form
 remove any unnecessary spaces
 if form is not filled, don't send off the API call
 
 */

 $(document).ready(function(){
   var url = "#";
   $(".readyToSearchButton").click(function(){
    alert("button has just been pressed!");
    $.ajax({
      type: "GET", 
      url: urlLoc,
      success: function(data){
      // console.log(data);
      }
    });
  });
  $(".feelLuckyButton").click(function(){
    alert("yeah you are feeling lucky!");
  });
 }
 );