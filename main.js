
// Hamburger menu:
// mostrare / nascondere il menu principale

// promemoria mio

// $(selector).action(); sintassi base JQuery

// in versione mobile devo far in modo che al cliccare sulle barre il menu compaia a cascata

// comparsa menu
$(".fas").click(function() {
    $(".hamburger-menu").show(); // con .show rendo visibile il menu
});

// chiusura Menu
$(".close").click(function() {
    $(".hamburger-menu").hide(); // con .hide rendo invisibile il menu
});
