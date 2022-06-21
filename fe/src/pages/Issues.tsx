/* eslint-disable react/jsx-no-bind */
import styled from 'styled-components';

import FilterBar from 'components/Molecules/FilterBar';
import IssueList from 'components/Molecules/IssueList';

import useInput from 'hooks/useInput';
import SubNav from 'components/Molecules/SubNav';

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
  const { onChangeInput, onClickInput, onBlurInput } = useInput();

  return (
    <>
      <StyledDiv>
        <FilterBar
          dropdownList={[
            {
              id: 1,
              title: '선택된 필터',
            },
            {
              id: 2,
              title: '선택되지 않은 필터1',
            },
            {
              id: 3,
              title: '선택되지 않은 필터2',
            },
          ]}
          indicatorLabel="Filter"
          indicatorStyle="FILTERBAR"
          inputMaxLength={53}
          inputPlaceholder="Search all issues"
          inputSize="SMALL"
          inputStyle="FILTERBAR"
          inputType="text"
          inputValue="is:issue is:open"
          onBlur={onBlurInput}
          onChange={onChangeInput}
          onClick={onClickInput}
          panelType="radio"
        />
        <SubNav labelCount={3} milestoneCount={2} buttonText="이슈 작성" />
      </StyledDiv>
      <IssueList
        openIssueCount={0}
        closedIssueCount={0}
        issues={{
          content: [
            {
              assignees: [
                {
                  id: 0,
                  loginId: '도톨',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
                },
                {
                  id: 1,
                  loginId: '도비',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
                },
                {
                  id: 2,
                  loginId: '후',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/68011320?v=4',
                },
                {
                  id: 3,
                  loginId: '제리',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/81368630?v=4',
                },
              ],
              createdAt: '2022-06-20T01:05:45.880Z',
              id: 0,
              labels: [
                {
                  backgroundColor: '#007AFF',
                  description: 'string',
                  labelId: 0,
                  labelTitle: 'documentation',
                  titleColor: 'LIGHT',
                },
                {
                  backgroundColor: '#CCD4FF',
                  description: 'string',
                  labelId: 1,
                  labelTitle: 'FE',
                  titleColor: 'LIGHT',
                },
                {
                  backgroundColor: '#34C759',
                  description: 'string',
                  labelId: 2,
                  labelTitle: 'BE',
                  titleColor: 'DARK',
                },
              ],
              milestoneInfo: {
                id: 0,
                title: '이슈 트래커',
              },
              status: 'string',
              title: '이슈 트래커 개발',
              writer: {
                id: 0,
                loginId: '제리',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/81368630?v=4',
              },
            },
            {
              assignees: [
                {
                  id: 0,
                  loginId: '도톨',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
                },
                {
                  id: 1,
                  loginId: '도비',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
                },
              ],
              createdAt: '2022-06-20T01:05:45.880Z',
              id: 1,
              labels: [
                {
                  backgroundColor: '#CCD4FF',
                  description: 'string',
                  labelId: 0,
                  labelTitle: 'FE',
                  titleColor: 'LIGHT',
                },
              ],
              milestoneInfo: {
                id: 1,
                title: 'FE 이슈 트래커',
              },
              status: 'string',
              title: 'FE 이슈 트래커 개발',
              writer: {
                id: 0,
                loginId: '도톨',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
              },
            },
          ],
        }}
        filterTabs={[
          {
            id: 1,
            dropdownTitle: '담당자 필터',
            dropdownList: [
              {
                id: 1,
                title: '도톨',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
              },
              {
                id: 2,
                title: 'dobby',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
              },
            ],
            indicatorLabel: '담당자',
          },
          {
            id: 2,
            dropdownTitle: '레이블 필터',
            dropdownList: [
              {
                id: 0,
                backgroundColor: 'coral',
                title: 'FE 🌈',
              },
              {
                id: 1,
                backgroundColor: 'red',
                title: 'bug 🐛',
              },
              {
                id: 2,
                backgroundColor: 'skyblue',
                title: 'UI 🎨',
              },
            ],
            indicatorLabel: '레이블',
          },
          {
            id: 3,
            dropdownTitle: '마일스톤 필터',
            dropdownList: [
              {
                id: 1,
                title: '선택된 필터',
              },
              {
                id: 2,
                backgroundColor: 'red',
                title: 'bug',
              },
              {
                id: 3,
                title: 'dobby',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
              },
            ],
            indicatorLabel: '마일스톤',
          },
          {
            id: 4,
            dropdownTitle: '작성자 필터',
            dropdownList: [
              {
                id: 1,
                title: '도톨',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
              },
              {
                id: 2,
                title: 'dobby',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
              },
            ],
            indicatorLabel: '작성자',
          },
        ]}
      />
    </>
  );
};

export default Issues;
