import { BarChart } from '../../common/components/BarChart';
import Layout from '../../common/layout/Layout';
import data from '../../data/BarChartData.json';

const DashboardPage = () => {
  return (
    <Layout>
      <div style={{ height: 500 }}>
        <BarChart data={data} />
      </div>
    </Layout>
  );
};

export default DashboardPage;
