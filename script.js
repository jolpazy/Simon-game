$(document).ready(function() {

    $("#reset").hide();

    var A= function(){
        a.play();
        $("#A").effect( "bounce", { times: 2 }, 450 );
       };
       var B= function(){
        b.play();
        $("#B").effect( "bounce", { times: 2 }, 450 );
       };
       var C= function(){
        c.play();
        $("#C").effect( "bounce", { times: 2 }, 450 );
       };
       var D= function(){
        d.play();
        $("#D").effect( "bounce", { times: 2 }, 450 );
       };
    var a = document.getElementById("As");
    var b = document.getElementById("Bs");
    var c = document.getElementById("Cs");
    var d = document.getElementById("Ds");

       function check(){
        if(result[result.length -1] != arr[result.length -1]){

            if (strict == true){
                alert("WRONG!");
                setTimeout(reset, 300)} else {
            alert("Try again (;");
            result = [];
            playerTurn = false;
            setTimeout(playFields, 500)
                }
            
        };
        if (result.length == arr.length && (result[result.length -1] == arr[result.length -1])){
            victory ++;
            if (victory != 20){
            setTimeout(start, 1500)};
            setTimeout(report, 1000)
       }
       if (victory == 20){
        alert("YOU WON!");
        reset();
    }
    }//check

    function report(){
        $("#wins").html("Steps: " + (arr.length +1) );
    }

     var fields = [A, B, C, D];
     var playerTurn = false;
    var result = [];
    var victory = 0;
     var strict = false;
     var arr = [];

    $(".field").click(function(){
        if (playerTurn){
            setTimeout(check, 10)
        }
    })
    
    $("#A").click(function(){
        if (playerTurn){
            a.play();
            $(this).effect( "bounce", { times: 2 }, 450 );
            result.push(A);
        };
    })
    $("#B").click(function(){
        if (playerTurn){
            b.play();
            $(this).effect( "bounce", { times: 2 }, 450 );
            result.push(B);
        };
    })
    $("#C").click(function(){
        if (playerTurn){
            c.play();
            $(this).effect( "bounce", { times: 2 }, 450 );
            result.push(C);
        };
    })
    $("#D").click(function(){
        if (playerTurn){
            d.play();
            $(this).effect( "bounce", { times: 2 }, 450 );
            result.push(D);
        };
    })
   

  function playFields(){
    function truthy(){playerTurn = true};
    var trTime;
    for (var i in arr){
        var time = 680;
      setTimeout (arr[i], time*i);
      trTime = time*i;
      
    }
    setTimeout(truthy, trTime + 500)
  }

  function fillFields(){
        var random = Math.floor(Math.random() * 4);
        arr.push(fields[random]);
  }
function start(){
    result = [];
    playerTurn = false;
    fillFields()
    playFields();
}

function reset(){
    result = [];
    arr= [];
    victory = 0;
    playerTurn = false;
    $("#wins").html("Steps : " + (arr.length+1));
    $("#start").show();
    $("#reset").hide();
    $("#strict").show()
}
 
  $("#start").click(function(){
      start();
      $(this).hide();
      $("#reset").show();
      $("#strict").hide();
  })

  $("#reset").click(function(){
    reset();
    $("#start").show();
    $(this).hide();
    $("#strict").show();
})

$("#strict").click(function(){
    if (strict){
        strict = false;
        $(this).html("Strict Mode: Off")
    } else{
        strict = true;
        $(this).html("Strict Mode: ON!")
    }
})












































});//dc ready