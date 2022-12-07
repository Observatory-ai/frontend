import { useLocation } from 'react-router-dom';
import Layout from '../../common/layout/Layout';
import CreateChartForm from './CreateChartForm';

type ChartProps = {
  chart_data: any;
};

const CreateChartPage = () => {
  const data = { chart_data: useLocation().state.data, chartNo: useLocation().state.chartNo, stateObject: useLocation().state.stateObject };
  console.log(data);
  return (
    <Layout>
      <CreateChartForm chart_data={data.chart_data} chartNo={data.chartNo} stateObject={data.stateObject} />
    </Layout>
  );
};

export default CreateChartPage;
