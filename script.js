"use strict";
/*

var exampleReservations = [
    {name: "Darth Plagueis",
    phone: "6666666666",
    email: "darth@plagueis.com",
    uid: "Darth Plagueis the Wise"}
];

*/

var renderPage = function() {
    $.get("/api/reserve/", function(data) {
        if (data) {
            console.log(data.reservations);
            console.log(data.wait);
            
            for (var i=0; i < data.reservations.length; i++) {
    
                var card = $("<div>");
                card.addClass("card col-md-3 ml-3 mr-3 mb-3 pt-3 reservation");
                
                var cardBody = $("<div>");
                cardBody.addClass("card-body");
                
                var cardTitle = $("<h5>");
                cardTitle.addClass("card-title");
                cardTitle.text("Name: " + data.reservations[i].name);
    
                var cardPhone = $("<p>");
                cardPhone.text("Phone: " + data.reservations[i].phone);
    
                var cardEmail = $("<p>");
                cardEmail.text("E-mail: " + data.reservations[i].email);
    
                var cardUID = $("<p>");
                cardUID.text("Unique ID: " + data.reservations[i].uid);
    
                card.append(cardTitle);
                cardBody.append(cardPhone);
                cardBody.append(cardEmail);
                cardBody.append(cardUID);
                
                card.append(cardBody);
    
                $("#cardsHere").append(card);
            }
            for (var i=0; i < data.reservations.length; i++) {
    
                var card = $("<div>");
                card.addClass("card col-md-3 ml-3 mr-3 mb-3 pt-3 reservation");
                
                var cardBody = $("<div>");
                cardBody.addClass("card-body");
                
                var cardTitle = $("<h5>");
                cardTitle.addClass("card-title");
                cardTitle.text("Name: " + data.wait[i].name);
    
                var cardPhone = $("<p>");
                cardPhone.text("Phone: " + data.wait[i].phone);
    
                var cardEmail = $("<p>");
                cardEmail.text("E-mail: " + data.wait[i].email);
    
                var cardUID = $("<p>");
                cardUID.text("Unique ID: " + data.wait[i].uid);
    
                card.append(cardTitle);
                cardBody.append(cardPhone);
                cardBody.append(cardEmail);
                cardBody.append(cardUID);
                
                card.append(cardBody);
    
                $("#waitHere").append(card);
            }
        }
    })
}


$( document ).ready(function() {
    renderPage();
});
