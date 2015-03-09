var $btnMenu = $('.btn-menu');
var $panel = $('.panel');

$btnMenu.on('click', function () {
	$panel.toggleClass('js-panel-open');
})

$panel.on('animationend', function(){
	$panel.removeClass('js-panel-open');
});
