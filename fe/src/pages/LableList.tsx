import React, { useState } from 'react';
import styled from 'styled-components';
import SubNav from 'components/Molecules/SubNav';
import CommonForm from 'components/Molecules/CommonForm';
import LabelForm from 'components/Molecules/CommonForm/Label/LabelForm';
import LabelList from 'components/Molecules/LabelList';
import { LabelTypes } from 'components/Atoms/Label';

const StyledLabelList = styled.div`
  & > div:first-child {
    margin-bottom: 24px;
  }
`;

const LabelPage = () => {
  const [isAddLabel, setIsAddLabel] = useState(false);

  const focusAddLabel = () => setIsAddLabel((focus) => !focus);

  // get 요청으로 바꾸기
  const labelData: LabelTypes[] = [
    {
      id: 1,
      title: 'bug',
      titleColor: '#FFFFFF',
      backgroundColor: '#B9062F',
      description: "Something isn't working",
    },
    {
      id: 2,
      title: 'documentation',
      titleColor: '#FFFFFF',
      backgroundColor: '#007AFF',
      description: 'Improvements or additions to documentation',
    },
    {
      id: 3,
      title: 'duplicate',
      titleColor: '#FFFFFF',
      backgroundColor: '#000000',
      description: 'This issue or pull request already exists',
    },
  ];

  return (
    <StyledLabelList>
      <SubNav
        labelCount={labelData.length}
        milestoneCount={2}
        type={isAddLabel ? 'CLOSE' : 'ADD'}
        HandleOnClick={focusAddLabel}
      />
      {isAddLabel && (
        <CommonForm title="새로운 레이블 추가" style={{ marginBottom: '24px' }}>
          <LabelForm mode="ADD" />
        </CommonForm>
      )}
      <LabelList labelData={labelData} />
    </StyledLabelList>
  );
};

export default LabelPage;
