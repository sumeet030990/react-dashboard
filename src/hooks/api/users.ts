import { DATATABLE_FETCH_SIZE } from '../../utils/constants';
import { fetchData } from '../../utils/mockData/users';
import { SortingState } from '@tanstack/react-table';
import { useInfiniteScrolling } from '../useInfiniteScrolling';

type useAllUsersProps = {
  sorting: SortingState;
  fetchSize?: number;
};
export const useAllUsers = ({ sorting, fetchSize = DATATABLE_FETCH_SIZE }: useAllUsersProps) => {
  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteScrolling({
    queryKey: 'users',
    fetchSize,
    fetchData,
    sorting,
  });

  return { data, fetchNextPage, isFetching, isLoading };
};
