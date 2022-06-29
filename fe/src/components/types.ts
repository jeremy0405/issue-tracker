export interface UserTypes {
  id: number;
  loginId: string;
  profileImageUrl: string;
}

export type DropdownListTypes = {
  id: number;
  title?: string;
  loginId?: string;
  description?: string;
  dueDate?: string;
  openIssueCount?: number;
  closedIssueCount?: number;
  titleColor?: string;
  backgroundColor?: string;
  profileImageUrl?: string;
};

export type AssignTypes = {
  id: number;
  loginId: string;
  profileImageUrl: string;
};

export type MilestoneTypes = {
  id: number;
  title: string;
  openIssueCount: number;
  closedIssueCount: number;
};

export type LabelTypes = {
  id: number;
  title: string;
  titleColor?: string;
  backgroundColor: string;
  description?: string;
};
