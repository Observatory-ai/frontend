import Layout from '../../common/layout/Layout';
import CreateChartForm from './CreateChartForm';

import * as charts from '../../common/components/Chart';
import data from '../../data/meeting_hour_by_day.json';

const CreateChartPage = () => {
  return (
    <Layout>
      <CreateChartForm />
      <div style={{ height: '500px' }}>
        <charts.BarChart data={data} />
      </div>
    </Layout>
  );
};

export default CreateChartPage;
