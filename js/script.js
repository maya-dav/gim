$(function(){

  $(".btn1").click(function(){
    $(".one").hide(300)
  })
  $(".btn2").click(function(){
    $(".one").show(300)
  })
  $(".btn3").click(function(){
    $(".one").toggle(300)
  })
  $(".btn4").click(function(){
    $("p").slideUp(300)
  })
  $(".btn5").click(function(){
    $("p").slideDown(300)
  })
  $(".btn6").click(function(){
    $("p").slideToggle(300)
  })
  $(".btn7").click(function(){
    $(".two").fadeOut(300)
  })
  $(".btn8").click(function(){
    $(".two").fadeIn(300)
  })
  $(".btn9").click(function(){
    $(".two").fadeToggle(300)
  })
  $(".btn10").click(function(){
    $(".three").addClass("bg")
  })
  $(".btn11").click(function(){
    $(".three").removeClass("bg")
  })
  $(".btn12").click(function(){
    $(".three").toggleClass("bg")
  })
})