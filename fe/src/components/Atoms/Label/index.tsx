import { colors } from 'styles/theme';
import StyledLabel from 'components/Atoms/Label/index.styles';

export interface LabelProps {
  labelId?: number;
  labelTitle: string;
  labelStyle?: 'STANDARD' | 'LINE';
  titleColor: 'LIGHT' | 'DARK';
  backgroundColor: string;
  description?: string;
}

const DEFAULT_COLORS = colors.primary.blue;
const Label = ({
  labelStyle = 'STANDARD',
  titleColor = 'LIGHT',
  backgroundColor = DEFAULT_COLORS,
  ...props
}: LabelProps) => {
  const { labelTitle } = props;

  return (
    <StyledLabel labelStyle={labelStyle} titleColor={titleColor} backgroundColor={backgroundColor}>
      {labelTitle}
    </StyledLabel>
  );
};

export default Label;
