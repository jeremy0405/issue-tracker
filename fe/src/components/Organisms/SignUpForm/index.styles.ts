import styled, { css } from 'styled-components';

export const StyledSignUpForm = styled.div`
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

export const StyledDiv = styled.div<{ isError: boolean; str: string }>`
  .caption {
    margin: 0px 0px 5px 10px;
    ${({ theme }) => theme.fontStyles.textXSmall};
  }

  ${({ isError, str }) => {
    return (
      isError &&
      css`
        position: relative;
        margin: 0 0 16px 0;

        form {
          border: 1px solid ${({ theme }) => theme.colors.error.red};
          background: ${({ theme }) => theme.colors.error.lightRed};
        }

        &::after {
          content: '${str} 형식에 맞게 입력하세요';
          position: absolute;
          left: 10px;
          width: 100%;
          color: ${({ theme }) => theme.colors.error.red};
          ${({ theme }) => theme.fontStyles.textXSmall};
        }
      `
    );
  }}
`;
