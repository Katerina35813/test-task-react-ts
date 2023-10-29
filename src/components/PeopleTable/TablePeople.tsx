import React, { useState,FC,MouseEvent,ChangeEvent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableFooter,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PaginationForTable from './TablePagination';
import {data} from "../../data/data";
import { headingsTable } from '../../constants/constants';

type RowData = {
  id: number;
  name: string;
  position: string;
  comments: string;
  date: string;
  order: number;
};

const TablePeople: FC = () => {
  const [dataTable, setDataTable] = useState<RowData[]>(data.initialData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const deleteRow = (id: number) => {
    const updatedData = dataTable.filter((row) => row.id !== id);
    setDataTable(updatedData);
  };
  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headingsTable.map((item) => (
              <TableCell>{item}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>{row.comments}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteRow(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <PaginationForTable
            count={dataTable.length}
            currentPage={page}
            rowsPerPage={rowsPerPage}
            handlePageChange={handleChangePage}
            handleRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TablePeople;
