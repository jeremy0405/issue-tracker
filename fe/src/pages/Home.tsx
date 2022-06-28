import { Dispatch, SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
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

interface HomeTypes {
  isOAuth: boolean;
  setIsOAuth?: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ isOAuth, setIsOAuth }: HomeTypes) => {
  return (
    <Layer>
      <div>
        {isOAuth && <Header setIsOAuth={setIsOAuth} />}
        <Outlet />
      </div>
    </Layer>
  );
};

export default Home;
