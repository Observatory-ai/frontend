import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../../authentication/components/pages/LoginPage';
import SignUpPage from '../../authentication/components/pages/SignUpPage';
import CreateChartPage from '../../chart/components/CreateChartPage';
import DashboardPage from '../../dashboard/components/DashboardPage';
import Layout from '../layout/Layout';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/edit-chart" element={<CreateChartPage />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
