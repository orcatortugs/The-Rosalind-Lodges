 //Make Navbar Solid After Scrolling Down
 $(document).scroll(function() {
        $(".navbar").toggleClass(
          "scrolled",
          $(this).scrollTop() > $(".navbar").height()
        );
      });

      //Move to top left after scorlling
      $(window).scroll(function() {
        if ($(this).scrollTop() > 600) { // adjust the threshold as needed
          $('.box-navbar').addClass('show');
        } else {
          $('.box-navbar').removeClass('show');
        }
      });
$('#carouselFade').carousel();


var roomType;
var date;

//Takes you to search 
function searchToRoom() {
  
  // Get the selected room type
  roomType = $('#roomTypeHomepage').val();
  alert(roomType);
  // Get the selected date
  date = document.querySelector(".input-field1-navbar").value;
alert(date);
  // Store the data in cookie
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

  // Redirect to the booking page
  window.location.href = "booking.html";
}