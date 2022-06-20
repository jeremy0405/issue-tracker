import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 54px 0 32px;

  div {
    display: flex;

    label {
      padding-top: 6px;
    }

    div + li {
      margin-left: 20px;
    }
  }
`;

export const AssigneeDiv = styled.div`
  img {
    margin-left: -8px;
  }
`;

export default FlexDiv;
