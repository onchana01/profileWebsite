document.addEventListener("DOMContentLoaded", function () {
    var brandText = document.getElementById("brand-text");
    var originalText = "&lt;AbnerOnchana/&gt;";
    var hoverText = '&lt;AbnerOnchana <span class="reload-text">onClick={Reload}</span>/&gt;';
    var clicked = false; // Track if clicked

    brandText.addEventListener("mouseenter", function () {
        if (!clicked) { // Change text only if not clicked
            this.innerHTML = hoverText;
        }
    });

    brandText.addEventListener("mouseleave", function () {
        if (!clicked) { // Reset only if not clicked
            this.innerHTML = originalText;
        }
    });

    brandText.addEventListener("click", function () {
        clicked = true; // Lock hover state on click
        this.innerHTML = hoverText;
    });

    document.addEventListener("click", function (event) {
        if (!brandText.contains(event.target)) {
            clicked = false; // Reset when clicking elsewhere
            brandText.innerHTML = originalText;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const profileContainers = document.querySelectorAll(".single-profile");
    
    profileContainers.forEach(container => {
        const overlay = container.querySelector(".single-profile-overlay");
        
        container.addEventListener("mouseenter", function () {
            overlay.style.transform = "scale(1)";
        });
        
        container.addEventListener("mouseleave", function () {
            overlay.style.transform = "scale(0)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".isotope .item");

    items.forEach(item => {
        item.addEventListener("mouseenter", function () {
            const overlay = this.querySelector(".isotope-overlay");
            if (overlay) {
                overlay.style.transform = "scale(1)";
            }
        });

        item.addEventListener("mouseleave", function () {
            const overlay = this.querySelector(".isotope-overlay");
            if (overlay) {
                overlay.style.transform = "scale(0)";
            }
        });
    });
});


