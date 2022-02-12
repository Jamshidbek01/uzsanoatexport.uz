// Burger menu
document.querySelector('.burger').addEventListener('click', burger);

function burger() {
	document.querySelector('.mobil-menu').classList.toggle('active');
	document.querySelector('.burger').classList.toggle('open');
}
// document.querySelector('.m-list').addEventListener('click', e => {
// 	document.querySelector('.mobil-menu').classList.remove('active');
// 	document.querySelector('.burger').classList.remove('open');
// 	window.top = document.querySelector('.about').offsetTop;
// });
var acc = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
$(document).ready(function () {
	$(".head-slider").owlCarousel({
		items: 1,
		navs: false,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
	});

	$(".pslide").owlCarousel({
		items: 6,
		navs: false,
		dots: false,
		loop: true,
		margin: 60,
		center: true,
		autoWidth: true,
		autoplay: false,
		autoplayTimeout: 3000
	});

	$(".comment-slide").owlCarousel({
		loop: true,
		nav: true,
		items: 2,
		navText: ["<img src='img/prev.svg'>", "<img src='img/next.svg'>"],
		responsive: {
			1140: {
				items: 2,
			},
			320: {
				items: 1,
			}
		}
	});

	//------------------------------ SVG HOVER -------------------------------------------------//
	$('.comment-slide .owl-nav .owl-prev').hover(function () {
		$(this).children('img').each(function () {
			var $e = $(this);
			var imgURL = $e.prop('src');
			$.get(imgURL, function (data) {
				var $svg = $(data).find('svg');
				$svg.find('.cls-1').css('fill', '#2e2d2c');
				$svg.find('.cls-2').css('fill', '#2e2d2c');
				$svg.find('.cls-3').css('fill', '#2e2d2c');
				$svg.find('.cls-4').css('fill', '#2e2d2c');
				$svg.find('.cls-5').css('fill', '#2e2d2c');
				$e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
			});
		});
	},
		function () {
			$(this).children('img').each(function () {
				var $e = $(this);
				var imgURL = $e.prop('src');
				$.get(imgURL, function (data) {
					var $svg = $(data).find('svg');
					$svg.find('.cls-1').css('fill', '#bcbcbc');
					$svg.find('.cls-2').css('fill', '#bcbcbc');
					$svg.find('.cls-3').css('fill', '#bcbcbc');
					$svg.find('.cls-4').css('fill', '#bcbcbc');
					$svg.find('.cls-5').css('fill', '#bcbcbc');
					$e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
				});
			});
		}
	);

	$('.comment-slide .owl-nav .owl-next').hover(function () {
		$(this).children('img').each(function () {
			var $e = $(this);
			var imgURL = $e.prop('src');
			$.get(imgURL, function (data) {
				var $svg = $(data).find('svg');
				$svg.find('.cls-1').css('fill', '#2e2d2c');
				$svg.find('.cls-2').css('fill', '#2e2d2c');
				$svg.find('.cls-3').css('fill', '#2e2d2c');
				$svg.find('.cls-4').css('fill', '#2e2d2c');
				$svg.find('.cls-5').css('fill', '#2e2d2c');
				$e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
			});
		});
	},
		function () {
			$(this).children('img').each(function () {
				var $e = $(this);
				var imgURL = $e.prop('src');
				$.get(imgURL, function (data) {
					var $svg = $(data).find('svg');
					$svg.find('.cls-1').css('fill', '#bcbcbc');
					$svg.find('.cls-2').css('fill', '#bcbcbc');
					$svg.find('.cls-3').css('fill', '#bcbcbc');
					$svg.find('.cls-4').css('fill', '#bcbcbc');
					$svg.find('.cls-5').css('fill', '#bcbcbc');
					$e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
				});
			});
		}
	);

	//------------------------------ SVG HOVER END ---------------------------------------------//
	$(".pslide").owlCarousel({
		items: 6,
		navs: false,
		dots: false,
		loop: true,
		margin: 60,
		center: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoWidth: true,
	});
})