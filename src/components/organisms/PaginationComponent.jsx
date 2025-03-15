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
      sx={{minHeight: '50px'}}
      component="div"
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPageOptions={[5, 10, 25]}
    />
  );
};
