$(document).ready(function () {
	// Change navbar on scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.navbar').addClass('scrolled');
		} else {
			$('.navbar').removeClass('scrolled');
		}

		// Update active section on scroll
		updateActiveSection();
	});

	// Function to update active section
	function updateActiveSection() {
		const scrollPosition = $(window).scrollTop();

		// Add some offset to account for navbar height
		const offset = 100;

		// Check each section's position
		$('.section').each(function () {
			const sectionTop = $(this).offset().top - offset;
			const sectionBottom = sectionTop + $(this).outerHeight();

			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				const currentId = $(this).attr('id');
				setActiveNavItem(currentId);
			}
		});
	}

	// Function to set active nav item
	function setActiveNavItem(id) {
		$('.nav-links a').removeClass('active');
		$(`.nav-links a[href="#${id}"]`).addClass('active');
	}

	// Smooth scroll for navbar links with instant section switching
	$('.nav-links a').on('click', function (e) {
		e.preventDefault();

		const targetId = $(this).attr('href');
		const $target = $(targetId);

		if ($target.length) {
			// Remove smooth scroll behavior temporarily
			$('html').css('scroll-behavior', 200);

			// Instant scroll to section
			window.scrollTo(0, $target.offset().top);

			// Update active section immediately
			setActiveNavItem(targetId.substring(1));

			// Restore smooth scroll behavior
			setTimeout(() => {
				$('html').css('scroll-behavior', 'smooth');
			}, 0);
		}
	});

	// Initial active section check
	updateActiveSection();
});