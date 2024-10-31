
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('topo-scrolled');
    } else {
        header.classList.remove('topo-scrolled'); 1 
    }
});

const detailsElements = document.querySelectorAll('details');

        detailsElements.forEach(details => {
            details.addEventListener('toggle', () => {
                if (details.open) {
                    detailsElements.forEach(otherDetails => {
                        if (otherDetails !== details) {
                            otherDetails.open = false;
                        }
                    });
                }
            });
        });