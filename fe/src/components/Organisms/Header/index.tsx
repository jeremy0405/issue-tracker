import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import UserImage, { UserImageProps } from 'components/Atoms/UserImage';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const userInfo: UserImageProps = {
    imgUrl: 'https://avatars.githubusercontent.com/u/92701121?v=4',
    userName: '도톨',
    imgSize: 'MEDIUM',
  };

  return (
    <FlexDiv>
      <Logo logoSize="Medium" />
      <UserImage imgUrl={userInfo.imgUrl} userName={userInfo.userName} imgSize={userInfo.imgSize} />
    </FlexDiv>
  );
};

export default Header;
