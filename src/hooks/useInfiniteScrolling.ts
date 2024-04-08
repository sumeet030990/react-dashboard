import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { DATATABLE_FETCH_SIZE } from '../utils/constants';
import { SortingState } from '@tanstack/react-table';

type InfiniteQueryProps = {
  queryKey: string;
  fetchSize?: number;
  fetchData: (start: number, size: number, sorting: SortingState, globalFilter: string) => Promise<any>;
  sorting: SortingState;
  globalFilter: string;
};

export const useInfiniteScrolling = ({
  queryKey,
  fetchSize = DATATABLE_FETCH_SIZE,
  fetchData,
  sorting,
  globalFilter,
}: InfiniteQueryProps) => {
  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
    queryKey: [queryKey, sorting, globalFilter],
    queryFn: async ({ pageParam = 0 }) => {
      const pageNumber = ++(pageParam as number);
      const fetchedData = await fetchData(pageNumber, fetchSize, sorting, globalFilter); //pretend api call
      return fetchedData;
    },
    initialPageParam: 0,
    getNextPageParam: (_lastGroup, groups) => groups.length,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  return { data, fetchNextPage, isFetching, isLoading };
};
