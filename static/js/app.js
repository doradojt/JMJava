
var tableData = data;

var tbody = d3.select('tbody');

var showall = d3.select("#showall-btn");

showall.on("click", function() {
    
    d3.event.preventDefault();
    
    data.forEach(function(alienLoop) {
        var row = tbody.append('tr');
    
        Object.entries(alienLoop).forEach(function([key, value]) {
            //console.log(alienLoop);
            var cell = row.append('td');
            cell.text(value);
        })
    })
});

var clearall = d3.select("#clear-btn");

clearall.on("click", function() {
    var elements = document.getElementsByTagName("#ufo-table");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].type == "text") {
            elements[i].value = "";
        }
    }
    //was a backup way to clear the table if above didn't work, refreshed page
    //d3.event.preventDefault();
    //d3.select("#ufo-table").clearall;   
});


// //selects the filter button
var filter = d3.select("#filter-btn");

 //running a function to filter results by date
 filter.on("click", function() {
// //prevents a refresh
     d3.event.preventDefault();
// //clears previous filter
     tbody.text("")
// //select the filter element and get the raw HTML node
     var inputElement = d3.select("#dateinput");
// //get the value property of the input element
     var inputValue = inputElement.property("value");

//     //console.log(inputValue);
//     //console.log(tableData);

     d3.select("#dateinput").node().value = "";

     var filteredData = tableData.filter(data=> data.datetime === inputValue);
//     console.log(filteredData);

     filteredData.forEach(function(LoopTwo) {
//         //console.log(LoopTwo);
         var row = tbody.append('tr');
    
         Object.entries(LoopTwo).forEach(function([key, value]) {
//             //console.log(LoopTwo);
             var cell = row.append('td');
             cell.text(value);
         });
     });

     var inputElementTwo = d3.select("#cityinput");
 //get the value property of the input element
     var inputValueTwo = inputElementTwo.property("value");

//     //console.log(inputValueTwo);
//     //console.log(tableData);
     d3.select("#cityinput").node().value = "";

     var filteredDatatwo = tableData.filter(data=> data.city === inputValueTwo);
//     //console.log(filteredDatatwo);

     filteredDatatwo.forEach(function(LoopThree) {
//         //console.log(LoopThree);
         var row = tbody.append('tr');
    
         Object.entries(LoopThree).forEach(function([key, value]) {
//             //console.log(LoopThree);
             var cell = row.append('td');
             cell.text(value);
         });
     });

     var inputElementThree = d3.select("#stateinput");

     var inputValueThree = inputElementThree.property("value");

//     //console.log(inputValueThree);
//     //console.log(tableData);
     d3.select("#stateinput").node().value = "";

     var filteredDatathree = tableData.filter(data=> data.state === inputValueThree);
//     //console.log(filteredDatathree);

     filteredDatathree.forEach(function(LoopFour) {
//         //console.log(LoopFour);
         var row = tbody.append('tr');
    
         Object.entries(LoopFour).forEach(function([key, value]) {
             //console.log(LoopFour);
             var cell = row.append('td');
             cell.text(value);
         });
     });

     var inputElementFour = d3.select("#countryinput");

     var inputValueFour = inputElementFour.property("value");

//     //console.log(inputValueFour);
//     //console.log(tableData);
     d3.select("#countryinput").node().value = "";

     var filteredDataFour = tableData.filter(data=> data.country === inputValueFour);
//     //console.log(filteredDataFour);

     filteredDataFour.forEach(function(LoopFive) {
//         //console.log(LoopFive);
         var row = tbody.append('tr');
    
         Object.entries(LoopFive).forEach(function([key, value]) {
//             //console.log(LoopFive);
             var cell = row.append('td');
             cell.text(value);
         });
     });

     var inputElementFive = d3.select("#shapeinput");

     var inputValueFive = inputElementFive.property("value");

//     //console.log(inputValueFive);
//     //console.log(tableData);
     d3.select("#shapeinput").node().value = "";

     var filteredDataFive = tableData.filter(data=> data.shape === inputValueFive);
//     //console.log(filteredDataFive);

     filteredDataFive.forEach(function(LoopSix) {
//         //console.log(LoopSix);
         var row = tbody.append('tr');
    
         Object.entries(LoopSix).forEach(function([key, value]) {
//             //console.log(LoopSix);
             var cell = row.append('td');
             cell.text(value);
         });
     });
//     //attempt at multi-filters
     var multiFilterOne = tableData.filter(data => data.datetime === inputValue && data.shape === inputValueFive && data.city === inputValueTwo && data.country === inputValueFour && data.state === inputValueThree);
     multiFilterOne.forEach(function(LoopSeven) {
         var row = tbody.append('tr');
         Object.entries(LoopSeven).forEach(function([key, value]) {
             var cell = row.append('td');
             cell.text(value);
         });
     });
 });

//selects the enter button
var enter = d3.select("#enter-btn");

enter.on("click", function() {
    
    d3.event.preventDefault();

    var dateInput = d3.select("#dateentry");
    var cityInput = d3.select("#cityentry");
    var stateInput = d3.select("#stateentry");
    var countryInput = d3.select("#countryentry");
    var shapeInput = d3.select("#shapeentry");
    var durationInput = d3.select("#durationentry");
    var commentInput = d3.select("#commententry");

    var dateValue = dateInput.property("value");
    var cityValue = cityInput.property("value");
    var stateValue = stateInput.property("value");
    var countryValue = countryInput.property("value");
    var shapeValue = shapeInput.property("value");
    var durationValue = durationInput.property("value");
    var commentValue = commentInput.property("value");

    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);
    console.log(durationValue);
    console.log(commentValue);

    d3.select("#dateentry").node().value = "";
    d3.select("#cityentry").node().value = "";
    d3.select("#stateentry").node().value = "";
    d3.select("#countryentry").node().value = "";
    d3.select("#shapeentry").node().value = "";
    d3.select("#durationentry").node().value ="";
    d3.select("#commententry").node().value ="";

    //trying to push the variables into an object to loop through
    var inputs =[];
    inputs.push({"datetime": dateValue});
    inputs.push({"city": cityValue});
    inputs.push({"state": stateValue});
    inputs.push({"country": countryValue});
    inputs.push({"shape": shapeValue});
    inputs.push({"duration": durationValue});
    inputs.push({"comments": commentValue});

    console.log(inputs);

    data.push(inputs);
    //pushes the inputs to the old data list, tries to
    //loops through and assigns the table
    // inputs.forEach(function(inputs) {
        
        var row = tbody.append('tr');
        
        Object.entries(inputs).forEach(function([key, value]) {
            console.log("Key: " + key);
            console.log("Value: " + value);
            var cell = row.append('td');
            cell.text(Object.values(value)[0]);
        });
    // });
});
