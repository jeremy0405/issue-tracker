import styled from 'styled-components';

export const StyledLi = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  a {
    margin: 0 10px 0 8px;
    ${({ theme }) => theme.fontStyles.linkMedium};
  }

  svg {
    margin-top: 2px;
  }

  div {
    margin-right: 4px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.label};
  ${({ theme }) => theme.fontStyles.textSmall};

  span {
    cursor: default;
  }

  span + span {
    margin: 0 16px;
  }

  a {
    display: flex;
    align-items: center;
    cursor: default;

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
