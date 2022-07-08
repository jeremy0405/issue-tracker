import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { QueryStringState } from 'pages/Issues';

import * as Logos from 'components/Atoms/Logo/svgs';

export type LogoSizeType = keyof typeof Logos;

interface LogoType {
  logoSize: LogoSizeType;
}

const Logo = ({ logoSize }: LogoType) => {
  const LogoImg = Logos[logoSize];

  const [recoilValue, setRecoilValue] = useRecoilState(QueryStringState);
  const HandleOnClick = () => {
    const initState = { page: 0, status: 'open', author: '', assignee: '', mentions: '', label: [], milestone: '' };
    setRecoilValue({ ...recoilValue, ...initState });
  };

  return (
    <Link to="/" onClick={HandleOnClick}>
      <LogoImg />
    </Link>
  );
};

export default Logo;
