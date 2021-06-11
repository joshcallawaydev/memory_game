function sendMail(contactForm) {
    emailjs.send("service_82gsneb", "memory_game_template", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function () {
                alert("Great! We'll be in touch!");
                window.location.replace("/contact.html");
            },
            function () {
                alert("Whoops something went wrong");
            }
        );
    return false;
}