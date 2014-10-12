google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawScatterChart);
function drawScatterChart() {
    var data = google.visualization.arrayToDataTable([
        ['time', 'series1'],
        [ 0,      12]
        //[ 4,      5.5],
        //[ 11,     14],
        //[ 4,      5],
        //[ 3,      3.5],
        //[ 6.5,    7]
    ]);

    var options = {
        title: 'Time vs. Amount comparison',
        hAxis: {title: 'time', minValue: 0, maxValue: 15},
        vAxis: {title: 'amount', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart'));

    chart.draw(data, options);

    var counter = 1;
    var value, random, add = 0;

    setInterval(function() {
        //var d = new Date();
        rows = data.getNumberOfRows();
        //data.removeRow(rows);
        random = Math.round(6 * Math.random());
        value = parseInt(data.getFormattedValue(rows-1,1));
        value = add ? value + random : value - random;
        data.addRow([counter, value]);
        chart.draw(data, options);
        counter ++;
        add = !add;
    }, 400);
}/**
 * Created by pablosettecase on 10/10/14.
 */
