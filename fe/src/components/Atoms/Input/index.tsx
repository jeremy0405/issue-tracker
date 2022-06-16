/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { Form, StyledInput } from 'components/Atoms/Input/index.styles';

interface InputProps {
  inputType: string;
  maxLength?: number;
  inputSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  disabled?: boolean;
  placeholder: string;
}

const defaultMaxLength = 12;

const Input = ({ inputType, inputSize, maxLength = defaultMaxLength, disabled = false, placeholder }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleFormClick = () => {
    if (disabled) return;
    inputRef.current?.focus();
    setIsActive(true);
  };

  const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (!value) return setIsTyping(false);
    // eslint-disable-next-line no-param-reassign
    if (Number(value) >= maxLength) event.currentTarget.value = value.slice(0, maxLength);
    return setIsTyping(true);
  };

  return (
    <Form inputSize={inputSize} onClick={handleFormClick} isActive={isActive}>
      {isTyping && <label>{placeholder}</label>}
      <StyledInput
        maxLength={maxLength}
        type={inputType}
        disabled={disabled}
        placeholder={placeholder}
        ref={inputRef}
        onBlur={() => setIsActive(false)}
        onChange={handleFormChange}
      />
    </Form>
  );
};
export default Input;
