import CheckBox from 'components/Atoms/CheckBox';
import Issue from 'components/Atoms/Issue';
import UserImage, { UserImageProps } from 'components/Atoms/UserImage';
import { LabelProps } from 'components/Atoms/Label';
import FlexDiv from 'components/Molecules/IssueList/IssueItem/index.styles';

export interface IssueItemTypes {
  id: number;
  title: string;
  labels: LabelProps[];
  timeStamp: string;
  milestoneInfo: {
    id: number;
    title: string;
  };
  userInfo: UserImageProps;
}

const IssueItem = (props: IssueItemTypes) => {
  const { id, userInfo } = props;

  return (
    <FlexDiv>
      <div>
        <CheckBox id={id} />
        <Issue {...props} writer={userInfo.userName} />
      </div>
      <UserImage {...userInfo} />
    </FlexDiv>
  );
};

export default IssueItem;
