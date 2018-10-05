// var color = d3.scaleOrdinal(d3.schemeCategory20);
var diameter = 500; //max size of the bubbles


	var width = 800,
		height = 600;

	var canvas = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

	


d3.json('../Data/DT/dt_counts.json', function(data){

	// var map = data.map(function(i){ return i.location_data; })	

	
	var bubble = d3.pack(data)
		.size([width, height - 50])
		.padding(10);


	// canvas.selectAll("circle")
	// .data(data)
	// .enter()
	// 	.append("circle")
	// 	.attr("r", function (d){ return d; })
	// 	.attr("cx", )
	// 	.attr("cy", )



});






// var circle = canvas.append("circle")
// .attr("cx", 250)
// .attr("cy", 250)
// .attr("r", 50)
// .attr("border", "blue")
// .attr("border-width", 20)
