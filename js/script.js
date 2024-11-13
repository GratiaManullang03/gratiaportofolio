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

$(document).ready(function () {
	// Show loading screen before navigating to a new page
	$(document).on('click', 'a[href]:not([href^="#"])', function () {
		$('.loading-screen').removeClass('hidden');
	});
	// Create loading screen element
	const loadingScreen = $(
		'<div class="loading-screen"><div class="loader"></div></div>'
	);
	$('body').append(loadingScreen);

	// Create error screen element
	const errorScreen = $(`
        <div class="error-screen">
            <i class="fas fa-exclamation-circle error-icon"></i>
            <h2 class="error-title">Oops! Something went wrong</h2>
            <p class="error-message">We encountered an error while loading the page. Please try again.</p>
            <button class="error-button" onclick="location.reload()">Retry</button>
        </div>
    `);
	$('body').append(errorScreen);

	// Show loading screen on page load
	loadingScreen.removeClass('hidden');

	// Hide loading screen when page is fully loaded
	$(window).on('load', function () {
		setTimeout(() => {
			loadingScreen.addClass('hidden');
		}, 500);
	});

	// Function to show error screen
	window.showError = function (message) {
		loadingScreen.addClass('hidden');
		errorScreen
			.find('.error-message')
			.text(
				message ||
					'We encountered an error while loading the page. Please try again.'
			);
		errorScreen.addClass('show');
	};

	// Handle AJAX errors
	$(document).ajaxError(function (event, jqXHR, settings, error) {
		showError(
			'Failed to load content. Please check your connection and try again.'
		);
	});

	// Handle script load errors
	window.onerror = function (msg, url, lineNo, columnNo, error) {
		showError('An error occurred while loading the page. Please try again.');
		return false;
	};
});
