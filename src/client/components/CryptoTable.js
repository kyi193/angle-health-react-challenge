import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useStyles } from '../themes/theme';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';

const API_URL = 'http://localhost:8080/api/getCryptoData';
const tableHeaders = [
  'Rank',
  'Name',
  'Price',
  '24h',
  '7d',
  'Market Cap',
  'Volume'
];

const CryptoTable = () => {
  const [cryptoList, setCryptoList] = useState(null);
  const styles = useStyles();

  useEffect(() => {
    Axios.get(API_URL)
      .then(res => {
        const cryptoListData = res.data.data;
        setCryptoList(cryptoListData)
      })
      .catch(e => console.error(e));
  }, []);

  const parseIntegerWithCommas = (num) => {
    return num.toLocaleString('en-US',
      {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      });
  };

  return (
    <div className={styles.cryptoTable}>
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {tableHeaders.map((tableDataHeader, i) => {
                return (
                  <TableCell align='left' key={i}>
                    <p className={styles.dataBoldText}>{tableDataHeader}</p>
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoList &&
              cryptoList.map((cryptocurrency, i) => (
                <TableRow key={i}>
                  <TableCell component='th' scope='row'>
                    <Typography>{i + 1}</Typography>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <div className={styles.nameContainer}>
                      <p className={styles.dataBoldText}>{cryptocurrency.name}</p>
                      <p className={styles.dataGrayText}>({cryptocurrency.symbol})</p>
                    </div>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Typography>${parseIntegerWithCommas(cryptocurrency.quote.USD.price)}</Typography>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Typography
                      className={parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_24h) >= 0 ?
                        styles.dataGreenText :
                        styles.dataRedText}
                    >
                      {parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_24h) >= 0 ?
                        <ArrowDropUp /> :
                        <ArrowDropDown />}
                      {parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_24h)}%
                    </Typography>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Typography
                      className={parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_7d) >= 0 ?
                        styles.dataGreenText :
                        styles.dataRedText}
                    >
                      {parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_7d) >= 0 ?
                        <ArrowDropUp /> :
                        <ArrowDropDown />}
                      {Math.abs(parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_7d))}%
                  </Typography>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Typography>
                      ${parseIntegerWithCommas(cryptocurrency.quote.USD.market_cap)}
                    </Typography>
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Typography>
                      ${parseIntegerWithCommas(cryptocurrency.quote.USD.volume_24h)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CryptoTable;
