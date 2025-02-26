$(document).ready(function() {
    // CSRF Token setup for AJAX
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
    });

    // Handle form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        $.ajax({
            type: 'POST',
            url: '/',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                console.log('Response:', response); // Debug response
                $('#form-message').text(response.message);
                if (response.success) {
                    console.log('Success detected, clearing form'); // Debug reset
                    $('#form-message').css('color', 'green');
                    $('#contact-form')[0].reset(); // Clear form
                } else {
                    $('#form-message').css('color', 'red');
                }
            },
            error: function(xhr, status, error) {
                console.log('AJAX Error:', status, error); // Debug error
                $('#form-message').text('An error occurred. Please try again.');
                $('#form-message').css('color', 'red');
            }
        });
    });

    // Profiles animation (unchanged)
    function isInViewport(element) {
        var rect = element[0].getBoundingClientRect();
        return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function animateProfiles() {
        var $profilesSection = $('#profiles');
        if (isInViewport($profilesSection) && !$profilesSection.hasClass('animated')) {
            $profilesSection.addClass('animated');
            $('.single-profile').each(function(index) {
                $(this).delay(index * 300).queue(function(next) {
                    $(this).addClass('animate');
                    next();
                });
            });
        }
    }

    $(window).on('scroll', animateProfiles);
    animateProfiles();
});