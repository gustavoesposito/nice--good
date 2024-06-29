import { SxProps } from '@mui/material';
import { colors } from '@weather-libs/utils';

export const container: SxProps = {
  '& > .MuiFilledInput-root': {
    color: `${colors.orange}`,
    backgroundColor: `${colors.white}`,
    ':hover': {
      backgroundColor: `${colors.grey}`,
    },
  },
  '& > .Mui-disabled': {
    ':hover': {
      backgroundColor: `${colors.white}`,
    },
  },
};
