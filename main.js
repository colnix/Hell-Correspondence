$(document).ready(function(){
  $("#container").hide();
  var show = function(){
    var container = $('<body><div id = "container"><div id = "message">Your grievance shall be avenged</div><div id = "form"><form><input id = "text" type = "text" maxlength = "30" value = ""></form><button id = "button">SEND</button></div></div></body>');
    container.prependTo("html");

    $("#container").hide();
    $("#container").fadeIn(2000);
    $('#button').click(function(){
      $('<div id="overlay"><h1>Your message was recieved</h1></div>').appendTo(document.body).hide();
      $('#overlay').fadeIn("slow").delay(2000).fadeOut(0, function(){
         showError();
      });
    });
  }
  var showError = function(){
    
    var error = $('<html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL /kk was not found on this server.</p><hr><p>hellish world/1.3.33 Server at jigoku.net Port 80</p></body></html>');
    
    $("#container").remove();
    error.prependTo("html");
    
    $("*").css("padding", "0.3%");
    $("*").css("margin", "0");
    $("html").css("background-color", "white");
    $("html").css("text-align", "left");
    $("html").css("color", "black");
    $("html").css("font-family", "serif");
    $("h1").css("padding-bottom", "1.4%");
  }
  var time = new Date();
  var hour = time.getHours();
  if(hour === 24){
    show();
  }else{
    showError();
  }
});
