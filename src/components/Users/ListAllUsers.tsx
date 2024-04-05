import { useState } from 'react';

//3 TanStack Libraries!!!
import { ColumnDef, SortingState } from '@tanstack/react-table';
import { Person } from '../../utils/mockData/users';
import InfiniteDataTable from '../shared/DataTable/InfiniteDataTable';
import { useAllUsers } from '../../hooks/api/users';

const ListAllUsers = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'id',
    },
    {
      accessorKey: 'firstName',
      cell: (info) => info.getValue(),
    },
    {
      accessorFn: (row) => row.lastName,
      id: 'lastName',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'age',
    },
    {
      accessorKey: 'visits',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'progress',
      header: 'Profile Progress',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: (info) => info.getValue<Date>().toLocaleString(),
    },
  ];

  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } = useAllUsers({ sorting });

  return (
    <InfiniteDataTable
      data={data}
      columns={columns}
      fetchNextPage={fetchNextPage}
      isLoading={isLoading}
      isFetching={isFetching}
      sorting={sorting}
      setSorting={setSorting}
    />
  );
};

export default ListAllUsers;
