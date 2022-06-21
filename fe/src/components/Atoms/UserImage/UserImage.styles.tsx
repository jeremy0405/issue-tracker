import styled, { css } from 'styled-components';
import { UserTypes } from 'components/Atoms/UserImage/';

type UserImageStyleProps = Pick<UserTypes, 'imgSize'>;

const StyledImg = styled.img<UserImageStyleProps>`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 50%;

  ${({ imgSize }) => {
    return imgSize === 'MEDIUM'
      ? css`
          width: 44px;
          height: 44px;
        `
      : css`
          width: 20px;
          height: 20px;
        `;
  }}
`;

export default StyledImg;
