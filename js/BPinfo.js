$(document).ready(function(){
  $(".jumbotron").hover(function(){
    $(".jumbotron").css("opacity",".5");
    },function(){
    $(".jumbotron").css("opacity",".1");
  });

  $(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show("../img/lillyNight.jpg",{ambient:true});
	});
});