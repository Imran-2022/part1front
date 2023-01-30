import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightSquare,BsArrowLeftSquare } from 'react-icons/bs';
import { setPage } from '../features/pagination/paginationSlice';
import { useGetTotalOfBillQuery } from '../features/api/apiSlice';
export default function Pagination() {
  useGetTotalOfBillQuery()
  const {
    pagination: { totalCount, currentPage, limit },
  } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const totalPage = Math.ceil(totalCount / limit);
  let middlePagination;

  if (totalPage <= 5) {
    middlePagination = [...Array(totalPage)].map((_, index) => (
      <button
        className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
        onClick={() => dispatch(setPage(index + 1))}
        key={index + 1}
        disabled={currentPage === index + 1}
      >
        {index + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((currentPage - 1) / 5) * 5;
    middlePagination = (
      <>
        {[...Array(5)].map((_, index) => (
          <button
            className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
            key={startValue + index + 1}
            onClick={() => dispatch(setPage(startValue + index + 1))}
            disabled={currentPage === startValue + index + 1}
          >
            {startValue + (index + 1)}
          </button>
        ))}
        <button>...</button>
        <button
          className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
          onClick={() => dispatch(setPage(totalPage))}
        >
          {totalPage}
        </button>
      </>
    );
    if (currentPage > 5) {
      if (totalPage - currentPage >= 5) {
        middlePagination = (
          <>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(1))}
            >
              1
            </button>
            <button>...</button>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(startValue))}
            >
              {startValue}
            </button>
            {[...Array(5)].map((_, index) => (
              <button
                className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
                key={startValue + index + 1}
                disabled={currentPage === startValue + index + 1}
                onClick={() => dispatch(setPage(startValue + index + 1))}
              >
                {startValue + index + 1}
              </button>
            ))}
            <button>...</button>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(totalPage))}
            >
              {totalPage}
            </button>
          </>
        );
      } else {
        let amountLeft = totalPage - currentPage + 5;

        middlePagination = (
          <>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(1))}
            >
              1
            </button>
            <button>...</button>
            {[...Array(amountLeft)].map((_, index) => (
              <button
                className="bg-blue-100 text-blue-600 px-4 py-1  disabled:bg-blue-700 disabled:text-white"
                key={startValue + index + 1}
                disabled={currentPage === startValue + index + 1}
                style={
                  totalPage < startValue + index + 1
                    ? { display: 'none' }
                    : null
                }
                onClick={() => dispatch(setPage(startValue + index + 1))}
              >
                {startValue + index + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }
  return (
    <div className='flex flex-row gap-3 items-center justify-center py-8'>
      <div className='flex flex-row gap-1 items-center'>
        <button
          className="mx-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => dispatch(setPage(currentPage - 1))}
          disabled={currentPage === 1}
        >
          <BsArrowLeftSquare className='text-2xl'/>
        </button>
        {middlePagination}
        <button
          className="mx-2 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
          onClick={() => dispatch(setPage(currentPage + 1))}
          disabled={currentPage === totalPage}
        >
          <BsArrowRightSquare className='text-2xl'/>
        </button>
      </div>
    </div>
  );
}