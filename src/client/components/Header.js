import React from 'react';
import { useStyles } from '../themes/theme';
import CMCLogo from '../images/CMC_Logo.svg';

const Header = () => {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <img src={CMCLogo} alt="CMC Logo" />
    </div>
  );
};

export default Header;
