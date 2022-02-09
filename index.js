jQuery(document).ready(function(){
$('.navbar-toggler').click(function(){
  $('.navbar-collapse').toggle();
})

$('.navbar-collapse').on('click',function(){ 
  $('.navbar-collapse').collapse('hide');})
});

var countDownDate = new Date("feb 11,2022").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var CurrentDateAndTime = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - CurrentDateAndTime;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED!";
    document.getElementById("counter").classList.add("expire");
  }
}, 1000);