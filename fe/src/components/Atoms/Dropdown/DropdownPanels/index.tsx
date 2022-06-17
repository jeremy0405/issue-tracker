import {
  StyledDropdownPanels,
  DropdonwTitle,
  DropdownList,
} from 'components/Atoms/Dropdown/DropdownPanels/index.styles';
import checkBoxInitial from 'assets/icons/checkBoxInitial.svg';
import checkBoxActive from 'assets/icons/checkBoxActive.svg';
import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';

type DropdownListType = {
  id: number;
  title: string;
};

export interface DropdownPanelsProps {
  dropdownList: DropdownListType[];
  panelType: 'checkbox' | 'radio';
  dropdownTitle?: string;
}

const DropdownPanels = ({ panelType = 'radio', dropdownTitle = '필터 이름', ...props }: DropdownPanelsProps) => {
  const { dropdownList } = props;

  const [initIcon, activeIcon] =
    panelType === 'checkbox' ? [checkBoxInitial, checkBoxActive] : [checkOffCircle, checkOnCircle];
  return (
    <StyledDropdownPanels>
      <DropdonwTitle>{dropdownTitle}</DropdonwTitle>
      <DropdownList initIcon={initIcon} activeIcon={activeIcon} {...props}>
        {dropdownList.map(({ id, title }: DropdownListType) => (
          <li key={id}>
            <input key={`input-${id}`} type={panelType} name="dropdownList" id={`${id}-${title}`} />
            <label key={`label-${id}`} htmlFor={`${id}-${title}`}>
              <span>{title}</span>
            </label>
          </li>
        ))}
      </DropdownList>
    </StyledDropdownPanels>
  );
};

export default DropdownPanels;
