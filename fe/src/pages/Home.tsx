import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const Layer = styled.div`
  background: ${({ theme }) => theme.colors.background};
`;

const Home = () => {
  return (
    <Layer>
      <Outlet />
    </Layer>
  );
};

export default Home;
