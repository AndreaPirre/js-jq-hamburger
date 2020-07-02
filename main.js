
// Hamburger menu:
// mostrare / nascondere il menu principale

// promemoria mio

// $(selector).action(); sintassi base JQuery

// in versione mobile devo far in modo che al cliccare sulle barre il menu compaia a cascata


$(".fas").click(function() {
    $(".hamburger-menu").show();
    $(".hamburger-menu").addClass("active"); // aggiunta classe active già presenta in css
});
