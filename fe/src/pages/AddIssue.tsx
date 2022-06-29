import { useMutation, useQueryClient } from 'react-query';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetLabelData } from 'api/label';
import useGetMilestoneData from 'api/milestone';
import useGetMembersData from 'api/member';

import styled from 'styled-components';
import AddIssueForm from 'components/Molecules/AddIssueForm';
import SideBar from 'components/Molecules/SideBar';
import Button from 'components/Atoms/Button';

import { UserTypes, LabelTypes, MilestoneTypes } from 'components/types';

import useInput from 'hooks/useInput';
import axios from 'axios';

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

interface NewIssueTypes {
  title: string;
  comment: string | null;
  writerId: number;
  assigneesIds: number[];
  labelIds: number[];
  milestoneId: number | null;
}

const AddIssue = () => {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { isActive, isTyping, onChangeInput, onClickInput, onBlurInput } = useInput();
  const [assigneesContentList, setAssigneesContentList] = useState<UserTypes[]>([]);
  const [labelsContentList, setLabelsContentList] = useState<LabelTypes[]>([]);
  const [milestoneContentList, setMilestoneContentList] = useState<MilestoneTypes[]>([]);

  const [isFilled, setIsFilled] = useState<boolean>(false);

  const queryClient = useQueryClient();
  // const data = queryClient.getQueryData<ServerDataTypes>('issueData');

  // if (!data) return <div>데이터가 없습니다</div>;

  // const { assignees, labels, milestones } = data;

  const { isLoading: labelsDataIsLoading, data: labelData, error: labelsDataError } = useGetLabelData();
  const { isLoading: milestonesDataIsLoading, data: milestoneData, error: milestonesDataError } = useGetMilestoneData();
  const { isLoading: membersDataIsLoading, data: memberData, error: membersDataError } = useGetMembersData();

  // 하나로 합치도록 해보기

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

  const handleMilestoneContentList = (event: React.MouseEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLInputElement)) return;

    const { milestonesdata } = target.dataset;
    if (!milestonesdata) return;

    const [id, title, openIssueCount, closedIssueCount] = milestonesdata.split(',');

    if (target.checked) {
      setMilestoneContentList([
        ...milestoneContentList,
        {
          id: Number(id),
          title,
          openIssueCount: Number(openIssueCount),
          closedIssueCount: Number(closedIssueCount),
        },
      ]);
    } else {
      setMilestoneContentList(milestoneContentList.filter((el) => el.id !== Number(id)));
    }
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChangeInput(event);
    if (event.currentTarget.value) setIsFilled(true);
    else setIsFilled(false);
  };

  const addIssue = async (newIssue: NewIssueTypes): Promise<NewIssueTypes> => {
    const { data: addIssueData } = await axios.post<NewIssueTypes>(
      `${process.env.REACT_APP_SERVER_URL}/api/issues`,
      newIssue,
    );

    return addIssueData;
  };

  // 새로운 이슈를 등록하면 업데이트할 데이터 페이지?
  const { mutate } = useMutation(addIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries('issueData');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleUploadButtonClick = () => {
    const userData = localStorage.getItem('userInfo');

    const issueInfo: NewIssueTypes = {
      title: inputRef.current?.value!,
      comment: textareaRef.current?.value || null,
      writerId: JSON.parse(userData!).id,
      assigneesIds: assigneesContentList.map((list) => list.id),
      labelIds: labelsContentList.map((list) => list.id),
      milestoneId: milestoneContentList.map((list) => list.id)[0] || null,
    };

    mutate(issueInfo);
    navigate('/');
  };

  if (labelsDataIsLoading || milestonesDataIsLoading || membersDataIsLoading) return <div>loading</div>;
  if (labelsDataError || milestonesDataError || membersDataError) return <div>error</div>;
  if (!labelData || !milestoneData || !memberData) return <div>데이터가 없습니다</div>;

  const sideBarList = [
    {
      id: 1,
      contentList: assigneesContentList,
      clickHandler: handleAssigneesContentList,
      dropdownList: memberData.members,
      dropdownTitle: '담당자 추가',
      indicatorLabel: '담당자',
      type: 'ASSIGN',
    },
    {
      id: 2,
      contentList: labelsContentList,
      clickHandler: handleLabelsContentList,
      dropdownList: labelData.labels,
      dropdownTitle: '레이블 추가',
      indicatorLabel: '레이블',
      type: 'LABEL',
    },
    {
      id: 3,
      contentList: milestoneContentList,
      clickHandler: handleMilestoneContentList,
      dropdownTitle: '마일스톤 추가',
      dropdownList: milestoneData.milestones,
      indicatorLabel: '마일스톤',
      type: 'MILESTONE',
    },
  ];

  return (
    <StyledDiv>
      <h1>새로운 이슈 작성</h1>
      <Divider />
      <div className="issue_form">
        <AddIssueForm
          isActive={isActive}
          isTyping={isTyping}
          inputMaxLength={15}
          inputPlaceholder="제목"
          inputSize="LARGE"
          inputType="text"
          inputRef={inputRef}
          onBlur={onBlurInput}
          onChange={onChange}
          onClick={onClickInput}
          textareaMaxLength={600}
          textareaPlaceholder="코멘트를 입력하세요"
          textareaSize="LARGE"
          textareaRef={textareaRef}
        />
        <SideBar sideBarList={sideBarList} />
      </div>
      <Divider />
      <div className="issue_Buttons">
        <Button
          buttonStyle="NO_BORDER"
          iconInfo={{ icon: 'XSquare' }}
          label="작성취소"
          size="SMALL"
          HandleOnClick={() => navigate(-1)}
        />
        <Button
          buttonStyle="STANDARD"
          disabled={!isFilled}
          label="완료"
          size="MEDIUM"
          HandleOnClick={handleUploadButtonClick}
        />
      </div>
    </StyledDiv>
  );
};

export default AddIssue;
