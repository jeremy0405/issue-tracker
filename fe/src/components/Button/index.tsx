import { ReactNode } from 'react';
import StyledButton from 'components/Button/index.styles';

interface ButtonProps {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  borderStyle?: 'SECONDARY';
  disabled: boolean;
  label: string;
  children: ReactNode;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { label, children } = props;

  return (
    <StyledButton type="button" {...props}>
      {children}
      {label}
    </StyledButton>
  );
};

export default Button;
