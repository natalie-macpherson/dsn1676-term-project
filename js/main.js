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

$('.nav').localScroll();

$thumbs.on('click', 'a', function(e){
	e.preventDefault();
	var big = $(this).attr('href');
	$lightboxImg.attr('src', big);
	$lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
 $lb.attr('data-state', 'hidden');
});

var=current=newDate()
var dayNight=current.getHour
var=$img.attr(“src”,”name of the image tag”)

//if dayNight=>12
	//$img.attr("<img src=‘’>”)
//else
	//$img.attr(”<img src=‘'>”)


