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