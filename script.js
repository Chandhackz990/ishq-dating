function openSignup() {
    alert('Signup feature coming soon! 🚀');
}

// Like button functionality
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.textContent = 'Liked 💖';
        this.style.background = '#4CAF50';
    });
});
