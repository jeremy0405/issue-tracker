/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useGetIssueData from 'api/issue';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

import styled from 'styled-components';
import FilterBar from 'components/Molecules/FilterBar';
import IssueList from 'components/Molecules/IssueList';
import SubNav from 'components/Molecules/SubNav';
import Pagination from 'components/Molecules/Pagination';

import useInput from 'hooks/useInput';

interface QueryStringTypes {
  page: number;
  status: string;
  author?: string;
  assignee?: string;
  mentions?: string;
  label?: string[];
  milestone?: string;
}

type FilterBarState = Omit<QueryStringTypes, 'page'>;

const 필터이름 = {
  '담당자 필터': 'assignee',
  '레이블 필터': 'label',
  '마일스톤 필터': 'milestone',
  '작성자 필터': 'author',
};

export type KeyTypes = keyof typeof 필터이름;

export const QueryStringState = atom<QueryStringTypes>({
  key: 'QueryStringState',
  default: { page: 0, status: 'open', author: '', assignee: '', mentions: '', label: [], milestone: '' },
});

const text = ({ status, author, assignee, mentions, milestone, label }: FilterBarState) => {
  const statusValue = status ? `is:${status}` : '';
  const authorValue = author ? `author:${author}` : '';
  const assigneeValue = assignee ? `assignee:${assignee}` : '';
  const mentionsValue = mentions ? `mentions:${mentions}` : '';
  const milestoneValue = milestone ? `milestone:${milestone}` : '';
  const labelValue = label?.map((data: string) => `label:${data}`).join(' ');

  const textValue = [statusValue, authorValue, assigneeValue, mentionsValue, milestoneValue, labelValue].filter(
    (el) => el !== '',
  );

  return !textValue.length ? '' : textValue.join('+');
};

export const filterValueState = selector({
  key: 'filterValue',
  get: ({ get }) => {
    const user = localStorage.getItem('userInfo');
    const { login } = JSON.parse(user!);
    const { page, status, author, assignee, mentions, milestone, label }: QueryStringTypes = get(QueryStringState);

    const query = text({ status, author, assignee, mentions, milestone, label }).replace('@me', login);
    const queryUrl = query ? `&query=${encodeURIComponent(query)}` : '';

    return `page=${page}${queryUrl}`;
  },
});

