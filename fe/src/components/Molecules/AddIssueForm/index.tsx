import { useRef } from 'react';
import { ReactComponent as UserImage } from 'assets/userImg/userImageLarge.svg';
import Input, { InputTypes } from 'components/Atoms/Input';
import Textarea, { TextareaTypes } from 'components/Atoms/Textarea';
import { StyledAddIssueForm, IssueForm } from 'components/Molecules/AddIssueForm/index.styles';

export type AddIssueFormTypes = InputTypes & TextareaTypes;

const AddIssueForm = (props: AddIssueFormTypes) => {
  const {
    isActive,
    isTyping,
    inputSize,
    inputType,
    inputMaxLength,
    inputPlaceholder,
    onChange,
    onClick,
    onBlur,
    textareaSize,
    textareaMaxLength,
    textareaPlaceholder,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <StyledAddIssueForm>
      <UserImage />
      <IssueForm>
        <Input
          isActive={isActive}
          isTyping={isTyping}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          inputSize={inputSize}
          inputType={inputType}
          inputMaxLength={inputMaxLength}
          inputPlaceholder={inputPlaceholder}
          inputRef={inputRef}
        />

        <Textarea
          textareaPlaceholder={textareaPlaceholder}
          textareaMaxLength={textareaMaxLength}
          textareaSize={textareaSize}
          textareaRef={textareaRef}
        />
      </IssueForm>
    </StyledAddIssueForm>
  );
};

export default AddIssueForm;
