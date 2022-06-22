import { colors } from 'styles/theme';
import { ReactComponent as Label } from 'assets/icons/smallLabel.svg';

export interface SmallLabelTypes {
  stroke?: string;
  fill: string;
}

const DEFAULT_COLOR = colors.line;

const SmallLabel = ({ stroke = DEFAULT_COLOR, fill = 'none' }: SmallLabelTypes) => {
  return <Label stroke={stroke} fill={fill} />;
};

export default SmallLabel;
