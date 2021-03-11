// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/data.json").then((incomingData) => {
  function filterBookRatings(books) {
    return books.rating > 3.5;
  }

  // Use filter() to pass the function as its argument
  var filteredBooks = incomingData.filter(filterBookRatings);

  //  Check to make sure your are filtering your movies.
  console.log(filteredBooks);

  // Use the map method with the arrow function to return all the filtered movie titles.
  var titles = filteredBooks.map(books =>  books.title);

  // Use the map method with the arrow function to return all the filtered movie metascores.
  var ratings = filteredBooks.map(books => books.rating);

  // Check your filtered metascores.
  console.log(ratings);

  // Create your trace.
  var trace = {
    x: titles,
    y: ratings,
    type: "bar"
  };

  // Create the data array for our plot
  var data = [trace];

  // Define the plot layout
  var layout = {
    title: "My favorite books and their ratings.",
    xaxis: { title: "Book Title" },
    yaxis: { title: "GoodReads Rating"}
  };

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data, layout);
});
