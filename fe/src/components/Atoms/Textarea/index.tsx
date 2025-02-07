import React, { ReactNode, useState, useRef } from 'react';
import { Form, StyledTextarea, AddFile, Count } from 'components/Atoms/Textarea/index.styles';
import Icon from 'components/Atoms/Icon/';

export interface TextareaTypes {
  textareaSize: 'MEDIUM' | 'LARGE';
  textareaPlaceholder?: string;
  textareaMaxLength?: number;
  children?: ReactNode;
}

const defaultTextareaMaxLength = 1000;
const Textarea = ({
  textareaSize = 'LARGE',
  textareaMaxLength = defaultTextareaMaxLength,
  ...props
}: TextareaTypes) => {
  const { textareaPlaceholder } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isTyping, setIsTyping] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  const maxLength = 120;

  const handleFormClick = () => {
    textareaRef.current?.focus();
    setIsActive(true);
  };

  const handleTextareaChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    if (!value) return setIsTyping('');
    // eslint-disable-next-line no-param-reassign
    if (Number(value) >= maxLength) event.currentTarget.value = value.slice(0, maxLength);
    return setIsTyping(value);
  };

  const count = isTyping.length || 0;

  return (
    <Form isActive={isActive} onClick={handleFormClick}>
      {isTyping && (
        <label className="textarea" htmlFor="textarea">
          <span>{textareaPlaceholder}</span>
        </label>
      )}
      <StyledTextarea
        id="textarea"
        maxLength={textareaMaxLength}
        placeholder={textareaPlaceholder}
        textareaSize={textareaSize}
        ref={textareaRef}
        onBlur={() => setIsActive(false)}
        onChange={handleTextareaChange}
      />
      <Count>{`띄어쓰기 포함 ${count}자`}</Count>
      <AddFile>
        <label className="addFile" htmlFor="addFile">
          <input id="addFile" type="file" />
          <Icon icon="PaperClip" />
          <span>파일 첨부하기</span>
        </label>
      </AddFile>
    </Form>
  );
};

export default Textarea;
