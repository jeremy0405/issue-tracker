/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';

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

const SignUpForm = ({ authData }: { authData: SignUpFormTypes }) => {
  // eslint-disable-next-line camelcase
  const { id, login, name, email, avatar_url } = authData;

  const initUserInfo = {
    login_id: login,
    login_password: null,
    name,
    email,
    profile_image_url: avatar_url,
    oauth_id: id,
  };

  // 값이 하나라도 비어있으면 회원가입 버튼 비활성화하는 기능 추가하기
  const [userInfo, setUserInfo] = useState(initUserInfo);

  const formData = [
    { key: 0, inputType: 'text', maxLength: 12, placeholder: '아이디', userData: login, infoKey: 'login_id' },
    {
      key: 1,
      inputType: 'password',
      maxLength: 12,
      placeholder: '비밀번호',
      userData: null,
      infoKey: 'login_password',
    },
    { key: 2, inputType: 'email', maxLength: 12, placeholder: '이메일', userData: email, infoKey: 'email' },
    { key: 3, inputType: 'text', maxLength: 12, placeholder: '닉네임', userData: name, infoKey: 'name' },
  ];

  const handleClickSignUpButton = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/members`, userInfo)
      .then((response) => {
        const { data } = response;
        window.localStorage.setItem('refresh_token', data.refreshToken);
        const navigate = useNavigate();
        navigate('/issues');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledSignUpForm>
      {formData.map(({ key, inputType, maxLength, placeholder, userData, infoKey }) => (
        <div key={key}>
          <span>{placeholder}</span>
          <Input
            inputMaxLength={maxLength}
            inputPlaceholder={placeholder}
            inputSize="LARGE"
            inputType={inputType}
            inputValue={userData!}
            onClick={() => console.log('클릭')}
            onChange={(event: React.FormEvent<HTMLInputElement>) => {
              const { value } = event.currentTarget;
              setUserInfo({ ...userInfo, [infoKey]: value });
            }}
          />
        </div>
      ))}
      <Button buttonStyle="STANDARD" label="회원가입" size="LARGE" HandleOnClick={handleClickSignUpButton} disabled />
    </StyledSignUpForm>
  );
};

export default SignUpForm;
