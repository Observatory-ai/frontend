import * as Yup from 'yup';

export const chartFormSchema = Yup.object()
  .shape({
    chartType: Yup.string().required('Chart type is required'),
    x_axis: Yup.string().required('x-axis is required'),
    y_axis: Yup.string().required('y-axis is required'),
  })
  .required();
