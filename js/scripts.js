$(document).ready(function(){
  var page = $("#page");
  
  // show and hide navigation menu
  $("a#slidelink").on("click", function(e){
    e.preventDefault();
    var position = page.position();
    var winwidth = $(window).width();
    
    if(position.left == 0) {
      $(page).animate(
        { left: '+=240px' },
        250,
        'easeOutBack',
        function() {
          // callback
      });
    } else {
      $(page).animate(
        { left: '-=240px' },
        400,
        'easeOutCirc',
        function() {
          // callback	
      });   
    }
  });
  
  // handle user clicks on menu links
  $("#sidenav li a").on("click", function(e){
    e.preventDefault();
  });
  
  // check content position on browser resize
  var resizeTimer;
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resetPagePosition, 150);
  });  
  
  
  function resetPagePosition() {
    var position = page.position();
    var winwidth = $(window).width();
    
    if(winwidth >= 600 && position.left != 0) {
      // if the window is above 600px and the menu is open we need to reset back into position
      $(page).animate({left: "0px"}, 110);
    }
  };


});