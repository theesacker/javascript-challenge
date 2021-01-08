// from data.js
var tableData = data;

// Create variable to select form
var form = d3.select("#alien-form");

// Create variable to select button
var button = d3.select("#filter-btn");

// Create event handlers

form.on("submit", runEnter);
button.on("click", runEnter);

// To complete the event handler function for the form
function runEnter(){

// To prevent the page from refreshing:
    d3.event.preventDefault();

    // Select Raw HTML node:
    var inputElement = d3.select("#datetime");

    // Get value of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputElement);
    // console.log(inputValue);

    var filteredSights = tableData.filter(alien => alien.datetime === inputValue);
    console.log(filteredSights)

    // Create variables for table data
    // var alienTime = filteredSights.map(alien => alien.datetime);
    // var alienCity = filteredSights.map(alien => alien.city);
    // var alienState = filteredSights.map(alien => alien.state);
    // var alienCountry = filteredSights.map(alien => alien.country);
    // var alienShape = filteredSights.map(alien => alien.shape);
    // var alienDuration = filteredSights.map(alien => alien.duration);
    // var alienComments = filteredSights.map(alien => alien.comments);
    data.forEach(function(filteredSights){
    console.log(filteredSights);
    var dataRow = tbody.append("tr");

    Object.entries(filteredSights).forEach(function([key, value]){
        console.log(key, value);
        var dataCell = row.append("td");
        dataCell.text(value);
        });
    });
    

    // //locate and append table in HTML
    // var alTable = d3.select("#ufo-table");
    // alTable.append("tr").text(alienTime);
    // alTable.append("tr").text(alienCity);
};