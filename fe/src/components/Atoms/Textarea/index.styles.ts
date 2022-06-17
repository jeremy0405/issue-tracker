/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';
import { TextareaProps } from 'components/Atoms/Textarea';

type StyledFormProps = {
  isActive: boolean;
};

type StyledTextareProps = Pick<TextareaProps, 'textareaSize'>;

export const Form = styled.form<StyledFormProps>`
  width: min-content;
  padding: 16px 24px;
  border-radius: 16px;
  position: relative;

  ${({ theme, isActive }) => {
    if (isActive)
      return css`
        background: ${theme.colors.offWhite};
        border: 1px solid ${theme.colors.titleActive};
      `;
    return `background: ${theme.colors.background}`;
  }};

  label.textarea {
    span {
      ${({ theme }) => theme.fontStyles.textXSmall}
      color:${({ theme }) => theme.colors.label};
    }
  }
`;

export const StyledTextarea = styled.textarea<StyledTextareProps>`
  max-width: -webkit-fill-available;
  background: transparent;
  border: none;
  border-radius: 16px;
  resize: vertical;

  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.fontStyles.textSmall}

  ${({ textareaSize }) => {
    // eslint-disable-next-line default-case
    switch (textareaSize) {
      case 'MEDIUM':
        return css`
          ${({ theme }) => theme.textAreaSize.medium};
        `;
      case 'LARGE':
        return css`
          ${({ theme }) => theme.textAreaSize.large};
        `;
    }
  }}
`;

export const AddFile = styled.div`
  display: flex;
  border-top: 1px dashed ${({ theme }) => theme.colors.line};

  input {
    display: none;
  }

  label.addFile {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 16px;

    span {
      margin-left: 10px;
    }

    &:hover {
      cursor: pointer;
    }

    ${({ theme }) => theme.fontStyles.linkXsmall}

    color:${({ theme }) => theme.colors.label};
  }

  path {
    stroke: ${({ theme }) => theme.colors.label};
  }
`;

export const Count = styled.p`
  width: 100px;
  position: absolute;
  right: 50px;
  bottom: 60px;

  ${({ theme }) => theme.fontStyles.textXSmall}

  color: ${({ theme }) => theme.colors.label};
`;
