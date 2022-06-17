import {
  StyledDropdownPanels,
  DropdonwTitle,
  DropdownList,
} from 'components/Atoms/Dropdown/DropdownPanels/index.styles';
import checkOffCircle from 'assets/icons/checkOffCircle.svg';
import checkOnCircle from 'assets/icons/checkOnCircle.svg';

type DropdownListType = {
  id: number;
  title: string;
};

export interface DropdownPanelsProps {
  panelType?: 'checkbox' | 'radio';
  dropdownTitle?: string;
  dropdownList?: DropdownListType[];
  initIcon?: string;
  activeIcon?: string;
}

const defaultDropdownList = [
  { id: 1, title: '선택된 필터' },
  { id: 2, title: '선택되지 않은 필터1' },
  { id: 3, title: '선택되지 않은 필터2' },
];

const DropdownPanels = ({
  panelType = 'radio',
  dropdownTitle = '필터 이름',
  dropdownList = defaultDropdownList,
  initIcon = checkOffCircle,
  activeIcon = checkOnCircle,
  ...props
}: DropdownPanelsProps) => {
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
