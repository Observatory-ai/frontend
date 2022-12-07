import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextModal from './TextModal';
import { DataCardProps } from './types/DataCardProps';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

// will refactor later

// const bull = (
//   <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
//     •
//   </Box>
// );

export default function DataCard(data: DataCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1rem',
          paddingRight: '1rem',
          paddingLeft: '1rem',
          minHeight: 56,
        }}>
        <Typography sx={{ fontWeight: 'bold' }} variant="h6">
          {data.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {typeof data.timeSlots !== 'undefined' && <TextModal {...data.timeSlots} />}
          <Tooltip title={data.tooltip}>
            <InfoIcon />
          </Tooltip>
        </Box>
      </Box>
      <CardContent>
        <Typography sx={{ marginRight: '0.25em', fontWeight: 'bolder' }} display="inline" variant="h4">
          {data.metric}
        </Typography>
        <Typography variant="body1" display="inline" gutterBottom>
          per day
        </Typography>
        <Typography sx={{ display: 'flex', fontWeight: 'bold', mb: 1.5 }} variant="subtitle1" component="div">
          {parseInt(data.percentDiff) >= 0 ? (
            <ArrowCircleUpIcon sx={{ color: '#de7526', marginRight: 0.1 }} />
          ) : (
            <ArrowCircleDownIcon sx={{ color: '#de7526', marginRight: 0.1 }} />
          )}
          {data.percentDiff}% vs. 30-day avg
        </Typography>
        <Typography sx={{ marginRight: '0.25em', fontSize: '16px' }} display="inline" variant="body2">
          Avg:
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }} display="inline" variant="body2">
          {data.avg}
        </Typography>
        <Typography sx={{ marginRight: '0.25em', fontSize: '16px' }} display="inline" variant="body2">
          <br />
          Weekly Total:
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }} display="inline" variant="body2">
          {data.weekTotal}
        </Typography>
      </CardContent>
    </Card>
  );
}
