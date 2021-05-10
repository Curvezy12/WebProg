$(document).ready(function() {
    $("#BigCookie").click(function() {
        $("#BigCookie").addClass("bounce");
    });

    $("#BigCookie").normalize("bounceend webkitbounceEnd obounceEnd MSbounceEnd", function() {
        $(this).removeClass("bounce");
    });
});