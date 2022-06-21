import {
  StyledDropdownPanels,
  DropdonwTitle,
  DropdownList,
} from 'components/Atoms/Dropdown/DropdownPanels/index.styles';
import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';
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
}

const DropdownPanels = ({ panelType = 'radio', dropdownTitle = '필터 이름', ...props }: DropdownPanelsProps) => {
  const { dropdownList } = props;

  return (
    <StyledDropdownPanels>
      <DropdonwTitle>{dropdownTitle}</DropdonwTitle>
      <DropdownList initIcon={checkOffCircle} activeIcon={checkOnCircle} {...props}>
        {dropdownList.map((prop: DropdownListType) => (
          <li key={prop.id}>
            <input
              key={`input-${prop.id}`}
              type={panelType}
              name={dropdownTitle}
              id={`${dropdownTitle}-${prop.loginId || prop.title}`}
            />
            <label key={`label-${prop.id}`} htmlFor={`${dropdownTitle}-${prop.loginId || prop.title}`}>
              {prop.backgroundColor && <SmallLabel fill={prop.backgroundColor} />}
              {prop.profileImageUrl && (
                <UserImage profileImageUrl={prop.profileImageUrl} loginId={prop.loginId!} imgSize="SMALL" />
              )}
              <span>{prop.loginId || prop.title}</span>
            </label>
          </li>
        ))}
      </DropdownList>
    </StyledDropdownPanels>
  );
};

export default DropdownPanels;
