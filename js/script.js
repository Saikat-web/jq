//jQuery 
$(document).ready(function(){
   
})

//Alert

$('#alert').on("click", function(){
    alert("Never pretends to be oversmart");
});

//Show & Hide
// $('#show').on("click", function(){
//     $('h3').show();
// });
// $('#hide').on("click", function(){
//     $('h3').hide();
// });
// $('#toggle').on("click", function(){
//     $('h3').toggle();
// });

//Show & Hide
$('#show').on("click", function(){
    $('h3').fadeIn();
});
$('#hide').on("click", function(){
    $('h3').fadeOut();
});
$('#toggle').on("click", function(){
    $('h3').fadeToggle(330);
});

$('.ques').on("click", function(){
    $('.answ').slideToggle(500);
});

$(document).ready(function(){
    $("#fadein").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });

  $(document).ready(function(){
    $("#fadeout").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });
  });

  $(document).ready(function(){
    $("#fadetoggle").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  });

  $(document).ready(function(){
    $("#fadeto").click(function(){
      $("#div1").fadeTo("slow", 0.15);
      $("#div2").fadeTo("slow", 0.4);
      $("#div3").fadeTo("slow", 0.7);
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideUp("slow");
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  $("#animation1").click(function(){
    $("div").animate({left: '700px'});
  });

 $(document).ready(function(){
  $("#animation2").click(function(){
    $("#ani2").animate({
      left: '700px',
      height: '+=100px',
      width: '+=100px'
    });
  });
});

$(document).ready(function(){
  $("#animation3").click(function(){
    var div = $("#ani3");  
    div.animate({left: '700px'}, "slow");
    div.animate({fontSize: '2em'}, "slow");
  });
});

 $("#callback").click(function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
  });

  $("#jqchain").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });

  $("#bgchange").click(function(){
    $("#p3").css("background-color", "yellow");
  });