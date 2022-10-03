import Layout from '../../common/layout/Layout';
import data from '../../data/meeting_hour_by_day.json';
import CreateChartForm from './CreateChartForm';

const CreateChartPage = () => {
  return (
    <Layout>
      <CreateChartForm chart_data={data} />
    </Layout>
  );
};

export default CreateChartPage;
