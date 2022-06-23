import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import UserImage, { UserImageTypes } from 'components/Atoms/UserImage';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 0 60px 0;
`;

type UserImageType = Omit<UserImageTypes, 'imgSize'>;

const Header = () => {
  const userInfo: UserImageType = {
    id: 0,
    loginId: '도톨',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
  };

  const { id, loginId, profileImageUrl } = userInfo;

  return (
    <FlexDiv>
      <Logo logoSize="Medium" />
      <UserImage id={id} profileImageUrl={profileImageUrl} loginId={loginId} imgSize="MEDIUM" />
    </FlexDiv>
  );
};

export default Header;
