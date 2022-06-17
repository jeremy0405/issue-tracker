import styled from 'styled-components';

export const StyledLi = styled.li`
  list-style: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  a {
    margin: 0 10px 0 8px;
    ${({ theme }) => theme.fontStyles.linkMedium};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.label};
  ${({ theme }) => theme.fontStyles.textSmall};

  span + span {
    margin: 0 16px;
  }

  a {
    display: flex;
    align-items: center;
    svg {
      height: 100%;
      margin-right: 8px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.darkBlue};

      path {
        stroke: ${({ theme }) => theme.colors.primary.darkBlue};
        fill: ${({ theme }) => theme.colors.primary.darkBlue};
      }
    }
  }
`;
