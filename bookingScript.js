//Global variables
var checkInDate;
var checkOutDate;
var roomType;
var bedType;
var numOfRooms;
var hasKitchen;

//Items to do on load
  document.addEventListener('DOMContentLoaded', function() {
       /* const cookies = document.cookie.split(";");
    
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }*/

    //Read any nessesary cookies
    let x = document.cookie;
    x = decodeURIComponent(x);
    let ca = x.split(";");

    //Fill in room type
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,10) == "roomType="){
            $("#roomTypeDropdown").val(c.substring(10));
        }
    }

    //Fill in Check In Date
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,13) == "checkInDate="){
            $("#checkInDate").val(c.substring(13));
        }
    }

    //Check out date
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,13) == "checkOutDate="){
            $("#checkOutDate").val(c.substring(13));
        }
    }

    //Bed type
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,13) == "bedType="){
            $("#bedType").val(c.substring(13));
        }
    }

    //Number of rooms
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,13) == "numOfRooms="){
            $("#NumofRooms").val(c.substring(13));
        }
    }

    //Hide all options
    document.getElementById("StdKng").style.display = "none"; 
    document.getElementById("StdQen").style.display = "none";
    document.getElementById("StdTwn").style.display = "none";
    document.getElementById("StdS+K").style.display = "none";
    document.getElementById("DelKng").style.display = "none";
    document.getElementById("DelQen").style.display = "none";
    document.getElementById("DelTwn").style.display = "none";
    document.getElementById("DelS+K").style.display = "none";
    document.getElementById("SuiKng").style.display = "none";
    document.getElementById("SuiQen").style.display = "none";
    document.getElementById("SuiTwn").style.display = "none";
    document.getElementById("SuiS+K").style.display = "none";
    document.getElementById("ExeKng").style.display = "none";
    document.getElementById("ExeQen").style.display = "none";
    document.getElementById("ExeTwn").style.display = "none";
    document.getElementById("ExeS+K").style.display = "none";
    document.getElementById("FamKng").style.display = "none";
    document.getElementById("FamQen").style.display = "none";
    document.getElementById("FamTwn").style.display = "none";
    document.getElementById("FamS+K").style.display = "none";
    document.getElementById("AccKng").style.display = "none";
    document.getElementById("AccQen").style.display = "none";
    document.getElementById("AccTwn").style.display = "none";
    document.getElementById("AccS+K").style.display = "none";
}, false);

