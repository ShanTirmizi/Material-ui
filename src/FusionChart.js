import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './App.css';

const dataSource = {
    chart: {
      caption: "Split of visitors by Channels & Gender",
      placevaluesinside: "1",
      showvalues: "0",
      plottooltext: "<b>$dataValue</b>  $seriesName visitors",
      theme: "fusion",
    //   canvasBgColor: '#FFFFFF',
    // plotGradientColor: '#FFFFFF',
    // patternAlpha: false,
    // patternDensity: 0,
    //   yAxisValueBorderRadius: '100',
    //   xAxisValueBorderRadius: '100',
    //   tooltipborderradius: '100',
    //   xAxisNameBorderRadius :'100',
    // borderRadius : 100,

    //   valueBorderRadius: '100',
      // useRoundEdges: true,
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
    }
    },
    categories: [
      { 

        category: [
          {
            label: "Organic"
          },
          {
            label: "Offline Stores"
          },
          {
            label: "Email Campaigns"
          },
          {
            label: "Social Events"
          },
          {
            label: "Paid Channels"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Male",
        data: [
          {
            value: "17000"
          },
          {
            value: "19500"
          },
          {
            value: "12500"
          },
          {
            value: "14500"
          },
          {
            value: "17500"
          }
        ]
      },
    //   {
    //     seriesname: "Female",
    //     data: [
    //       {
    //         value: "25400"
    //       },
    //       {
    //         value: "29800"
    //       },
    //       {
    //         value: "21800"
    //       },
    //       {
    //         value: "19500"
    //       },
    //       {
    //         value: "21200"
    //       }
    //     ]
    //   }
    ]
  };
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const chartConfigs = {
  type: 'stackedbar2d',
  // width: 600,
  height: 350,
  dataFormat: 'json',
  dataSource: dataSource
};

class FusionChart extends Component {
  render () {
    return (
    <div id='chart'>
        <ReactFC  {...chartConfigs} />
    </div>
    )

  }
}

export default FusionChart
