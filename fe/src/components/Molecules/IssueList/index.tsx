import React, { useState } from 'react';

import { useRecoilState } from 'recoil';
import { QueryStringState } from 'pages/Issues';

import { DropdownListTypes } from 'components/types';

import CheckBox from 'components/Atoms/CheckBox';
import { TabTypes } from 'components/Atoms/Tab';
import Dropdown from 'components/Atoms/Dropdown';

import CommonList from 'components/Molecules/CommonList';
import CommonTitle from 'components/Molecules/CommonList/CommonTitle';
import Tabs from 'components/Molecules/Tabs/';
import IssueItem, { IssueItemTypes as ItemTypes } from 'components/Molecules/IssueList/IssueItem';
import { OpenCloseTab } from 'components/Molecules/IssueList/index.styles';

import OPENCLOSE_FILTER from 'helpers/constants/openCloseFilter';

type IssueItemTypes = Omit<ItemTypes, 'checkedItemHandler' | 'checkedIssue'>;

export interface FilterTabTypes {
  id: number;
  type: string;
  dropdownTitle: string;
  dropdownList: DropdownListTypes[];
  indicatorLabel: string;
}

export interface IssueListTypes {
  openIssueCount: number;
  closedIssueCount: number;
  issues: {
    content: IssueItemTypes[];
  };
  filterTabs: FilterTabTypes[];
  onChange?: (event: React.FormEvent<HTMLElement>) => void;
}

const IssueList = (props: IssueListTypes) => {
  const { openIssueCount, closedIssueCount, issues, filterTabs, onChange } = props;

  const [checkedIssue, setCheckedIssue] = useState<string[]>([]);

  const [recoilValue, setRecoilValue] = useRecoilState(QueryStringState);

  const issueStateTab: TabTypes[] = [
    {
      count: openIssueCount,
      iconInfo: { icon: 'AlertCircle' },
      label: '열린 이슈',
      link: `/issues?page=0&query=is:open`,
      tabStyle: 'STANDARD',
      HandleOnClick: () => setRecoilValue({ ...recoilValue, page: 0, status: 'open' }),
    },
    {
      count: closedIssueCount,
      iconInfo: { icon: 'Archive', stroke: '#14142B' },
      label: '닫힌 이슈',
      link: `/issues?page=0&query=is:closed`,
      tabStyle: 'STANDARD',
      HandleOnClick: () => setRecoilValue({ ...recoilValue, page: 0, status: 'closed' }),
    },
  ];

  const clickedAllIssues = (id: string, isChecked: boolean) => {
    if (isChecked) {
      const newArr = issues.content.map((issue: IssueItemTypes) => String(issue.id));
      setCheckedIssue([...newArr, id]);
    } else {
      setCheckedIssue([]);
    }
  };

  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedIssue([...checkedIssue, id]);
    } else {
      setCheckedIssue(checkedIssue.filter((el) => el !== id && el !== 'ALL'));
    }
  };

  const IssueItems = issues.content.map((content) => {
    return (
      <IssueItem {...content} key={content.id} checkedItemHandler={checkedItemHandler} checkedIssue={checkedIssue} />
    );
  });

  return (
    <CommonList>
      <CommonTitle>
        <OpenCloseTab>
          <CheckBox id="ALL" checkedItemHandler={clickedAllIssues} checkedIssue={checkedIssue} />
          {!checkedIssue.length ? (
            <Tabs tabInfos={issueStateTab} />
          ) : (
            <span className="selected_issue">
              {checkedIssue.filter((checkboxId) => checkboxId !== 'ALL').length}개 이슈 선택
            </span>
          )}
        </OpenCloseTab>
        <div style={{ display: 'flex', gap: '20px' }}>
          {!checkedIssue.length ? (
            filterTabs?.map((tabs: FilterTabTypes) => (
              <Dropdown
                key={tabs.id}
                dropdownTitle={tabs.dropdownTitle}
                dropdownList={tabs.dropdownList}
                indicatorLabel={tabs.indicatorLabel}
                indicatorStyle="STANDARD"
                onChange={onChange}
                type={tabs.type}
              />
            ))
          ) : (
            <Dropdown
              key={OPENCLOSE_FILTER.id}
              dropdownTitle={OPENCLOSE_FILTER.dropdownTitle}
              dropdownList={OPENCLOSE_FILTER.dropdownList}
              panelType="checkbox"
              indicatorLabel={OPENCLOSE_FILTER.indicatorLabel}
              indicatorStyle="STANDARD"
              onChange={onChange}
            />
          )}
        </div>
      </CommonTitle>
      {IssueItems}
    </CommonList>
  );
};

export default IssueList;
