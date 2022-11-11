import * as charts from '../../common/components/Chart';
import Layout from '../../common/layout/Layout';

import AddIcon from '@mui/icons-material/Add';
import { Fab, Tooltip } from '@mui/material';
import contributionsData from '../../data/contributions.json';
import lineData from '../../data/line_chart.json';
import barData from '../../data/meeting_hour_by_day.json';
import pieData from '../../data/pie_chart.json';
import scatterData from '../../data/scatter_plot.json';
// import data from '../../data/BarChartData.json';
import { useState } from 'react';
import { useGoogleCalendarEventsLazyQuery } from '../../generated/graphql';

interface GoogleCalendarData {
  summary: string;
  start: GoogleCalendarTime;
  end: GoogleCalendarTime;
}

interface GoogleCalendarTime {
  dateTime: string;
  timeZone: string;
}

interface GeneralSingleSeriesBarData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  data: BarDataSeries[];
}

interface BarDataSeries {
  x: any;
  y: number;
}

function buildBarData(dataToChange: GoogleCalendarData[]) {
  const data: GeneralSingleSeriesBarData = {
    chartType: 'Bar',
    x_axis: 'date',
    y_axis: 'hours',
    data: [] as BarDataSeries[],
  };

  const meetings = new Map<string, number>();
  dataToChange.forEach((event) => {
    const startDate = new Date(event.start.dateTime);
    const day = startDate.toLocaleDateString('en-US', { weekday: 'long' });
    const duration = (new Date(event.end.dateTime).getTime() - startDate.getTime()) / 1000 / 60 / 60;

    if (meetings.has(day.toString())) {
      meetings.set(day.toString(), meetings.get(day.toString())! + duration);
    } else {
      meetings.set(day.toString(), duration);
    }
  });

  meetings.forEach((value, key) => {
    data.data.push({
      x: key,
      y: value,
    });
  });

  const jsonBarString = JSON.stringify(data)
    .replaceAll('"x":', '"' + data.x_axis + '":')
    .replaceAll('"y":', '"' + data.y_axis + '":');
  const jsonBarObject = JSON.parse(jsonBarString);

  return jsonBarObject;
}

const DashboardPage = () => {
  const [getEvents, { loading, error, data: eventsData }] = useGoogleCalendarEventsLazyQuery();

  const [newData, setNewData] = useState(barData);

  const handleButtonClick = () => {
    getEvents();
    console.log('eventsData', eventsData);
    const dataToChange = eventsData?.googleCalendarEvents?.items?.map((event) => {
      return {
        summary: event?.summary?.toString(),
        start: { dateTime: event?.start?.dateTime?.toString(), timeZone: event?.start?.timeZone?.toString() },
        end: { dateTime: event?.end?.dateTime?.toString(), timeZone: event?.end?.timeZone?.toString() },
      } as GoogleCalendarData;
    });
    console.log(dataToChange);

    const new_data = buildBarData(dataToChange!);
    console.log(new_data);

    setNewData(new_data);
  };

  return (
    <Layout>
      <div style={{ height: '500px' }}>
        <charts.BarChart data={newData} />
      </div>
      <div style={{ height: '300px' }}>
        <charts.CalendarChart data={contributionsData} />
      </div>
      <div style={{ height: '300px' }}>
        <charts.LineChart data={lineData} />
      </div>
      <div style={{ height: '300px' }}>
        <charts.PieChart data={pieData} />
      </div>
      <div style={{ height: '500px' }}>
        <charts.ScatterPlotChart data={scatterData} />
      </div>
      <Tooltip title="Create chart">
        <Fab onClick={handleButtonClick} aria-label="add chart" color="secondary" sx={{ position: 'absolute', bottom: 32, right: 32 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </Layout>
  );
};

export default DashboardPage;
