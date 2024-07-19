import {
  ArrowButton,
  CurrentActivePage,
  PaginationButton,
  PaginationControls,
  PaginationStyled,
} from "../../styles/styles";
import { usePagination } from "../../utils/usePagination";
export const Pagination = (props: {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: 1 | undefined;
  currentPage: number;
  pageSize: number;
}) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  let [disabledLeft, disabledRight] = [false, false];
  if (currentPage === 1) {
    disabledLeft = true;
  } else if (currentPage === paginationRange![paginationRange!.length - 1]!) {
    disabledRight = true;
  } else {
    [disabledLeft, disabledRight] = [false, false];
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  return (
    <PaginationStyled>
      <PaginationControls>
        <ArrowButton>
          <button type="button" onClick={onPrevious} disabled={disabledLeft}>
            {"<"}
          </button>
        </ArrowButton>
        {paginationRange!.map((pageNumber) => {
          if (pageNumber === "...") {
            return (
              <PaginationButton key={Math.random()}>
                <button>&#8230;</button>
              </PaginationButton>
            );
          } else if (pageNumber === currentPage) {
            return (
              <CurrentActivePage>
                <button onClick={() => onPageChange(+pageNumber)}>
                  {pageNumber}
                </button>
              </CurrentActivePage>
            );
          }

          return (
            <PaginationButton key={Math.random()}>
              <button onClick={() => onPageChange(+pageNumber)}>
                {pageNumber}
              </button>
            </PaginationButton>
          );
        })}
        <ArrowButton>
          <button type="button" onClick={onNext} disabled={disabledRight}>
            {">"}
          </button>
        </ArrowButton>
      </PaginationControls>
    </PaginationStyled>
  );
};
