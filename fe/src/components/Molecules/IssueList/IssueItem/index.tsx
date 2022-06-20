import CheckBox from 'components/Atoms/CheckBox';
import Issue from 'components/Atoms/Issue';
import UserImage, { UserTypes } from 'components/Atoms/UserImage';
import { LabelProps } from 'components/Atoms/Label';
import FlexDiv, { AssigneeDiv } from 'components/Molecules/IssueList/IssueItem/index.styles';

export interface IssueItemTypes {
  id: number;
  title: string;
  labels: LabelProps[];
  timeStamp: string;
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
    return <UserImage {...user} />;
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
