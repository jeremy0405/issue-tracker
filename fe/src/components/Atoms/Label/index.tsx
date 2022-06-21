import { colors } from 'styles/theme';
import StyledLabel from 'components/Atoms/Label/index.styles';

export interface LabelProps {
  id?: number;
  title: string;
  labelStyle?: 'STANDARD' | 'LINE';
  titleColor: string;
  backgroundColor: string;
  description?: string;
}

const DEFAULT_COLORS = colors.primary.blue;
const DEFAULT_TITLE_COLORS = colors.offWhite;
const Label = ({
  labelStyle = 'STANDARD',
  titleColor = DEFAULT_TITLE_COLORS,
  backgroundColor = DEFAULT_COLORS,
  ...props
}: LabelProps) => {
  const { title } = props;

  return (
    <StyledLabel labelStyle={labelStyle} titleColor={titleColor} backgroundColor={backgroundColor}>
      {title}
    </StyledLabel>
  );
};

export default Label;
