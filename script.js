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

//Takes you to search 
function searchToRoom() {
  
  // Get the selected room type
  const roomType = $('#roomTypeHomepage').val();;
  alert(roomType);
  // Get the selected date
  const date = document.querySelector(".input-field1-navbar").value;

  // Store the data in localStorage
  localStorage.setItem("roomTypeStored", roomType);
  localStorage.setItem("date", date);

  // Redirect to the booking page
  window.location.href = "booking.html";

  //Set selections
  $("#roomTypeDropdown").val(roomType);
}

//Search for available rooms
function search() {
  const checkInDate = document.querySelector('input[type="date"]:nth-of-type(1)').value;
  const checkOutDate = document.querySelector('input[type="date"]:nth-of-type(2)').value;
  const roomType = document.querySelector('select:nth-of-type(1)').value;
  const bedConfig = document.querySelector('select:nth-of-type(2)').value;
  const numRooms = document.querySelector('input[type="number"]').value;
  const kitchen = document.querySelector('input[type="checkbox"]').checked;

  //Do something with the variables
}