import * as icons from 'components/Atoms/Icon/svgs';

type IconType = keyof typeof icons;

type IconProps = {
  icon: IconType;
  stroke: string;
  fill?: string;
};

const Icon = ({ icon, stroke, fill = 'none' }: IconProps) => {
  const SVGIcon = icons[icon];
  return <SVGIcon stroke={stroke} fill={fill} />;
};

export default Icon;
