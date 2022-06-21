import {
  StyledDropdownPanels,
  DropdonwTitle,
  DropdownList,
} from 'components/Atoms/Dropdown/DropdownPanels/index.styles';
import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';
import UserImage from 'components/Atoms/UserImage';
import SmallLabel from 'components/Atoms/SmallLabel';

type DropdownListType = {
  id: number;
  title: string;
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
        {dropdownList.map(({ id, title, backgroundColor, profileImageUrl }: DropdownListType) => (
          <li key={id}>
            <input key={`input-${id}`} type={panelType} name="dropdownList" id={`${id}-${title}`} />
            <label key={`label-${id}`} htmlFor={`${id}-${title}`}>
              {backgroundColor && <SmallLabel fill={backgroundColor} />}
              {profileImageUrl && <UserImage profileImageUrl={profileImageUrl} loginId={title} imgSize="SMALL" />}
              <span>{title}</span>
            </label>
          </li>
        ))}
      </DropdownList>
    </StyledDropdownPanels>
  );
};

export default DropdownPanels;
