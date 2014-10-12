var interval = 500;
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

          setInterval(function() {
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
          }, interval);

      }

var increaseSpeed = function() {
    if(interval > 0) {
        interval -= 100;
        console.log(interval);
    }
}

var decreaseSpeed = function() {
    interval += 100;
    console.log(interval);
}

