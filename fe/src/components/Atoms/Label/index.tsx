import styled, { css } from 'styled-components';
import { colors } from 'styles/theme';

interface LabelProps {
  label: string;
  labelStyle: 'DEFAULT' | 'Line';
  textStyle: 'LIGHT' | 'DARK';
  color: string;
}

interface LabelStyleProps {
  labelStyle: 'DEFAULT' | 'Line';
  textStyle: 'LIGHT' | 'DARK';
  color: string;
}

const StyledLabel = styled.div<LabelStyleProps>`
  width: fit-content;
  padding: 4px 16px;
  border-radius: 30px;
  background: ${({ color }) => color};
  ${({ theme }) => theme.fontStyles.textXSmall};

  ${({ textStyle }) =>
    textStyle === 'LIGHT'
      ? css`
          color: ${({ theme }) => theme.colors.offWhite};
        `
      : css`
          color: ${({ theme }) => theme.colors.titleActive};
        `};

  ${({ labelStyle }) =>
    labelStyle === 'Line' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.line};
      background: ${({ theme }) => theme.colors.offWhite};
      color: ${({ theme }) => theme.colors.label};
    `}
`;

const DEFAULT_COLORS = colors.primary.blue;
const Label = ({ label, labelStyle, textStyle = 'LIGHT', color = DEFAULT_COLORS }: LabelProps) => {
  return (
    <StyledLabel labelStyle={labelStyle} textStyle={textStyle} color={color}>
      {label}
    </StyledLabel>
  );
};

export default Label;
