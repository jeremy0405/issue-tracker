/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { IssueItemTypes } from 'components/Molecules/IssueList/IssueItem';

interface UserTypes {
  id: number;
  loginId: string;
  profileImageUrl: string;
}

interface LabelTypes {
  id: number;
  title: string;
  backgroundColor: string;
}

interface MilestoneType {
  id: number;
  title: string;
}

interface ServerDataType {
  openIssueCount: number;
  closedIssueCount: number;
  labelCount: number;
  milestoneCount: number;
  assignees: UserTypes[];
  labels: LabelTypes[];
  milestones: MilestoneType[];
  writers: UserTypes[];
  issues: {
    content: IssueItemTypes[];
  };
}

export const getServerData = async (URL: string): Promise<ServerDataType> => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${URL}`);
  return data;
};
