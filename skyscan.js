function validateForm() {
    var x = document.forms["myForm"]["city"];
    if (x.value == "") {
        alert("You have to fill this field");
        return false;
    } 
}

var linklist = document.createDocumentFragment();

var myForm = document.querySelector("#submit");
myForm.addEventListener("click", function(e){
    e.preventDefault();
    const part1 = "http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/GB/GBP/en-GB/LON/";

    let dest = document.querySelector("#inputCity").value;
    let dateOut = document.querySelector("#inputDate").value;
    //let country = document.getElementById("inputCountry").value;
    const part2 = "?apiKey=prtl6749387986743898559646983194";
    var res = part1.concat(dest, "/", dateOut, part2);
    var y = document.getElementById("links");
    var z = document.createElement('li');
    z.innerHTML= "Link: " + res;
    y.appendChild(z);
    
    var mapdest = document.getElementById("inputCity").value;
    var mapcountry = document.getElementById("country").value;
    document.querySelector(".twitter-timeline").href = "https://twitter.com/hashtag/" + dest;
    
});
    
    
//http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/GB/GBP/en-GB/LON/PRG/2016-12-21?apiKey=prtl6749387986743898559646983194