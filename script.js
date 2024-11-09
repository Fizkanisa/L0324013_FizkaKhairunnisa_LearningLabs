document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.querySelector("form");
    
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah form dari pengiriman default
            const name = document.getElementById("name").value;
            const feedback = document.getElementById("feedback").value;
            
            // Tampilkan alert dengan nama dan feedback
            alert(`Terima kasih, ${name}! Feedback Anda telah diterima:\n"${feedback}"`);
            
            // Reset form setelah pengiriman
            feedbackForm.reset();
        });
    }
});