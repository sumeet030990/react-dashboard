import { useCallback, useMemo } from 'react';

import {
  OnChangeFn,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import './InfiniteDataTable.css';
import { Table as BTable } from 'react-bootstrap';

type InfiniteDataTableProps = {
  data: any;
  columns: any[];
  fetchNextPage: () => {};
  isFetching: boolean;
  isLoading: boolean;
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
};
function InfiniteDataTable({
  data,
  columns,
  fetchNextPage,
  isFetching,
  isLoading,
  sorting,
  setSorting,
}: InfiniteDataTableProps) {
  const flatData = useMemo(() => data?.pages?.flatMap((page: any) => page.data) ?? [], [data]);
  const totalDBRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0;
  const totalFetched = flatData.length;

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (scrollHeight - scrollTop - clientHeight < 500 && !isFetching && totalFetched < totalDBRowCount) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );

  const table = useReactTable({
    data: flatData,
    columns,
    state: { sorting },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting: true,
    debugTable: true,
  });

  const handleSortingChange: OnChangeFn<SortingState> = useCallback(
    (updater) => {
      setSorting(updater);
      if (!!table.getRowModel().rows.length) {
        flatData.scrollToIndex?.(0);
      }
    },
    [setSorting, table, flatData]
  );

  table.setOptions((prev) => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }));

  const headerGroupLength = table.getHeaderGroups()[table.getHeaderGroups().length - 1].headers.length;
  return (
    <>
      <div
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        style={{
          overflow: 'auto', //our scrollable table container
          position: 'relative', //needed for sticky header
          height: '600px', //should be a fixed height
          border: '1px solid',
        }}
      >
        <BTable striped bordered hover responsive>
          <thead className="table-dark">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    <div
                      {...{
                        className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={headerGroupLength} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </BTable>
      </div>
      <div className="table-footer-details">
        ({flatData.length} of {totalDBRowCount} rows fetched)
        {isFetching && <div>Fetching More...</div>}
      </div>
    </>
  );
}

export default InfiniteDataTable;