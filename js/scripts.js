$(document).ready(function(){
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#default").click(function(){
    $("body").removeClass();
  });
});
