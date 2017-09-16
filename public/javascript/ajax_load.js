
console.log("Javascript has been found!");

$(document).ready(function(){
    $("#bortne").click(function(){
        console.log("Onclick is working!");
        //alert("hello");
        $("#change_content").load('/bortne.html') /*, function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);*/
    });
});

/*$(document).ready(function(){
$(".list li").slice(1).click(function(){
    alert("hello");
    $("#inside_h1").load('home.html');
    });
});*/