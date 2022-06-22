import React from 'react';
import StyledButton from 'components/Atoms/Button/index.styles';
import Icon, { IconType } from 'components/Atoms/Icon';

export interface ButtonTypes {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  buttonStyle: 'STANDARD' | 'SECONDARY' | 'GITHUB_LOGIN' | 'NO_BORDER';
  disabled?: boolean;
  label: string;
  iconInfo?: { icon: IconType; stroke?: string; fill?: string };
  HandleOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ buttonStyle = 'STANDARD', ...props }: ButtonTypes) => {
  const { label, iconInfo, HandleOnClick } = props;

  return (
    <StyledButton type="button" onClick={HandleOnClick} {...props} buttonStyle={buttonStyle}>
      {iconInfo && <Icon icon={iconInfo.icon} stroke={iconInfo.stroke} fill={iconInfo.fill} />}
      {label}
    </StyledButton>
  );
};

export default Button;
