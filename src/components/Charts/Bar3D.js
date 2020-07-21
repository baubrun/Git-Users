import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const Bar3D = ({data}) => {
  const chartConfigs = {
    type: "Bar3d", 
    width: "100%", 
    height: "400", 
    dataFormat: "json", 
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Repos",
        yAxisName: "Forks",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px"
      },
      data,
    }
  };
  
  return <ReactFC {...chartConfigs} />
}


export default Bar3D