// Vercel Speed Insights Integration
// This script initializes Vercel Speed Insights for the website
// Based on @vercel/speed-insights package v1.3.1

(function() {
    // Initialize the queue for Speed Insights
    if (window.si) return;
    window.si = function(...params) {
        (window.siq = window.siq || []).push(params);
    };

    // Create and inject the Speed Insights script
    const script = document.createElement('script');
    script.src = '/_vercel/speed-insights/script.js';
    script.defer = true;
    script.dataset.sdkn = '@vercel/speed-insights';
    script.dataset.sdkv = '1.3.1';
    
    script.onerror = () => {
        console.log(
            '[Vercel Speed Insights] Failed to load script. Please check if any content blockers are enabled and try again.'
        );
    };
    
    document.head.appendChild(script);
})();
