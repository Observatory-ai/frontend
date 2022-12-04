import * as charts from '../../common/components/Chart';
import Layout from '../../common/layout/Layout';

import InfoIcon from '@mui/icons-material/Info';
import { Box, Card, Grid, Skeleton, Tooltip, Typography } from '@mui/material';
import lineData from '../../data/line_chart.json';
import barData from '../../data/meeting_hour_by_day.json';
import pieData from '../../data/pie_chart.json';
// import data from '../../data/BarChartData.json';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authentication/contexts/AuthContext';
import CardGrid from '../../card/CardGrid';
import { DataCardProps } from '../../card/types/DataCardProps';
import { useGoogleCalendarWeeklyTrendsQueryQuery } from '../../generated/graphql';

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

interface PieData {
  chartType: string;
  x_axis: string;
  y_axis: string;
  data: PieDataCategory[];
}

interface PieDataCategory {
  id: string;
  label: string;
  value: number;
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

interface PieClientTeamData {
  clientMap: Map<string, number>;
  teamMap: Map<string, number>;
  totalClientHours: number;
  totalTeamHours: number;
}

function buildWeeklyTrendsData(data: GoogleCalendarData[]) {
  const today = new Date();
  const startOfTheWeek = new Date(new Date().setDate(today.getDate() - 30));
  const endOfTheWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));

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
    if (event.durationHours < 24) {
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
    }

    if (event === weeklyData.at(-1)) {
      const xY = [] as { x: string; y: number }[];
      weeksMeetings.forEach((value, key) => {
        xY.push({ x: key, y: value });
      });
      data.data.push({ id: currentWeek, data: xY });
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
  const meetings: Map<string, number> = new Map([
    ['Sunday', 0],
    ['Monday', 0],
    ['Tuesday', 0],
    ['Wednesday', 0],
    ['Thursday', 0],
    ['Friday', 0],
    ['Saturday', 0],
  ]);
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

function buildClientPieData(teamData: PieClientTeamData) {
  const data: PieData = {
    chartType: 'Pie',
    x_axis: 'client',
    y_axis: 'hours',
    data: [] as PieDataCategory[],
  };

  teamData.clientMap.forEach((value: number, key: string) => {
    data.data.push({
      id: key,
      label: key,
      value: value,
    });
  });

  return data;
}

function buildTeamPieData(teamData: PieClientTeamData) {
  const data: PieData = {
    chartType: 'Pie',
    x_axis: 'team',
    y_axis: 'hours',
    data: [] as PieDataCategory[],
  };

  teamData.teamMap.forEach((value: number, key: string) => {
    data.data.push({
      id: key,
      label: key,
      value: value,
    });
  });

  return data;
}

function buildVsPieData(teamData: PieClientTeamData) {
  const data: PieData = {
    chartType: 'Pie',
    x_axis: 'Type of Attendee',
    y_axis: 'Hours spent',
    data: [] as PieDataCategory[],
  };

  data.data.push(
    {
      id: 'Client',
      label: 'Client',
      value: teamData.totalClientHours,
    },
    {
      id: 'Team',
      label: 'Team',
      value: teamData.totalTeamHours,
    }
  );

  return data;
}

function meetingWithAttendeeData(weeklyData: CalendarEventData[], userEmail: string) {
  // get user email domain
  const userDomain = userEmail.split('@')[1];

  const clientMap = new Map<string, number>();
  const teamMap = new Map<string, number>();

  let totalClientHours = 0;
  let totalTeamHours = 0;

  const weekToTrack = weeklyData.at(-1)?.week;

  weeklyData.forEach((event) => {
    if (event.durationHours < 24 && event.week === weekToTrack) {
      if (event.attendees?.length > 0) {
        event.attendees?.forEach((attendee) => {
          if (!attendee.self) {
            const attendeeDomain = attendee.email.split('@')[1];
            if (attendeeDomain === userDomain) {
              if (teamMap.has(attendee.email)) {
                teamMap.set(attendee.email, teamMap.get(attendee.email)! + event.durationHours);
              } else {
                teamMap.set(attendee.email, event.durationHours);
              }
              totalTeamHours += event.durationHours;
            } else {
              if (clientMap.has(attendee.email)) {
                clientMap.set(attendee.email, clientMap.get(attendee.email)! + event.durationHours);
              } else {
                clientMap.set(attendee.email, event.durationHours);
              }
              totalClientHours += event.durationHours;
            }
          }
        });
      }
    }
  });

  const sortedClientMap = new Map([...clientMap.entries()].sort((a, b) => b[1] - a[1]));
  const sortedTeamMap = new Map([...teamMap.entries()].sort((a, b) => b[1] - a[1]));

  let count = 0;
  sortedClientMap.set('Other', 0);
  sortedTeamMap.set('Other', 0);
  sortedClientMap.forEach((value, key) => {
    if (count < 5) {
      count++;
    } else {
      sortedClientMap.set('Other', sortedClientMap.get('Other')! + value);
      if (key !== 'Other') {
        sortedClientMap.delete(key);
      }
    }
  });
  count = 0;
  sortedTeamMap.forEach((value, key) => {
    if (count < 5) {
      count++;
    } else {
      sortedTeamMap.set('Other', sortedTeamMap.get('Other')! + value);
      if (key !== 'Other') {
        sortedTeamMap.delete(key);
      }
    }
  });

  return {
    clientMap: sortedClientMap,
    teamMap: sortedTeamMap,
    totalClientHours: totalClientHours,
    totalTeamHours: totalTeamHours,
  };
}

function checkWithinWorkHours(event: CalendarEventData, workHours: number[]) {
  if (
    (event.end.getHours() < workHours[1] && event.start.getHours() > workHours[0]) ||
    (event.end.getHours() > workHours[0] && event.start.getHours() < workHours[1])
  ) {
    if (event.start.getDay() >= 1 && event.end.getDay() <= 5) return true;
  }
}

function computeFreeTime(timeSlots: string[][]) {
  let cur = '09:00';
  const freeTime = [];
  const week = timeSlots[0][2];
  timeSlots.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
  for (const slot of timeSlots) {
    if (cur >= '17:00') {
      break;
    }
    if (cur < slot[0]) {
      const start = cur.at(0) === '0' ? cur.slice(1) : cur;
      const end = slot[0].at(0) === '0' ? slot[0].slice(1) : slot[0];
      freeTime.push([start, end, week]);
    }
    if (slot[1] > cur) {
      cur = slot[1];
    }
  }

  if (cur < '17:00') {
    cur = cur.at(0) === '0' ? cur.slice(1) : cur;
    freeTime.push([cur, '17:00', week]);
  }
  return freeTime;
}

function getTimeString(date: Date) {
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  if (parseInt(minutes) < 10) {
    minutes = '0' + minutes;
  }
  if (parseInt(hours) < 10) {
    hours = '0' + hours;
  }
  return hours + ':' + minutes;
}

function buildCardInsights(weeklyData: CalendarEventData[], userEmail: string) {
  const timeInMeetings = {} as DataCardProps;
  const timeOutsideMeetings = {} as DataCardProps;
  const clientMeetings = {} as DataCardProps;

  const weekToTrack = weeklyData.at(-1)?.week;
  let sumWeekDurationMinutes = 0;
  let sum30DayDurationMinutes = 0;
  let sumWeekClientDurationMinutes = 0;
  let sum30DayClientDurationMinutes = 0;
  let sumFreeDurationMinutes = 0;
  let sum30DayFreeDurationMinutes = 0;

  const eventsWithinWorkHours = [] as CalendarEventData[];
  weeklyData.forEach((event) => {
    if (event.durationHours < 24) {
      if (event.week === weekToTrack) {
        sumWeekDurationMinutes += event.durationMinutes;
      }
      if (checkWithinWorkHours(event, [9, 17])) {
        eventsWithinWorkHours.push(event);
      }
    }
    // get user email domain
    const userDomain = userEmail.split('@')[1];
    let clientExists = false;
    event.attendees?.forEach((attendee) => {
      if (!attendee.self) {
        if (!attendee.email.includes(userDomain)) {
          clientExists = true;
        }
      }
    });

    if (clientExists) {
      if (event.week === weekToTrack) {
        sumWeekClientDurationMinutes += event.durationMinutes;
      }
      sum30DayClientDurationMinutes += event.durationMinutes;
    }

    sum30DayDurationMinutes += event.durationMinutes;
  });

  const timeSlots = new Map<string, string[][]>();
  const freeTimeMap = new Map<string, string[][]>();
  eventsWithinWorkHours.forEach((event) => {
    if (timeSlots.has(event.start.toDateString())) {
      const temp = timeSlots.get(event.start.toDateString())!;
      temp.push([getTimeString(event.start), getTimeString(event.end), event.week]);
      timeSlots.set(event.start.toDateString(), temp);
    } else {
      timeSlots.set(event.start.toDateString(), [[getTimeString(event.start), getTimeString(event.end), event.week]]);
    }
  });
  timeSlots.forEach((value, key) => {
    freeTimeMap.set(key, computeFreeTime(value));
  });

  const freeTime = [] as string[];
  freeTimeMap.forEach((value, key) => {
    value.forEach((slot) => {
      const startTime = new Date(key + ' ' + slot[0]);
      const endTime = new Date(key + ' ' + slot[1]);
      if (slot[2] === weekToTrack) {
        freeTime.push(startTime.toDateString() + ': ' + slot[0] + ' - ' + slot[1]);
        sumFreeDurationMinutes += (endTime.getTime() - startTime.getTime()) / 60000;
      }
      sum30DayFreeDurationMinutes += (endTime.getTime() - startTime.getTime()) / 60000;
    });
  });

  const weeklyAvg = sumWeekDurationMinutes / 7;
  const TIMString = Math.floor(weeklyAvg / 60) + 'h ' + Math.round(weeklyAvg % 60) + 'm';
  const weeklyTotal = Math.floor(sumWeekDurationMinutes / 60) + 'h ' + (sumWeekDurationMinutes % 60) + 'm';
  const thirtyDayAvg = sum30DayDurationMinutes / 30;
  const TIDString = Math.floor(thirtyDayAvg / 60) + 'h ' + Math.round(thirtyDayAvg % 60) + 'm';

  const weeklyClientMeetings = sumWeekClientDurationMinutes / 7;
  const TCMString = Math.floor(weeklyClientMeetings / 60) + 'h ' + Math.round(weeklyClientMeetings % 60) + 'm';
  const weeklyClientMeetingsTotal = Math.floor(sumWeekClientDurationMinutes / 60) + 'h ' + Math.round(sumWeekClientDurationMinutes % 60) + 'm';
  const thirtyDayClientMeetings = sum30DayClientDurationMinutes / 30;
  const TCMThirtyString = Math.floor(thirtyDayClientMeetings / 60) + 'h ' + Math.round(thirtyDayClientMeetings % 60) + 'm';

  const weeklyFreeTime = sumFreeDurationMinutes / 7;
  const TFWString = Math.floor(weeklyFreeTime / 60) + 'h ' + Math.round(weeklyFreeTime % 60) + 'm';
  const weeklyFreeTimeTotal = Math.floor(sumFreeDurationMinutes / 60) + 'h ' + Math.round(sumFreeDurationMinutes % 60) + 'm';
  const thirtyDayFreeTime = sum30DayFreeDurationMinutes / 30;
  const TFWThirtyString = Math.floor(thirtyDayFreeTime / 60) + 'h ' + Math.round(thirtyDayFreeTime % 60) + 'm';

  const TIMPercentDiff = Math.round(((weeklyAvg - thirtyDayAvg) / thirtyDayAvg) * 100);
  const TCMPercentDiff = Math.round(((weeklyClientMeetings - thirtyDayClientMeetings) / thirtyDayClientMeetings) * 100);
  const TFWPercentDiff = Math.round(((weeklyFreeTime - thirtyDayFreeTime) / thirtyDayFreeTime) * 100);

  timeInMeetings.title = 'Time in Meetings';
  timeInMeetings.tooltip = 'Average time spent in meetings per day';
  timeInMeetings.metric = TIMString;
  timeInMeetings.percentDiff = TIMPercentDiff > 0 ? '+' + TIMPercentDiff.toString() : TIMPercentDiff.toString();
  timeInMeetings.weekTotal = weeklyTotal;
  timeInMeetings.avg = TIDString;

  clientMeetings.title = 'Client Meetings';
  clientMeetings.tooltip = 'Average time spent in client meetings per day';
  clientMeetings.metric = TCMString;
  clientMeetings.percentDiff = TCMPercentDiff > 0 ? '+' + TCMPercentDiff.toString() : TCMPercentDiff.toString();
  clientMeetings.weekTotal = weeklyClientMeetingsTotal;
  clientMeetings.avg = TCMThirtyString;

  timeOutsideMeetings.title = 'Time Outside Meetings';
  timeOutsideMeetings.tooltip = 'Average time spent outside of meetings per day';
  timeOutsideMeetings.metric = TFWString;
  timeOutsideMeetings.percentDiff = TFWPercentDiff > 0 ? '+' + TFWPercentDiff.toString() : TFWPercentDiff.toString();
  timeOutsideMeetings.weekTotal = weeklyFreeTimeTotal;
  timeOutsideMeetings.avg = TFWThirtyString;
  timeOutsideMeetings.timeSlots = freeTime;

  return [timeInMeetings, timeOutsideMeetings, clientMeetings];
}

const DashboardPage = () => {
  // const [getEvents, { loading, error, data: eventsData }] = useGoogleCalendarEventsLazyQuery();

  const { user } = useContext(AuthContext);

  const cardGridData = [
    { title: 'Time in Meetings', tooltip: 'Shows meeting time', metric: '2h 30m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
    { title: 'Time without Meetings', tooltip: 'Shows free time', metric: '1h 30m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
    { title: 'Time with Clients', tooltip: 'Shows meeting time', metric: '1h 3m', percentDiff: '-7', avg: '1h 5m', weekTotal: '15h' } as DataCardProps,
  ];

  const { loading: weeklyTrendsLoading, error: weeklyTrendsError, data: weeklyTrendsData } = useGoogleCalendarWeeklyTrendsQueryQuery();

  const [newData, setNewData] = useState(barData);

  const [newLineData, setNewLineData] = useState(lineData);

  const [newCardInsights, setNewCardInsights] = useState(cardGridData);

  const [newClientPieData, setNewClientPieData] = useState(pieData);

  const [newTeamPieData, setNewTeamPieData] = useState(pieData);

  const [newVsPieData, setNewVsPieData] = useState(pieData);

  function processData() {
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

    const newCardInsights = buildCardInsights(weeklyTrends!, user!.email);

    const newCardGridData = [newCardInsights[0], newCardInsights[1], newCardInsights[2]];
    setNewCardInsights(newCardGridData);

    const meetingWithAttendeesData = meetingWithAttendeeData(weeklyTrends!, user!.email);

    const clientPieData = buildClientPieData(meetingWithAttendeesData);
    setNewClientPieData(clientPieData);

    const teamPieData = buildTeamPieData(meetingWithAttendeesData);
    setNewTeamPieData(teamPieData);

    const VsPieData = buildVsPieData(meetingWithAttendeesData);
    setNewVsPieData(VsPieData);
  }

  useEffect(() => {
    if (!weeklyTrendsLoading && weeklyTrendsData) processData();
  }, [weeklyTrendsData]);

  return (
    <Layout>
      <CardGrid {...newCardInsights} />
      {weeklyTrendsLoading ? (
        <Skeleton variant="rectangular" width={275} height={500} />
      ) : (
        <Box sx={{ paddingTop: '1rem' }}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}>
              <Typography sx={{ fontWeight: 'bold', paddingLeft: '4rem' }} variant="h6">
                This Week&apos;s Meetings by Day
              </Typography>
              <Tooltip title="test">
                <InfoIcon />
              </Tooltip>
            </Box>
            <Box sx={{ alignItems: 'center', paddingRight: '1rem', paddingLeft: '3rem' }}>
              <div style={{ height: '500px' }}>
                <charts.BarChart data={newData} />
              </div>
            </Box>
          </Card>
        </Box>
      )}

      {/* <div style={{ height: '300px' }}>
        <charts.CalendarChart data={contributionsData} />
      </div> */}
      <Box sx={{ paddingTop: '1rem' }}>
        <Card sx={{ minWidth: 275 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}>
            <Typography sx={{ fontWeight: 'bold', paddingLeft: '4rem' }} variant="h6">
              Last 30 Days of Meetings
            </Typography>
            <Tooltip title="test">
              <InfoIcon />
            </Tooltip>
          </Box>
          <Box sx={{ alignItems: 'center', paddingRight: '1rem', paddingLeft: '3rem' }}>
            <div style={{ height: '600px' }}>
              <charts.LineChart data={newLineData} />
            </div>
          </Box>
        </Card>
      </Box>
      <Box sx={{ paddingTop: '1rem', flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                  Time in Client vs. Team Meetings
                </Typography>
                <Tooltip title="test">
                  <InfoIcon />
                </Tooltip>
              </Box>
              <Box sx={{ alignItems: 'center', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <div style={{ height: '300px' }}>
                  <charts.PieChart data={newVsPieData} />
                </div>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                  Time Spent with Clients
                </Typography>
                <Tooltip title="test">
                  <InfoIcon />
                </Tooltip>
              </Box>
              <Box sx={{ alignItems: 'center', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <div style={{ height: '300px' }}>
                  <charts.PieChart data={newClientPieData} />
                </div>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                  Time Spent with Team
                </Typography>
                <Tooltip title="test">
                  <InfoIcon />
                </Tooltip>
              </Box>
              <Box sx={{ alignItems: 'center', paddingRight: '1rem', paddingLeft: '1rem' }}>
                <div style={{ height: '300px' }}>
                  <charts.PieChart data={newTeamPieData} />
                </div>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default DashboardPage;
