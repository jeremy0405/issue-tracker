import styled from 'styled-components';
import { colors } from 'styles/theme';

export const ProgressContainer = styled.div`
  width: 244px;
  height: 8px;
  border-radius: 10px;
  background: ${colors.inputBackground};
`;

type ProgressBarType = { progress: number };

const [minProgress, maxProgress] = [0, 100];
export const ProgressBar = styled.div<ProgressBarType>`
  border-radius: 10px;
  height: inherit;
  width: ${({ progress }) => {
    if (progress < minProgress) return minProgress;
    if (progress > maxProgress) return maxProgress;
    return progress;
  }}%;
  background: ${({ color }) => color};
`;
