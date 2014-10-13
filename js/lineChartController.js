function LineChartController($scope, $http, $window) {
    $scope.interval = 500;
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawLineChart);
    function drawLineChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
        ]);

        var options = {
            title: 'Company Performance'
        };

        var chart = new google.visualization.LineChart(document.getElementById('line_chart'));

        chart.draw(data, options);

        var value1, value2, random, add = 0;
        var time;

        function callback() {
            var d = new Date();
            time = (d.getMilliseconds() * 10).toString();
            rows = data.getNumberOfRows();
            //data.removeRow(rows);
            random = Math.round(100 * Math.random());
            value1 = parseInt(data.getFormattedValue(rows-1,1));
            value2 = parseInt(data.getFormattedValue(rows-1,2));
            value1 = add ? value1 + random : value1 - random;
            value2 = !add ? value2 + random : value2 - random;
            data.addRow([time, value1, value2]);
            chart.draw(data, options);
            add = !add;
            setTimeout(callback, $scope.interval);
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