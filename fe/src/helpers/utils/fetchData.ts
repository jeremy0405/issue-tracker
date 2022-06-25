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

interface SignUpFormTypes {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string;
}

interface jwtResponseTypes {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface AuthTypes {
  isMember: boolean;
  authMemberResponse: SignUpFormTypes;
  jwtResponse: jwtResponseTypes;
}

export const getServerData = async (URL: string): Promise<ServerDataTypes> => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${URL}`);
  return data;
};