//Search for available rooms
function search() {
    
    //Hide old options
    document.getElementById("StdKng").style.display = "none"; 
    document.getElementById("StdQen").style.display = "none";
    document.getElementById("StdTwn").style.display = "none";
    document.getElementById("StdS+K").style.display = "none";
    document.getElementById("DelKng").style.display = "none";
    document.getElementById("DelQen").style.display = "none";
    document.getElementById("DelTwn").style.display = "none";
    document.getElementById("DelS+K").style.display = "none";
    document.getElementById("SuiKng").style.display = "none";
    document.getElementById("SuiQen").style.display = "none";
    document.getElementById("SuiTwn").style.display = "none";
    document.getElementById("SuiS+K").style.display = "none";
    document.getElementById("ExeKng").style.display = "none";
    document.getElementById("ExeQen").style.display = "none";
    document.getElementById("ExeTwn").style.display = "none";
    document.getElementById("ExeS+K").style.display = "none";
    document.getElementById("FamKng").style.display = "none";
    document.getElementById("FamQen").style.display = "none";
    document.getElementById("FamTwn").style.display = "none";
    document.getElementById("FamS+K").style.display = "none";
    document.getElementById("AccKng").style.display = "none";
    document.getElementById("AccQen").style.display = "none";
    document.getElementById("AccTwn").style.display = "none";
    document.getElementById("AccS+K").style.display = "none";

    //Get Values
  checkInDate = $('#checkInDate').val();
  checkOutDate = $('#checkOutDate').val();
  roomType = $('#roomTypeDropdown').val();
  bedType = $('#bedType').val();
  numOfRooms = $('#numOfRooms').val();
  hasKitchen = $("#hasKitchen").is(":checked");

  //Check for valid inputs
  if(checkInDate == "" || checkOutDate == "" || roomType == null || bedType == null || numOfRooms == ""){
    alert("One or more field(s) is blank or invalid");
    return;
  }
  //Assign Cookies
  document.cookie = "checkInDate=" + checkInDate + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  document.cookie = "checkOutDate=" + checkOutDate + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  document.cookie = "roomType=" + roomType + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  document.cookie = "bedType=" + bedType + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  document.cookie = "numOfRooms=" + numOfRooms + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  document.cookie = "hasKitchen=" + hasKitchen + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
  //Calculate length of stay
 var aDay = 86400000;
var lengthOfStay = Math.floor(
    (
      Date.parse(
        checkOutDate.replace(/-/g, '\/')
      ) - Date.parse(
        checkInDate.replace(/-/g, '\/')
      )
    ) / aDay);

    //Check for Peak Season
    var peakSeason;
    if(checkInDate.substring(6,7) == 1 || checkInDate.substring(6,7) == 4 || checkInDate.substring(6,7) == 6 || checkInDate.substring(6,7) == 7 || checkInDate.substring(6,7) == 8 || checkInDate.substring(6,7) == 12){
        peakSeason = 1.3;
    }
    else{
        peakSeason = 1;
    }
    //Check for kitchen

    var kitchenExtra;
    if(hasKitchen){
        kitchenExtra = 10;
    }
    else{
        kitchenExtra = 0
    }

    //Find the difference betwen the check in date and todays date
    var today = new Date();
    var givenDate = new Date(checkInDate);
    var differenceMs = givenDate.getTime() - today.getTime(); 
    var differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24)); 
    if (differenceDays <0){
        differenceDays=0;
    }
    differenceDays += 1;

    //Variable to make price selection easier
    var price;
    //Show available rooms with prices
  if((roomType == "standard" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "king")){
    document.getElementById("StdKng").style.display = "block"; 
    price = 70;
    document.getElementById("StdKngRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "standard" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "queen")){
    document.getElementById("StdQen").style.display = "block";
    price = 65; 
    document.getElementById("StdQenRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "standard" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "twin")){
    document.getElementById("StdTwn").style.display = "block"; 
    price = 65
    document.getElementById("StdTwnRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "standard" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "sofa-+-king")){
    document.getElementById("StdS+K").style.display = "block";
    price = 75;
    document.getElementById("StdS+KRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "deluxe" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "king")){
    document.getElementById("DelKng").style.display = "block"; 
    price = 80;
    document.getElementById("DelKngRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "deluxe" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "queen")){
    document.getElementById("DelQen").style.display = "block";
    price = 75; 
    document.getElementById("DelQenRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "deluxe" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "twin")){
    document.getElementById("DelTwn").style.display = "block"; 
    price = 75
    document.getElementById("DelTwnRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "deluxe" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "sofa-+-king")){
    document.getElementById("DelS+K").style.display = "block";
    price = 85;
    document.getElementById("DelS+KRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "suite" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "king")){
    document.getElementById("SuiKng").style.display = "block"; 
    price = 100;
    document.getElementById("SuiKngRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "suite" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "queen")){
    document.getElementById("SuiQen").style.display = "block";
    price = 95; 
    document.getElementById("SuiQenRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "suite" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "twin")){
    document.getElementById("SuiTwn").style.display = "block"; 
    price = 95
    document.getElementById("SuiTwnRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "suite" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "sofa-+-king")){
    document.getElementById("SuiS+K").style.display = "block";
    price = 105;
    document.getElementById("SuiS+KRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "executive" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "king")){
    document.getElementById("ExeKng").style.display = "block"; 
    price = 160;
    document.getElementById("ExeKngRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "executive" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "queen")){
    document.getElementById("ExeQen").style.display = "block";
    price = 155; 
    document.getElementById("ExeQenRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "executive" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "twin")){
    document.getElementById("ExeTwn").style.display = "block"; 
    price = 155
    document.getElementById("ExeTwnRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "executive" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "sofa-+-king")){
    document.getElementById("ExeS+K").style.display = "block";
    price = 165;
    document.getElementById("ExeS+KRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "family" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "king")){
    document.getElementById("FamKng").style.display = "block"; 
    price = 90;
    document.getElementById("FamKngRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "family" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "queen")){
    document.getElementById("FamQen").style.display = "block";
    price = 85; 
    document.getElementById("FamQenRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "family" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "twin")){
    document.getElementById("FamTwn").style.display = "block"; 
    price = 85
    document.getElementById("FamTwnRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "family" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "sofa-+-king")){
    document.getElementById("FamS+K").style.display = "block";
    price = 85;
    document.getElementById("FamS+KRoomPrice").innerHTML = "$" + Math.round(100*(((price) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "accessible" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "king")){
    document.getElementById("AccKng").style.display = "block"; 
    price = 70;
    document.getElementById("AccKngRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "accessible" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "queen")){
    document.getElementById("AccQen").style.display = "block";
    price = 65; 
    document.getElementById("AccQenRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "accessible" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "twin")){
    document.getElementById("AccTwn").style.display = "block"; 
    price = 65
    document.getElementById("AccTwnRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  if((roomType == "accessible" || roomType == "anyRoom") && (bedType == "anyBed" || bedType == "sofa-+-king")){
    document.getElementById("AccS+K").style.display = "block";
    price = 75;
    document.getElementById("AccS+KRoomPrice").innerHTML = "$" + Math.round(100*(((price + kitchenExtra) * peakSeason) * lengthOfStay * numOfRooms * (1+1/Math.pow(differenceDays, 2))))/100 + "<BR/>" + "$" + Math.round(100*((price + kitchenExtra) * peakSeason * (1+1/Math.pow(differenceDays, 2))))/100 + "/night";
  }
  }

//Room Select
function StdKingFunc(){
    const variable = "true";
    const url = new URL("file:///C:/Aron%20Code/The-Rosalind-Lodges-main/orderConfirmation.html");
    url.searchParams.set("variable", variable);
    window.location.href = url;
    
}
function StdQueenFunc(){
    
}
function StdTwinFunc(){
    
}
function StdSKFunc(){
    
}
function DelKingFunc(){

}
function DelQueenFunc(){
    
}
function DelTwinFunc(){
    
}
function DelSKFunc(){
    
}
function SuiKingFunc(){

}
function SuiQueenFunc(){
    
}
function SuiTwinFunc(){
    
}
function SuiSKFunc(){
    
}
function ExeKingFunc(){

}
function ExeQueenFunc(){
    
}
function ExeTwinFunc(){
    
}
function ExeSKFunc(){
    
}
function FamKingFunc(){

}
function FamQueenFunc(){
    
}
function FamTwinFunc(){
    
}
function FamSKFunc(){

}
function AccKingFunc(){

}
function AccQueenFunc(){
    
}
function AccTwinFunc(){
    
}
function AccSKFunc(){
    
}