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
} from '@material-ui/core';
import { CustomButton } from './Buttons';
import CryptoTableBody from './CryptoTableBody';
import loadingGif from '../images/loading_Animation.gif';

const API_URL = 'http://localhost:8080/api/getCryptoData';
const tableHeaders = [
  'Rank',
  'Name',
  'Price',
  '24h',
  '7d',
  'Market Cap',
  'Volume',
  'Circulating Supply'
];
const LIVE_MODE = false;
const INTERVAL_TIME = 10000;

const CryptoTable = () => {
  const [cryptoList, setCryptoList] = useState(null);
  const styles = useStyles();

  useEffect(() => {
    if (LIVE_MODE) {
      const interval = setInterval(() => {
        fetchCryptoData();
      }, INTERVAL_TIME);
      return () => clearInterval(interval);
    }
    fetchCryptoData();
  }, []);

  const fetchCryptoData = () => {
    Axios.get(API_URL)
      .then(res => {
        const cryptoListData = res.data.data;
        setCryptoList(cryptoListData)
      })
      .catch(e => console.error(e));
  };

  return (
    <div className={styles.cryptoTable}>
      <CustomButton
        onClick={() => fetchCryptoData()}
        text='Refresh'
      />
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
              <CryptoTableBody cryptoList={cryptoList} />}
          </TableBody>
        </Table>
      </TableContainer>
      {!cryptoList &&
        <img className={styles.loading} src={loadingGif} />}
    </div>
  );
};

export default CryptoTable;
