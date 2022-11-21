import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveCalendar } from '@nivo/calendar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

type ChartProps = {
  data: any;
};

export function returnChart(chartType: string, data: ChartProps) {
  switch (chartType) {
    case 'Bar':
      return <BarChart data={data} />;
    case 'Calendar':
      return <CalendarChart data={data} />;
    case 'Line':
      return <LineChart data={data} />;
    case 'Pie':
      return <PieChart data={data} />;
    case 'Scatter':
      return <ScatterPlotChart data={data} />;
    default:
      return <BarChart data={data} />;
  }
}

export const BarChart = ({ data }: ChartProps) => (
  <ResponsiveBar
    data={data.data}
    keys={[data.y_axis]}
    indexBy={data.x_axis}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.x_axis,
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.y_axis,
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Title"
  />
);

export const CalendarChart = ({ data }: ChartProps) => (
  <ResponsiveCalendar
    data={data.data}
    from={data.start_date}
    to={data.end_date}
    emptyColor="#eeeeee"
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: 'right-to-left',
      },
    ]}
  />
);

export const LineChart = ({ data }: ChartProps) => (
  <ResponsiveLine
    data={data.data}
    curve="monotoneX"
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.x_axis,
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.y_axis,
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export const PieChart = ({ data }: ChartProps) => (
  <ResponsivePie
    data={data.data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);

export const ScatterPlotChart = ({ data }: ChartProps) => (
  <ResponsiveScatterPlot
    data={data.data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: 'linear', min: 0, max: 'auto' }}
    xFormat=">-.2f"
    yScale={{ type: 'linear', min: 0, max: 'auto' }}
    yFormat=">-.2f"
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.x_axis,
      legendPosition: 'middle',
      legendOffset: 46,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: data.y_axis,
      legendPosition: 'middle',
      legendOffset: -60,
    }}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: 'left-to-right',
        symbolSize: 12,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
