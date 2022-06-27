import React, { Dispatch, useEffect, useState } from 'react';

import Label, { LabelTypes } from 'components/Atoms/Label';
import Button from 'components/Atoms/Button';
import LabelInput from 'components/Molecules/CommonForm/Label/LabelInput';
import {
  ButtonWrapper,
  StyledLabelForm,
  StyledLabelInfo,
} from 'components/Molecules/CommonForm/Label/LabelForm/index.styles';

import { COMMON_FORM_BUTTON } from 'helpers/constants/ButtonStyles';

interface LabelFormTypes {
  mode: 'ADD' | 'CONFIRM';
  labelInfo?: LabelTypes;
  setEditLabel?: Dispatch<React.SetStateAction<boolean>>;
}

const DEFAULT_LABEL_INFO: LabelTypes = {
  id: 0,
  title: '',
  titleColor: '#FEFEFE',
  backgroundColor: '#007AFF',
  description: '',
};

const LabelForm = ({ mode = 'ADD', labelInfo, setEditLabel }: LabelFormTypes) => {
  const [labelData, setLabelData] = useState<LabelTypes>(labelInfo || DEFAULT_LABEL_INFO);
  const [disableFinishButton, setDisableFinishButton] = useState<boolean>(true);

  const labelTitle: string = labelData.title === '' ? '레이블 이름' : labelData.title;

  useEffect(() => {}, [labelData]);

  return (
    <StyledLabelForm>
      <div>
        <Label {...labelData} title={labelTitle} />
      </div>
      <StyledLabelInfo>
        <LabelInput {...{ labelData, setLabelData, setDisableFinishButton }} />
        <ButtonWrapper>
          {mode === 'ADD' ? (
            <Button {...COMMON_FORM_BUTTON.add} disabled={disableFinishButton} />
          ) : (
            <>
              <Button {...COMMON_FORM_BUTTON.confirm.cancel} HandleOnClick={() => setEditLabel?.(false)} />
              <Button {...COMMON_FORM_BUTTON.confirm.add} disabled={disableFinishButton} />
            </>
          )}
        </ButtonWrapper>
      </StyledLabelInfo>
    </StyledLabelForm>
  );
};

export default LabelForm;
