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
//});

//filter on city
//filter.on("click", function() {
//prevents a refresh
    //d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElementTwo = d3.select("#cityinput");
//get the value property of the input element
    var inputValueTwo = inputElementTwo.property("value");

    console.log(inputValueTwo);
    //console.log(tableData);

    var filteredDatatwo = tableData.filter(data=> data.city === inputValueTwo);
    console.log(filteredDatatwo);

    filteredDatatwo.forEach(function(LoopThree) {
        console.log(LoopThree);
        var row = tbody.append('tr');
    
        Object.entries(LoopThree).forEach(function([key, value]) {
            console.log(LoopThree);
            var cell = row.append('td');
            cell.text(value);
        });
    });
//});

//filter on state
//filter.on("click", function() {
//prevents a refresh
    //d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElementThree = d3.select("#stateinput");
//get the value property of the input element
    var inputValueThree = inputElementThree.property("value");

    console.log(inputValueThree);
    console.log(tableData);

    var filteredDatathree = tableData.filter(data=> data.state === inputValueThree);
    console.log(filteredDatathree);

    filteredDatathree.forEach(function(LoopFour) {
        console.log(LoopFour);
        var row = tbody.append('tr');
    
        Object.entries(LoopFour).forEach(function([key, value]) {
            console.log(LoopFour);
            var cell = row.append('td');
            cell.text(value);
        });
    });
//});

//filter.on("click", function() {
//prevents a refresh
    //d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElementFour = d3.select("#countryinput");
//get the value property of the input element
    var inputValueFour = inputElementFour.property("value");

    console.log(inputValueFour);
    console.log(tableData);

    var filteredDataFour = tableData.filter(data=> data.country === inputValueFour);
    console.log(filteredDataFour);

    filteredDataFour.forEach(function(LoopFive) {
        console.log(LoopFive);
        var row = tbody.append('tr');
    
        Object.entries(LoopFive).forEach(function([key, value]) {
            console.log(LoopFive);
            var cell = row.append('td');
            cell.text(value);
        });
    });
//});

//filter.on("click", function() {
//prevents a refresh
    //d3.event.preventDefault();
//select the filter element and get the raw HTML node
    var inputElementFive = d3.select("#shapeinput");
//get the value property of the input element
    var inputValueFive = inputElementFive.property("value");

    console.log(inputValueFive);
    //console.log(tableData);

    var filteredDataFive = tableData.filter(data=> data.shape === inputValueFive);
    console.log(filteredDataFive);

    filteredDataFive.forEach(function(LoopSix) {
        console.log(LoopSix);
        var row = tbody.append('tr');
    
        Object.entries(LoopSix).forEach(function([key, value]) {
            console.log(LoopSix);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});
//as of 11/15/2018 6:21 pm, I made it all one function and it seems to work, questions would be does this need to be a filter that can filter everything? collapse down results? still dont know how to do that in a simple way?