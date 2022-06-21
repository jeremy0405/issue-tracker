import { useQueryClient } from 'react-query';

import styled from 'styled-components';
import AddIssueForm from 'components/Molecules/AddIssueForm';
import SideBar from 'components/Molecules/SideBar';
import Button from 'components/Atoms/Button';

import useInput from 'hooks/useInput';

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
  const [data] = queryClient.getQueriesData('issueData');
  const [key, issueList] = data;
  console.log(issueList);

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
              contentList: [],
              dropdownList: [
                {
                  id: 1,
                  loginId: '담당자가 없는 이슈',
                },
                {
                  id: 2,
                  loginId: 'dobby',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/85747667?s=96&v=4',
                },
                {
                  id: 3,
                  loginId: 'dotori',
                  profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
                },
                {
                  id: 4,
                  loginId: 'jerry',
                  profileImageUrl:
                    'https://post-phinf.pstatic.net/MjAyMTA2MDRfOTAg/MDAxNjIyNzcyMjY1NzQ2.sRxvXF_CKk6NqfiAI6624veOffmu7GDJmXuoMcmgQv0g.ZA1bWEuLFT7--CvzUFZ6TXN2TWX6rhze_t7ilqwk-tcg.JPEG/IMG_3115.jpg?type=w1200',
                },
                {
                  id: 5,
                  loginId: 'who-hoo',
                  profileImageUrl:
                    'https://avatars.githubusercontent.com/u/68011320?s=88&u=c57bfb94cd0919fce142ce2fda6424d3daf54cb8&v=4',
                },
              ],
              id: 1,
              indicatorLabel: '담당자',
              type: 'ASSIGN',
            },
            {
              contentList: [],
              dropdownList: [
                {
                  id: 1,
                  title: '레이블이 없는 이슈',
                },
                {
                  backgroundColor: '#B9062F',
                  id: 2,
                  title: 'bug',
                },
                {
                  backgroundColor: '#FFFFFF',
                  id: 3,
                  title: 'documentation',
                },
                {
                  backgroundColor: '#000000',
                  id: 4,
                  title: 'duplicate',
                },
              ],
              id: 2,
              indicatorLabel: '레이블',
              type: 'LABEL',
            },
            {
              contentList: [],
              dropdownList: [
                {
                  id: 1,
                  title: '마일스톤이 없는 필터',
                },
                {
                  id: 2,
                  title: '1주차 마일스톤 BE',
                },
                {
                  id: 3,
                  title: '1주차 마일스톤 FE',
                },
              ],
              id: 3,
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
