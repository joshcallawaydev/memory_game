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
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block new page loading
}