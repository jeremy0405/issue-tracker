import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';
import styled from 'styled-components';

const StyledSignUpForm = styled.div`
  form + form {
    margin-top: 10px;
  }

  button {
    margin-top: 50px;
  }

  span {
    display: inline-block;
    margin: 15px 10px;
  }

  form:disabled {
    background: ${({ theme }) => theme.colors.line};
  }
`;

interface SignUpFormTypes {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string;
}

const SignUpForm = ({ data }: { data: SignUpFormTypes }) => {
  // eslint-disable-next-line camelcase
  const { id, login, name, email, avatar_url } = data;

  const formData = [
    { key: 0, inputType: 'text', maxLength: 12, placeholder: '아이디', userData: login },
    { key: 1, inputType: 'password', maxLength: 12, placeholder: '비밀번호', userData: null },
    { key: 2, inputType: 'email', maxLength: 12, placeholder: '이메일', userData: email },
    { key: 3, inputType: 'text', maxLength: 12, placeholder: '닉네임', userData: name },
  ];

  return (
    <StyledSignUpForm>
      {formData.map(({ key, inputType, maxLength, placeholder, userData }) => (
        <div key={key}>
          <span>{placeholder}</span>
          <Input
            inputMaxLength={maxLength}
            inputPlaceholder={placeholder}
            inputSize="LARGE"
            inputType={inputType}
            inputValue={userData!}
            onClick={() => console.log(';adsas')}
            onChange={() => console.log(';adsas')}
            disabled={!!userData}
          />
        </div>
      ))}
      <Button buttonStyle="STANDARD" label="회원가입" size="LARGE" />
    </StyledSignUpForm>
  );
};

export default SignUpForm;
