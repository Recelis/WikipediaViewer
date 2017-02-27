 /* this calls the wikipedia API with the content requested
 start with an icon which changes into a form fillout in a smooth motion
 user can fill in form
 remove any unnecessary spaces
 if form is not filled, don't send off the API call
 
 */

 $(document).ready(function(){
   $(".readyToSearch").click(function(){
    alert("button has just been pressed!");
    $.ajax({
    type: "GET", 
    url: urlLoc,
    success: function(data){
      // console.log(data);
      console.log(data["lat"] + " " + data["lon"]); // can't use data values outside of ajax call?
      $("#city").html(data["city"]);
      $("#country").html(data["country"]);
      getWeatherData(data);
    }
  });
});
  

//  function getWeatherData(dataLoc){
//    console.log(dataLoc);
//    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" +dataLoc["lat"] + "&lon=" + dataLoc["lon"] + "&APPID=997b12fce3184c02353654296fdb1df5";
//    console.log(url);
//    $.ajax({
//      type: "GET",
//      url: url,
//      success: function(data){
//        console.log(data);
//       $(".toggle").click(function(){
//          alert("boo!");   
//       });
//      },
//      error:function(exception){console.log(exception);}
//    });
//    setInterval(function(){  
//       var currentDate = new Date();
//       var date = currentDate.getDate();
//       var month = currentDate.getMonth() + 1;
//       var year = currentDate.getFullYear();
//       var hour = currentDate.getHours();
//       var minute = currentDate.getMinutes();
//       var second = currentDate.getSeconds();
//       $(".cdate").html(date+"/"+month+"/"+year);
//       $(".ctime").html(hour+":"+minute+"."+second);
//     }, 1000
//     );
   
  // change css
 }


 );

 