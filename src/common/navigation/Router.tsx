import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../../authentication/components/pages/LoginPage';
import SignUpPage from '../../authentication/components/pages/SignUpPage';
import CreateChartPage from '../../chart/components/CreateChartPage';
import DashboardPage from '../../dashboard/components/DashboardPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/edit-chart" element={<CreateChartPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
