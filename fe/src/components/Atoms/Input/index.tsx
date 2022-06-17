/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, FC, SVGProps, Dispatch, SetStateAction } from 'react';
import { Form, StyledInput } from 'components/Atoms/Input/index.styles';

type ActiveState = boolean;

export interface InputProps {
  inputStyle?: 'STANDARD' | 'FILTERBAR';
  inputType: string;
  inputSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  inputValue?: string;
  inputMaxLength?: number;
  disabled?: boolean;
  inputPlaceholder: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  // isActive?: ActiveState;
  // setIsActive?: Dispatch<SetStateAction<ActiveState>>;
}

const defaultMaxLength = 12;

const Input = ({
  inputStyle = 'STANDARD',
  disabled = false,
  inputMaxLength = defaultMaxLength,
  ...props
}: InputProps) => {
  const { inputType, inputSize, inputValue, inputPlaceholder, Icon } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  // const { isActive, setIsActive } = props;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // if (inputStyle === 'FILTERBAR' && !isActive && !setIsActive) return <div />;

  const handleFormClick = () => {
    if (disabled) return;
    inputRef.current?.focus();
    setIsActive(true);
  };

  const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (!value) return setIsTyping(false);
    // eslint-disable-next-line no-param-reassign
    if (Number(value) >= inputMaxLength) event.currentTarget.value = value.slice(0, inputMaxLength);
    return setIsTyping(true);
  };

  return (
    <Form inputSize={inputSize} onClick={handleFormClick} isActive={isActive}>
      {inputStyle === 'STANDARD' && isTyping && <label>{inputPlaceholder}</label>}
      {Icon && <Icon />}
      <StyledInput
        maxLength={inputMaxLength}
        type={inputType}
        disabled={disabled}
        defaultValue={inputValue}
        placeholder={inputPlaceholder}
        ref={inputRef}
        onBlur={() => setIsActive(false)}
        onChange={handleFormChange}
      />
    </Form>
  );
};
export default Input;
