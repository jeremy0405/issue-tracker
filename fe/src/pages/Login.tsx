import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import LoginAndRegister from 'components/Organisms/LoginAndRegister';

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
      <Logo logoSize="Large" />
      <LoginAndRegister />
    </StyledLogin>
  );
};

export default Login;
