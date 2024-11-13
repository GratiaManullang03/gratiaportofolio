$(document).ready(function () {
	// Create animated text
	const text = "Let's have a chat";
	const words = text.split(' ');
	let html = '';

	words.forEach((word, index) => {
		html += `<div class="animated-text" style="animation: slideUp 0.8s ease ${
			index * 0.2
		}s forwards;">
            <span>${word}&nbsp;</span>
        </div>`;
	});

	$('.footer-heading').html(html);

	// Handle contact hover animations
	$('.contact-item').hover(
		function () {
			$(this).find('i').css('transform', 'scale(1.2)');
		},
		function () {
			$(this).find('i').css('transform', 'scale(1)');
		}
	);
});
