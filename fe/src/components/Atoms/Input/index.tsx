/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Form, StyledInput } from 'components/Atoms/Input/index.styles';
import Icon from 'components/Atoms/Icon/';

export interface InputTypes {
  inputStyle?: 'STANDARD' | 'FILTERBAR';
  inputType: string;
  inputSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  inputValue?: string;
  inputMaxLength: number;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  inputPlaceholder: string;
  isActive?: boolean;
  isTyping?: boolean;
  onClick: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  pattern?: RegExp;
}

const defaultMaxLength = 20;

const Input = ({
  inputStyle = 'STANDARD',
  disabled = false,
  inputMaxLength = defaultMaxLength,
  ...props
}: InputTypes) => {
  const {
    isActive = false,
    isTyping = false,
    inputType,
    inputSize,
    inputValue,
    inputPlaceholder,
    inputRef,
    onChange,
    onClick,
    onBlur,
  } = props;

  const [value, setValue] = useState(inputValue);

  return (
    <Form
      inputSize={inputSize}
      onClick={() => {
        if (disabled) return;
        inputRef?.current?.focus();
        onClick();
      }}
      isActive={isActive}
      inputStyle={inputStyle}
    >
      {inputStyle === 'STANDARD' && isTyping && <label>{inputPlaceholder}</label>}
      {inputStyle === 'FILTERBAR' && <Icon icon="Search" />}
      <StyledInput
        maxLength={inputMaxLength}
        type={inputType}
        disabled={disabled}
        defaultValue={inputValue}
        // value={inputValue}
        placeholder={inputPlaceholder}
        ref={inputRef}
        onBlur={onBlur}
        onChange={(event) => {
          const { value: targetValue } = event.currentTarget;
          onChange(event);
          // eslint-disable-next-line no-param-reassign
          if (Number(targetValue) >= inputMaxLength) event.currentTarget.value = targetValue.slice(0, inputMaxLength);
        }}
      />
    </Form>
  );
};
export default Input;
