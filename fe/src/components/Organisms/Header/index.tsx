import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import UserImage, { UserTypes } from 'components/Atoms/UserImage';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type UserImageType = Omit<UserTypes, 'imgSize'>;

const Header = () => {
  const userInfo: UserImageType = {
    loginId: '도톨',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
  };

  const { loginId, profileImageUrl } = userInfo;

  return (
    <FlexDiv>
      <Logo logoSize="Medium" />
      <UserImage profileImageUrl={profileImageUrl} loginId={loginId} imgSize="MEDIUM" />
    </FlexDiv>
  );
};

export default Header;
