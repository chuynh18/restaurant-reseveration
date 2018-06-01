$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    console.log("i see it");
    var newReservation = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        uid: $("#uid").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/reserve", newReservation)
        .then(function(data) {
            console.log(data);
    });
});