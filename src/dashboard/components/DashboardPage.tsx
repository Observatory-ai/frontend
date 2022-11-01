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

  const handleButtonClick = () => {
    getEvents();
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
    </Layout>
  );
};

export default DashboardPage;
