// send email via form function
function sendMail(contactForm) {
    emailjs.send("service_82gsneb", "memory_game_template", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function () {
                alert("Great! We'll be in touch!");
                // needs to be /memory-game
                window.location.replace("/contact.html");
            },
            function () {
                alert("Whoops something went wrong");
            }
        );
        return false;
}