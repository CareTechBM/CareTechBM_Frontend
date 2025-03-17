import TablePagination from "@mui/material/TablePagination";

export const TablePaginationComponent = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange
}) => {
  return (
    <TablePagination
      sx={{ minHeight: '50px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};
