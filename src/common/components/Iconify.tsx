import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

type Props = {
  icon: string;
  sx?: object;
  color?: string;
  height?: number;
};

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
