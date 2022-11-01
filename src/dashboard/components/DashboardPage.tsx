import AddIcon from '@mui/icons-material/Add';
import { Fab, Tooltip } from '@mui/material';
import { BarChart } from '../../common/components/BarChart';
import Layout from '../../common/layout/Layout';
import data from '../../data/BarChartData.json';
import { useGoogleCalendarEventsLazyQuery } from '../../generated/graphql';

const DashboardPage = () => {
  const [getEvents, { loading, error, data: eventsData }] = useGoogleCalendarEventsLazyQuery();

  const handleButtonClick = () => {
    getEvents();
    console.log('eventsData', eventsData);
  };

  return (
    <Layout>
      <div style={{ height: 500 }}>
        <BarChart data={data} />
        <Tooltip title="Create chart">
          <Fab onClick={handleButtonClick} aria-label="add chart" color="secondary" sx={{ position: 'absolute', bottom: 32, right: 32 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    </Layout>
  );
};

export default DashboardPage;
