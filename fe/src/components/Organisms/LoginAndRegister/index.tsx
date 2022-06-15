import Button from 'components/Atoms/Button';
import LoginForm from 'components/Molecules/LoginForm';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLoginAndRegister = styled.div`
  display: grid;
  place-items: center;

  p {
    margin: 24px 0;
    ${({ theme }) => theme.fontStyles.linkSmall};
    color: ${({ theme }) => theme.colors.placeHolder};
  }

  a {
    margin-top: 30px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.body};
    ${({ theme }) => theme.fontStyles.linkXsmall};
    &:visited {
      text-decoration: none;
    }
  }
`;

const LoginAndRegister = (): JSX.Element => {
  return (
    <StyledLoginAndRegister>
      <Button buttonStyle="GITHUB_LOGIN" label="GitHub 계정으로 로그인" onClick={() => {}} size="LARGE" />
      <p>or</p>
      <LoginForm />
      <Link to="#!">회원가입</Link>
    </StyledLoginAndRegister>
  );
};

export default LoginAndRegister;
