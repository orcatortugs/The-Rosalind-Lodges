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
  // Get the selected date
  date = $('#checkInDate').val();
  // Store the data in cookie
  document.cookie = "roomType=" + roomType + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  document.cookie = "checkInDate=" + date + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  // Redirect to the booking page
  window.location.href = "booking.html";
}

function searchToRoom1() {
  
  // Get the selected room type
roomType = $('#roomTypeHomepage1').val();

  // Get the selected date
  date = $('#checkInDate').val();
  // Store the data in cookie
  document.cookie = "roomType=" + roomType + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  document.cookie = "checkInDate=" + date + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  // Redirect to the booking page
  window.location.href = "booking.html";
}