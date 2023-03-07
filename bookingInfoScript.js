var checkInDate;
var checkOutDate;
var bedType;
var roomType;
var roomCount;
var roomPrice;
var hasKitchen;
var priceOfPackage;
var skiNabled;
var natureNabled;
var usHistNabled;
var nycNabled;
var currentSessionRun = false;

document.addEventListener('DOMContentLoaded', function() {
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
        if(c.substring(1,12) == "numOfRooms="){
            roomCount = c.substring(12);
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
        if(c.substring(1,12) == "finalPrice="){
            roomPrice = c.substring(12);
        }
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,12) == "hasKitchen="){
            hasKitchen = c.substring(12);
        }
    }
    if(hasKitchen == "true" || hasKitchen == "True" ){
        hasKitchen = "Yes";
    }
    else{
        hasKitchen = "No";
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,11) == "skiNabled="){
            skiNabled = c.substring(11);
        }
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,14) == "natureNabled="){
            natureNabled = c.substring(14);
        }
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,14) == "usHistNabled="){
            usHistNabled = c.substring(14);
        }
    }
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        if(c.substring(1,11) == "nycNabled="){
            nycNabled = c.substring(11);
        }
    }
    var packages = "";
    if(skiNabled == "true"){
        packages += "Ultimate Skier's Dream </BR>";
    }
    if(natureNabled == "true"){
        packages += "Ultimate Nature Enthusiast </BR>";
    }
    if(usHistNabled == "true"){
        packages += "Ultimate American History Tour </BR>";
    }
    if(nycNabled == "true"){
        packages += "Ultimate tour of NYC </BR>";
    }
if($('#a:visible').length == 0 && !currentSessionRun){
    $("#a").css("display", "block");
    document.getElementById("CheckIn-Out1").innerHTML = checkInDate + " ---> " + checkOutDate;
    document.getElementById("roomInfo1").innerHTML = roomType + bedType + " (x" + roomCount + ")" + "</BR>" + "Price: $" + roomPrice + "</BR>Kichen: " + hasKitchen;
    document.getElementById("packagesInfo1").innerHTML = packages;
    currentSessionRun = true;
}
}, false);