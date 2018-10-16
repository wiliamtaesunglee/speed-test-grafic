

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    fetch('http://private-anon-cda785a958-photongroupapi.apiary-mock.com/speed', {method: 'get'})
    .then(function(response) {
    // Do stuff with the response
        response.json().then(function(data){
            
            var data = google.visualization.arrayToDataTable([
                ['Time', '2.4', '5.0'],
                [data[0].time,  data[0]["2.4"],      data[0]["5.0"]],
                [data[1].time,  data[1]["2.4"],      data[1]["5.0"]],
                [data[2].time,  data[2]["2.4"],       data[2]["5.0"]],
                
            ]);
            var options = {
                title: 'Speed Test',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
        
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        
            chart.draw(data, options);
        });
})
.catch(function(error) {
    console.log('Looks like there was a problem: \n', error);

});


    
    

    
}