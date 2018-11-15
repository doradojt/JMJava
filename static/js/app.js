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
filter.on("click", function(datesearch) {
//prevents a refresh
    d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElement = d3.select("#dateinput");
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

    filteredData.forEach(function(LoopTwo) {
        console.log(LoopTwo);
        var row = tbody.append('tr');
    
        Object.entries(LoopTwo).forEach(function([key, value]) {
            console.log(LoopTwo);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});

//filter on city
filter.on("click", function(citysearch) {
//prevents a refresh
    d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElement = d3.select("#cityinput");
//get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data=> data.city === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(LoopThree) {
        console.log(LoopThree);
        var row = tbody.append('tr');
    
        Object.entries(LoopThree).forEach(function([key, value]) {
            console.log(LoopThree);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});
//filter on state
filter.on("click", function(statesearch) {
//prevents a refresh
    d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElement = d3.select("#stateinput");
//get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data=> data.state === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(LoopFour) {
        console.log(LoopFour);
        var row = tbody.append('tr');
    
        Object.entries(LoopFour).forEach(function([key, value]) {
            console.log(LoopFour);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});
//filter on Country
filter.on("click", function(countrysearch) {
//prevents a refresh
    d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElement = d3.select("#countryinput");
//get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data=> data.country === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(LoopFive) {
        console.log(LoopFive);
        var row = tbody.append('tr');
    
        Object.entries(LoopFive).forEach(function([key, value]) {
            console.log(LoopFive);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});

filter.on("click", function(shapesearch) {
//prevents a refresh
    d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElement = d3.select("#shapeinput");
//get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data=> data.shape === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(LoopSix) {
        console.log(LoopSix);
        var row = tbody.append('tr');
    
        Object.entries(LoopSix).forEach(function([key, value]) {
            console.log(LoopSix);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});
//not sure why the shape is the only one working, must be linked to being the last one in the search