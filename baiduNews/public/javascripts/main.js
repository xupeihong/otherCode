require.config({
    basrUrl: "./javascripts",
    paths: {jquery: "jquery-3.0.0.min"}
});
require(["split"], function (Split) {
    $.ajax({
        url: "/",
        type: "post",
        success: function (data) {
            $.each(data.list, function (index, ele) {
                getnews(ele);
            })
            var sp = new Split({ma: data.n, perpage: 10, container: "#split"});
        }, error: function (err) {
            console.log(err);
        }
    })
})