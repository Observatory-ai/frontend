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
import CardGrid from '../../card/CardGrid';
import { DataCardProps } from '../../card/types/DataCardProps';
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
  durationMinutes: number;
  summary: string;
  attendees: GoogleCalendarAttendee[];
}

function buildWeeklyTrendsData(data: GoogleCalendarData[]) {
  const weeklyTrendsData: CalendarEventData[] = [];

  data.forEach((event) => {
    if (typeof event.start.dateTime !== 'undefined') {
      const today = new Date();
      const last30Date = new Date(new Date().setDate(today.getDate() - 30));

      const startDate = new Date(event.start.dateTime);
      if (startDate > last30Date) {
        const endDate = new Date(event.end.dateTime);
        const durationHours = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60;
        const durationMinutes = (endDate.getTime() - startDate.getTime()) / 1000 / 60;

        const eventDate = new Date(event.start.dateTime);
        const lastSunday = new Date(eventDate.setDate(eventDate.getDate() - eventDate.getDay()));
        const upcomingSaturday = new Date(eventDate.setDate(eventDate.getDate() - eventDate.getDay() + 6));
        const dSunday = new String(lastSunday.getDate()).padStart(2, '0');
        const mSunday = String(lastSunday.getMonth() + 1).padStart(2, '0'); //January is 0!
        const ySunday = lastSunday.getFullYear();

        const dSaturday = new String(upcomingSaturday.getDate()).padStart(2, '0');
        const mSaturday = String(upcomingSaturday.getMonth() + 1).padStart(2, '0');
        const ySaturday = upcomingSaturday.getFullYear();

        const week = 'Week: ' + ySunday + '-' + mSunday + '-' + dSunday + ' to ' + ySaturday + '-' + mSaturday + '-' + dSaturday;

        weeklyTrendsData.push({
          week: week,
          weekDay: startDate.toLocaleDateString('en-US', { weekday: 'long' }),
          start: startDate,
          end: endDate,
          durationHours: durationHours,
          durationMinutes: durationMinutes,
          summary: event.summary,
          attendees: event.attendees,
        });
      }
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
    if (event.durationHours < 24) {
      if (event.week === weekToTrack) {
        if (meetings.has(event.weekDay.toString())) {
          meetings.set(event.weekDay.toString(), meetings.get(event.weekDay.toString())! + event.durationHours);
        } else {
          meetings.set(event.weekDay.toString(), event.durationHours);
        }
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

function buildCardInsights(weeklyData: CalendarEventData[]) {
  const timeInMeetings = {} as DataCardProps;
  const timeOutsideMeetings = {} as DataCardProps;
  const clientMeetings = {} as DataCardProps;

  const weekToTrack = weeklyData.at(-1)?.week;
  let sumWeekDurationMinutes = 0;
  let sum30DayDurationMinutes = 0;
  weeklyData.forEach((event) => {
    if (event.durationHours < 24) {
      if (event.week === weekToTrack) {
        sumWeekDurationMinutes += event.durationMinutes;
      }
      sum30DayDurationMinutes += event.durationMinutes;
    }
  });
  console.log(sum30DayDurationMinutes, sumWeekDurationMinutes);

  const weeklyAvg = sumWeekDurationMinutes / 7;
  const TIMString = Math.floor(weeklyAvg / 60) + 'h ' + Math.round(weeklyAvg % 60) + 'm';
  const weeklyTotal = Math.floor(sumWeekDurationMinutes / 60) + 'h ' + (sumWeekDurationMinutes % 60) + 'm';
  const thirtyDayAvg = sum30DayDurationMinutes / 30;
  const TIDString = Math.floor(thirtyDayAvg / 60) + 'h ' + Math.round(thirtyDayAvg % 60) + 'm';

  const percentDiff = Math.round(((weeklyAvg - thirtyDayAvg) / thirtyDayAvg) * 100);

  timeInMeetings.title = 'Time in Meetings';
  timeInMeetings.tooltip = 'Average time spent in meetings per day';
  timeInMeetings.metric = TIMString;
  timeInMeetings.percentDiff = percentDiff > 0 ? '+' + percentDiff.toString() : percentDiff.toString();
  timeInMeetings.weekTotal = weeklyTotal;
  timeInMeetings.avg = TIDString;

  return timeInMeetings;
}

const DashboardPage = () => {
  // const [getEvents, { loading, error, data: eventsData }] = useGoogleCalendarEventsLazyQuery();

  const cardGridData = [
    { title: 'Time in Meetings', tooltip: 'Shows meeting time', metric: '2h 30m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
    { title: 'Time without Meetings', tooltip: 'Shows free time', metric: '1h 30m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
    { title: 'Time with Clients', tooltip: 'Shows meeting time', metric: '1h 3m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
  ];

  const [getWeeklyTrends, { loading: weeklyTrendsLoading, error: weeklyTrendsError, data: weeklyTrendsData }] = useGoogleCalendarWeeklyTrendsQueryLazyQuery();

  const [newData, setNewData] = useState(barData);

  const [newLineData, setNewLineData] = useState(lineData);

  const [newCardInsights, setNewCardInsights] = useState(cardGridData);

  const handleButtonClick = () => {
    getWeeklyTrends();
    console.log('weeklyTrendsData', weeklyTrendsData);

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

    const newCardInsights = buildCardInsights(weeklyTrends!);

    const newCardGridData = [
      newCardInsights,
      { title: 'Time without Meetings', tooltip: 'Shows free time', metric: '1h 30m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
      { title: 'Time with Clients', tooltip: 'Shows meeting time', metric: '1h 3m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
    ];
    setNewCardInsights(newCardGridData);
  };

  return (
    <Layout>
      <CardGrid {...newCardInsights} />
      {/* <DataCard /> */}
      <div style={{ height: '500px' }}>
        <charts.BarChart data={newData} />
      </div>
      <div style={{ height: '300px' }}>
        <charts.CalendarChart data={contributionsData} />
      </div>
      <div style={{ height: '500px' }}>
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
