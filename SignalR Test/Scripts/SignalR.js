var hub = $.connection.myHub;


$.connection.hub.start()
    .done(function () {
        $("#send").click(function () {
            hub.server.announce($("#txt").val());
            $("#txt").val(" ");
        })
    })
   .fail(function () {
       alert("Error!");
   });

hub.client.caller = function (msg) {
    $("#message").append("<li>" + msg + "</li>");
}

hub.client.otherusers = function (msg) {
    $("#message").append("<li>" + msg + "</li>");
}