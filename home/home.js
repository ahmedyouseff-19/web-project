
$('.thumbnails img').on('click', function(){
$(this).addclass('selected').siblings().removeclass('selected')
});