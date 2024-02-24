document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar ul li a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = link.getAttribute('href');

            setTimeout(function() {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 1000);
        });
    });
});