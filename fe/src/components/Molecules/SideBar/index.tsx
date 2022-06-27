/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import React from 'react';

import Dropdown from 'components/Atoms/Dropdown';
import UserImage from 'components/Atoms/UserImage';
import Label from 'components/Atoms/Label';
import Milestone from 'components/Atoms/Milestone';

import { StyledSideBar, SideBarItem, Content, User } from 'components/Molecules/SideBar/index.styles';

import { AssignTypes, DropdownListTypes, LabelTypes, MilestoneTypes } from 'components/types';

type ContentListType = AssignTypes | MilestoneTypes | LabelTypes;

export interface SideBarListType {
  id: number;
  type: string;
  indicatorLabel: string;
  dropdownTitle?: string;
  dropdownList: DropdownListTypes[];
  contentList: ContentListType[];
  clickHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface SideBarTypes {
  sideBarList: SideBarListType[];
}

const SideBar = ({ sideBarList }: SideBarTypes): JSX.Element => {
  return (
    <StyledSideBar>
      {sideBarList.map(({ id, type, indicatorLabel, dropdownTitle, dropdownList, contentList, clickHandler }) => (
        <div className="table-row" key={id}>
          <SideBarItem>
            <Dropdown
              dropdownTitle={dropdownTitle}
              dropdownList={dropdownList}
              indicatorLabel={indicatorLabel}
              indicatorStyle="SIDEBAR"
              panelType="checkbox"
              clickHandler={clickHandler}
            />
            <Content type={type}>
              {contentList.map((props: ContentListType) => {
                if ('loginId' in props)
                  return (
                    <User key={props.id}>
                      <UserImage profileImageUrl={props.profileImageUrl} loginId={props.loginId} imgSize="MEDIUM" />
                      <p>{props.loginId}</p>
                    </User>
                  );

                if ('backgroundColor' in props)
                  return (
                    <Label
                      key={props.id}
                      backgroundColor={props.backgroundColor}
                      title={props.title}
                      labelStyle="STANDARD"
                      titleColor="black"
                    />
                  );
                if ('openIssueCount' in props)
                  return (
                    <div key={props.id}>
                      <Milestone openIssueCount={props.openIssueCount} closedIssueCount={props.closedIssueCount} />
                      <p>{props.title}</p>
                    </div>
                  );
              })}
            </Content>
          </SideBarItem>
        </div>
      ))}
    </StyledSideBar>
  );
};

export default SideBar;
