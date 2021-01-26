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
    cryptoList.map((cryptocurrency, index) => {
      const { name, symbol, circulating_supply, total_supply } = cryptocurrency;
      const price = parseIntegerWithCommas(cryptocurrency.quote.USD.price);
      const percent_change_24h = parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_24h);
      const percent_change_7d = parseIntegerWithCommas(cryptocurrency.quote.USD.percent_change_7d);
      const market_cap = parseIntegerWithCommas(cryptocurrency.quote.USD.market_cap);
      const volume_24h = parseIntegerWithCommas(cryptocurrency.quote.USD.volume_24h);

      return (
        <TableRow className={styles.cryptoRow} key={index}>
          <TableCell component='th' scope='row'>
            <Typography>{index + 1}</Typography>
          </TableCell>
          <TableCell component='th' scope='row'>
            <div className={styles.nameContainer}>
              <img className={styles.logo} src={logoMap[symbol]} alt={`${name} logo`} />
              <p className={styles.dataBoldText}>{name}</p>
              <p className={styles.dataGrayText}>{symbol}</p>
            </div>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography>${price}</Typography>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography
              className={percent_change_24h >= 0 ?
                styles.dataGreenText :
                styles.dataRedText}
            >
              {percent_change_24h >= 0 ?
                <ArrowDropUp /> :
                <ArrowDropDown />}
              {percent_change_24h}%
            </Typography>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography
              className={percent_change_7d >= 0 ?
                styles.dataGreenText :
                styles.dataRedText}
            >
              {percent_change_7d >= 0 ?
                <ArrowDropUp /> :
                <ArrowDropDown />}
              {Math.abs(percent_change_7d)}%
          </Typography>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography>
              ${market_cap}
            </Typography>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography>
              ${volume_24h}
            </Typography>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography>{`${circulating_supply} (${symbol})`}</Typography>
            <ProgressBar
              fillColor={colors.lightGraySolid}
              borderColor="black"
              height="5px"
              width="200px"
              percent={(circulating_supply / total_supply) * 100} />
          </TableCell>
        </TableRow>
      )
    })
  );
};

export default CryptoTableBody;
