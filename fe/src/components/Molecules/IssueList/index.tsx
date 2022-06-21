import { useState } from 'react';
import CheckBox from 'components/Atoms/CheckBox';
import { TabProps } from 'components/Atoms/Tab';
import Tabs from 'components/Molecules/Tabs/';
import IssueItem, { IssueItemTypes as ItemTypes } from 'components/Molecules/IssueList/IssueItem';
import { IssueTitle, StyeldUl, OpenCloseTab } from 'components/Molecules/IssueList/index.styles';

type IssueItemTypes = Omit<ItemTypes, 'checkedItemHandler' | 'checkedIssue'>;

export interface IssueListTypes {
  openIssueCount: number;
  closedIssueCount: number;
  issues: {
    content: IssueItemTypes[];
  };
}

const IssueList = (props: IssueListTypes) => {
  const { openIssueCount, closedIssueCount, issues } = props;
  const [checkedIssue, setCheckedIssue] = useState<string[]>([]);

  const issueStateTab: TabProps[] = [
    {
      count: openIssueCount,
      iconInfo: {
        icon: 'AlertCircle',
      },
      label: '열린 이슈',
      link: '/labels',
      tabStyle: 'STANDARD',
    },
    {
      count: closedIssueCount,
      iconInfo: {
        icon: 'Archive',
        stroke: '#14142B',
      },
      label: '닫힌 이슈',
      link: '/milestons',
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
      </IssueTitle>
      {IssueItems}
    </StyeldUl>
  );
};

export default IssueList;
