
alert("HEEEY");

function validateForm() {
    var x = document.forms["myForm"]["city"];

    if (x.value == "") {
        alert("You have to fill this field");
        return false;
    }
}


prompt("?");

function changeTextOne(){
    document.getElementById('boldStuff').innerHTML = city;
}
changeTextOne();
