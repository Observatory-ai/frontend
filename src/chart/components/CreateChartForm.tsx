import { yupResolver } from '@hookform/resolvers/yup';
import { Container, TextField, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { chartFormSchema } from '../schemas/chartFormSchema';
import { ChartFormValues } from '../types/chartFormValues';

import { useState } from 'react';
import * as charts from '../../common/components/Chart';
import line_data from '../../data/line_chart.json';
import { barToLine } from '../conversion/chartFunctions';

type ChartProps = {
  chart_data: any;
};

export default function CreateChartForm({ chart_data }: ChartProps) {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<ChartFormValues>({
    defaultValues: { chartType: '', x_axis: '', y_axis: '' },
    resolver: yupResolver(chartFormSchema),
  });

  const [chartType, setChartType] = useState('bar');
  const [newData, setNewData] = useState(line_data);

  const { isSubmitting, errors } = formState;
  const onSubmit = (data: ChartFormValues) => {
    console.log(data);
    setNewData(barToLine(data, chart_data));
    setChartType(data.chartType);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          autoFocus
          variant="outlined"
          margin="dense"
          label="Chart Type"
          type="text"
          fullWidth
          placeholder="Chart Type"
          {...register('chartType')}
          error={!!errors.chartType}
          helperText={errors.chartType ? errors.chartType.message : null}
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="x-axis"
          type={'text'}
          fullWidth
          placeholder="x_axis"
          {...register('x_axis')}
          error={!!errors.x_axis}
          helperText={errors.x_axis ? errors.x_axis.message : null}
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="y-axis"
          type={'text'}
          fullWidth
          placeholder="y_axis"
          {...register('y_axis')}
          error={!!errors.y_axis}
          helperText={errors.y_axis ? errors.y_axis.message : null}
        />
        <Button type="submit" fullWidth disabled={isSubmitting} variant="contained">
          {t('button.submit', { ns: 'common' })}
        </Button>
      </form>
      <div style={{ height: '500px', width: '500px' }}>
        {chartType === 'line' ? <charts.LineChart data={newData} /> : <charts.BarChart data={chart_data} />}
      </div>
    </Container>
  );
}
