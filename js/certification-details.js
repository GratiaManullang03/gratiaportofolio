$(document).ready(function () {
	// Certification data with simplified structure
	const certificationData = [
		{
			id: 1,
			name: 'Samsung Innovation Campus Certification',
			issuer: 'Samsung Electronics',
			date: 'Sep 2024',
			image: 'source/image/certificate/8.png',
			description:
				'Achieved outstanding performance in Samsung Innovation Campus Batch 5 (2023/2024) with impressive scores: 92.70, 88.37, 90.63, and 90.12, demonstrating strong technical capabilities and innovative thinking.',
		},
		{
			id: 2,
			name: 'Inauguration Chairman Certificate',
			issuer: 'Multimedia Nusantara Polytechnic',
			date: 'Aug 2024',
			image: 'source/image/certificate/4.png',
			description:
				'Served as Chairman for the Senate Open Session of New Student Inauguration 2024 at Multimedia Nusantara Polytechnic, demonstrating leadership and organizational skills in managing large-scale academic events.',
		},
		{
			id: 3,
			name: 'Data Science Professional Certification',
			issuer: 'DQLab',
			date: 'Apr 2024',
			image: 'source/image/certificate/1.png',
			description:
				'Comprehensive data science expertise validated through multiple certifications including Python, R, and SQL, data visualization, statistics, and exploratory data analysis. Completed advanced courses in data preparation, quality assessment, and statistical analysis.',
		},
		{
			id: 4,
			name: 'Masterclass on Artificial Intelligence',
			issuer: 'International Training Centre',
			date: 'Feb 2024',
			image: 'source/image/certificate/6.png',
			description:
				'Completed an intensive masterclass on artificial intelligence, gaining comprehensive knowledge of AI concepts, applications, and implications in modern technology landscape.',
		},
		{
			id: 5,
			name: 'International Labor Standards Certification',
			issuer: 'International Training Centre',
			date: 'Oct 2024',
			image: 'source/image/certificate/5.png',
			description:
				'Gained expertise in international labor standards and business practices through comprehensive courses on MNE Declaration and continuing legal education in international labour standards.',
		},
		{
			id: 6,
			name: 'Programming Tutor Recognition',
			issuer: 'Multimedia Nusantara Polytechnic',
			date: 'Sep 2023',
			image: 'source/image/certificate/2.png',
			description:
				'Served as a programming course tutor for the e-Commerce Logistics Programme, demonstrating technical expertise and teaching capabilities in helping fellow students master programming concepts.',
		},
		{
			id: 7,
			name: 'Bootcamp Frappe Certificate',
			issuer: 'Anteraja Logistics',
			date: 'Jun 2023',
			image: 'source/image/certificate/3.png',
			description:
				'Successfully completed the Bootcamp Frappe program, gaining practical experience in logistics platform development and engineering practices.',
		},
		{
			id: 8,
			name: 'Podcast Competition Achievement',
			issuer: 'Perkumpulan Politeknik Swasta Indonesia (PELITA)',
			date: 'Oct 2023',
			image: 'source/image/certificate/7.png',
			description:
				'Secured 1st Runner Up position in the Podcast Competition at VOCREATION 2023, demonstrating excellence in content creation and digital communication.',
		},
	];

	// Function to load certification details
	function loadCertificationDetails(certId) {
		const certification = certificationData.find((c) => c.id === certId);

		if (certification) {
			// Update carousel content
			$('.carousel-item').removeClass('active');
			const carouselItem = $(`.carousel-item--${certId}`);
			carouselItem.addClass('active');

			// Update certification details
			carouselItem.find('.carousel-item__title').text(certification.name);
			carouselItem.find('.carousel-item__subtitle').text(certification.issuer);
			carouselItem
				.find('.carousel-item__description')
				.text(certification.description);
			carouselItem
				.find('.carousel-item__image')
				.css('background-image', `url(${certification.image})`);

			// Add class to body to prevent scrolling
			$('body').addClass('carousel-active');
		}
	}

	// Get certification ID from URL
	const urlParams = new URLSearchParams(window.location.search);
	const certId = parseInt(urlParams.get('id'));

	// Load certification details if ID is present
	if (certId) {
		loadCertificationDetails(certId);
	}

	// Navigation arrows functionality
	$('#moveRight').on('click', function () {
		let currentId = parseInt(
			$('.carousel-item.active')
				.attr('class')
				.match(/carousel-item--(\d+)/)[1]
		);
		let nextId = (currentId % certificationData.length) + 1;
		loadCertificationDetails(nextId);
	});

	$('#moveLeft').on('click', function () {
		let currentId = parseInt(
			$('.carousel-item.active')
				.attr('class')
				.match(/carousel-item--(\d+)/)[1]
		);
		let prevId = currentId === 1 ? certificationData.length : currentId - 1;
		loadCertificationDetails(prevId);
	});

	// Close button functionality
	function closeCarousel() {
		$('body').removeClass('carousel-active');
		// Ganti URL ke index.html dengan hash fragment ke section 'certification'
		window.history.pushState({}, document.title, `${window.location.origin}/gratiaportofolio/#certification`);

		// Secara opsional, gulir ke section 'certification'
		window.location.hash = 'certification';
	}

	$('.carousel__close').click(function () {
		closeCarousel();
	});

	$(document).click(function (event) {
		if (
			!$(event.target).closest(
				'.carousel-item, .carousel__nav, .carousel__close'
			).length
		) {
			closeCarousel();
		}
	});

	$('.carousel').click(function (event) {
		event.stopPropagation();
	});

	$(document).keydown(function (e) {
		if (e.key === 'Escape') {
			closeCarousel();
		}
	});
});
