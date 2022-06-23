import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getServerData } from 'helpers/utils/fetchData';

const Oauth = () => {
  const location = useLocation();

  const { isLoading, data, error } = useQuery('auth', () => getServerData(`api/auth${location.search}`));

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>error</div>;

  console.log(data);

  return <div>ㅐㅐㅐㅐㅐ</div>;
};

export default Oauth;
