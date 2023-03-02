 //Make Navbar Solid After Scrolling Down
 $(document).scroll(function() {
        $(".navbar").toggleClass(
          "scrolled",
          $(this).scrollTop() > $(".navbar").height()
        );
      });

      //Move to top left after scorlling
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // adjust the threshold as needed
          $('.box').addClass('fixed');
        } else {
          $('.box').removeClass('fixed');
        }
      });