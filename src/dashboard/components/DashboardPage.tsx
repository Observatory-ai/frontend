import Layout from '../../common/layout/Layout';
import * as charts from '../../common/components/BarChart'
import data from '../../data/meeting_hour_by_day.json'

const DashboardPage = () => {
  return (
    <Layout>
      <div style={{height: '500px'}}>
        <charts.BarChart data={data} />
      </div>
      <div>DashboardPage</div>
    </Layout>
  );
};

export default DashboardPage;
