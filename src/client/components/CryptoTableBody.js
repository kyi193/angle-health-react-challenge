import React from 'react';
import { useStyles, colors } from '../themes/theme';
import {
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import ProgressBar from 'react-percent-bar';
import logoMap from '../utils/cmc_logo_urls.json';

const CryptoTableBody = ({cryptoList}) => {
  const styles = useStyles();

  const parseIntegerWithCommas = (num) => {
    return num.toLocaleString('en-US',
      {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      });
  };

  return (
    cryptoList.map((cryptocurrency, i) => (
      <TableRow className={styles.cryptoRow} key={i}>
        <TableCell component='th' scope='row'>
          <Typography>{i + 1}</Typography>
        </TableCell>
        <TableCell component='th' scope='row'>
          <div className={styles.nameContainer}>
            <img className={styles.logo} src={logoMap[cryptocurrency.symbol]} alt={`${cryptocurrency.name} logo`} />
            <p className={styles.dataBoldText}>{cryptocurrency.name}</p>
            <p className={styles.dataGrayText}>{cryptocurrency.symbol}</p>
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
        <TableCell component='th' scope='row'>
          <Typography>{`${parseIntegerWithCommas(cryptocurrency.circulating_supply)} (${cryptocurrency.symbol})`}</Typography>
          <ProgressBar
            fillColor={colors.lightGraySolid}
            borderColor="black"
            height="5px"
            width="200px"
            percent={(cryptocurrency.circulating_supply / cryptocurrency.total_supply) * 100} />
        </TableCell>
      </TableRow>
    ))
  );
};

export default CryptoTableBody;
