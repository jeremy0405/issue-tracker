import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

const Form = styled.div`
  form + form {
    margin: 16px 0 24px 0;
  }
`;

const LoginForm = (): JSX.Element => {
  const [isIdActive, isIdTyping, onChangeInputId, onClickInputId, onBlurInputId] = useInput();
  const [isPasswordActive, isPasswordTyping, onChangeInputPassword, onClickInputPassword, onBlurInputPassword] =
    useInput();
  const [idMaxLength, passwordMaxLength] = [10, 10];

  return (
    <Form>
      <Input
        isActive={isIdActive}
        isTyping={isIdTyping}
        onChange={onChangeInputId}
        onClick={onClickInputId}
        onBlur={onBlurInputId}
        inputSize="LARGE"
        inputType="text"
        inputMaxLength={idMaxLength}
        inputPlaceholder="아이디"
      />
      <Input
        isActive={isPasswordActive}
        isTyping={isPasswordTyping}
        onChange={onChangeInputPassword}
        onClick={onClickInputPassword}
        onBlur={onBlurInputPassword}
        inputSize="LARGE"
        inputType="password"
        inputMaxLength={passwordMaxLength}
        inputPlaceholder="비밀번호"
      />
      <Button buttonStyle="STANDARD" label="아이디로 로그인" size="LARGE" />
    </Form>
  );
};

export default LoginForm;
