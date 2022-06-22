const convertPreviousDate = (nowDate: Date, previousDate: string) => {
  const timeValue = new Date(previousDate);

  const minutes = Math.floor((nowDate.getTime() - timeValue.getTime()) / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const day = Math.floor(hours / 24);
  const month = Math.floor(day / 24);
  const year = Math.floor(month / 12);

  if (!minutes) return '방금 전';

  if (minutes < 60) return `${minutes}분 전`;

  if (hours < 24) return `${hours}시간 전`;

  if (day < 24) return `${day}일 전`;

  if (month < 12) return `${month}개월 전`;

  return `${year}년 전`;
};

export default convertPreviousDate;
