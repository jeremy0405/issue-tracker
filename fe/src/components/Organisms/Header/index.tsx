/* eslint-disable camelcase */
import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import UserImage from 'components/Atoms/UserImage';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 0 60px 0;
`;

const Header = () => {
  const data = window.localStorage.getItem('userInfo');
  if (!data) return <div />;

  const { id, login, avatar_url } = JSON.parse(data);

  return (
    <FlexDiv>
      <Logo logoSize="Medium" />
      <UserImage id={id} profileImageUrl={avatar_url} loginId={login} imgSize="MEDIUM" />
    </FlexDiv>
  );
};

export default Header;
