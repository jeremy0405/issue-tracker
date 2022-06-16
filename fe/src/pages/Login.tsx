import { Link } from 'react-router-dom';

import styled from 'styled-components';

import LoginAndRegister from 'components/Organisms/LoginAndRegister';
import { ReactComponent as Logo } from 'assets/logo/LogotypeLarge.svg';

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-bottom: 61px;
  }
`;

const Login = () => {
  return (
    <StyledLogin>
      <Link to="/">
        <Logo />
      </Link>
      <LoginAndRegister />
    </StyledLogin>
  );
};

export default Login;
