import React from 'react';
import { useRecoilState } from 'recoil';
import { QueryStringState } from 'pages/Issues';
import Button from 'components/Atoms/Button';
import { StyledPageButton, StyledPagination } from 'components/Molecules/Pagination/index.styles';
import { useNavigate } from 'react-router-dom';

interface DataTypes {
  content: any;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {};
  size: number;
  sort: {};
  totalElements: number;
  totalPages: number;
}

const Pagination = ({ data, page }: { data: DataTypes; page: string | null }) => {
  const navigate = useNavigate();
  const [filterData, setFilterData] = useRecoilState(QueryStringState);

  const handlePaginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;
    const clickedPage = event.target.dataset.id;
    const pageParams = Number(clickedPage) - 1;

    setFilterData({ ...filterData, page: pageParams! });
    navigate(`/issues?page=${pageParams}&query=is:${filterData.status}`);
  };

  const handleClickPriviousButton = () => {
    setFilterData({ ...filterData, page: Number(page) - 1 });
    navigate(`/issues?page=${Number(page) - 1}&query=is:${filterData.status}`);
  };

  const handleClickNextButton = () => {
    setFilterData({ ...filterData, page: Number(page) + 1 });
    navigate(`/issues?page=${Number(page) + 1}&query=is:${filterData.status}`);
  };

  const isFocus = (id: number) => Number(page) === id;

  const pageButtons = [...Array(data.totalPages)].map((el, index) => {
    return (
      <StyledPageButton
        // eslint-disable-next-line react/no-array-index-key
        key={`pageButton-${index}`}
        data-id={index + 1}
        onClick={handlePaginationClick}
        focus={isFocus(index)}
      >
        {index + 1}
      </StyledPageButton>
    );
  });

  return (
    <StyledPagination>
      <Button
        buttonStyle="NO_BORDER"
        label="< PREVIOUS"
        size="SMALL"
        disabled={data.first}
        HandleOnClick={handleClickPriviousButton}
      />
      {pageButtons}
      <Button
        buttonStyle="NO_BORDER"
        label="NEXT >"
        size="SMALL"
        disabled={data.last}
        HandleOnClick={handleClickNextButton}
      />
    </StyledPagination>
  );
};

export default React.memo(Pagination);
