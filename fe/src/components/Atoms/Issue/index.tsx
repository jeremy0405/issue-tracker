import { Link } from 'react-router-dom';
import { colors } from 'styles/theme';
import Icon from 'components/Atoms/Icon';
import Label, { LabelProps } from 'components/Atoms/Label';
import { InfoWrapper, StyledLi, TitleWrapper } from 'components/Atoms/Issue/Issue.styles';
import convertPreviousDate from 'helpers/convertPreviousDate';

export interface IssueInfoType {
  id: number;
  title: string;
  labels: LabelProps[];
  writer: string;
  timeStamp: string;
  milestoneInfo?: {
    id: number;
    title: string;
  };
}

const Issue = (props: IssueInfoType) => {
  const { id, title, labels, writer, timeStamp, milestoneInfo } = props;

  const labelList = labels.map((label: LabelProps) => {
    const { titleColor, backgroundColor } = label;

    return <Label {...label} backgroundColor={backgroundColor} titleColor={titleColor} />;
  });

  return (
    <StyledLi>
      <TitleWrapper>
        <Icon fill={colors.primary.lightBlue} icon="AlertCircle" stroke={colors.primary.blue} />
        <Link to={`/issues/:${id}`}>{title}</Link>
        {labelList}
      </TitleWrapper>
      <InfoWrapper>
        <span>#{id}</span>
        <span>{`이 이슈가 ${convertPreviousDate(timeStamp)}, ${writer}님에 의해 작성되었습니다.`}</span>
        {milestoneInfo && (
          <Link to={`/milestones/:${milestoneInfo.id}`}>
            <Icon fill={colors.label} stroke={colors.label} icon="Milestone" />
            {milestoneInfo.title}
          </Link>
        )}
      </InfoWrapper>
    </StyledLi>
  );
};

export default Issue;
