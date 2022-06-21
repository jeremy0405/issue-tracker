import { useState } from 'react';

import CheckBox from 'components/Atoms/CheckBox';
import { TabProps } from 'components/Atoms/Tab';
import Dropdown from 'components/Atoms/Dropdown';
import { DropdownListType } from 'components/Atoms/Dropdown/DropdownPanels';

import Tabs from 'components/Molecules/Tabs/';
import IssueItem, { IssueItemTypes as ItemTypes } from 'components/Molecules/IssueList/IssueItem';
import { IssueTitle, StyeldUl, OpenCloseTab } from 'components/Molecules/IssueList/index.styles';

type IssueItemTypes = Omit<ItemTypes, 'checkedItemHandler' | 'checkedIssue'>;

export interface SomeTypes {
  id: number;
  dropdownTitle: string;
  dropdownList: DropdownListType[];
  indicatorLabel: string;
}

export interface IssueListTypes {
  openIssueCount: number;
  closedIssueCount: number;
  issues: {
    content: IssueItemTypes[];
  };
  filterTabs: SomeTypes[];
}

const IssueList = (props: IssueListTypes) => {
  const { openIssueCount, closedIssueCount, issues, filterTabs } = props;

  const [checkedIssue, setCheckedIssue] = useState<string[]>([]);

  const issueStateTab: TabProps[] = [
    {
      count: openIssueCount,
      iconInfo: {
        icon: 'AlertCircle',
      },
      label: '열린 이슈',
      link: '/issues?q=is:open',
      tabStyle: 'STANDARD',
    },
    {
      count: closedIssueCount,
      iconInfo: {
        icon: 'Archive',
        stroke: '#14142B',
      },
      label: '닫힌 이슈',
      link: '/issues?q=is:closed',
      tabStyle: 'STANDARD',
    },
  ];

  const clickedAllIssues = (id: string, isChecked: boolean) => {
    const newArr: string[] = [];
    if (isChecked) {
      issues.content.map((issue: IssueItemTypes) => newArr.push(String(issue.id)));
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

  const openCloseFilter = {
    id: 1,
    dropdownTitle: '상태 변경',
    dropdownList: [
      {
        id: 1,
        title: '선택한 이슈 열기',
      },
      {
        id: 2,
        title: '선택한 이슈 닫기',
      },
    ],
    indicatorLabel: '상태 수정',
  };

  return (
    <StyeldUl>
      <IssueTitle>
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
            filterTabs?.map((tabs: SomeTypes) => (
              <Dropdown
                key={tabs.id}
                dropdownTitle={tabs.dropdownTitle}
                dropdownList={tabs.dropdownList}
                panelType="checkbox"
                indicatorLabel={tabs.indicatorLabel}
                indicatorStyle="STANDARD"
              />
            ))
          ) : (
            <Dropdown
              key={openCloseFilter.id}
              dropdownTitle={openCloseFilter.dropdownTitle}
              dropdownList={openCloseFilter.dropdownList}
              panelType="checkbox"
              indicatorLabel={openCloseFilter.indicatorLabel}
              indicatorStyle="STANDARD"
            />
          )}
        </div>
      </IssueTitle>
      {IssueItems}
    </StyeldUl>
  );
};

export default IssueList;
