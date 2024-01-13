$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "./MOCK_DATA.csv",
        dataType: "text",
        success: function(data) {
            var csvData = $.csv.toArrays(data);
            displayCSVData(csvData);
        }
    });

    function displayCSVData(data) {
        var html = '<table><tr>';
        // Assuming first row of csvData contains headers
        data[0].forEach(function(header) {
            html += '<th>' + header + '</th>';
        });
        html += '</tr>';
        data.slice(1).forEach(function(row) {
            html += '<tr>';
            row.forEach(function(cell) {
                html += '<td>' + cell + '</td>';
            });
            html += '</tr>';
        });
        html += '</table>';
        $('#csvDataContainer').html(html);
    }
});
