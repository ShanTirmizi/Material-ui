import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    // caption: "Android Distribution for our app",
    // subcaption: "For all users in 2017",
    showpercentvalues: "1",
    defaultcenterlabel: "70%",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    // plottooltext:
    //   "<b>$percentValue</b> of our Android users are on <b>$label</b>",
    // centerlabel: "# Users: $value",
    theme: "fusion",
    // bgColor: "linear-gradient(104.66deg, #58FFEF -67.5%, #8B6CFF 103.46%)",
    // bgAlpha: "10",
    // chartMargin: "0",
    // canvasPadding: "0"


  },
    // "chart": {
    //     // "bgColor": '#fff',
    //     // "bgAlpha": "50",
    //     // "bgColor": "linear-gradient(104.66deg, #58FFEF -67.5%, #8B6CFF 103.46%)",
    //     // "bgratio": "60,40",
    //     // "bgAlpha": "70,80",
    //     // "bgAngle": "180"

    // },

  data: [
    {
    //   label: "Marshmallow",
      value: "17904"
    }
  ]
};

const CardBottomG = () => {
    return (
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        // height='250px'
        // height='1--%'
        dataFormat="JSON"
        dataSource={dataSource}
        style={{background: 'linear-gradient(104.66deg, #58FFEF -67.5%, #8B6CFF 103.46%)', borderRadius: '15px'}}
      />
    );
}

// fusioncharts-container

export default CardBottomG
