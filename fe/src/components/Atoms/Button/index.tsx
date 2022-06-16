import { ReactNode } from 'react';
import StyledButton from 'components/Atoms/Button/index.styles';

export interface ButtonProps {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  buttonStyle: 'DEFAULT' | 'SECONDARY' | 'GITHUB_LOGIN';
  disabled?: boolean;
  label: string;
  children?: ReactNode;
}

const Button = ({ buttonStyle = 'DEFAULT', ...props }: ButtonProps) => {
  const { label, children } = props;

  return (
    <StyledButton type="button" {...props} buttonStyle={buttonStyle}>
      {children}
      {label}
    </StyledButton>
  );
};

export default Button;
