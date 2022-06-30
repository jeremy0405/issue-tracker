import { Outlet } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { OAuthState } from 'Router';

import styled from 'styled-components';
import Header from 'components/Organisms/Header';

const Layer = styled.div`
  padding: 0px 80px;
  height: 100vh;

  & > div {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const Home = () => {
  const isOAuth = useRecoilValue(OAuthState);

  return (
    <Layer>
      <div>
        {isOAuth && <Header />}
        <Outlet />
      </div>
    </Layer>
  );
};

export default Home;
