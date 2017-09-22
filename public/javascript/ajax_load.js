
$(document).ready(function(){
    $(".view").on('click', function(){
        var name = this.id;
        $(".main-content").load(name+'.html');
    });
});
