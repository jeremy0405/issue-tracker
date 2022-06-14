import StyledButton from './index.styles';

interface ButtonProps {
  disabled: boolean;
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  label: string;
  onClick: () => void;
}

const Button = ({ size = 'MEDIUM', label, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton type="button" size={size} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
