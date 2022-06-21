import styled from 'styled-components';

const FlexDiv = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 54px 16px 32px;

  div {
    display: flex;

    label {
      padding-top: 8px;
    }

    .checkbox {
      margin-right: 32px;
    }
  }
`;

export const AssigneeDiv = styled.div`
  img {
    margin-left: -8px;
  }
`;

export default FlexDiv;
