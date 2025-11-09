document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const closeButtons = document.querySelectorAll('.close-details');
    const goButtons = document.querySelectorAll('.go-button');

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('close-details') || e.target.classList.contains('go-button')) {
                return;
            }
            
            const isExpanded = this.classList.contains('expanded');
            
            projectCards.forEach(otherCard => {
                otherCard.classList.remove('expanded');
            });
            
            if (!isExpanded) {
                this.classList.add('expanded');
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            this.closest('.project-card').classList.remove('expanded');
        });
    });

    goButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});