import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DataCard from './DataCard';
import { DataCardProps } from './types/DataCardProps';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// make dynamic to number of cards' data provided in props
export default function CardGrid(cardData: DataCardProps[]) {
  // const firstDataCardProps = {
  //   // make sure all required component's inputs/Props keys&types match
  //   title: cardData[0].title,
  //   tooltip: cardData[0].tooltip,
  //   metric: cardData[0].metric,
  //   percentDiff: cardData[0].percentDiff,
  //   avg: cardData[0].avg,
  //   weekTotal: cardData[0].weekTotal,
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DataCard {...cardData[0]} />
        </Grid>
        <Grid item xs={4}>
          <DataCard {...cardData[1]} />
        </Grid>
        <Grid item xs={4}>
          <DataCard {...cardData[2]} />
        </Grid>
      </Grid>
    </Box>
  );
}
