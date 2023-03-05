//Search for available rooms
function search() {
    alert(roomType);
     $("#roomTypeDropdown").val("deluxe");
    //Do something with the variables
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.cookie = "username=test; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;"; 
    let x = document.cookie;
    alert(x);
    x = decodeURIComponent(x);
    let ca = x.split(";");
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(0,9) == "roomType="){
            alert(c.substring(9));
            $("#roomTypeDropdown").val(c.substring(9));
        }
    }
}, false);