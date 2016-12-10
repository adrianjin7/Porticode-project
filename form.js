alert("HEEEY");

(function () {
    
function Validator(form){
    this.form = form;
    this.fields = this.form.querySelectorAll("[required]");
    this.errors = [];
    
   if(!this.field.length) return;
   
   this.form.onsubmit = function(e) {
       e.preventDefault();
       alert("hey!");
       
       var formValid = this.validate();
       
       if(formValid){
           this.form.submit();
       } else {
           return false;
       }
       
       
   }.bind(this);
       
   

       
}
    
Validator.prototype.validate = function(){
    for(i=0; i<this.fields.length; i++){
        this.validateField(this.field[i]);
    }
    if (this.errors.length){
        return false;
    } else {
        return true;
    }
}
Validator.prototype.validateField = function(field) {
    var fieldValid = field.validity.valid;
    
    if(fieldValid){
        this.markAsValid(field);
    } else {
        this.errors.push(field.dateset.errorMessage);
        this.markasInvalid(field);
    }
    
}

Validator.prototype.markAsValid = function(field){
    field.classList.remove("invalid");
    field.classList.add("valid");
}

Validator.prototype.markAsInvalid = function(field){
    field.classList.remove("valid");
    field.classList.add("invalid");
}
    
var val1 = new Validator(document.querySelector("#form"));    
})();