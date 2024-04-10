import { DATATABLE_FETCH_SIZE } from '../../../utils/constants';
import { SortingState } from '@tanstack/react-table';
import { useInfiniteScrolling } from '../../useInfiniteScrolling';
import axios from 'axios';
import { getUrlWithPaginationParam } from '../../../utils/helpers';

type useAllUsersProps = {
  sorting: SortingState;
  fetchSize?: number;
  globalFilter?: string;
};

const fetchAllUsers = async (pageNumber: number, size: number, sorting: SortingState, globalFilter: string = '') => {
  const userUrl = getUrlWithPaginationParam('http://localhost:9000/api/users', {
    pageNumber,
    size,
    sorting,
    globalFilter,
  });

  const result = await axios.get(userUrl);

  return result;
};
export const useAllUsers = ({ sorting, globalFilter = '', fetchSize = DATATABLE_FETCH_SIZE }: useAllUsersProps) => {
  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteScrolling({
    queryKey: 'users',
    fetchSize,
    fetchData: fetchAllUsers,
    sorting,
    globalFilter,
  });

  return { data, fetchNextPage, isFetching, isLoading };
};
