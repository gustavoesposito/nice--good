import { CircularProgress } from '@mui/material';
import ButtonBase, {
  ButtonProps as ButtonBaseProps,
} from '@mui/material/Button';

export interface ButtonProps extends ButtonBaseProps {
  /**
   * @default false
   */
  loading?: boolean;
}

export function Button({ loading, children, ...props }: ButtonProps) {
  return <ButtonBase {...props}>{children}</ButtonBase>;
}
