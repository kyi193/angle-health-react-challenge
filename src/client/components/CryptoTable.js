import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

const CryptoTable = () => {
  return (
    <TableContainer>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>
              Name
            </TableCell>
            <TableCell align='center'>
              Price
            </TableCell>
            <TableCell align='center'>
              24h
            </TableCell>
            <TableCell align='center'>
              7d
            </TableCell>
            <TableCell align='center'>
              Market Cap
            </TableCell>
            <TableCell align='center'>
              Volume
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;
