$(document).ready(function() {
    $("#modal1").on("show.bs.modal", getData);
    $("#update-person-button").on("click",
        function (event) {
            var url = "https://jsonplaceholder.typicode.com/users";
            var data = $("#personForm").serialize();
            $.post(url,
                data,
                function (response) {
                    console.log(response);
                    $("#modal1").modal('toggle');
                });
        });
});

function getData() {
    var url = "https://jsonplaceholder.typicode.com/users";
    $.get(url, mapData);
}

function mapData(result) {
    var data = result[0];
    $("#name").val(data.name);
    $("#userName").val(data.username);
}