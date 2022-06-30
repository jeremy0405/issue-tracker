import { BrowserRouter } from 'react-router-dom';
import { atom, useRecoilValue } from 'recoil';

import PrivateRouter from 'Router/private';
import PublicRouter from 'Router/public';

export const OAuthState = atom({
  key: 'OAuthState',
  default: !!window.localStorage.getItem('refresh_token'),
});

const Routers = (): JSX.Element => {
  const isOAuth = useRecoilValue(OAuthState);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>{isOAuth ? <PrivateRouter /> : <PublicRouter />}</BrowserRouter>
  );
};

export default Routers;
