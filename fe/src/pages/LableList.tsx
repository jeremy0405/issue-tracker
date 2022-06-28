import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import axios from 'axios';
import { ServerDataTypes } from 'api/issue';

import styled from 'styled-components';
import SubNav from 'components/Molecules/SubNav';
import CommonForm from 'components/Molecules/CommonForm';
import LabelForm from 'components/Molecules/CommonForm/Label/LabelForm';
import LabelList from 'components/Molecules/LabelList';
import { LabelTypes } from 'components/Atoms/Label';

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

  const {
    isLoading: labelsDataIsLoading,
    data: labelsData,
    error: labelsDataError,
  } = useQuery('labels', () => getServerData('api/labels'), {
    cacheTime: Infinity,
  });

  const [isAddLabel, setIsAddLabel] = useState(false);
  const focusAddLabel = () => setIsAddLabel((focus) => !focus);

  if (labelsDataIsLoading) return <div>loading</div>;
  if (labelsDataError) return <div>error</div>;
  if (!labelsData) return <div>데이터가 없습니다</div>;

  return (
    <StyledLabelList>
      <SubNav
        labelCount={labelsData.labels.length}
        milestoneCount={issueData!.milestoneCount}
        type={isAddLabel ? 'CLOSE' : 'ADD'}
        HandleOnClick={focusAddLabel}
      />
      {isAddLabel && (
        <CommonForm title="새로운 레이블 추가" style={{ marginBottom: '24px' }}>
          <LabelForm mode="ADD" setIsAddLabel={setIsAddLabel} />
        </CommonForm>
      )}
      <LabelList labelData={labelsData.labels} />
    </StyledLabelList>
  );
};

export default LabelPage;
