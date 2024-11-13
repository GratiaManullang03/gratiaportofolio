$(document).ready(function () {
	// Ticker content
	const tickerItems = [
		{ icon: 'graduation-cap', text: '3.94 GPA' },
		{ icon: 'code', text: 'Web & Mobile Development' },
		{ icon: 'robot', text: 'AI & Machine Learning' },
		{ icon: 'users', text: 'Leadership Experience' },
		{ icon: 'truck-fast', text: 'Logistics' },
		{ icon: 'briefcase', text: 'Internship Experience' },
		{ icon: 'chart-line', text: 'E-Commerce' },
	];

	function createTickerContent() {
		return tickerItems
			.map(
				(item) => `
            <div class="ticker-item">
                <i class="fas fa-${item.icon}"></i>
                ${item.text}
            </div>
        `
			)
			.join('');
	}

	function initTicker() {
		const tickerTrack = $('.ticker-track');
		const content = createTickerContent();

		// Create two identical sets of content for seamless loop
		const tickerHtml = `
            <div class="ticker-content">
                ${content}
                ${content}
            </div>
        `;

		tickerTrack.html(tickerHtml);

		// Clone the entire ticker-content for perfect looping
		const tickerContent = $('.ticker-content').clone();
		tickerTrack.append(tickerContent);
	}

	// Initialize ticker
	initTicker();
});
