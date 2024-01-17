document.addEventListener('DOMContentLoaded', function() {
    var cardSubtitles = document.querySelectorAll('.card-subtitle');

    cardSubtitles.forEach(function(cardSubtitle) {
        var image = cardSubtitle.querySelector('.toggleImage');
        var paragraph = cardSubtitle.querySelector('p');

        image.addEventListener('click', function() {
            // Toggle between plus and minus images
            if (image.src.endsWith('assets/images/icon-minus.svg')) {
                image.src = 'assets/images/icon-plus.svg';
                // Display the paragraph
                if (paragraph) {
                    paragraph.style.display = 'none';
                }
            } else {
                image.src = 'assets/images/icon-minus.svg';
                // Hide the paragraph
                if (paragraph) {
                    paragraph.style.display = 'block';
                }
            }
        });
    });
});
