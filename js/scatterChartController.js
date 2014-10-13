function ScatterChartController($scope, $http, $window) {
    $scope.interval = 500;
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

        function callback() {
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
        }

        setTimeout( callback, $scope.interval );
    }

    $scope.increaseSpeed = function() {
        if($scope.interval > 0) {
            $scope.interval -= 100;
        }
    }

    $scope.decreaseSpeed = function() {
        $scope.interval += 100;
    }

}