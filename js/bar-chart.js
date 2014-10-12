google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawBarChart);
      function drawBarChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          vAxis: {title: 'Year',  titleTextStyle: {color: 'red'}}
        };

        var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));

        chart.draw(data, options);

        var value1, value2, value3, value4, value5, value6, value7, value8;
        var random, add = 0;
        var time;

        setInterval(function() {
            rows = data.getNumberOfRows();
            //data.removeRow(rows);
            value1 = parseInt(data.getFormattedValue(0,1));
            value2 = parseInt(data.getFormattedValue(0,2));
            value3 = parseInt(data.getFormattedValue(1,1));
            value4 = parseInt(data.getFormattedValue(1,2));
            value5 = parseInt(data.getFormattedValue(2,1));
            value6 = parseInt(data.getFormattedValue(2,2));
            value7 = parseInt(data.getFormattedValue(3,1));
            value8 = parseInt(data.getFormattedValue(3,2));
            random = Math.round(10 * Math.random());
            value1 =  add ? value1 + random : value1 - random;
            value2 = !add ? value2 + random : value2 - random;
            value3 =  add ? value3 + random : value3 - random;
            value4 = !add ? value4 + random : value4 - random;
            value5 =  add ? value5 + random : value5 - random;
            value6 = !add ? value6 + random : value6 - random;
            value7 =  add ? value7 + random : value7 - random;
            value8 = !add ? value8 + random : value8 - random;
            data.setCell(0,1, value1);
            data.setCell(0,2, value2);
            data.setCell(1,1, value3);
            data.setCell(1,2, value4);
            data.setCell(2,1, value5);
            data.setCell(2,2, value6);
            data.setCell(3,1, value7);
            data.setCell(3,2, value8);
            chart.draw(data, options);
            add = !add;
        }, 400);
      }