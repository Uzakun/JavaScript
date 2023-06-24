// $("h1").css("color", "aqua");

$("h1").addClass("big-title center");
// $("h1").removeClass("center");
// $("img").attr("src"); it's used to see what is it in the src attribute
$("a").attr("href", "https://youtube.com");




//                                                 Without jQuery
// for(var i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "pink";
//     });
// };



//                                                  With jQuery
// $("button").click(function(){
//    $("h1").css("color", "pink");
// });


// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });


// $("button").on("click", function(){
//     $("h1").css("color", "pink");
//  });

// $("button").on("mouseover", function(){
//     $("h1").css("color", "pink");
//   });
  
  
 $(document).on("keypress", function(event){
    $("h1").text(event.key);
  }); 

// Before(), after(), prepend(), append(), remove()

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
 });


