var $btnMenu = $('.btn-menu');
var $panel = $('.panel');
var $btn = $('.btn');
var $thumbs = $('.thumbnails');
var $lightboxImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');

$btnMenu.on('click', function () {
	$panel.toggleClass('js-panel-open');
});

$thumbs.on('click', 'a', function(e){
	e.preventDefault();
	var big = $(this).attr('href');
	$lightboxImg.attr('src', big);
	$lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
 $lb.attr('data-state', 'hidden');
});


