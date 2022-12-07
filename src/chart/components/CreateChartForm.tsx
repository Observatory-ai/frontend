import { Box, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { returnChart } from '../../common/components/Chart';
import { chartToBuild } from '../conversion/chartFunctions';

type ChartProps = {
  chart_data: any;
  chartNo: string;
  stateObject: Map<string, any>;
};

export default function CreateChartForm({ chart_data, chartNo, stateObject }: ChartProps) {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const navigate = useNavigate();

  const [newData, setNewData] = useState(chart_data);
  const [newStateObject, setNewStateObject] = useState(stateObject);

  const updateGraph = () => {
    const new_data = chartToBuild({ chartType: chartTypeToBuild }, newData)!;
    setNewData(new_data);
    const tempStateObject = newStateObject;
    tempStateObject.set(chartNo, new_data);
    setNewStateObject(tempStateObject);
  };

  const [chartTypeToBuild, setChartToBuild] = React.useState(chart_data.chartType);

  const handleChange = (event: SelectChangeEvent) => {
    setChartToBuild(event.target.value as string);
  };

  function returnMenuItems() {
    if (chart_data.seriesType === 'single') {
      return [
        <MenuItem key="1" value="Bar">
          Bar
        </MenuItem>,
        <MenuItem key="2" value="Line">
          Line
        </MenuItem>,
        <MenuItem key="3" value="Pie">
          Pie
        </MenuItem>,
        <MenuItem key="4" value="Radar">
          Radar
        </MenuItem>,
      ];
    } else if (chart_data.seriesType === 'multiple') {
      return [
        <MenuItem key="1" value="Bar">
          Bar
        </MenuItem>,
        <MenuItem key="2" value="Line">
          Line
        </MenuItem>,
        <MenuItem key="4" value="Radar">
          Radar
        </MenuItem>,
      ];
    }
  }

  return (
    <Container maxWidth="xs" sx={{ minWidth: '700px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Chart Type</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={chartTypeToBuild} label="Select Chart Type" onChange={handleChange}>
          {returnMenuItems()}
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" onClick={updateGraph} variant="contained" sx={{ margin: '1rem' }}>
          {'Update'}
        </Button>
        <Link to={{ pathname: '/dashboard' }} state={{ data: newData, editedChart: chartNo, stateObject: newStateObject }} style={{ textDecoration: 'none' }}>
          <Button sx={{ margin: '1rem' }} variant="contained">
            {'Save'}
          </Button>
        </Link>
      </Box>
      <Box sx={{ alignItems: 'center', paddingLeft: '1rem' }}>
        <div style={{ height: '600px', width: '700px' }}>{returnChart(newData.chartType, newData)}</div>
      </Box>
    </Container>
  );
}
