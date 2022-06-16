import StyledButton from 'components/Atoms/Button/index.styles';
import Icon, { IconType } from 'components/Atoms/Icon';

export interface ButtonProps {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  buttonStyle: 'DEFAULT' | 'SECONDARY' | 'GITHUB_LOGIN';
  disabled?: boolean;
  label: string;
  iconInfo?: { icon: IconType; stroke?: string; fill?: string };
}

const Button = ({ buttonStyle = 'DEFAULT', ...props }: ButtonProps) => {
  const { label, iconInfo } = props;

  return (
    <StyledButton type="button" {...props} buttonStyle={buttonStyle}>
      {iconInfo && <Icon icon={iconInfo.icon} stroke={iconInfo.stroke} fill={iconInfo.fill} />}
      {label}
    </StyledButton>
  );
};

export default Button;
