/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
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
  const [isTyping, setIsTyping] = useState<string>('');

  const handleFormClick = () => {
    if (disabled) return;
    inputRef.current?.focus();
    setIsActive(true);
  };

  const checkMaxLength = (inputElement: HTMLInputElement) => {
    if (isTyping.length >= inputElement?.maxLength) {
      // eslint-disable-next-line no-param-reassign
      inputElement.value = isTyping.slice(0, inputElement?.maxLength);
    }
  };

  useEffect(() => {
    if (!isTyping || !inputRef.current) return;
    checkMaxLength(inputRef.current);
  }, [isTyping]);

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
        onChange={(event: React.FormEvent<HTMLInputElement>) => setIsTyping(event.currentTarget.value)}
      />
    </Form>
  );
};
export default Input;
