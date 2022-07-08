const ISSUE_FILTER = [
  {
    id: 'open',
    title: '열린 이슈',
    type: 'status',
  },
  {
    id: '@me',
    title: '내가 작성한 이슈',
    type: 'author',
  },
  {
    id: '@me',
    title: '나에게 할당된 이슈',
    type: 'assignee',
  },
  {
    id: '@me',
    title: '내가 댓글을 남긴 이슈',
    type: 'mentions',
  },
  {
    id: 'closed',
    title: '닫힌 이슈',
    type: 'status',
  },
];

export default ISSUE_FILTER;
