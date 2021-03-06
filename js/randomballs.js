/*!
Randomballs, an animated area where different sizes of balls are playing randomly
by Mohammad Wahid, http://mohammadwahid.com

Version 1.0.0
Full source at https://github.com/mohammadwahid-eng/randomballs
Copyright (c) 2022 http://mohammadwahid.com
*/

(function ($) {
	'use strict';
	
	$.fn.randomballs = function(options) {
		
		let settings = $.extend({
			colors: ["#eb4d4b", "#6ab04c", "#130f40", "#4834d4", "#f0932b", "#be2edd", "#353b48"],
			balls: 50,
			ballClass: 'ball',
			speed: 2000,
		}, options);

		let ballList = function () {
			let balls = [];
			for (let i = 0; i < settings.balls; i++) {
				let to = {
					x: Math.random() * (i % 2 === 0 ? -11 : 11),
					y: Math.random() * 12
				};
				let ball = document.createElement("div");
				ball.classList.add(settings.ballClass);
				ball.style.background = settings.colors[Math.floor(Math.random() * settings.colors.length)];
				ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
				ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
				ball.style.transform = `scale(${Math.random()})`;
				ball.style.width = `${Math.random()}rem`;
				ball.style.height = ball.style.width;

				ball.animate(
					[
						{ transform: "translate(0, 0)" },
						{ transform: `translate(${to.x}rem, ${to.y}rem)` }
					],
					{
						duration: (Math.random() + 1) * settings.speed,
						direction: "alternate",
						fill: "both",
						iterations: Infinity,
						easing: "ease-in-out"
					}
				);

				balls.push(ball);
			}

			return balls;
		}
		
		this.classList.add('.randomballs');
		
		return this.append(ballList);
	}
	
})(jQuery);
