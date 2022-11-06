import AddIcon from '@mui/icons-material/Add';
import { Fab, Tooltip } from '@mui/material';
import * as charts from '../../common/components/Chart';
import Layout from '../../common/layout/Layout';
import contributionsData from '../../data/contributions.json';
import lineData from '../../data/line_chart.json';
import data from '../../data/meeting_hour_by_day.json';
import pieData from '../../data/pie_chart.json';
import scatterData from '../../data/scatter_plot.json';
// import data from '../../data/BarChartData.json';
import { useGoogleCalendarEventsLazyQuery } from '../../generated/graphql';

const DashboardPage = () => {
  const [getEvents, { loading, error, data: eventsData }] = useGoogleCalendarEventsLazyQuery();

  const today = new Date();
  today.setDate(today.getDate() - today.getDay());
  const dStart = new String(today.getDate()).padStart(2, '0');
  const mStart = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yStart = today.getFullYear();
  1;
  const startOfTheWeek = yStart + '-' + mStart + '-' + dStart + 'T00:00:00.000Z';

  today.setDate(today.getDate() - today.getDay() + 6);
  const dEnd = new String(today.getDate()).padStart(2, '0');
  const mEnd = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yEnd = today.getFullYear();
  1;
  const endOfTheWeek = yEnd + '-' + mEnd + '-' + dEnd + 'T11:59:59.000Z';

  // console.log(typeof startOfTheWeek, typeof endOfTheWeek, typeof 'startTime', typeof true);

  const handleButtonClick = () => {
    getEvents({ variables: { googleCalendarEventsInput: { timeMin: startOfTheWeek, timeMax: endOfTheWeek, orderBy: 'startTime', singleEvents: true } } });
    console.log('eventsData', eventsData);
  };

  return (
    <Layout>
      <div style={{ height: '500px' }}>
        <charts.BarChart data={data} />
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
