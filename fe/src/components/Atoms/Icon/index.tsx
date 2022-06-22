import * as icons from 'components/Atoms/Icon/svgs';
import { colors } from 'styles/theme';

export type IconType = keyof typeof icons;

interface IconTypes {
  icon: IconType;
  stroke?: string;
  fill?: string;
}

const DEFAULT_COLOR = colors.titleActive;

const Icon = ({ icon, stroke = DEFAULT_COLOR, fill = 'none' }: IconTypes) => {
  const SVGIcon = icons[icon];
  return <SVGIcon stroke={stroke} fill={fill} />;
};

export default Icon;
