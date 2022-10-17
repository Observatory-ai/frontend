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

interface IPieChartData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  data: IPieChartDataCategory[];
}

interface IPieChartDataCategory {
  id: string;
  label: string;
  value: number;
}

export function chartToBuild(chartToCreateData: any, oldChart: any) {
  console.log(chartToCreateData);
  console.log(oldChart);
  if (oldChart.chartType == 'Bar' && chartToCreateData.chartType == 'Line') {
    return barToLine(oldChart);
  } else if (oldChart.chartType == 'Line' && chartToCreateData.chartType == 'Bar') {
    return lineToBar(oldChart);
  } else if (oldChart.chartType == 'Bar' && chartToCreateData.chartType == 'Pie') {
    console.log('entered bar to pie');
    return barToPie(oldChart);
  } else if (oldChart.chartType == 'Pie' && chartToCreateData.chartType == 'Bar') {
    console.log('entered pie to bar');
    return pieToBar(oldChart);
  }
}

// TODO: add option to create multiple Series
export function lineToBar(chart_data: any) {
  const bar_data = {} as IBarChartData;
  bar_data.chartType = 'Bar';
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
  const line_data = {} as ILineChartData;
  line_data['chartType'] = 'Line';
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

export function barToPie(chart_data: any) {
  const pie_data = {} as IPieChartData;
  pie_data.chartType = 'Pie';
  pie_data.x_axis = chart_data.x_axis;
  pie_data.y_axis = chart_data.y_axis;
  pie_data.data = [] as IPieChartDataCategory[];
  chart_data.data.forEach((chart_value: any) => {
    const keys = Object.keys(chart_value);
    pie_data.data.push({ id: chart_value[keys[0]], label: chart_value[keys[0]], value: chart_value[keys[1]] });
  });
  return pie_data;
}

export function pieToBar(chart_data: any) {
  const bar_data = {} as IBarChartData;
  bar_data.chartType = 'Bar';
  bar_data.x_axis = chart_data.x_axis;
  bar_data.y_axis = chart_data.y_axis;
  bar_data.data = [] as IBarChartDataSeriesValues[];
  chart_data.data.forEach((chart_value: any) => {
    bar_data.data.push({ x: chart_value.id, y: chart_value.value });
  });
  const jsonBarString = JSON.stringify(bar_data)
    .replaceAll('"x":', '"' + bar_data.x_axis + '":')
    .replaceAll('"y":', '"' + bar_data.y_axis + '":');
  const jsonBarObject = JSON.parse(jsonBarString);
  return jsonBarObject;
}
