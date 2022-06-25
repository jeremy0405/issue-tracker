import { colors } from 'styles/theme';
import { ProgressContainer, ProgressBar } from 'components/Atoms/Milestone/index.styles';

export interface MilestoneTypes {
  color?: string;
  openIssueCount: number;
  closedIssueCount: number;
}

const Milestone = ({ color = colors.primary.blue, openIssueCount, closedIssueCount }: MilestoneTypes) => {
  const percentage = 100;
  const totalCount = openIssueCount + closedIssueCount;
  const progress = (closedIssueCount / totalCount) * percentage;
  return (
    <ProgressContainer>
      <ProgressBar color={color} progress={progress} />
    </ProgressContainer>
  );
};

export default Milestone;
