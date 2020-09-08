// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// update each of the table's cells with the
// UFO data report values (date/time, city, state, country, shape, and comment)
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);

      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Use a date form in your HTML document and write JavaScript code that will listen for events and 
// search through the date/time column to find rows that match user input.


// Get a reference to the id for the filter button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input element and get the datetime node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);


    filteredData.forEach(function(selections) {

        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
    });
