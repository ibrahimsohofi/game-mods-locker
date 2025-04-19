document.addEventListener('DOMContentLoaded', function() {
    // Example of how OGads integration would work
    // Replace this with your actual OGads code when you have your account
    setupContentLocker();

    // Animated counter for download count
    function animateCounter() {
        const counter = document.getElementById('download-count');
        if (!counter) return;

        const target = parseInt(counter.innerText.replace(/,/g, ''));
        let count = 0;
        const duration = 2000; // 2 seconds
        const frameRate = 60;
        const increment = target / (duration / 1000 * frameRate);

        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                clearInterval(timer);
                count = target;
            }
            counter.innerText = Math.floor(count).toLocaleString();
        }, 1000 / frameRate);
    }

    // Run counter animation when in viewport
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        const downloadCount = document.getElementById('download-count');
        if (downloadCount) {
            observer.observe(downloadCount);
        }
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        setTimeout(animateCounter, 500);
    }
});

/**
 * OGads Content Locker Integration
 * This function sets up the content locker with OGads
 * Replace the placeholders with your actual OGads account details
 */
function setupContentLocker() {
    // Get the selected package or default to 'basic'
    const savedPackage = localStorage.getItem('selected_package') || 'basic';

    // Configure OGads options based on package
    let offerSet;
    switch (savedPackage) {
        case 'premium':
            offerSet = 'premium_offers';
            break;
        case 'ultimate':
            offerSet = 'ultimate_offers';
            break;
        default:
            offerSet = 'recommended';
    }

    // Set up OGads configuration
    window.ogadsOptions = {
        offers: [offerSet],
        key: 'YOUR_OGADS_KEY',  // Replace with your actual OGads key
        theme: 'custom',        // You can create custom themes in OGads dashboard
        type: 'modal',          // 'modal', 'embed', or 'corner'
        game: getCurrentGame(), // Determine which game page we're on
        onShow: function() {
            if (typeof trackEvent === 'function') {
                trackEvent('engagement', 'locker_displayed', getCurrentGame());
            }
        }
    };

    // Add the OGads script dynamically
    const script = document.createElement('script');
    script.src = 'https://ogads.com/api/locker.js';
    document.head.appendChild(script);

    // Set up click handlers for all download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // For development testing (remove in production)
            if (isDevelopmentMode()) {
                // In development, simulate completion after 2 seconds
                alert('Development Mode: This is where your OGads content locker would appear. In production, this will be replaced with the actual OGads locker.');
                console.log('Development mode: Simulating offer completion...');
                setTimeout(function() {
                    handleOfferCompletion();
                }, 2000);
                return;
            }

            // In production, show the OGads locker
            if (typeof Ogads !== 'undefined' && Ogads.Locker) {
                Ogads.Locker.show();
            } else {
                console.error('OGads not loaded correctly. Check your implementation.');
                alert('Error loading content locker. Please try again later or contact support.');
            }
        });
    });

    // Set up OGads completion handler
    if (script.onload) {
        script.onload = function() {
            if (typeof Ogads !== 'undefined' && Ogads.Locker) {
                Ogads.Locker.onComplete(handleOfferCompletion);
            }
        };
    } else {
        // For browsers that don't support script.onload
        // Wait for OGads to be available
        const checkInterval = setInterval(function() {
            if (typeof Ogads !== 'undefined' && Ogads.Locker) {
                clearInterval(checkInterval);
                Ogads.Locker.onComplete(handleOfferCompletion);
            }
        }, 100);

        // Timeout after 10 seconds to prevent infinite checking
        setTimeout(function() {
            clearInterval(checkInterval);
        }, 10000);
    }
}

/**
 * Handle offer completion by redirecting to success page
 * This function is called when a user successfully completes an offer
 */
function handleOfferCompletion() {
    // Track the conversion
    if (typeof trackConversion === 'function') {
        // Get the selected package price for value
        let value = 0;
        const savedPackage = localStorage.getItem('selected_package') || 'basic';
        if (savedPackage === 'premium') value = 6.99;
        if (savedPackage === 'ultimate') value = 12.99;

        trackConversion(savedPackage, value);
    }

    // Get the current game to construct correct success URL
    const game = getCurrentGame();
    const successPage = game === 'minecraft' ? 'download-success.html' : `${game}-download-success.html`;

    // Redirect to success page
    window.location.href = successPage;
}

/**
 * Determine which game page we're on based on URL or HTML content
 * @returns {string} The current game ('minecraft', 'fortnite', etc.)
 */
function getCurrentGame() {
    const url = window.location.pathname;

    if (url.includes('fortnite')) return 'fortnite';
    if (url.includes('roblox')) return 'roblox';
    if (url.includes('gta5')) return 'gta5';
    if (url.includes('among-us')) return 'among-us';

    // If no specific game found in URL, try checking the page content
    const title = document.title.toLowerCase();
    if (title.includes('fortnite')) return 'fortnite';
    if (title.includes('roblox')) return 'roblox';
    if (title.includes('gta')) return 'gta5';
    if (title.includes('among us')) return 'among-us';

    // Default to minecraft if can't determine
    return 'minecraft';
}

/**
 * Check if we're in development mode
 * @returns {boolean} True if in development mode
 */
function isDevelopmentMode() {
    // Check if we're in development mode
    return (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname.includes('192.168.') ||
        window.location.hostname.includes('.local')
    );
}
