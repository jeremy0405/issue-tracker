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
  milestone: string;
  assignees: UserTypes[];
  writer: UserTypes;
  checkedItemHandler: (id: string, isChecked: boolean) => void;
  checkedIssue: string[];
}

const IssueItem = (props: IssueItemTypes) => {
  const { id, assignees, checkedItemHandler, checkedIssue } = props;

  const assigneeList = assignees.map((user) => {
    return <UserImage {...user} key={`assignees-${user.id}`} />;
  });

  return (
    <FlexDiv>
      <div>
        <CheckBox id={id} checkedItemHandler={checkedItemHandler} checkedIssue={checkedIssue} />
        <Issue {...props} />
      </div>
      <AssigneeDiv>{assigneeList}</AssigneeDiv>
    </FlexDiv>
  );
};

export default IssueItem;
