var $btnMenu = $('.btn-menu');
var $panel = $('.panel');
var $btn = $('.btn');
//var $tabs = $('.tabs');
//var $panels = $('.panels');

$btnMenu.on('click', function () {
	$panel.toggleClass('js-panel-open');
});

//$panel.on('animationend', function(){
	//$panel.removeClass('js-panel-open');
//});


var $thumbs = $('.thumbnails');
var $lightboxImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');


$thumbs.on('click', 'a', function(e){
	e.preventDefault();
	var big = $(this).attr('href');
	$lightboxImg.attr('src', big);
	$lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
 $lb.attr('data-state', 'hidden');
});

//$tabs.on('click', 'a', function (e) {
  //e.preventDefault();
  //var id = $(this).attr('href');

  //console.log ($panels.filter(':not([hidden])'));

  //$panels.filter(':not([hidden])').attr('hidden', true);
  //$(id).removeAttr('hidden');

  //$tabs.find('.js-current').removeClass('js-current');
  //$(this).addClass('js-current');
//});
