import { Link } from 'react-router-dom';
import { colors } from 'styles/theme';

import Icon from 'components/Atoms/Icon';
import Label, { LabelTypes } from 'components/Atoms/Label';
import { UserImageTypes } from 'components/Atoms/UserImage';
import { InfoWrapper, StyledLi, TitleWrapper } from 'components/Molecules/IssueList/Issue/Issue.styles';
import convertPreviousDate from 'helpers/utils/convertPreviousDate';

export interface IssueInfoType {
  id: number;
  title: string;
  labels: LabelTypes[];
  writer: UserImageTypes;
  createdAt: string;
  milestone: string;
}

const Issue = (props: IssueInfoType) => {
  const { id, title, labels, writer, createdAt, milestone } = props;

  const labelList = labels.map((label: LabelTypes) => {
    const { titleColor, backgroundColor } = label;

    return <Label {...label} key={`label-${label.id}`} backgroundColor={backgroundColor} titleColor={titleColor} />;
  });

  const nowDate = new Date();

  return (
    <StyledLi>
      <TitleWrapper>
        <Icon fill={colors.primary.lightBlue} icon="AlertCircle" stroke={colors.primary.blue} />
        <Link to={`/issues/${id}`}>{title}</Link>
        {labelList}
      </TitleWrapper>
      <InfoWrapper>
        <span>#{id}</span>
        <span>{`이 이슈가 ${convertPreviousDate(nowDate, createdAt)}, ${
          writer.loginId
        }님에 의해 작성되었습니다.`}</span>
        {milestone && (
          <Link to="/milestones">
            <Icon fill={colors.label} stroke={colors.label} icon="Milestone" />
            {milestone}
          </Link>
        )}
      </InfoWrapper>
    </StyledLi>
  );
};

export default Issue;
