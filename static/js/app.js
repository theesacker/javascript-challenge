// from data.js
var tableData = data;

// Create variable to select form
var form = d3.select("#datetime");

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
    console.log(inputElement);
    console.log(inputValue);

};