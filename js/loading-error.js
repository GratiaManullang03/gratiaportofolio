$(document).ready(function() {
    // Create loading screen element
    const loadingScreen = $('<div class="loading-screen"><div class="loader"></div></div>');
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
    $(window).on('load', function() {
        setTimeout(() => {
            loadingScreen.addClass('hidden');
        }, 500);
    });

    // Function to show error screen
    window.showError = function(message) {
        loadingScreen.addClass('hidden');
        errorScreen.find('.error-message').text(message || 'We encountered an error while loading the page. Please try again.');
        errorScreen.addClass('show');
    };

    // Handle AJAX errors
    $(document).ajaxError(function(event, jqXHR, settings, error) {
        showError('Failed to load content. Please check your connection and try again.');
    });

    // Handle script load errors
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        showError('An error occurred while loading the page. Please try again.');
        return false;
    };
});