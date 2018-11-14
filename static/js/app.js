// from data.js
var tableData = data;

var tbody = d3.select('tbody');

// YOUR CODE HERE!
//console.log(data);

//this creates a loop that will go through data and log
//data.forEach(function(alienLoop) {
//    console.log(alienLoop);
//});
//this expands on previous and appends row to body
//data.forEach(function(alienLoop) {
//    console.log(alienLoop);
//    var row = tbody.append('tr');
//});
//console.logs each value
//data.forEach(function(alienLoop) {
//    console.log(alienLoop);
//    var row = tbody.append('tr');
//    Object.entries(alienLoop).forEach(function([key,value]) {
//        console.log(key, value);
//    });
//});

//this appends 1 cell per alien
//data.forEach(function(alienLoop) {
//    console.log(alienLoop);
 //   var row = tbody.append('tr');

   // Object.entries(alienLoop).forEach(function([key, value]) {
     //   console.log(alienLoop);
       // var cell = row.append('td');
    //});
//});

//using d3 to update each cells text with the data values
data.forEach(function(alienLoop) {
    console.log(alienLoop);
    var row = tbody.append('tr');

    Object.entries(alienLoop).forEach(function([key, value]) {
        console.log(alienLoop);
        var cell = row.append('td');
        cell.text(value);
    });
});
//selects the filter button
var filter = d3.select("#filter-btn");


//running a function to filter results by date
filter.on("click", function() {
//prevents a refresh
    d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElement = d3.select("#datetime");
//get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data=> data.datetime === inputValue);
    console.log(filteredData);

    var newDates = filteredData.map(data => data.datetime);
    var city = filteredData.map(data=>data.city);
    var state = filteredData.map(data => data.state);
    var country = filteredData.map(data => data.country);
    var shape = filteredData.map(data=>data.shape);
    var durationMin = filteredData.map(data => data.durationMinutes);
//made variables and then appended to a list, wasnt right


    //d3.select("h1>span").text(durationMin);
    //d3.select("#ufo-table-two")
        //.append(".table-head-one").text(`Date:${newDates}`)
        //.append(".table-head-two").text(`City: ${city}`)
        //.append(".table-head-three").text(`State: ${state}`)
        //.append(".table-head-four").text(`Country:${country}`)
        //.append(".table-head-five").text(`Shape:${shape}`)
        //.append(".table-head-six").text(`Minutes: ${durationMin}`);

    filteredData.forEach(function(alienLoopTwo) {
        console.log(alienLoopTwo);
        var row = tbody.append('tr');
    
        Object.entries(alienLoopTwo).forEach(function([key, value]) {
            console.log(alienLoopTwo);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});



///appending the list to a summary but not sure if we need to do this, makes sense to
///tried playing with appending stats but the math didnt work
