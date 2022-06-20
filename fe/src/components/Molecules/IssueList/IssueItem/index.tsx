import React from 'react';

import CheckBox from 'components/Atoms/CheckBox';
import Issue from 'components/Atoms/Issue';
import UserImage, { UserTypes } from 'components/Atoms/UserImage';
import { LabelProps } from 'components/Atoms/Label';
import FlexDiv, { AssigneeDiv } from 'components/Molecules/IssueList/IssueItem/index.styles';

export interface IssueItemTypes {
  id: number;
  status: string;
  title: string;
  labels: LabelProps[];
  createdAt: string;
  milestoneInfo: {
    id: number;
    title: string;
  };
  assignees: UserTypes[];
  writer: UserTypes;
}

const IssueItem = (props: IssueItemTypes) => {
  const { id, assignees } = props;

  const assigneeList = assignees.map((user) => {
    return <UserImage {...user} key={`assignees-${user.id}`} />;
  });

  return (
    <FlexDiv>
      <div>
        <CheckBox id={id} />
        <Issue {...props} />
      </div>
      <AssigneeDiv>{assigneeList}</AssigneeDiv>
    </FlexDiv>
  );
};

export default IssueItem;
