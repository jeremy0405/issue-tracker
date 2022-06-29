import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ServerDataTypes } from 'api/issue';

import styled from 'styled-components';
import Comment from 'components/Molecules/Comment';
import IssueHeader from 'components/Molecules/IssueHeader';
import SideBar from 'components/Molecules/SideBar';

import { UserTypes, LabelTypes, MilestoneTypes } from 'components/types';

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 32px 0;
  background: ${({ theme }) => theme.colors.line};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CommentList = styled.div`
  & > div + div {
    margin-top: 24px;
  }

  & > div:last-child {
    margin-top: 40px;
  }
`;

interface ReactionTypes {
  emoji: string;
  members: UserTypes[];
}
interface CommentsTypes {
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: UserTypes;
  reactions: ReactionTypes[];
}
export interface IssueDetailDataTypes {
  id: number;
  status: string;
  title: string;
  writer: UserTypes;
  assignees: UserTypes[];
  labels: LabelTypes[];
  milestones: MilestoneTypes[];
  comments: CommentsTypes[];
}

const IssueDetail = () => {
  const { issueId } = useParams();

  const getServerData = async (URL: string): Promise<IssueDetailDataTypes> => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${URL}`);
    return data;
  };

  const { isLoading, data, error } = useQuery(`issueDetail${issueId}`, () => getServerData(`api/issues/${issueId}`), {
    cacheTime: Infinity,
  });

  const queryClient = useQueryClient();
  const issueData = queryClient.getQueryData<ServerDataTypes>('issueData');
  if (!issueData) return <div>issueData 없음</div>;
  const { assignees, labels, milestones } = issueData;

  if (isLoading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>데이터가 없습니다</div>;

  return (
    <>
      <div>
        <IssueHeader
          id={data.id}
          status={data.status}
          title={data.title}
          isWriter
          writer={data.writer}
          commentCount={data.comments.length}
          createTime="2022-06-26T15:41:03.730526"
        />
        <Divider />
      </div>
      <Content>
        <CommentList>
          {data.comments.map((comment) => (
            <Comment key={`${comment.createdAt}-${comment.content}`} isOpen isWriter comments={comment} />
          ))}
          <Comment isNewComment isOpen isWriter />
        </CommentList>
        <SideBar
          sideBarList={[
            {
              contentList: data.assignees,
              dropdownList: assignees,
              dropdownTitle: '담당자 필터',
              id: 1,
              indicatorLabel: '담당자',
              type: 'ASSIGN',
            },
            {
              contentList: data.labels,
              dropdownList: labels,
              dropdownTitle: '레이블 필터',
              id: 2,
              indicatorLabel: '레이블',
              type: 'LABEL',
            },
            {
              contentList: [
                {
                  id: 1,
                  title: '1주차 마일스톤 BE',
                  openIssueCount: 9,
                  closedIssueCount: 8,
                },
              ],
              dropdownList: milestones,
              dropdownTitle: '마일스톤 필터',
              id: 3,
              indicatorLabel: '마일스톤',
              type: 'MILESTONE',
            },
          ]}
        />
      </Content>
    </>
  );
};

export default IssueDetail;
