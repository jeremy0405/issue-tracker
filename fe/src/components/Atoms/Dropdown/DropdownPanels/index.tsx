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

import { DropdownListTypes } from 'components/types';
import { KeyTypes, QueryStringState } from 'pages/Issues';

import { useRecoilValue } from 'recoil';

export interface DropdownPanelsTypes {
  dropdownList: DropdownListTypes[];
  panelType?: 'checkbox' | 'radio';
  dropdownTitle?: KeyTypes | '이슈 필터' | '필터 이름' | string;
  type?: string;

  clickHandler?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLElement>) => void;
}

const DropdownPanels = ({ panelType = 'checkbox', dropdownTitle = '필터 이름', ...props }: DropdownPanelsTypes) => {
  const { dropdownList, clickHandler, type, onChange } = props;
  const queryStringState = useRecoilValue(QueryStringState);

  return (
    <StyledDropdownPanels onChange={onChange}>
      <DropdonwTitle>{dropdownTitle}</DropdonwTitle>
      <DropdownList initIcon={checkOffCircle} activeIcon={checkOnCircle}>
        {dropdownList.map(
          ({ id, loginId, title, backgroundColor, profileImageUrl, type: listType }: DropdownListTypes) => {
            const newType = (type as keyof typeof queryStringState) || (listType as keyof typeof queryStringState);
            const checkedPanel = queryStringState[newType];

            const checkedBox = (panel: any) => {
              if (!panel) {
                return false;
              }

              if (Array.isArray(panel)) {
                return !!panel.find((e) => e === title);
              }

              if (typeof panel === 'string') {
                return checkedPanel === loginId || checkedPanel === title || checkedPanel === id;
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
                  checked={checkedBox(checkedPanel)}
                  onClick={clickHandler}
                  readOnly
                />
                <label htmlFor={`${dropdownTitle}-${loginId || title}`}>
                  {backgroundColor && <SmallLabel fill={backgroundColor} />}
                  {profileImageUrl && (
                    <UserImage profileImageUrl={profileImageUrl} loginId={loginId!} imgSize="SMALL" />
                  )}
                  <span>{loginId || title}</span>
                </label>
              </li>
            );
          },
        )}
      </DropdownList>
    </StyledDropdownPanels>
  );
};

export default DropdownPanels;
