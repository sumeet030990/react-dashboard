import { SortingState, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { Table } from 'react-bootstrap';

type DataTableProps = {
  data: any[];
  columns: any[];
  sorting?: SortingState;
};
function DataTable({ data, columns, sorting }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    state: {
      sorting,
    },
    getSortedRowModel: getSortedRowModel(),
    manualSorting: true,
  });

  return (
    <Table responsive striped bordered hover>
      <thead className="table-dark">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

DataTable.defaultProps = {
  sorting: [],
};

export default DataTable;
