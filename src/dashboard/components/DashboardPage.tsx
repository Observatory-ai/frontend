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
import { useGoogleCalendarWeeklyTrendsQueryLazyQuery } from '../../generated/graphql';

interface GoogleCalendarData {
  summary: string;
  start: GoogleCalendarTime;
  end: GoogleCalendarTime;
  organizer: GoogleCalendarOrganizer;
  attendees: GoogleCalendarAttendee[];
}

interface GoogleCalendarOrganizer {
  email: string;
}

interface GoogleCalendarAttendee {
  id: string;
  email: string;
  displayName: string;
  organizer: boolean;
  self: boolean;
  resource: boolean;
  optional: boolean;
  responseStatus: string;
  comment: string;
  additionalGuests: number;
}

interface GoogleCalendarTime {
  dateTime: string;
  timeZone: string;
}

interface SingleSeriesBarData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  data: BarDataSeries[];
}

interface BarDataSeries {
  x: any;
  y: number;
}

interface LineData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  data: LineDataSeries[];
}

interface LineDataSeries {
  id: string;
  data: { x: string; y: number }[];
}

interface CalendarEventData {
  week: string;
  weekDay: string;
  start: Date;
  end: Date;
  durationHours: number;
  summary: string;
  attendees: GoogleCalendarAttendee[];
}

function buildWeeklyTrendsData(data: GoogleCalendarData[]) {
  const weeklyTrendsData: CalendarEventData[] = [];

  data.forEach((event) => {
    if (typeof event.start.dateTime !== 'undefined') {
      const startDate = new Date(event.start.dateTime);
      const endDate = new Date(event.end.dateTime);
      const durationHours = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60;

      const eventDate = new Date(event.start.dateTime);
      const lastSunday = new Date(eventDate.setDate(eventDate.getDate() - eventDate.getDay()));
      const upcomingSaturday = new Date(eventDate.setDate(eventDate.getDate() - eventDate.getDay() + 6));
      const dSunday = new String(lastSunday.getDate()).padStart(2, '0');
      const mSunday = String(lastSunday.getMonth() + 1).padStart(2, '0'); //January is 0!
      const ySunday = lastSunday.getFullYear();

      const dSaturday = new String(upcomingSaturday.getDate()).padStart(2, '0');
      const mSaturday = String(upcomingSaturday.getMonth() + 1).padStart(2, '0'); //January is 0!
      const ySaturday = upcomingSaturday.getFullYear();

      const week = 'Week: ' + ySunday + '-' + mSunday + '-' + dSunday + ' to ' + ySaturday + '-' + mSaturday + '-' + dSaturday;

      weeklyTrendsData.push({
        week: week,
        weekDay: startDate.toLocaleDateString('en-US', { weekday: 'long' }),
        start: startDate,
        end: endDate,
        durationHours: durationHours,
        summary: event.summary,
        attendees: event.attendees,
      });
    }
  });

  return weeklyTrendsData;
}

function buildLineData(weeklyData: CalendarEventData[]) {
  const data: LineData = {
    chartType: 'Line',
    x_axis: 'date',
    y_axis: 'hours',
    data: [] as LineDataSeries[],
  };

  let weeksMeetings: Map<string, number> = new Map([
    ['Sunday', 0],
    ['Monday', 0],
    ['Tuesday', 0],
    ['Wednesday', 0],
    ['Thursday', 0],
    ['Friday', 0],
    ['Saturday', 0],
  ]);
  let currentWeek = weeklyData.at(0)!.week;
  weeklyData.forEach((event) => {
    if (event.week === currentWeek) {
      weeksMeetings.set(event.weekDay.toString(), weeksMeetings.get(event.weekDay.toString())! + event.durationHours);
    } else {
      const xY = [] as { x: string; y: number }[];
      weeksMeetings.forEach((value, key) => {
        xY.push({ x: key, y: value });
      });
      data.data.push({ id: currentWeek, data: xY });
      currentWeek = event.week;
      weeksMeetings = new Map([
        ['Sunday', 0],
        ['Monday', 0],
        ['Tuesday', 0],
        ['Wednesday', 0],
        ['Thursday', 0],
        ['Friday', 0],
        ['Saturday', 0],
      ]);
      weeksMeetings.set(event.weekDay.toString(), event.durationHours);
    }
  });

  return data;
}

function buildBarData(weeklyData: CalendarEventData[]) {
  const data: SingleSeriesBarData = {
    chartType: 'Bar',
    x_axis: 'date',
    y_axis: 'hours',
    data: [] as BarDataSeries[],
  };

  const meetings = new Map<string, number>();
  const weekToTrack = weeklyData.at(-1)?.week;
  weeklyData.forEach((event) => {
    if (event.week === weekToTrack) {
      if (meetings.has(event.weekDay.toString())) {
        meetings.set(event.weekDay.toString(), meetings.get(event.weekDay.toString())! + event.durationHours);
      } else {
        meetings.set(event.weekDay.toString(), event.durationHours);
      }
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
  // const [getEvents, { loading, error, data: eventsData }] = useGoogleCalendarEventsLazyQuery();

  const [getWeeklyTrends, { loading: weeklyTrendsLoading, error: weeklyTrendsError, data: weeklyTrendsData }] = useGoogleCalendarWeeklyTrendsQueryLazyQuery();

  const [newData, setNewData] = useState(barData);

  const [newLineData, setNewLineData] = useState(lineData);

  const handleButtonClick = () => {
    getWeeklyTrends();

    const dataToChange = weeklyTrendsData?.googleCalendarEvents?.items?.map((event) => {
      return {
        summary: event?.summary?.toString(),
        start: { dateTime: event?.start?.dateTime?.toString(), timeZone: event?.start?.timeZone?.toString() },
        end: { dateTime: event?.end?.dateTime?.toString(), timeZone: event?.end?.timeZone?.toString() },
        organizer: { email: event?.organizer?.email?.toString() },
        attendees: event?.attendees?.map((attendee) => {
          return {
            email: attendee?.email?.toString(),
            displayName: attendee?.displayName?.toString(),
            organizer: attendee?.organizer,
            self: attendee?.self,
          } as GoogleCalendarAttendee;
        }, []),
      } as GoogleCalendarData;
    });

    const weeklyTrends = buildWeeklyTrendsData(dataToChange!);

    const newData = buildBarData(weeklyTrends!);
    setNewData(newData);

    const newLineData = buildLineData(weeklyTrends!);
    setNewLineData(newLineData);
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
        <charts.LineChart data={newLineData} />
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
