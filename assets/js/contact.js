// Service ID - "service_82gsneb"
// Template ID - "memory_game_template"
// User ID - "user_LkxRVn5xX0jDWna8SO6qp"

function sendMail(contactForm) {
    emailjs.send("service_82gsneb", "memory_game_template", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                alert("Great! We'll be in touch!");
                // needs to be /memory-game
                window.location.replace("/contact.html");
            },
            function (error) {
                alert("Whoops something went wrong");
            }
        );
        return false;
}