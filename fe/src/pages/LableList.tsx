import { useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import styled from 'styled-components';
import SubNav from 'components/Molecules/SubNav';
import CommonForm from 'components/Molecules/CommonForm';
import LabelForm from 'components/Molecules/CommonForm/Label/LabelForm';
import LabelList from 'components/Molecules/LabelList';
import { LabelTypes } from 'components/Atoms/Label';
import { ServerDataTypes } from 'helpers/utils/fetchData';
import axios from 'axios';

const StyledLabelList = styled.div`
  & > div:first-child {
    margin-bottom: 24px;
  }
`;

interface LabelServerDataTypes {
  labels: LabelTypes[];
}

const LabelPage = () => {
  const queryClient = useQueryClient();
  const issueData = queryClient.getQueryData<ServerDataTypes>('issueData');

  const getServerData = async (URL: string): Promise<LabelServerDataTypes> => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${URL}`);
    return data;
  };

  const { isLoading, data, error } = useQuery('labels', () => getServerData(`api/labels`), {
    cacheTime: Infinity,
  });

  const [isAddLabel, setIsAddLabel] = useState(false);

  const focusAddLabel = () => setIsAddLabel((focus) => !focus);

  if (isLoading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>데이터가 없습니다</div>;

  return (
    <StyledLabelList>
      <SubNav
        labelCount={data.labels.length}
        milestoneCount={issueData!.milestoneCount}
        type={isAddLabel ? 'CLOSE' : 'ADD'}
        HandleOnClick={focusAddLabel}
      />
      {isAddLabel && (
        <CommonForm title="새로운 레이블 추가" style={{ marginBottom: '24px' }}>
          <LabelForm mode="ADD" />
        </CommonForm>
      )}
      <LabelList labelData={data.labels} />
    </StyledLabelList>
  );
};

export default LabelPage;
