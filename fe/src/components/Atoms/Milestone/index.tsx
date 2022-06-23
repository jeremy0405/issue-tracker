import { colors } from 'styles/theme';
import { ProgressContainer, ProgressBar } from 'components/Atoms/Milestone/index.styles';

export interface MilestoneTypes {
  color?: string;
  progress: number;
}

const Milestone = ({ color = colors.primary.blue, progress }: MilestoneTypes) => {
  return (
    <ProgressContainer>
      <ProgressBar color={color} progress={progress} />
    </ProgressContainer>
  );
};

export default Milestone;
