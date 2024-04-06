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
      accessorKey: 'name',
      cell: (info) => info.getValue(),
    },
    {
      id: 'login',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'roles.name',
    },
    {
      accessorKey: 'customers.name',
    },
    {
      accessorKey: 'enabled',
      header: 'Status',
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
