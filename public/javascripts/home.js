// Show full page LoadingOverlay
$.LoadingOverlay("show");

// Hide it after 3 seconds
setTimeout(function(){
    $.LoadingOverlay("hide");
}, 1000);

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "70px";
  } else {
    document.getElementById("header").style.height = "100px";
  }
}

$(".btn").click(function(event){
    event.preventDefault();
    x = $(this).attr("href");
    $("html.body").stop().animate({scrollTop : $(x).offset().top - 130 }, 1000, "easeInOutExpo");
});