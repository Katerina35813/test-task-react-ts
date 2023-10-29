import React from 'react';
import { TablePagination } from '@mui/material';

interface Props {
  count: number;
  currentPage: number;
  rowsPerPage: number;
  handlePageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function PaginationForTable({
  count,
  currentPage,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
}: Props) {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
      count={count}
      page={currentPage}
      rowsPerPage={rowsPerPage}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      labelRowsPerPage="Строк на странице"
    />
  );
}
