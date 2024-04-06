import { DATATABLE_FETCH_SIZE } from '../../utils/constants';
import { SortingState } from '@tanstack/react-table';
import { useInfiniteScrolling } from '../useInfiniteScrolling';
import axios from 'axios';

type useAllUsersProps = {
  sorting: SortingState;
  fetchSize?: number;
};

const fetchAllUsers = async (pageNumber: number, size: number, sorting: SortingState) => {
  const result = await axios.get(
    `http://localhost:9000/api/users?pageNumber=${pageNumber}&pageSize=${size}&sort_field=${
      sorting[0]?.id || 'id'
    }&sort_order=${sorting[0]?.desc ? 'desc' : 'asc'}&status_filter=all`
  );

  return result;
};
export const useAllUsers = ({ sorting, fetchSize = DATATABLE_FETCH_SIZE }: useAllUsersProps) => {
  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteScrolling({
    queryKey: 'users',
    fetchSize,
    fetchData: fetchAllUsers,
    sorting,
  });

  return { data, fetchNextPage, isFetching, isLoading };
};
