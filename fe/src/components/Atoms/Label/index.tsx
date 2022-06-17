import { colors } from 'styles/theme';
import StyledLabel from 'components/Atoms/Label/index.styles';

export interface LabelProps {
  label: string;
  labelStyle: 'STANDARD' | 'LINE';
  textStyle: 'LIGHT' | 'DARK';
  color: string;
}

const DEFAULT_COLORS = colors.primary.blue;
const Label = ({ label, labelStyle, textStyle = 'LIGHT', color = DEFAULT_COLORS }: LabelProps) => {
  return (
    <StyledLabel labelStyle={labelStyle} textStyle={textStyle} color={color}>
      {label}
    </StyledLabel>
  );
};

export default Label;
