import { Link } from 'react-router-dom';
import * as Logos from 'components/Atoms/Logo/svgs';

export type LogoSizeType = keyof typeof Logos;

interface LogoProps {
  logoSize: LogoSizeType;
}

const Logo = ({ logoSize }: LogoProps) => {
  const LogoImg = Logos[logoSize];
  return (
    <Link to="/">
      <LogoImg />
    </Link>
  );
};

export default Logo;
