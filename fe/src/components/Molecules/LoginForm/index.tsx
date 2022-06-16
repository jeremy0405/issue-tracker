import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';
import styled from 'styled-components';

const Form = styled.div`
  form + form {
    margin: 16px 0 24px 0;
  }
`;

const LoginForm = (): JSX.Element => {
  return (
    <Form>
      <Input inputSize="LARGE" inputType="text" placeholder="아이디" />
      <Input inputSize="LARGE" inputType="password" placeholder="비밀번호" />
      <Button buttonStyle="DEFAULT" label="아이디로 로그인" size="LARGE" />
    </Form>
  );
};

export default LoginForm;
