import { ProgressContainer, ProgressBar } from 'components/Atoms/Milestone/index.styles';
import { colors } from 'styles/theme';

export interface MilestoneProps {
  color?: string;
  progress: number;
}

const Milestone = ({ color = colors.primary.blue, progress }: MilestoneProps) => {
  return (
    <ProgressContainer>
      <ProgressBar color={color} progress={progress} />
    </ProgressContainer>
  );
};

export default Milestone;
