import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import Tabs from 'components/Molecules/Tabs';
import React from 'react';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface SubNavTypes {
  labelCount: number;
  milestoneCount: number;
  buttonText: string;
  HandleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubNav = ({ labelCount, milestoneCount, buttonText, HandleOnClick }: SubNavTypes) => {
  return (
    <StyledDiv>
      <Tabs
        tabInfos={[
          {
            border: 'LEFT',
            count: labelCount,
            iconInfo: {
              icon: 'Tag',
            },
            label: '레이블',
            link: '/labels',
            tabStyle: 'FILL',
          },
          {
            border: 'RIGHT',
            count: milestoneCount,
            iconInfo: {
              fill: '#14142B',
              icon: 'Milestone',
            },
            label: '마일스톤',
            link: '/milestones',
            tabStyle: 'FILL',
          },
        ]}
      />
      <Button
        buttonStyle="STANDARD"
        iconInfo={{
          fill: '#FEFEFE',
          icon: 'Plus',
          stroke: '#FEFEFE',
        }}
        label={buttonText}
        size="SMALL"
        HandleOnClick={HandleOnClick}
      />
    </StyledDiv>
  );
};

export default SubNav;
