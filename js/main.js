var $btnMenu = $('.btn-menu');
var $panel = $('.panel');
var $btn = $('.btn');
var $thumbs = $('.thumbnails');
var $lightboxImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $night = $('#night');
var $day = $('#day');
var current=new Date()
var dayNight=current.getHours()

//Toggle navigation

$btnMenu.on('click', function () {
	$panel.toggleClass('js-panel-open');
});

$('.nav').localScroll();


//Lightbox

$thumbs.on('click', 'a', function(e){
	e.preventDefault();
	var big = $(this).attr('href');
	$lightboxImg.attr('src', big);
	$lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
 $lb.attr('data-state', 'hidden');
});


//changing image in window based on time of day

var $night = $('#night');
var $day = $('#day');
var current=new Date()
var dayNight=current.getHours()

if (dayNight>=19 || dayNight <= 5){
	$night.attr('class', 'js-night-active');
	$day.removeAttr('class');
}else{
	$day.attr('class', 'js-day-active');
	$night.removeAttr('class');
}
