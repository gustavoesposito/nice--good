import TextFieldBase, {
  TextFieldProps as TextFieldBaseProps,
} from '@mui/material/TextField';

import * as styles from './styles';

export type TextFieldProps = TextFieldBaseProps;

//!TODO: Criar uma máscara para datas
export function TextField({ ...props }: TextFieldProps) {
  return <TextFieldBase sx={styles.container} variant="filled" {...props} />;
}
