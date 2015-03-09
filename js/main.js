var $btnMenu = $('.btn-menu');
var $panel = $('.panel');
var $btn = $('.btn');
var $tabs = $('.tabs');
var $panels = $('.panels');

$btnMenu.on('click', function () {
	$panel.toggleClass('js-panel-open');
})

//$panel.on('animationend', function(){
	//$panel.removeClass('js-panel-open');
//});




$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});
