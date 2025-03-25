document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = document.querySelector('.page:not(.hidden)');
        const targetPage = document.querySelector(button.dataset.target);
        
        // Hide current page and show target page
        currentPage.classList.add('hidden');
        targetPage.classList.remove('hidden');
        
        // Optional - Reset the scroll position to the top of the new page
        targetPage.scrollIntoView({ behavior: 'smooth' });
    });
});