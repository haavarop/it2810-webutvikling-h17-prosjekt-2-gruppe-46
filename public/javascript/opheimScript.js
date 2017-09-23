
var current = 1;

function changeSlide(n) {
    showSelectedSlide(current += n);
}

function showSelectedSlide(slideNum){
    var i;
    var slides = document.getElementsByClassName("slide");

    if (slideNum > slides.length){
        current = 1;
    }
    if( slideNum < 1){
        current = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[current -1].style.display = "block";
}

function validateEmailSubmit(email){
    var re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    $("#result").text("").fadeIn();
    var email = $("#email-field").val();

    if(validateEmailSubmit(email)){
        $("#result")
            .text(email + " added to newsletter")
            .css("color", "green");
        window.setTimeout(wait,3000);
    }else{
        $("#result")
            .text(email + " is not valid")
            .css("color", "red");
        window.setTimeout(wait,3000);

    }
    return false;
}

function wait() {
   $("#result").fadeOut("slow");
}

$("#emailSubmitButton").bind("click", validate);

for(k=0; k<10; k++){
    $("#conga-party").append("<img src=\"images/opheim/congaparrot.gif\"");
    console.log("im used!")
}
