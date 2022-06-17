import StyledImg from 'components/Atoms/UserImage/UserImage.styles';

export interface UserImageProps {
  imgUrl: string;
  userName: string;
  imgSize: 'MEDIUM' | 'SMALL';
}

const UserImage = ({ imgUrl, userName, imgSize }: UserImageProps) => {
  const imgAlt = `${userName}의 프로필 사진`;

  return <StyledImg src={imgUrl} alt={imgAlt} imgSize={imgSize} />;
};

export default UserImage;
