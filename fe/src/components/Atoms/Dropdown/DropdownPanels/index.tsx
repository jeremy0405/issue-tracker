import React from 'react';

import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';
import {
  StyledDropdownPanels,
  DropdonwTitle,
  DropdownList,
} from 'components/Atoms/Dropdown/DropdownPanels/index.styles';
import UserImage from 'components/Atoms/UserImage';
import SmallLabel from 'components/Atoms/SmallLabel';

import { KeyTypes } from 'pages/Issues';
import { DropdownListTypes } from 'components/types';

export interface DropdownPanelsTypes {
  type?: string;
  panelType?: 'checkbox' | 'radio';
  dropdownTitle?: KeyTypes | '이슈 필터' | '필터 이름' | string;
  dropdownList: DropdownListTypes[];
  contentList?: string | string[];
  clickHandler?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLElement>) => void;
}

const DropdownPanels = ({ panelType = 'checkbox', dropdownTitle = '필터 이름', ...props }: DropdownPanelsTypes) => {
  const { contentList, dropdownList, clickHandler, type, onChange } = props;

  return (
    <StyledDropdownPanels onChange={onChange}>
      <DropdonwTitle>{dropdownTitle}</DropdonwTitle>
      <DropdownList initIcon={checkOffCircle} activeIcon={checkOnCircle}>
        {dropdownList.map(({ ...listProps }: DropdownListTypes) => {
          const {
            id,
            loginId,
            title,
            backgroundColor,
            profileImageUrl,
            type: listType,
            contentList: listContentList,
          } = listProps;
          const realContentList = contentList || listContentList;
          const checkedBox = () => {
            if (!realContentList) {
              return false;
            }

            if (Array.isArray(realContentList)) {
              return !!realContentList.find((e) => e === title) || !!realContentList.find((e) => e === loginId);
            }

            if (typeof realContentList === 'string') {
              return realContentList === loginId || realContentList === title || realContentList === id;
            }
          };

          return (
            <li key={`${type || listType}-${id}`}>
              <input
                type={panelType}
                name={dropdownTitle}
                id={`${dropdownTitle}-${loginId || title}`}
                data-type={type || listType}
                data-id={id}
                checked={checkedBox()}
                onClick={clickHandler}
                readOnly
              />
              <label htmlFor={`${dropdownTitle}-${loginId || title}`}>
                {backgroundColor && <SmallLabel fill={backgroundColor} />}
                {profileImageUrl && <UserImage profileImageUrl={profileImageUrl} loginId={loginId!} imgSize="SMALL" />}
                <span>{loginId || title}</span>
              </label>
            </li>
          );
        })}
      </DropdownList>
    </StyledDropdownPanels>
  );
};

export default DropdownPanels;
