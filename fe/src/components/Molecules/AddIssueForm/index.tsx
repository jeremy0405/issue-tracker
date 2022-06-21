import Input, { InputProps } from 'components/Atoms/Input';
import Textarea, { TextareaProps } from 'components/Atoms/Textarea';
import { ReactComponent as UserImage } from 'assets/userImg/userImageLarge.svg';
import { StyledAddIssueForm, IssueForm } from 'components/Molecules/AddIssueForm/index.styles';
import useInput from 'hooks/useInput';

export type AddIssueFormProps = InputProps & TextareaProps;

const AddIssueForm = (props: AddIssueFormProps) => {
  const {
    inputSize,
    inputType,
    inputMaxLength,
    inputPlaceholder,
    textareaSize,
    textareaMaxLength,
    textareaPlaceholder,
  } = props;

  const { isActive, isTyping, onChangeInput, onClickInput, onBlurInput } = useInput();

  return (
    <StyledAddIssueForm>
      <UserImage />
      <IssueForm>
        <Input
          isActive={isActive}
          isTyping={isTyping}
          onChange={onChangeInput}
          onClick={onClickInput}
          onBlur={onBlurInput}
          inputSize={inputSize}
          inputType={inputType}
          inputMaxLength={inputMaxLength}
          inputPlaceholder={inputPlaceholder}
        />
        <Textarea
          textareaPlaceholder={textareaPlaceholder}
          textareaMaxLength={textareaMaxLength}
          textareaSize={textareaSize}
        />
      </IssueForm>
    </StyledAddIssueForm>
  );
};

export default AddIssueForm;
