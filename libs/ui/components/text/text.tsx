import TextBase, {
  TypographyProps as TextBaseProps,
} from '@mui/material/Typography';

export interface TextProps extends TextBaseProps {}

export function Text({ ...props }: TextProps) {
  return <TextBase {...props} />;
}
