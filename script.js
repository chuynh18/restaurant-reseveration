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
    
                var card = $("<tr>");

                var cardNum = $("<td>");
                cardNum.text(i+1);
                
                var cardTitle = $("<td>");
                cardTitle.text(data.reservations[i].name);
    
                var cardPhone = $("<td>");
                cardPhone.text(data.reservations[i].phone);
    
                var cardEmail = $("<td>");
                cardEmail.text(data.reservations[i].email);
    
                var cardUID = $("<td>");
                cardUID.text(data.reservations[i].uid);
    
                card.append(cardNum);
                card.append(cardTitle);
                card.append(cardPhone);
                card.append(cardEmail);
                card.append(cardUID);
    
                $("#cardsHere").append(card);
            }
            for (var i=0; i < data.wait.length; i++) {
    
                var card = $("<tr>");

                var cardNum = $("<td>");
                cardNum.text(i+1);
                
                var cardTitle = $("<td>");
                cardTitle.text(data.wait[i].name);
    
                var cardPhone = $("<td>");
                cardPhone.text(data.wait[i].phone);
    
                var cardEmail = $("<td>");
                cardEmail.text(data.wait[i].email);
    
                var cardUID = $("<td>");
                cardUID.text(data.wait[i].uid);
    
                card.append(cardNum);
                card.append(cardTitle);
                card.append(cardPhone);
                card.append(cardEmail);
                card.append(cardUID);
    
                $("#waitHere").append(card);
            }
        }
    })
}


$( document ).ready(function() {
    renderPage();
});
