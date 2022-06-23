/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { IssueItemTypes } from 'components/Molecules/IssueList/IssueItem';
import { UserTypes, LabelTypes, MilestoneTypes } from 'components/types';

export interface ServerDataTypes {
  openIssueCount: number;
  closedIssueCount: number;
  labelCount: number;
  milestoneCount: number;
  assignees: UserTypes[];
  labels: LabelTypes[];
  milestones: MilestoneTypes[];
  writers: UserTypes[];
  issues: {
    content: IssueItemTypes[];
  };
}

export const getServerData = async (URL: string): Promise<ServerDataTypes> => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${URL}`);
  return data;
};
