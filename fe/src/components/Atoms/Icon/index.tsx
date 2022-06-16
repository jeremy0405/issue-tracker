import * as icons from 'components/Atoms/Icon/svgs';
import { colors } from 'styles/theme';

export type IconType = keyof typeof icons;

type IconProps = {
  icon: IconType;
  stroke?: string;
  fill?: string;
};

const DEFAULT_COLOR = colors.titleActive;

const Icon = ({ icon, stroke = DEFAULT_COLOR, fill = 'none' }: IconProps) => {
  const SVGIcon = icons[icon];
  return <SVGIcon stroke={stroke} fill={fill} />;
};

export default Icon;
