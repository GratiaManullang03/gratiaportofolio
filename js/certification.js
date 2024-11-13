$(document).ready(function () {
	// Certification data
	const certificationData = [
        {
			id: 1,
			name: 'Samsung Innovation Campus Certification',
			issuer: 'Samsung Electronics',
			date: 'September 2024',
			image: 'source/image/certificate/8.png',
			description:
				'Achieved outstanding performance in Samsung Innovation Campus Batch 5 (2023/2024) with impressive scores: 92.70, 88.37, 90.63, and 90.12, demonstrating strong technical capabilities and innovative thinking.',
		},
		{
			id: 2,
			name: 'Inauguration Chairman Certificate',
			issuer: 'Multimedia Nusantara Polytechnic',
			date: 'August 2024',
			image: 'source/image/certificate/4.png',
			description:
				'Served as Chairman for the Senate Open Session of New Student Inauguration 2024 at Multimedia Nusantara Polytechnic, demonstrating leadership and organizational skills in managing large-scale academic events.',
		},
		{
			id: 3,
			name: 'Data Science Professional Certification',
			issuer: 'DQLab',
			date: 'April 2024',
			image: 'source/image/certificate/1.png',
			description:
				'Comprehensive data science expertise validated through multiple certifications including Python, R, and SQL, data visualization, statistics, and exploratory data analysis. Completed advanced courses in data preparation, quality assessment, and statistical analysis.',
		},
		{
			id: 4,
			name: 'Masterclass on Artificial Intelligence',
			issuer: 'International Training Centre',
			date: 'February 2024',
			image: 'source/image/certificate/6.png',
			description:
				'Completed an intensive masterclass on artificial intelligence, gaining comprehensive knowledge of AI concepts, applications, and implications in modern technology landscape.',
		},
		{
			id: 5,
			name: 'International Labor Standards Certification',
			issuer: 'International Training Centre',
			date: 'October 2024',
			image: 'source/image/certificate/5.png',
			description:
				'Gained expertise in international labor standards and business practices through comprehensive courses on MNE Declaration and continuing legal education in international labour standards.',
		},
		{
			id: 6,
			name: 'Programming Tutor Recognition',
			issuer: 'Multimedia Nusantara Polytechnic',
			date: 'September 2023',
			image: 'source/image/certificate/2.png',
			description:
				'Served as a programming course tutor for the e-Commerce Logistics Programme, demonstrating technical expertise and teaching capabilities in helping fellow students master programming concepts.',
		},
		{
			id: 7,
			name: 'Bootcamp Frappe Certificate',
			issuer: 'Anteraja Logistics',
			date: 'June 2023',
			image: 'source/image/certificate/3.png',
			description:
				'Successfully completed the Bootcamp Frappe program, gaining practical experience in logistics platform development and engineering practices.',
		},
		{
			id: 8,
			name: 'Podcast Competition Achievement',
			issuer: 'Perkumpulan Politeknik Swasta Indonesia (PELITA)',
			date: 'October 2023',
			image: 'source/image/certificate/7.png',
			description:
				'Secured 1st Runner Up position in the Podcast Competition at VOCREATION 2023, demonstrating excellence in content creation and digital communication.',
		},
    ];

	// Function to create certification items
    function createCertificationItem(cert) {
        return `
            <div class="certification-item">
                <h3 class="certification-name">${cert.name}</h3>
                <div class="certification-date">Issued ${cert.date}</div>
                <a href="certification-details.html?id=${cert.id}" class="view-certificate">
                    <i class="fas fa-eye"></i>
                    View Certificate
                </a>
            </div>
        `;
    }

    // Initialize certifications
    function initCertifications() {
        const certificationGrid = $('.certification-grid');
        certificationData.forEach((cert) => {
            certificationGrid.append(createCertificationItem(cert));
        });
    }

    // Initialize
    initCertifications();

	// Scroll animation with stagger effect
	$('.certification-item').each(function (i) {
		$(this).css({
			opacity: '0',
			transform: 'translateY(20px)',
			transition: 'all 0.3s ease',
		});

		const element = this;
		const delay = i * 100;

		$(window).scroll(function () {
			const bottomOfWindow = $(window).scrollTop() + $(window).height();
			const bottomOfObject =
				$(element).offset().top + $(element).outerHeight() * 0.3;

			if (bottomOfWindow > bottomOfObject) {
				setTimeout(() => {
					$(element).css({
						opacity: '1',
						transform: 'translateY(0)',
					});
				}, delay);
			}
		});
	});
});
