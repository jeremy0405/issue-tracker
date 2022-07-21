import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import LoginForm from 'components/Molecules/LoginForm';

const StyledLoginAndRegister = styled.div`
  display: grid;
  place-items: center;

  p {
    margin: 24px 0;
    ${({ theme }) => theme.fontStyles.linkSmall};
    color: ${({ theme }) => theme.colors.placeHolder};
  }

  .sign_up {
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
      <a href={`${process.env.REACT_APP_GITHUB_AUTH_URL}`}>
        <Button buttonStyle="GITHUB_LOGIN" label="GitHub 계정으로 로그인" size="LARGE" />
      </a>
      <p>or</p>
      <LoginForm />
      <Link to="/sign-up" className="sign_up">
        회원가입
      </Link>
    </StyledLoginAndRegister>
  );
};

export default LoginAndRegister;
