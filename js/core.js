$(document).ready(function() { // On document load
    
    $('[data-toggle="popover"]').popover(); // Allow popovers
    $('[data-toggle="tooltip"]').tooltip(); // Allow tooltips

});
    
$('#scriptButton').click(function() { // Called on pressing the run script button

    window.alert("You pressed the button!");

});

$("#htmlButton").click(function() { // Called on pressing the preview HTML button

    // Swaps between code and live preview
    $('#htmlCode').toggleClass('hidden');
    $('#htmlPreview').toggleClass('hidden');

});
