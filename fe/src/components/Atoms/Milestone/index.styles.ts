import styled from 'styled-components';
import { colors } from 'styles/theme';
import { MilestoneTypes } from 'components/Atoms/Milestone';

export const ProgressContainer = styled.div`
  width: 244px;
  height: 8px;
  border-radius: 10px;
  background: ${colors.inputBackground};
`;

const [minProgress, maxProgress] = [0, 100];
export const ProgressBar = styled.div<MilestoneTypes>`
  border-radius: 10px;
  height: inherit;
  width: ${({ progress }) => {
    if (progress < minProgress) return minProgress;
    if (progress > maxProgress) return maxProgress;
    return progress;
  }}%;
  background: ${({ color }) => color};
`;
