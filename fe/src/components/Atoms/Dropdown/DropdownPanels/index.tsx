import React from 'react';
import { NavLink } from 'react-router-dom';

import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';
import {
  StyledDropdownPanels,
  DropdonwTitle,
  DropdownList,
} from 'components/Atoms/Dropdown/DropdownPanels/index.styles';
import UserImage from 'components/Atoms/UserImage';
import SmallLabel from 'components/Atoms/SmallLabel';

export type DropdownListType = {
  id: number;
  title?: string;
  loginId?: string;
  backgroundColor?: string;
  profileImageUrl?: string;
};

export interface DropdownPanelsProps {
  dropdownList: DropdownListType[];
  panelType: 'checkbox' | 'radio';
  dropdownTitle?: string;
  clickHandler?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const DropdownPanels = ({ panelType = 'radio', dropdownTitle = '필터 이름', ...props }: DropdownPanelsProps) => {
  const { dropdownList, clickHandler } = props;

  // is:open, author:@me, assignee:@me , mentions:@me ,is:closed //is:issue제외
  // assignee, label, milestone, author,

  return (
    <StyledDropdownPanels>
      <DropdonwTitle>{dropdownTitle}</DropdonwTitle>
      <DropdownList initIcon={checkOffCircle} activeIcon={checkOnCircle} {...props}>
        {dropdownList.map(({ id, loginId, title, backgroundColor, profileImageUrl }: DropdownListType) => (
          <li key={id}>
            <input
              key={`input-${id}`}
              type={panelType}
              name={dropdownTitle}
              id={`${dropdownTitle}-${loginId || title}`}
              data-assigneesdata={[id, loginId, profileImageUrl]}
              data-labelsdata={[id, title, backgroundColor]}
              data-milestonesdata={[id, title]}
              onClick={clickHandler}
            />
            <label key={`label-${id}`} htmlFor={`${dropdownTitle}-${loginId || title}`}>
              {backgroundColor && <SmallLabel fill={backgroundColor} />}
              {profileImageUrl && <UserImage profileImageUrl={profileImageUrl} loginId={loginId!} imgSize="SMALL" />}
              <span>{loginId || title}</span>
            </label>
          </li>
        ))}
      </DropdownList>
    </StyledDropdownPanels>
  );
};

export default DropdownPanels;
