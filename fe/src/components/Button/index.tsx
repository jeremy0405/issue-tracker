import StyledButton from 'components/Button/index.styles';

interface ButtonProps {
  disabled: boolean;
  label: string;
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  borderStyle: 'STANDARD' | 'SECONDARY';
  onClick: () => void;
}

const Button = ({ size = 'MEDIUM', label, disabled, onClick, borderStyle }: ButtonProps) => {
  return (
    <StyledButton type="button" size={size} disabled={disabled} onClick={onClick} borderStyle={borderStyle}>
      {label}
    </StyledButton>
  );
};

export default Button;
