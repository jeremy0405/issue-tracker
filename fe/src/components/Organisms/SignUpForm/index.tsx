/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { useSetRecoilState } from 'recoil';
import { OAuthState } from 'Router';

import axios from 'axios';

import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';
import { StyledDiv, StyledSignUpForm } from 'components/Organisms/SignUpForm/index.styles';

import { AuthTypes } from 'helpers/utils/fetchData';

interface SignUpFormTypes {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string | null;
}

interface UserInfoTypes {
  oauth_id: number | null;
  login_id: string;
  login_password: string | null;
  name: string | null;
  email: string | null;
  profile_image_url: string | null;
}

type isErrorTypes = Omit<UserInfoTypes, 'email' | 'profile_image_url' | 'oauth_id'>;

type UserInfoKeys = 'login_id' | 'login_password' | 'name' | 'email' | 'profile_image_url' | 'oauth_id';

type ResponsesUserInfoTypes = Pick<AuthTypes, 'memberResponse' | 'jwtResponse'>;

const SignUpForm = ({ authData }: { authData: SignUpFormTypes | undefined }) => {
  const initUserInfo: UserInfoTypes = {
    login_id: authData?.login || '',
    login_password: null,
    name: authData?.name || '',
    email: authData?.email || null,
    profile_image_url: authData?.avatar_url || null,
    oauth_id: authData?.id || null,
  };

  const setIsOAuth = useSetRecoilState(OAuthState);

  const [userInfo, setUserInfo] = useState(initUserInfo);
  const [isError, setIsError] = useState({ login_id: false, login_password: false, email: false, name: false });

  const isBlank = () => {
    let blank = false;

    Object.keys(userInfo).forEach((key) => {
      const k = key as UserInfoKeys;
      if (key === 'profile_image_url' || key === 'oauth_id') return;
      if (!userInfo[k]) blank = true;
    });

    return blank;
  };

  const formData = [
    {
      key: 0,
      inputType: 'text',
      maxLength: 12,
      placeholder: '아이디',
      userData: initUserInfo.login_id,
      infoKey: 'login_id',
      pattern: /^[ㄱ-힣a-zA-Z0-9-*~^_]*$/g,
      patternMsg: '아이디는 한글,영문,숫자,특수문자(-*~^_)만 입력가능합니다.',
    },
    {
      key: 1,
      inputType: 'password',
      maxLength: 12,
      placeholder: '비밀번호',
      userData: null,
      infoKey: 'login_password',
      pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      patternMsg: '비밀번호는 영문,숫자,특수문자(-*~^_)만 입력가능합니다.',
    },
    {
      key: 2,
      inputType: 'email',
      maxLength: 20,
      placeholder: '이메일',
      userData: initUserInfo.email,
      infoKey: 'email',
      pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      patternMsg: '',
    },
    {
      key: 3,
      inputType: 'text',
      maxLength: 12,
      placeholder: '닉네임',
      userData: initUserInfo.name,
      infoKey: 'name',
      pattern: /^[ㄱ-힣a-zA-Z0-9-*~^_]*$/i,
      patternMsg: '아이디는 한,영,숫자, 특수문자(-*~^_)만 입력가능합니다.',
    },
  ];

  const addUser = async (newUser: UserInfoTypes): Promise<ResponsesUserInfoTypes> => {
    const { data: addLabelData } = await axios.post<ResponsesUserInfoTypes>(
      `${process.env.REACT_APP_SERVER_URL}/api/members`,
      newUser,
    );
    return addLabelData;
  };

  const navigate = useNavigate();

  const { mutate } = useMutation(addUser, {
    onSuccess: async (data) => {
      const { jwtResponse, memberResponse } = data;

      axios.defaults.headers.common.Authorization = `Bearer ${jwtResponse.accessToken}`;
      axios.defaults.withCredentials = true;

      localStorage.setItem('refresh_token', jwtResponse.refreshToken);
      localStorage.setItem('userInfo', JSON.stringify(memberResponse));

      await setIsOAuth(true);
      navigate('/issues');
    },
  });

  const handleClickSignUpButton = () => {
    mutate(userInfo);
  };

  useEffect(() => {
    // console.log(userInfo);
  }, [userInfo]);

  return (
    <StyledSignUpForm>
      {formData.map(({ key, inputType, maxLength, placeholder, userData, infoKey, pattern, patternMsg }) => {
        const dataKey = infoKey as keyof isErrorTypes;
        const errorCheck = isError[dataKey];

        return (
          <StyledDiv key={key} isError={errorCheck} str={placeholder}>
            <span>{placeholder}</span>
            <p className="caption">{patternMsg}</p>
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
                setIsError({ ...isError, [infoKey]: !value.match(pattern) });
              }}
            />
          </StyledDiv>
        );
      })}

      <Button
        buttonStyle="STANDARD"
        label="회원가입"
        size="LARGE"
        HandleOnClick={handleClickSignUpButton}
        disabled={isBlank()}
      />
    </StyledSignUpForm>
  );
};

export default SignUpForm;
