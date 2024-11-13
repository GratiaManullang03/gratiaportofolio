$(document).ready(function () {
	// Get project ID from URL
	const urlParams = new URLSearchParams(window.location.search);
	const projectId = parseInt(urlParams.get('id'));

	// Portfolio data (same as in works.js)
	const portfolioData = [
		{
			id: 1,
			title: 'Mitto Karya Website',
			category: 'Website',
			image: 'source/image/project/1.png',
			description:
				'A PHP-based furniture e-commerce platform for hotels, hospitals, and contractors, designed to enhance brand awareness and facilitate seamless transactions.',
		},
		{
			id: 2,
			title: 'Mitto Karya Dashboard',
			category: 'Website',
			image: 'source/image/project/2.png',
			description:
				"A comprehensive PHP admin dashboard for managing Mitto Karya's e-commerce platform, enabling complete control over content, products, and transactions.",
		},
		{
			id: 3,
			title: 'SMEs Odoo ERP',
			category: 'Innovation',
			image: 'source/image/project/3.png',
			description:
				'An integrated Odoo ERP system implementation for Tama Jaya Motor workshop, featuring customized modules for inventory, purchasing, and website management to streamline business operations.',
		},
		{
			id: 4,
			title: 'Street Fighter Console Game',
			category: 'Console Application',
			image: 'source/image/project/4.png',
			description:
				'A console-based fighting game developed in C++ featuring character classes with unique abilities, health systems, and ASCII art visualization, implementing object-oriented principles through inheritance and polymorphism.',
		},
		{
			id: 5,
			title: "Mande's Recipe",
			category: 'Innovation',
			image: 'source/image/project/5.png',
			description:
				"Developed creative innovation strategies for a local Padang restaurant (Mande's Recipe) near campus as part of a university creativity course project, focusing on business improvement through digital menu implementation, membership programs, and menu redesign.",
		},
		{
			id: 6,
			title: 'Frugetables Warehouse',
			category: 'Warehouse',
			image: 'source/image/project/6.png',
			description:
				'A detailed warehouse optimization project focusing on layout design, location strategy, and efficient product flow management for a perishable goods facility.',
		},
		{
			id: 7,
			title: 'Esensi Mitra Solusi Website',
			category: 'Website',
			image: 'source/image/project/7.png',
			description:
				'A Laravel-powered corporate website for a multi-service provider company, delivering a professional online presence with dynamic content management capabilities.',
		},
		{
			id: 8,
			title: 'Timeh Frozen Food Apps',
			category: 'Mobile Application',
			image: 'source/image/project/8.png',
			description:
				'A Flutter-based Android application for a frozen food business, offering a user-friendly platform for browsing and ordering various traditional snacks and side dishes.',
		},
		{
			id: 9,
			title: 'Fuzzy Name Matching',
			category: 'Innovation',
			image: 'source/image/project/9.png',
			description:
				'A patient search system for hospitals that implements fuzzy matching algorithms to find similar names despite typos or spelling variations, enhancing the accuracy and efficiency of patient identification.',
		},
		{
			id: 10,
			title: 'Machine Learning',
			category: 'Innovation',
			image: 'source/image/project/10.png',
			description:
				'An intelligent pharmaceutical system that uses machine learning to detect anomalies in drug dosage data and provides precise dosage recommendations based on patient age and weight parameters.',
		},
		{
			id: 11,
			title: 'Healthcare Chatbot',
			category: 'Innovation',
			image: 'source/image/project/11.png',
			description:
				"Developed a healthcare chatbot system for Kiddiecare medical centers that facilitates appointment booking, online consultations, and doctor schedule inquiries, using OpenAI's GPT-4 API to provide intelligent conversational interactions in Indonesian language.",
		},
		{
			id: 12,
			title: 'Saga Sips',
			category: 'Innovation',
			image: 'source/image/project/12.png',
			description:
				'A student entrepreneurship venture specializing in coffee and Sonkit orange juice, implementing comprehensive business strategies from marketing to financial management.',
		},
	];

	// Function to load project details
	function loadProjectDetails(projectId) {
		const project = portfolioData.find((p) => p.id === projectId);

		if (project) {
			// Update carousel content
			$('.carousel-item').removeClass('active');
			const carouselItem = $(`.carousel-item--${projectId}`);
			carouselItem.addClass('active');

			// Update project details
			carouselItem.find('.carousel-item__title').text(project.title);
			carouselItem.find('.carousel-item__subtitle').text(project.category);
			carouselItem
				.find('.carousel-item__description')
				.text(project.description);
			carouselItem
				.find('.carousel-item__image')
				.css('background-image', `url(${project.image})`);

			// Add class to body to prevent scrolling
			$('body').addClass('carousel-active');
		}
	}

	// Load project details if ID is present
	if (projectId) {
		loadProjectDetails(projectId);
	}

	// Navigation arrows functionality
	$('#moveRight').on('click', function () {
		let currentId = parseInt(
			$('.carousel-item.active')
				.attr('class')
				.match(/carousel-item--(\d+)/)[1]
		);
		let nextId = (currentId % portfolioData.length) + 1;
		loadProjectDetails(nextId);
	});

	$('#moveLeft').on('click', function () {
		let currentId = parseInt(
			$('.carousel-item.active')
				.attr('class')
				.match(/carousel-item--(\d+)/)[1]
		);
		let prevId = currentId === 1 ? portfolioData.length : currentId - 1;
		loadProjectDetails(prevId);
	});

	// Function to close carousel and return to portfolio
	function closeCarousel() {
		$('body').removeClass('carousel-active');
		window.location.href = '#works';
	}

	// Close button click handler
	$('.carousel__close').click(function () {
		closeCarousel();
	});

	// Close when clicking outside carousel
	$(document).click(function (event) {
		if (
			!$(event.target).closest(
				'.carousel-item, .carousel__nav, .carousel__close'
			).length
		) {
			closeCarousel();
		}
	});

	// Prevent closing when clicking inside carousel
	$('.carousel').click(function (event) {
		event.stopPropagation();
	});

	// Add keyboard support for closing (Esc key)
	$(document).keydown(function (e) {
		if (e.key === 'Escape') {
			closeCarousel();
		}
	});
});
