import { SortingState } from '@tanstack/react-table';
import { isUndefined } from 'lodash';

type getUrlWithPaginationParamProps = {
  pageNumber: number;
  size: number;
  sorting: SortingState;
  globalFilter: string;
};
export const getUrlWithPaginationParam = (url: string, params: getUrlWithPaginationParamProps) => {
  const generatedUrl = new URL(url);
  const { pageNumber, size, sorting, globalFilter } = params;

  if (pageNumber) {
    generatedUrl.searchParams.append('pageNumber', pageNumber.toString());
  }
  if (size) {
    generatedUrl.searchParams.append('pageSize', size.toString());
  }

  if (sorting && sorting[0]?.id) {
    generatedUrl.searchParams.append('sort_field', sorting[0]?.id);
  } else {
    generatedUrl.searchParams.append('sort_field', 'id');
  }

  if (sorting && !isUndefined(sorting[0]?.desc)) {
    generatedUrl.searchParams.append('sort_order', sorting[0]?.desc ? 'desc' : 'asc');
  } else {
    generatedUrl.searchParams.append('sort_order', 'desc');
  }

  if (globalFilter) {
    generatedUrl.searchParams.append('search', globalFilter);
  }
  generatedUrl.searchParams.append('status_filter', 'all');
  return generatedUrl.href;
};
