interface ILineChartData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  data: ILineChartDataSeriesObject[];
}

interface ILineChartDataSeriesObject {
  id: string;
  data: ILineChartDataSeriesValues[];
}

interface ILineChartDataSeriesValues {
  x: string;
  y: number;
}

interface IBarChartData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  data: IBarChartDataSeriesValues[];
}

interface IBarChartDataSeriesValues {
  x: string;
  y: number;
}

export function chartToBuild(chartToCreateData: any, oldChart: any) {
  console.log('inside chartToBuild');
  console.log(chartToCreateData);
  console.log(oldChart);
  if (oldChart.chartType == 'bar' && chartToCreateData.chartType == 'line') {
    console.log('going to barToLine');
    return barToLine(oldChart);
  } else if (oldChart.chartType == 'line' && chartToCreateData.chartType == 'bar') {
    console.log('going to lineToBar');
    return lineToBar(oldChart);
  }
}

// TODO: add option to create multiple Series
export function lineToBar(chart_data: any) {
  const bar_data = {} as IBarChartData;
  bar_data.chartType = 'bar';
  bar_data.x_axis = chart_data.x_axis;
  bar_data.y_axis = chart_data.y_axis;
  bar_data.data = [] as IBarChartDataSeriesValues[];
  if (chart_data.data.length == 1) {
    chart_data.data[0].data.forEach((chartValue: any) => {
      const keys = Object.keys(chartValue);
      bar_data.data.push({ x: chartValue[keys[0]], y: chartValue[keys[1]] });
    });
  }
  // TODO: add option to create multiple Series
  else if (chart_data.data.length > 1) {
    console.log('Multiple series not supported yet');
  }
  const jsonBarString = JSON.stringify(bar_data)
    .replaceAll('"x":', '"' + bar_data.x_axis + '":')
    .replaceAll('"y":', '"' + bar_data.y_axis + '":');
  const jsonBarObject = JSON.parse(jsonBarString);
  console.log(jsonBarObject);
  return jsonBarObject;
}

// TODO: add option to create multiple Series
export function barToLine(chart_data: any) {
  console.log('inside barToLine');
  const line_data = {} as ILineChartData;
  line_data['chartType'] = 'line';
  line_data['x_axis'] = chart_data.x_axis;
  line_data['y_axis'] = chart_data.y_axis;
  line_data['data'] = [] as ILineChartDataSeriesObject[];
  line_data['data'].push({ id: 'Series 1', data: [] as ILineChartDataSeriesValues[] });
  chart_data.data.forEach((chart_value: any) => {
    const keys = Object.keys(chart_value);
    line_data['data'][0]['data'].push({ x: chart_value[keys[0]], y: chart_value[keys[1]] });
  });
  return line_data;
}
