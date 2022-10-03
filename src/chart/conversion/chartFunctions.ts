interface IChartData {
  chart_type: string;
  x_axis: string;
  y_axis: string;
  data: IChartDataSeriesObject[];
}

interface IChartDataSeriesObject {
  id: string;
  data: IChartDataSeriesValues[];
}

interface IChartDataSeriesValues {
  x: string;
  y: number;
}

export function chartToBuild(data: any, chart_data: any) {
  if (data.chartType == 'line') {
    barToLine(data, chart_data);
  }
}

export function barToLine(data: any, chart_data: any) {
  const line_data = {} as IChartData;
  line_data['chart_type'] = 'line';
  line_data['x_axis'] = chart_data.x_axis;
  line_data['y_axis'] = chart_data.y_axis;
  line_data['data'] = [] as IChartDataSeriesObject[];
  line_data['data'].push({ id: 'Series 1', data: [] as IChartDataSeriesValues[] });
  chart_data.data.forEach((chart_value: any) => {
    const keys = Object.keys(chart_value);
    line_data['data'][0]['data'].push({ x: chart_value[keys[0]], y: chart_value[keys[1]] });
  });
  return line_data;
}
