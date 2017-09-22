
$(document).ready(function(){
    $(".view").on('click', function(){
        var name = this.id;
        $("#change_content").load(name+'.html');
    });
});
