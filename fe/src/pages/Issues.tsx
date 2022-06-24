/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import FilterBar from 'components/Molecules/FilterBar';
import IssueList from 'components/Molecules/IssueList';
import SubNav from 'components/Molecules/SubNav';

import useInput from 'hooks/useInput';

import { getServerData } from 'helpers/utils/fetchData';
import ISSUE_FILTER from 'helpers/constants/IssueFilter';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > & {
    min-width: fit-content;
  }

  button {
    margin-left: 16px;
  }

  & + ul {
    margin-top: 24px;
  }
`;

const Issues = () => {
  const { isLoading, data, error } = useQuery('issueData', () => getServerData('api/issues?page=0'), {
    cacheTime: Infinity,
  });
  const [isActive, isTyping, onChangeInput, onClickInput, onBlurInput] = useInput();
  const navigate = useNavigate();

  if (isLoading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>데이터가 없습니다</div>;

  const HandleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/issues/new');
  };

  const filterTabs = [
    {
      id: 1,
      dropdownTitle: '담당자 필터',
      dropdownList: data.assignees,
      indicatorLabel: '담당자',
    },
    {
      id: 2,
      dropdownTitle: '레이블 필터',
      dropdownList: data.labels,
      indicatorLabel: '레이블',
    },
    {
      id: 3,
      dropdownTitle: '마일스톤 필터',
      dropdownList: data.milestones,
      indicatorLabel: '마일스톤',
    },
    {
      id: 4,
      dropdownTitle: '작성자 필터',
      dropdownList: data.writers,
      indicatorLabel: '작성자',
    },
  ];

  return (
    <>
      <StyledDiv>
        <FilterBar
          dropdownList={ISSUE_FILTER}
          dropdownTitle="이슈 필터"
          indicatorLabel="Filter"
          indicatorStyle="FILTERBAR"
          inputMaxLength={53}
          inputPlaceholder="Search all issues"
          inputSize="SMALL"
          inputStyle="FILTERBAR"
          inputType="text"
          inputValue="is:open"
          onBlur={onBlurInput}
          onChange={onChangeInput}
          onClick={onClickInput}
          panelType="radio"
        />
        <SubNav
          labelCount={data.labelCount}
          milestoneCount={data.milestoneCount}
          buttonText="이슈 작성"
          HandleOnClick={HandleOnClick}
        />
      </StyledDiv>
      <IssueList
        openIssueCount={data.openIssueCount}
        closedIssueCount={data.closedIssueCount}
        issues={data.issues}
        filterTabs={filterTabs}
      />
    </>
  );
};

export default Issues;
