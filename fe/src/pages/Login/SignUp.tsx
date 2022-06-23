import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import SignUpForm from 'components/Organisms/SignUpForm';
import { AuthTypes } from 'helpers/utils/fetchData';

const StyledSignUp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    padding: 0;

    input {
      padding: 0 24px;
      height: 100%;
      border-radius: 16px;

      &:disabled {
        opacity: 0.8;
        border: 1px solid ${({ theme }) => theme.colors.success.green};
        background: ${({ theme }) => theme.colors.success.lightGreen};
        color: ${({ theme }) => theme.colors.success.darkGreen};
      }
    }
  }

  a {
    margin-bottom: 60px;
  }
`;

const SignUp = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<AuthTypes>('auth');

  if (!data) return <div />;

  return (
    <StyledSignUp>
      <Logo logoSize="Large" />
      <SignUpForm data={data.authMemberResponse} />
    </StyledSignUp>
  );
};

export default SignUp;
