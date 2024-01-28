import React, { useEffect } from 'react';
import * as d3 from 'd3';
import getCostData from "../../utils/getCostData.js"

//https://d3-graph-gallery.com/graph/boxplot_basic.html

export default function BoxPlot(props) {
    useEffect(() => {
        const costData = getCostData(props.stateCode, props.procedureId)
        if (costData) {
            const svgContainer = d3.select("#box-plot-viz");
            svgContainer.selectAll("*").remove();

            const rangeDiff = costData.percent50 - costData.percent25;
            const lineLength = (costData.percent75 + rangeDiff) * 2;

            const lineHeight = 100;
            const svg = d3.select("#box-plot-viz")
                .append("svg")
                .attr("width", 20000)
                .attr("height", 200)
                .append("g")

            svg.append("line")
                .attr("x1", 0)
                .attr("x2", lineLength)
                .attr("y1", lineHeight)
                .attr("y2", lineHeight)
                .attr("stroke", "silver")
                .style("stroke-width", 5)

            svg.append("line")
                .attr("x1", costData.percent25 * 2)
                .attr("x2", costData.percent75 * 2)
                .attr("y1", lineHeight)
                .attr("y2", lineHeight)
                // http://www.javascripter.net/faq/colornam.htm
                .attr("stroke", "lightskyblue")
                .style("stroke-width", 5)

            //25 quartile
            svg.append("circle")
                .attr('cx', Math.round(costData.percent25) * 2)
                .attr('cy', lineHeight)
                .attr('r', 8)
                .attr('fill', 'navy');

            svg.append("text")
                .attr("x", costData.percent25 * 2 - 25)
                .attr("y", 130)
                .attr("dy", "5px")
                .style("font-size", "25px")
                .text("$" + Math.round(costData.percent25));

            svg.append("text")
                .attr("x", costData.percent25 * 2 - 18)
                .attr("y", 150)
                .attr("dy", "5px")
                .text("Low");

            //50 quartile
            svg.append("circle")
                .attr('cx', Math.round(costData.percent50) * 2)
                .attr('cy', lineHeight)
                .attr('r', 8)
                .attr('fill', 'navy');

            svg.append("text")
                .attr("x", costData.percent50 * 2 - 25)
                .attr("y", 55)
                .attr("dy", "5px")
                .style("font-size", "25px")
                .text("$" + Math.round(costData.percent50));

            svg.append("text")
                .attr("x", costData.percent50 * 2 - 25)
                .attr("y", 75)
                .attr("dy", "5px")
                .text("Average");

            //75 quartile
            svg.append("circle")
                .attr('cx', Math.round(costData.percent75) * 2)
                .attr('cy', lineHeight)
                .attr('r', 8)
                .attr('fill', 'navy');

            svg.append("text")
                .attr("x", costData.percent75 * 2 - 35)
                .attr("y", 125)
                .attr("dy", "5px")
                .style("font-size", "25px")
                .text("$" + Math.round(costData.percent75));

            svg.append("text")
                .attr("x", costData.percent75 * 2 - 20)
                .attr("y", 140)
                .attr("dy", "5px")
                .text("High");

        }
    }, []);

    return (
        <div id="box-plot-viz" />
    );
}





