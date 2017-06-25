$(function(){
    var form = $("#form_main");
    form.submit(function() {
        var msg = $("#form_main_msg").val();
        $.ajax({
            url: "https://httpbin.org/post",
            type: "POST",
            dataType: "json",
            data: {foo: "bar", msg: msg},
            timeout: 5000,
        }).done(function(data) {
            window.alert("Success\n" + JSON.stringify(data));
        }).fail(function(req, stat, err){
            window.alert("Error\n" + err);
        });
        return false;
    });

    $("#a_desc").click(function() {
        window.alert("This is a test.");
    });
});
