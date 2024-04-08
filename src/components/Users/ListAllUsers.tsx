import { useState } from 'react';

//3 TanStack Libraries!!!
import { ColumnDef, SortingState } from '@tanstack/react-table';
import { Person } from '../../utils/mockData/users';
import InfiniteDataTable from '../shared/DataTable/InfiniteDataTable';
import { useAllUsers } from '../../hooks/api/users';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

const ListAllUsers = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'id',
    },
    {
      accessorKey: 'name',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'login',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'roles.name',
      header: 'Role',
    },
    {
      accessorKey: 'customers.name',
      header: 'Customer Name',
    },
    {
      accessorKey: 'enabled',
      header: 'Status',
    },
  ];

  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } = useAllUsers({ sorting, globalFilter });

  return (
    <Card>
      <CardHeader>Users</CardHeader>
      <CardBody>
        <InfiniteDataTable
          data={data}
          columns={columns}
          fetchNextPage={fetchNextPage}
          isLoading={isLoading}
          isFetching={isFetching}
          sorting={sorting}
          setSorting={setSorting}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </CardBody>
    </Card>
  );
};

export default ListAllUsers;
