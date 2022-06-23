import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthTypes } from 'helpers/utils/fetchData';

const Oauth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getData = async (URL: string): Promise<AuthTypes> => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${URL}`);

    if (data.isMember) {
      navigate('/issues');
    } else {
      navigate('/sign-up');
    }

    return data;
  };

  const { isLoading, data, error } = useQuery<AuthTypes>('auth', () => getData(`api/auth${location.search}`));

  if (isLoading) return <div>로그인 중</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return <div>데이터없음</div>;

  return <div />;
};

export default Oauth;
