import styled, { css } from 'styled-components';
import { LabelProps } from 'components/Atoms/Label/';

type LabelStyleProps = Pick<LabelProps, 'labelStyle' | 'titleColor' | 'backgroundColor'>;

const StyledLabel = styled.div<LabelStyleProps>`
  width: fit-content;
  padding: 4px 16px;
  border-radius: 30px;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ titleColor }) => titleColor};
  ${({ theme }) => theme.fontStyles.textXSmall};
  cursor: default;

  ${({ labelStyle }) =>
    labelStyle === 'LINE' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.line};
      background: ${({ theme }) => theme.colors.offWhite};
      color: ${({ theme }) => theme.colors.label};
    `};
`;

export default StyledLabel;
