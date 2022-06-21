import { ReactComponent as Label } from 'assets/icons/smallLabel.svg';
import { colors } from 'styles/theme';

export interface SmallLabelProps {
  stroke?: string;
  fill: string;
}

const DEFAULT_COLOR = colors.line;

const SmallLabel = ({ stroke = DEFAULT_COLOR, fill = 'none' }: SmallLabelProps) => {
  return <Label stroke={stroke} fill={fill} />;
};

export default SmallLabel;
