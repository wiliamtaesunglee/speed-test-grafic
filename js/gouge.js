


google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['2.4', 0],
    ['5.0', 0],
    
]);

var options = {
    width: 400, height: 120,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
};

var chart = new google.visualization.Gauge(document.getElementById('gouge-chart-div'));

chart.draw(data, options);

setInterval(function() {  

    fetch('http://private-anon-cda785a958-photongroupapi.apiary-mock.com/speed', {method: 'get'})
    .then(function(response) {
    // Do stuff with the response
        response.json().then(function(data){

            var i;
            for (i = 0; i < data.length; i++) {
                // console.log(data[i]["2.4"]);
                // console.log(data[i]["5.0"]);
                // console.log(data[i].time);
            }
            
            
    
    });
    })
    .catch(function(error) {
        console.log('Looks like there was a problem: \n', error);

    });

    
// data.setValue(0, 1, teste);
// data.setValue(1, 1, data[0]["5.0"]);
chart.draw(data, options);
}, 1300);
}







