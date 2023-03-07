//document.getElementById("ExeTwnRoomPrice").innerHTML = "$"
var checkInDate;
var checkOutDate;
var bedType;
var roomType;
var roomCount;
var roomPrice;
var priceOfPackage = 0;
var skiNabled = false;
var natureNabled = false;
var usHistNabled = false;
var nycNabled = false;

document.addEventListener('DOMContentLoaded', function() {
    document.cookie = "natureNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    document.cookie = "skiNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    document.cookie = "usHistNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    document.cookie = "nycNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    let x = document.cookie;
    x = decodeURIComponent(x);
    let ca = x.split(";");
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,13) == "checkInDate="){
            checkInDate = c.substring(13);
        }
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,14) == "checkOutDate="){
            checkOutDate = c.substring(14);
        }
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,9) == "bedType="){
            bedType = c.substring(9);
        }
    }
    if(bedType == "king"){
        bedType = "with a king bed"
    }
    else if(bedType == "queen"){
        bedType = "with a queen bed"
    }
    else if(bedType == "twin"){
        bedType = "with twin beds"
    }
    else if(bedType == "sofa-+-king"){
        bedType = "with a king and sofa bed"
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,10) == "roomType="){
            roomType = c.substring(10);
        }
    }
    if(roomType == "standard"){
        roomType = "Standard Room ";
    }
    else if(roomType == "deluxe"){
        roomType = "Deluxe Room ";
    }
    else if(roomType == "suite"){
        roomType = "Suite ";
    } else if(roomType == "executive"){
        roomType = "Executive Room ";
    }
    else if(roomType == "family"){
        roomType = "Family Room ";
    }
    else if(roomType == "accessible"){
        roomType = "Accessible Room ";
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,12) == "numOfRooms="){
            roomCount = c.substring(12);
        }
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,7) == "price="){
            roomPrice = c.substring(7);
        }
    }
    document.getElementById("checkInDate").innerHTML = checkInDate;
    document.getElementById("checkOutDate").innerHTML = checkOutDate;
    document.getElementById("roomType").innerHTML = roomType + bedType + " (x" + roomCount + ")";
    document.getElementById("roomPrice").innerHTML = "$" + roomPrice;
    document.getElementById("packagePrice").innerHTML = "$" + priceOfPackage;    
    document.getElementById("taxPrice").innerHTML = "$" +  Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * .06625)/100;
    document.getElementById("finalPrice").innerHTML = "$" + Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    document.cookie = "finalPrice=" + finalPrice + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";

}, false);
function ski(){
    if(!skiNabled){
        priceOfPackage += 120;
        skiNabled = true
        document.getElementById("ski").innerHTML = "Remove";
        document.cookie = "skiNabled=" + "true" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    }
    else{
        priceOfPackage -=120;
        skiNabled = false;
        document.getElementById("ski").innerHTML = "Add";
        document.cookie = "skiNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    }
    document.getElementById("packagePrice").innerHTML = "$" + priceOfPackage;    
    document.getElementById("taxPrice").innerHTML = "$" +  Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * .06625)/100;
    document.getElementById("finalPrice").innerHTML = "$" + Math.round(100 * (parseFloat(roomPrice) + priceOfPackage) * 1.06625) / 100;
    var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    document.cookie = "finalPrice=" + finalPrice + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
}
function nature() {
    if(!natureNabled){
        priceOfPackage += 25;
        natureNabled = true
        document.getElementById("nature").innerHTML = "Remove";
        document.cookie = "natureNabled=" + "true" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    }
    else{
        priceOfPackage -=25;
        natureNabled = false;
        document.getElementById("nature").innerHTML = "Add";
        document.cookie = "natureNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    }
    document.getElementById("packagePrice").innerHTML = "$" + priceOfPackage;    
    document.getElementById("taxPrice").innerHTML = "$" +  Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * .06625)/100;
    document.getElementById("finalPrice").innerHTML = "$" + Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    document.cookie = "finalPrice=" + finalPrice + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";

}
function usHist(){
    if(!usHistNabled){
        priceOfPackage += 20;
        usHistNabled = true;
        document.getElementById("usHist").innerHTML = "Remove";
        var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
        document.cookie = "usHistNabled=" + "true" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";}
    else{
        priceOfPackage -=20;
        usHistNabled = false;
        document.getElementById("usHist").innerHTML = "Add";
        var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
        document.cookie = "usHistNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    }
    document.getElementById("packagePrice").innerHTML = "$" + priceOfPackage;    
    document.getElementById("taxPrice").innerHTML = "$" +  Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * .06625)/100;
    document.getElementById("finalPrice").innerHTML = "$" + Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    document.cookie = "finalPrice=" + finalPrice + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
}
function nyc(){
    if(!nycNabled){
        priceOfPackage += 20;
        nycNabled = true;
        document.getElementById("nyc").innerHTML = "Remove";
        var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    document.cookie = "nycNabled=" + "true" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    }
    else{
        priceOfPackage -=20;
        nycNabled = false;
        document.getElementById("nyc").innerHTML = "Add";
        document.cookie = "nycNabled=" + "false" + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    }
    document.getElementById("packagePrice").innerHTML = "$" + priceOfPackage;    
    document.getElementById("taxPrice").innerHTML = "$" +  Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * .06625)/100;
    document.getElementById("finalPrice").innerHTML = "$" + Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    var finalPrice = Math.round(100*(parseFloat(roomPrice)+priceOfPackage) * 1.06625)/100;
    document.cookie = "finalPrice=" + finalPrice + "; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
}