$(document).ready(function () {
    $('#modal1').on('show.bs.modal',
        function () {
            //$('#myInput').trigger('focus');
            var url = 'https://jsonplaceholder.typicode.com/users';
            $.get(url,
                function(result) {
                    var data = result[0];
                    $('#name').val(data.name);
                });
        });
});