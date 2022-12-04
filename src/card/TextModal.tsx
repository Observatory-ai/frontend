import InsightsIcon from '@mui/icons-material/Insights';
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TextModal(timeSlots: string[]) {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  const timeSlotsArray = Object.values(timeSlots);

  return (
    <div>
      <IconButton onClick={toggleOpen}>
        <InsightsIcon />
      </IconButton>
      <Dialog maxWidth="xs" open={open} onClose={toggleOpen}>
        <DialogTitle sx={{ fontWeight: 'bold' }}>Your Free Time Slots for the Week</DialogTitle>
        <DialogContent>
          <DialogContentText>{timeSlotsArray && timeSlotsArray.map((slot) => <li key={slot}>{slot}</li>)}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
