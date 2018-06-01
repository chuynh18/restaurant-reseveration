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

            if (data.reservations[0]) {
                var number = $("<th>");
                number.attr("scope", "col");
                number.text("#");

                var name = $("<th>");
                name.attr("scope", "col");
                name.text("Name");

                var phone = $("<th>");
                phone.attr("scope", "col");
                phone.text("Phone #");

                var email = $("<th>");
                email.attr("scope", "col");
                email.text("Email Address");

                var uid = $("<th>");
                uid.attr("scope", "col");
                uid.text("UID");

                $("#reservation-heading").append(number);
                $("#reservation-heading").append(name);
                $("#reservation-heading").append(phone);
                $("#reservation-heading").append(email);
                $("#reservation-heading").append(uid);
            }
            else {
                $("#reservation-heading").text("No reservations have yet been made.  Make yours today!");
            }

            if (data.wait[0]) {
                var number = $("<th>");
                number.attr("scope", "col");
                number.text("#");

                var name = $("<th>");
                name.attr("scope", "col");
                name.text("Name");

                var phone = $("<th>");
                phone.attr("scope", "col");
                phone.text("Phone #");

                var email = $("<th>");
                email.attr("scope", "col");
                email.text("Email Address");

                var uid = $("<th>");
                uid.attr("scope", "col");
                uid.text("UID");

                $("#wait-heading").append(number);
                $("#wait-heading").append(name);
                $("#wait-heading").append(phone);
                $("#wait-heading").append(email);
                $("#wait-heading").append(uid);
            }
            else {
                $("#wait-heading").text("Nobody's on the waitlist right now.  Don't let it be you.  Reserve today!");
            }
            
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
