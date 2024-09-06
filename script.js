const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

// Ensure spinnerWrapperEl exists
if (spinnerWrapperEl) {
    setTimeout(() => {
        spinnerWrapperEl.style.opacity = '0';
        // Optional: Hide the element after fading out
        setTimeout(() => {
            spinnerWrapperEl.style.display = 'none';
        }, 500); // Delay to match the fade-out animation duration
    }, 1000);
}



(function() {
    const buttons = document.querySelectorAll('.btn');
    const storeImages = document.querySelectorAll('.store-item');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeImages.forEach((item) =>{
                if (filter === 'all') {
                    item.style.display = 'block';
                } else{
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else{
                        item.style.display = 'none';
                    }
                }
            })
        })
    })


    // Image View Box Functionality
    const modal = document.getElementById("imageViewBox");
    const modalImg = document.getElementById("viewedImage");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll('.store-img');
    const closeBtn = document.querySelector('.close');

    images.forEach((img) => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close the modal
    closeBtn.onclick = function() { 
        modal.style.display = "none";
    }
})();