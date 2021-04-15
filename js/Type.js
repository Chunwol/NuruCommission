
$(function() {

    $(".MainCenterBox1").on("click", function() {
        location.href = "/Type/1";
    });
    
    $(".MainCenterBox2").on("click", function() {
        location.href = "/Type/2";
    });

    $(".MainCenterBox3").on("click", function() {
        location.href = "/Type/3";
    });

    $(".MainCenterBox4").on("click", function() {
        location.href = "/Type/4";
    });
    

    $('.MainCenterBox1').mouseover( function(){
        $(".MainCenterBox1").css("box-shadow", "0px 0px 10px 10px #FFA6B7");
      }).mouseout(function(){
        $(".MainCenterBox1").css("box-shadow", "0px 0px 0px 0px #FFA6B7");
    }); 

    $('.MainCenterBox2').mouseover( function(){
        $(".MainCenterBox2").css("box-shadow", "0px 0px 10px 10px #FFA6B7");
      }).mouseout(function(){
        $(".MainCenterBox2").css("box-shadow", "0px 0px 0px 0px #FFA6B7");
    }); 

    $('.MainCenterBox3').mouseover( function(){
        $(".MainCenterBox3").css("box-shadow", "0px 0px 10px 10px #FFA6B7");
      }).mouseout(function(){
        $(".MainCenterBox3").css("box-shadow", "0px 0px 0px 0px #FFA6B7");
    }); 

    $('.MainCenterBox4').mouseover( function(){
        $(".MainCenterBox4").css("box-shadow", "0px 0px 10px 10px #FFA6B7");
      }).mouseout(function(){
        $(".MainCenterBox4").css("box-shadow", "0px 0px 0px 0px #FFA6B7");
    }); 
});