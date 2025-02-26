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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default button action

        // Collect form data
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("comment").value.trim();

        // Validate input fields
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Prepare form data
        let formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Send data to backend via fetch API
        fetch("send_email.php", {  // Change URL to match your backend file
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Message sent successfully!");
                document.querySelector("form").reset(); // Reset form after submission
            } else {
                alert("Failed to send message. Try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
    });
});

