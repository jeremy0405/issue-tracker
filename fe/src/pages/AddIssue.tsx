import React, { useState } from 'react';
import { useQueryClient } from 'react-query';

import styled from 'styled-components';
import AddIssueForm from 'components/Molecules/AddIssueForm';
import SideBar from 'components/Molecules/SideBar';
import Button from 'components/Atoms/Button';

import useInput from 'hooks/useInput';
import { ServerDataType, UserTypes, LabelTypes, MilestoneType } from 'helpers/utils/fetchData';

const StyledDiv = styled.div`
  h1 {
    cursor: default;
    ${({ theme }) => theme.fontStyles.displayRegular};
  }

  .issue_form {
    display: flex;
    justify-content: space-around;
  }

  .issue_Buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button + button {
      margin-left: 32px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 32px 0;
  background: ${({ theme }) => theme.colors.line};
`;

const AddIssue = () => {
  const { onChangeInput, onClickInput, onBlurInput } = useInput();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ServerDataType>('issueData');

  if (!data) return <div>외않되</div>;

  const { assignees, labels, milestones } = data;

  // 하나로 합치도록 해보기
  const [assigneesContentList, setAssigneesContentList] = useState<UserTypes[]>([]);
  const [labelsContentList, setLabelsContentList] = useState<LabelTypes[]>([]);
  const [milestoneContentList, setMilestoneContentList] = useState<MilestoneType[]>([]);

  const handleAssigneesContentList = (event: React.MouseEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const { assigneesdata } = target.dataset;
    if (!assigneesdata) return;

    const [id, loginId, profileImageUrl] = assigneesdata.split(',');

    if (target.checked) {
      setAssigneesContentList([
        ...assigneesContentList,
        {
          id: Number(id),
          loginId,
          profileImageUrl,
        },
      ]);
    } else {
      setAssigneesContentList(assigneesContentList.filter((el) => el.id !== Number(id)));
    }
  };

  const handleLabelsContentList = (event: React.MouseEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const { labelsdata } = target.dataset;
    if (!labelsdata) return;

    const [id, title, backgroundColor] = labelsdata.split(',');

    if (target.checked) {
      setLabelsContentList([
        ...labelsContentList,
        {
          id: Number(id),
          title,
          backgroundColor,
        },
      ]);
    } else {
      setLabelsContentList(labelsContentList.filter((el) => el.id !== Number(id)));
    }
  };

  // 서버 데이터 수정 기다리기
  const handleMilestoneContentList = (event: React.MouseEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const { milestonesdata } = target.dataset;
    if (!milestonesdata) return;

    const [id, title] = milestonesdata.split(',');

    if (target.checked) {
      setMilestoneContentList([
        ...milestoneContentList,
        {
          id: Number(id),
          title,
        },
      ]);
    } else {
      setMilestoneContentList(milestoneContentList.filter((el) => el.id !== Number(id)));
    }
  };

  return (
    <StyledDiv>
      <h1>새로운 이슈 작성</h1>
      <Divider />
      <div className="issue_form">
        <AddIssueForm
          inputMaxLength={15}
          inputPlaceholder="제목"
          inputSize="LARGE"
          inputType="text"
          onBlur={onBlurInput}
          onChange={onChangeInput}
          onClick={onClickInput}
          textareaMaxLength={600}
          textareaPlaceholder="코멘트를 입력하세요"
          textareaSize="LARGE"
        />
        <SideBar
          sideBarList={[
            {
              id: 1,
              contentList: assigneesContentList,
              clickHandler: handleAssigneesContentList,
              dropdownList: assignees,
              dropdownTitle: '담당자 추가',
              indicatorLabel: '담당자',
              type: 'ASSIGN',
            },
            {
              id: 2,
              contentList: labelsContentList,
              clickHandler: handleLabelsContentList,
              dropdownList: labels,
              dropdownTitle: '레이블 추가',
              indicatorLabel: '레이블',
              type: 'LABEL',
            },
            {
              id: 3,
              contentList: [],
              clickHandler: handleMilestoneContentList,
              dropdownTitle: '마일스톤 추가',
              dropdownList: milestones,
              indicatorLabel: '마일스톤',
              type: 'MILESTONE',
            },
          ]}
        />
      </div>
      <Divider />
      <div className="issue_Buttons">
        <Button buttonStyle="NO_BORDER" iconInfo={{ icon: 'XSquare' }} label="작성취소" size="SMALL" />
        <Button buttonStyle="STANDARD" disabled label="완료" size="MEDIUM" />
      </div>
    </StyledDiv>
  );
};

export default AddIssue;
