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
    var tbody = d3.select("tbody");
    data.forEach(function(filteredSights){
    console.log(filteredSights);
    var dataRow = tbody.append("tr");

    Object.entries(filteredSights).forEach(function([key, value]){
        console.log(key, value);
        var dataCell = dataRow.append("td");
        dataCell.text(value);
        });
    });
    

    // //locate and append table in HTML
    // var alTable = d3.select("#ufo-table");
    // alTable.append("tr").text(alienTime);
    // alTable.append("tr").text(alienCity);
};