export const InputValueState = selector({
  key: 'InputValue',
  get: ({ get }) => {
    const { page, status, author, assignee, mentions, milestone, label }: QueryStringTypes = get(QueryStringState);
    return text({ status, author, assignee, mentions, milestone, label }).replaceAll('+', ' ');
  },
});

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
  const [recoilValue, setRecoilValue] = useRecoilState(QueryStringState);
  const filterValue = useRecoilValue(filterValueState);
  const inputValue = useRecoilValue(InputValueState);

  const inputRef = useRef<HTMLInputElement>(null);

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  // const queryString = searchParams.get('query');
  // const status = (queryString?.match(/(?<=is:)(.*)(?=)/g) || queryString?.match(/(?<=is:)(.*)(?=&)/g))?.join('');

  const { data, error } = useGetIssueData();

  const { onClickInput, onBlurInput } = useInput();
  const navigate = useNavigate();

  const HandleOnClick = () => {
    navigate('/issues/new');
  };

  useEffect(() => {
    navigate(`/issues?${filterValue}`);
  }, [filterValue]);

  if (error) return <div>error</div>;
  if (!data) return <div>데이터가 없습니다</div>;

  const ISSUE_FILTER = [
    {
      id: 'open',
      type: 'status',
      title: '열린 이슈',
      contentList: recoilValue.status,
    },
    {
      id: '@me',
      type: 'author',
      title: '내가 작성한 이슈',
      contentList: recoilValue.author,
    },
    {
      id: '@me',
      type: 'assignee',
      title: '나에게 할당된 이슈',
      contentList: recoilValue.assignee,
    },
    {
      id: '@me',
      type: 'mentions',
      title: '내가 댓글을 남긴 이슈',
      contentList: recoilValue.mentions,
    },
    {
      id: 'closed',
      type: 'status',
      title: '닫힌 이슈',
      contentList: recoilValue.status,
    },
  ];

  const filterTabs = [
    {
      id: 1,
      type: 'assignee',
      dropdownTitle: '담당자 필터',
      dropdownList: data.assignees,
      indicatorLabel: '담당자',
      contentList: recoilValue.assignee,
    },
    {
      id: 2,
      type: 'label',
      dropdownTitle: '레이블 필터',
      dropdownList: data.labels,
      indicatorLabel: '레이블',
      contentList: recoilValue.label,
    },
    {
      id: 3,
      type: 'milestone',
      dropdownTitle: '마일스톤 필터',
      dropdownList: data.milestones,
      indicatorLabel: '마일스톤',
      contentList: recoilValue.milestone,
    },
    {
      id: 4,
      type: 'author',
      dropdownTitle: '작성자 필터',
      dropdownList: data.writers,
      indicatorLabel: '작성자',
      contentList: recoilValue.author,
    },
  ];

  const onChangeFilterBar = (event: React.FormEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { type, id } = event.target.dataset;

    const newType = type as keyof typeof recoilValue;
    if (recoilValue[newType] === id) {
      return setRecoilValue({ ...recoilValue, [newType]: '' });
    }

    switch (type) {
      case 'status': {
        if (id === 'open') {
          setRecoilValue({ ...recoilValue, status: 'open' });
          break;
        }

        if (id === 'closed') {
          setRecoilValue({ ...recoilValue, status: 'closed' });
          break;
        }

        break;
      }
      case 'author':
        setRecoilValue({ ...recoilValue, author: '@me', assignee: '', mentions: '' });
        break;
      case 'assignee':
        setRecoilValue({ ...recoilValue, author: '', assignee: '@me', mentions: '' });
        break;
      case 'mentions':
        setRecoilValue({ ...recoilValue, author: '', assignee: '', mentions: '@me' });
        break;
      default:
        break;
    }
  };

  const onChangeIssueList = (event: React.FormEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { id, name } = event.target;

    const newName = name as KeyTypes;

    const value: string | undefined = id?.match(/(?<=-)(.*)(?=)/g)?.join('');

    switch (newName) {
      case '담당자 필터':
      case '마일스톤 필터':
      case '작성자 필터':
        const 이름 = 필터이름[newName] as keyof typeof recoilValue;

        if (recoilValue[이름] === value) {
          setRecoilValue({ ...recoilValue, [이름]: '' });
        } else {
          setRecoilValue({ ...recoilValue, [이름]: value! });
        }
        break;

      case '레이블 필터':
        const labelData: string[] = recoilValue.label!;

        if (labelData.find((el) => el === value!)) {
          const filterLabelData = [...labelData, value!].filter((el) => el !== value);
          setRecoilValue({ ...recoilValue, label: [...filterLabelData] });
        } else {
          setRecoilValue({ ...recoilValue, label: [...labelData, value!] });
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StyledDiv>
        <FilterBar
          dropdownList={ISSUE_FILTER}
          dropdownTitle="이슈 필터"
          indicatorLabel="Filter"
          indicatorStyle="FILTERBAR"
          inputMaxLength={54}
          inputPlaceholder="Search all issues"
          inputSize="SMALL"
          inputStyle="FILTERBAR"
          inputType="text"
          inputValue={inputValue}
          inputRef={inputRef}
          onBlur={onBlurInput}
          onChange={onChangeFilterBar}
          onClick={onClickInput}
          panelType="checkbox"
        />
        <SubNav labelCount={data.labelCount} milestoneCount={data.milestoneCount} HandleOnClick={HandleOnClick} />
      </StyledDiv>
      <IssueList
        openIssueCount={data.openIssueCount}
        closedIssueCount={data.closedIssueCount}
        issues={data.issues}
        filterTabs={filterTabs}
        onChange={onChangeIssueList}
      />
      <Pagination data={data.issues} page={page} />
    </>
  );
};

export default Issues;
