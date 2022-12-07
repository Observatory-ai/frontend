interface ILineChartData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  seriesType: string;
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
  seriesType: string;
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
  seriesType: string;
  data: IPieChartDataCategory[];
}

interface IPieChartDataCategory {
  id: string;
  label: string;
  value: number;
}

interface IRadarChartData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  seriesType: string;
  data: IRadarChartDataSeriesObject[];
}

interface IRadarChartDataSeriesObject {
  id: string;
  value: number;
}

interface IRadarChartDataSeriesValues {
  x: string;
  y: number;
}

export function chartToBuild(chartToCreateData: any, oldChart: any) {
  if (chartToCreateData.chartType === oldChart.chartType) {
    return oldChart;
  }

  if (oldChart.chartType == 'Bar' && chartToCreateData.chartType == 'Line') {
    return barToLine(oldChart);
  } else if (oldChart.chartType == 'Line' && chartToCreateData.chartType == 'Bar') {
    return lineToBar(oldChart);
  } else if (oldChart.chartType == 'Bar' && chartToCreateData.chartType == 'Pie') {
    return barToPie(oldChart);
  } else if (oldChart.chartType == 'Pie' && chartToCreateData.chartType == 'Bar') {
    return pieToBar(oldChart);
  } else if (oldChart.chartType == 'Line' && chartToCreateData.chartType == 'Pie') {
    return lineToPie(oldChart);
  } else if (oldChart.chartType == 'Pie' && chartToCreateData.chartType == 'Line') {
    return pieToLine(oldChart);
  } else if (oldChart.chartType == 'Pie' && chartToCreateData.chartType == 'Radar') {
    return pieToRadar(oldChart);
  } else if (oldChart.chartType == 'Radar' && chartToCreateData.chartType == 'Pie') {
    return radarToPie(oldChart);
  } else if (oldChart.chartType == 'Radar' && chartToCreateData.chartType == 'Bar') {
    return radarToBar(oldChart);
  } else if (oldChart.chartType == 'Bar' && chartToCreateData.chartType == 'Radar') {
    return barToRadar(oldChart);
  } else if (oldChart.chartType == 'Radar' && chartToCreateData.chartType == 'Line') {
    return radarToLine(oldChart);
  } else if (oldChart.chartType == 'Line' && chartToCreateData.chartType == 'Radar') {
    return lineToRadar(oldChart);
  }
}

// TODO: add option to create multiple Series
export function lineToBar(chart_data: any) {
  const bar_data = {} as IBarChartData;
  bar_data.chartType = 'Bar';
  bar_data.x_axis = chart_data.x_axis;
  bar_data.y_axis = chart_data.y_axis;
  bar_data.seriesType = chart_data.seriesType;
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
  return jsonBarObject;
}

// TODO: add option to create multiple Series
export function barToLine(chart_data: any) {
  const line_data = {} as ILineChartData;
  line_data['chartType'] = 'Line';
  line_data['x_axis'] = chart_data.x_axis;
  line_data['y_axis'] = chart_data.y_axis;
  line_data['seriesType'] = chart_data.seriesType;
  line_data['data'] = [] as ILineChartDataSeriesObject[];
  line_data['data'].push({ id: 'Series 1', data: [] as ILineChartDataSeriesValues[] });
  chart_data.data.forEach((chart_value: any) => {
    const keys = Object.keys(chart_value);
    line_data['data'][0]['data'].push({ x: chart_value[keys[0]], y: chart_value[keys[1]] });
  });
  return line_data;
}

export function lineToPie(chart_data: any) {
  const barData = lineToBar(chart_data);
  return barToPie(barData);
}

export function pieToLine(chart_data: any) {
  const barData = pieToBar(chart_data);
  return barToLine(barData);
}

export function barToPie(chart_data: any) {
  const pie_data = {} as IPieChartData;
  pie_data.chartType = 'Pie';
  pie_data.x_axis = chart_data.x_axis;
  pie_data.y_axis = chart_data.y_axis;
  pie_data.seriesType = chart_data.seriesType;
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
  bar_data.seriesType = chart_data.seriesType;
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

export function pieToRadar(chart_data: any) {
  const radar_data = {} as IRadarChartData;
  radar_data.chartType = 'Radar';
  radar_data.x_axis = chart_data.x_axis;
  radar_data.y_axis = chart_data.y_axis;
  radar_data.seriesType = chart_data.seriesType;
  radar_data.data = [] as IRadarChartDataSeriesObject[];
  chart_data.data.forEach((chart_value: any) => {
    radar_data.data.push({ id: chart_value.id, value: chart_value.value });
  });

  const jsonBarString = JSON.stringify(radar_data)
    .replaceAll('"id":', '"' + radar_data.x_axis + '":')
    .replaceAll('"value":', '"' + radar_data.y_axis + '":');
  const jsonBarObject = JSON.parse(jsonBarString);
  return jsonBarObject;
}

export function radarToPie(chart_data: any) {
  const pie_data = {} as IPieChartData;
  pie_data.chartType = 'Pie';
  pie_data.x_axis = chart_data.x_axis;
  pie_data.y_axis = chart_data.y_axis;
  pie_data.seriesType = chart_data.seriesType;
  pie_data.data = [] as IPieChartDataCategory[];
  chart_data.data.forEach((chart_value: any) => {
    const keys = Object.keys(chart_value);
    pie_data.data.push({ id: chart_value[keys[0]], label: chart_value[keys[0]], value: chart_value[keys[1]] });
  });
  return pie_data;
}

export function radarToLine(chart_data: any) {
  const pieData = radarToPie(chart_data);
  return pieToLine(pieData);
}

export function lineToRadar(chart_data: any) {
  const pieData = lineToPie(chart_data);
  return pieToRadar(pieData);
}

export function radarToBar(chart_data: any) {
  const pieData = radarToPie(chart_data);
  return pieToBar(pieData);
}

export function barToRadar(chart_data: any) {
  const pieData = barToPie(chart_data);
  return pieToRadar(pieData);
}
