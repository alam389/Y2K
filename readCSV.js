$(document).ready(function () {
    $('#csvFileInput').on('change', function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        
        reader.onload = function (e) {
            var csvData = e.target.result;
            var data = $.csv.toArrays(csvData);
            displayCSVData(data);
        };

        reader.readAsText(file);
    });

    function displayCSVData(data) {
        var html = '<table border="1">';
        data.forEach(function (row) {
            html += '<tr>';
            row.forEach(function (cell) {
                html += '<td>' + cell + '</td>';
            });
            html += '</tr>';
        });
        html += '</table>';
        $('#csvDataContainer').html(html);
    }
});
