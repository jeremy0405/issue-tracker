import { Link } from 'react-router-dom';
import { colors } from 'styles/theme';

import Icon from 'components/Atoms/Icon';
import Label, { LabelProps } from 'components/Atoms/Label';
import { InfoWrapper, StyledLi, TitleWrapper } from 'components/Atoms/Issue/Issue.styles';
import { UserTypes } from 'components/Atoms/UserImage';

import convertPreviousDate from 'helpers/utils/convertPreviousDate';

export interface IssueInfoType {
  id: number;
  title: string;
  labels: LabelProps[];
  writer: UserTypes;
  createdAt: string;
  milestone: string;
}

const Issue = (props: IssueInfoType) => {
  const { id, title, labels, writer, createdAt, milestone } = props;

  const labelList = labels.map((label: LabelProps) => {
    const { titleColor, backgroundColor } = label;

    return <Label {...label} key={`label-${label.id}`} backgroundColor={backgroundColor} titleColor={titleColor} />;
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
        <span>{`이 이슈가 ${convertPreviousDate(createdAt)}, ${writer.loginId}님에 의해 작성되었습니다.`}</span>
        {milestone && (
          <span>
            <Icon fill={colors.label} stroke={colors.label} icon="Milestone" />
            {milestone}
          </span>
        )}
      </InfoWrapper>
    </StyledLi>
  );
};

export default Issue;
