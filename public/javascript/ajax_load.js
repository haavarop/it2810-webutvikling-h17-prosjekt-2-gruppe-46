
$(document).ready(function(){
    $(".main-content").load('landingpage.html');
    $(".view").on('click', function(){
        var name = this.id;
        if (name != "bortne"){
            stopMusic();
        }
        $(".main-content").load(name+'.html');

    });
});
