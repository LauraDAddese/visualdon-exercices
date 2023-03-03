import {select} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js!


let svg1 = select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .style('background-color', "lightgrey")

let circle1 = svg1.append("circle")
.join(enter => enter
	.attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 40)
    .style("fill", "purple"),
	update => update
	.attr("cx", 100))
    .attr("cy", 50)
    .attr("r", 40)
    .style("fill", "purple");
	

	let circle2 = svg1.append("circle")
    .join(enter => enter
		.attr("cx", 150)
		.attr("cy", 150)
		.attr("r", 40)
		.style("fill", "purple"),
		update => update
		.attr("cx", 200))
		.attr("cy", 150)
		.attr("r", 40)
		.style("fill", "blue");

	let circle3 = svg1.append("circle")
	.join(enter => enter
	.attr("cx", 250)
	
    .attr("cy", 250)
    .attr("r", 40)
    .style("fill", "purple"),
	update => update
	.attr("cx", 250))
    .attr("cy", 250)
    .attr("r", 40)
    .style("fill", "purple");
	


	