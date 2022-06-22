/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import Dropdown from 'components/Atoms/Dropdown';
import UserImage from 'components/Atoms/UserImage';
import Label from 'components/Atoms/Label';
import { StyledSideBar, SideBarItem, Content, User } from 'components/Molecules/SideBar/index.styles';
import Milestone from 'components/Atoms/Milestone';
import React from 'react';

export type DropdownListType = {
  id: number;
  title?: string;
  loginId?: string;
  backgroundColor?: string;
  profileImageUrl?: string;
};

type AssignType = {
  id: number;
  loginId: string;
  profileImageUrl: string;
};

type Milestonetype = {
  id: number;
  title: string;
  progress: number;
};

type LabelType = {
  id: number;
  title: string;
  backgroundColor: string;
};

type ContentListType = AssignType | Milestonetype | LabelType;

export interface SideBarListType {
  id: number;
  type: string;
  indicatorLabel: string;
  dropdownTitle?: string;
  dropdownList: DropdownListType[];
  contentList: ContentListType[];
  clickHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface SideBarProps {
  sideBarList: SideBarListType[];
}

const SideBar = ({ sideBarList }: SideBarProps): JSX.Element => {
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
                      titleColor="#FFFFFF"
                    />
                  );
                if ('progress' in props)
                  return (
                    <div key={props.id}>
                      <Milestone progress={props.progress} />
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
