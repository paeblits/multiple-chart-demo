google.load("visualization", "1", {packages:["gauge"]});
      google.setOnLoadCallback(drawGaugeChart);
      function drawGaugeChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('gauge_chart'));

        chart.draw(data, options);

          // adds data to the first gauge, note the first param in setValue is 0
          setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 400);
          // adds data to the second gauge
          setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 400);
          // adds data to the third gauge
          setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 400);
      }