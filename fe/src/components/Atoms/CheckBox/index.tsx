/* eslint-disable jsx-a11y/label-has-associated-control */
import StyledDiv from 'components/Atoms/CheckBox/index.styles';

const CheckBox = ({ id }: { id: number }) => {
  return (
    <StyledDiv>
      <input type="checkbox" id={`checkbox-${id}`} />
      <label htmlFor={`checkbox-${id}`} />
    </StyledDiv>
  );
};

export default CheckBox;
